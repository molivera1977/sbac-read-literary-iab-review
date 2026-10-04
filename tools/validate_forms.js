#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════
   Validates data/form_X.js against the Read Literary IAB
   blueprint shape and the engine's matching rules.
     node tools/validate_forms.js            (all forms)
     node tools/validate_forms.js B          (one form)
   Exit code 1 on any ERROR. WARN lines need a human look.
═══════════════════════════════════════════════════════ */
const fs   = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Slot template — every form mirrors the blueprint item for item.
const TEMPLATE = [
  { p: 0, type: 'mc',      note: 'characterization from one paragraph (excerpt)' },
  { p: 0, type: 'mc',      note: 'word meaning in context' },
  { p: 0, type: 'mc',      note: 'purpose of the picture (showFigure)' },
  { p: 0, type: 'ebsr',    note: 'conclusion + supporting sentence' },
  { p: 0, type: 'mc',      note: 'main idea of re-shown paragraphs' },
  { p: 0, type: 'hottext', layout: 'list', pick: 2, note: 'click 2 sentences from a list' },
  { p: 1, type: 'mc',      note: 'summary with a missing key event' },
  { p: 1, type: 'mc',      note: 'evidence for a conclusion' },
  { p: 1, type: 'ebsr',    note: 'character trait word + support' },
  { p: 1, type: 'ms',      pick: 2, note: 'idiom — choose 2' },
  { p: 1, type: 'cr',      note: 'written: sibling relationship' },
  { p: 2, type: 'ms',      pick: 2, note: 'vocab synonyms — choose 2' },
  { p: 2, type: 'mc',      note: 'summary of the last three paragraphs' },
  { p: 2, type: 'ms',      pick: 3, note: 'simile / comparison — choose 3' },
  { p: 2, type: 'hottext', layout: 'para', pick: 2, note: 'click 2 sentences in a re-shown paragraph' },
];

const WORDS = { 0: [500, 760], 1: [550, 820], 2: [450, 720] };

let errors = 0, warns = 0;
const err  = (f, m) => { errors++; console.log(`  ERROR [${f}] ${m}`); };
const warn = (f, m) => { warns++;  console.log(`  WARN  [${f}] ${m}`); };

const norm = s => String(s).replace(/\s+/g, ' ').trim();
const wc   = s => norm(s).split(' ').filter(w => /[A-Za-z0-9]/.test(w)).length;

function loadForm(letter) {
  const file = path.join(ROOT, 'data', `form_${letter.toLowerCase()}.js`);
  if (!fs.existsSync(file)) return null;
  const box = {};
  new Function('window', fs.readFileSync(file, 'utf8'))(box);
  return box['FORM_' + letter];
}

function loadSkills() {
  const file = path.join(ROOT, 'data', 'skills.js');
  if (!fs.existsSync(file)) return null;
  const box = {};
  new Function('window', fs.readFileSync(file, 'utf8'))(box);
  return box.SKILLS;
}

function checkChoiceText(id, list) {
  list.forEach(c => {
    if (typeof c !== 'string' || !c.trim()) err(id, 'empty choice');
    if (/\s\|\s|\s\/\s/.test(c)) err(id, `choice contains " | " or " / " (breaks the saved pick): ${c.slice(0, 60)}`);
    if (/"/.test(c)) warn(id, `straight double quote in choice — use curly quotes: ${c.slice(0, 60)}`);
  });
  if (new Set(list.map(norm)).size !== list.length) err(id, 'duplicate choices');
}

// Strip outer curly quotes and check the line is really in the story.
function inPassage(passageText, s) {
  const t = norm(s).replace(/^“/, '').replace(/”$/, '').replace(/ … /g, ' ');
  if (passageText.includes(t)) return true;
  // quoted dialogue that was trimmed at a sentence boundary
  return t.split(/(?<=[.!?”])\s+/).every(part => passageText.includes(part.replace(/^“/, '').replace(/”$/, '')));
}

function validate(letter) {
  console.log(`\nForm ${letter}`);
  const F = loadForm(letter);
  if (!F) { console.log('  (missing — skipped)'); return; }
  const skills = loadSkills();

  if (!Array.isArray(F.passages) || F.passages.length !== 3) err(letter, 'needs exactly 3 passages');
  (F.passages || []).forEach((p, i) => {
    const words = p.paragraphs.reduce((t, x) => t + wc(x), 0);
    const [lo, hi] = WORDS[i];
    console.log(`  P${i + 1} “${p.title}” — ${p.paragraphs.length} paragraphs, ${words} words`);
    if (words < lo || words > hi) warn(`P${i + 1}`, `word count ${words} outside ${lo}–${hi}`);
    p.paragraphs.forEach((x, j) => { if (/"/.test(x)) warn(`P${i + 1}`, `straight double quote in paragraph ${j + 1}`); });
    if (i === 0) {
      if (!p.figure || !/^<svg[\s\S]*<\/svg>$/.test(p.figure.svg || '')) err('P1', 'passage 1 needs figure.svg');
      else if (!(p.figure.after >= 0 && p.figure.after < p.paragraphs.length)) err('P1', 'figure.after out of range');
      if (p.figure && (!p.figure.caption || !p.figure.alt)) err('P1', 'figure needs caption and alt');
    }
  });

  const items = F.items || [];
  if (items.length !== TEMPLATE.length) err(letter, `needs ${TEMPLATE.length} items, has ${items.length}`);

  let points = 0;
  items.forEach((q, i) => {
    const slot = TEMPLATE[i] || {};
    const want = `${letter}${String(i + 1).padStart(2, '0')}`;
    const id   = q.id || want;
    const type = q.type || 'mc';
    if (q.id !== want) err(id, `id should be ${want}`);
    if (q.p !== slot.p) err(id, `p should be ${slot.p} (${slot.note})`);
    if (type !== slot.type) err(id, `type should be ${slot.type} (${slot.note})`);
    if (slot.pick && q.pick !== slot.pick) err(id, `pick should be ${slot.pick}`);
    if (slot.layout && q.layout !== slot.layout) err(id, `layout should be ${slot.layout}`);

    const passage = F.passages[q.p];
    const ptext = passage ? norm(passage.paragraphs.join(' ')) : '';

    // "paragraph N" references must match the excerpt that is re-shown
    const refs = [...String(q.q || (q.partA && q.partA.q) || '').matchAll(/paragraphs? (\d+)(?: and (\d+))?/gi)];
    if (refs.length && q.excerpt && !q.excerptLabel) {
      const nums = [...new Set(refs.flatMap(m => [m[1], m[2]]).filter(Boolean).map(Number))];
      nums.forEach((n, k) => {
        if (norm(passage.paragraphs[n - 1] || '') !== norm(q.excerpt[k] || '')) err(id, `excerpt ${k + 1} is not paragraph ${n}`);
      });
    }
    if (q.excerpt && !q.excerptLabel) q.excerpt.forEach((e, k) => {
      if (!passage.paragraphs.some(x => norm(x) === norm(e))) err(id, `excerpt ${k + 1} is not a verbatim paragraph`);
    });
    if (i === 6 && !q.excerptLabel) err(id, 'summary-gap item needs excerptLabel + the summary as excerpt');
    if (i === 2 && !q.showFigure) err(id, 'picture item needs showFigure: true');

    if (type === 'mc') {
      checkChoiceText(id, q.choices || []);
      if ((q.choices || []).length !== 4) err(id, 'MC needs 4 choices');
      if (!(q.choices || []).includes(q.answer)) err(id, 'answer not among choices');
      if (q.longChoices) q.choices.forEach(c => { if (!inPassage(ptext, c)) warn(id, `choice not verbatim in passage: ${c.slice(0, 70)}`); });
      points += 1;
    } else if (type === 'ebsr') {
      ['partA', 'partB'].forEach(k => {
        const part = q[k];
        if (!part) { err(id, `missing ${k}`); return; }
        checkChoiceText(`${id}.${k.slice(-1)}`, part.choices || []);
        if ((part.choices || []).length !== 4) err(id, `${k} needs 4 choices`);
        if (!(part.choices || []).includes(part.answer)) err(id, `${k} answer not among choices`);
        if (!part.explanation) err(id, `${k} needs an explanation`);
      });
      if (q.partB) q.partB.choices.forEach(c => { if (!inPassage(ptext, c)) warn(id, `Part B choice not verbatim in passage: ${c.slice(0, 70)}`); });
      points += 2;
    } else if (type === 'ms' || type === 'hottext') {
      checkChoiceText(id, q.choices || []);
      if (!Array.isArray(q.answers) || q.answers.length !== q.pick) err(id, `answers must list exactly ${q.pick}`);
      (q.answers || []).forEach(a => { if (!(q.choices || []).includes(a)) err(id, `answer not among choices: ${a.slice(0, 60)}`); });
      if (type === 'ms' && (q.choices || []).length < q.pick + 3) warn(id, `only ${(q.choices || []).length} choices for pick ${q.pick}`);
      if (type === 'hottext') {
        q.choices.forEach(c => { if (!inPassage(ptext, c)) err(id, `sentence not verbatim in passage: ${c.slice(0, 70)}`); });
        if (q.layout === 'para') {
          const m = /paragraph (\d+)/i.exec(q.q);
          if (!m) err(id, 'para hot-text must name its paragraph');
          else if (norm(q.choices.join(' ')) !== norm(passage.paragraphs[Number(m[1]) - 1])) err(id, `sentences do not rebuild paragraph ${m[1]} exactly`);
        } else {
          const idx = q.choices.map(c => ptext.indexOf(norm(c).replace(/^“/, '')));
          if (idx.some((v, k) => k && v < idx[k - 1])) warn(id, 'list sentences are not in passage order');
        }
      }
      points += 1;
    } else if (type === 'cr') {
      ['q', 'guidance', 'model'].forEach(k => { if (!q[k]) err(id, `CR needs ${k}`); });
      if (!Array.isArray(q.checklist) || q.checklist.length < 2) err(id, 'CR needs a checklist');
    }
    if (type !== 'ebsr' && type !== 'cr' && !q.explanation) err(id, 'needs an explanation');

    if (skills) {
      const s = skills[id];
      if (!s) err(id, 'no skill tag in data/skills.js');
      else if (type === 'ebsr' && !(Array.isArray(s) && s.length === 2)) err(id, 'EBSR skill tag must be [Part A, Part B]');
    }
  });
  console.log(`  points: ${points}`);
  if (points !== 16) err(letter, `scored points should be 16, got ${points}`);
}

const only = process.argv[2];
(only ? [only.toUpperCase()] : ['A', 'B', 'C']).forEach(validate);
console.log(`\n${errors} error(s), ${warns} warning(s)`);
process.exit(errors ? 1 : 0);
