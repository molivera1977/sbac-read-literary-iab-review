/* ═══════════════════════════════════════════════════════
   SBAC IAB REVIEW · Read Literary Texts
   script.js — engine copied from the SBAC Inferences
   (Literary) FIAB Review (forms, attempt locks, resume,
   read lock, soak timer, passage screen + story panel,
   EBSR, teacher review mode, skill report, sheet submit,
   session time-keeping), plus the item types the Read
   Literary IAB blueprint adds:
     • type:"ms"      choose TWO or THREE answers — one
                      point, all of them right (SBAC rule)
     • type:"hottext" click sentences, either from a list
                      or inside a re-shown paragraph — one
                      point, all of them right
     • type:"cr"      one written answer per form, 10-word
                      minimum, draft auto-saved, sent to the
                      written tab — Mr. O scores it, the
                      site never does (0 auto points)
     • a picture inside a passage (passage.figure) that an
       item can show again (showFigure)
     • a labeled excerpt (excerptLabel) for the summary item
   (no type) = 4-choice multiple choice, unchanged
   PIN: 9377 (Teacher override)
═══════════════════════════════════════════════════════ */

/* ── CONFIG ─────────────────────────────────────────── */
const REVIEW_OPEN   = false;  // false = students locked out; only Teacher Access works. Set true to open.
const INSTRUCT_SECS = 20;
const PASSAGE_SECS  = 75;     // story screen lock — these IAB stories run 600–750 words
const READ_SECS     = 15;     // same as the Inferences FIAB: these choices are whole sentences
const NEXT_SECS     = 8;
const STORAGE_KEY   = 'rliab_session_v1';
const SCORES_KEY    = 'rliab_scores_v1';
const CR_DRAFT_KEY  = 'rliab_cr_draft_v1';
const MIN_WORDS     = 10;     // written-answer minimum, same as every written site
const ILFIAB_SESSION_ID_KEY = 'rliab_session_id_v1';
const SESSION_ID = (() => {
  let id = localStorage.getItem(ILFIAB_SESSION_ID_KEY);
  if (!id) { id = 'RL-' + Math.random().toString(36).slice(2, 9).toUpperCase(); localStorage.setItem(ILFIAB_SESSION_ID_KEY, id); }
  return id;
})();

/* ── SHEET SUBMISSION ───────────────────────────────── */
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzv8CWv1yyi8NeH04now9UxVL4IZm5yMqqsEGMcgGdrcAOWVB-aSp5siTvSSJXIUpzFMA/exec';

let tabSwitchCount = 0;

/* One saved miss: "[ID] (Skill) question (picked: answer)". The dashboard reads the
   pick to show which wrong choice each student chose; " | " separates entries, so
   it is swapped out of the pick just in case. */
function missEntry(m) {
  const picked = m.yourAnswer == null || m.yourAnswer === '' ? '' :
    ` (picked: ${String(m.yourAnswer).replace(/\s*\|\s*/g, ' / ').replace(/\s+/g, ' ').trim()})`;
  return `[${m.id}] (${m.skill || 'Unsorted'}) ${m.q}${picked}`;
}

function submitScorePartial() {
  const pts = bankPoints(app.currentBank);
  const pct = pts ? Math.round((app.score / pts) * 100) : 0;
  fetch(SHEET_URL, {
    method: 'POST', mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action:    'submit',
      game:      gameKey(),
      sessionId: SESSION_ID + '-' + (app.currentForm || 'x') + '-A' + (app.currentAttemptNum || 1),
      name:      app.studentName || 'Unknown',
      form:      'Form ' + (app.currentForm || '?'),
      score:     app.score,
      total:     pts,
      percent:   pct,
      status:    `In Progress (Q${app.currentIndex + 1}/${app.currentBank.length})`,
      done:           false,
      elapsed:        app.timerSeconds,
      tabSwitches:    tabSwitchCount,
      wrongQuestions: (app.missedQuestions||[]).map(missEntry).join(' | '),
      missedSkills:   skillTally(app.missedQuestions),
      startedAt:      app.startedAt || '',
      finishedAt:     app.finishedAt || '',
      events:         JSON.stringify(app.events || []),
      timestamp:      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    })
  }).catch(() => {});
}

function submitScoreFinal() {
  const pts = bankPoints(app.currentBank);
  const pct = pts ? Math.round((app.score / pts) * 100) : 0;
  fetch(SHEET_URL, {
    method: 'POST', mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action:    'submit',
      game:      gameKey(),
      sessionId: SESSION_ID + '-' + (app.currentForm || 'x') + '-A' + (app.currentAttemptNum || 1),
      name:      app.studentName || 'Unknown',
      form:      'Form ' + (app.currentForm || '?'),
      attempt:   app.currentAttemptNum || 1,
      score:     app.score,
      total:     pts,
      percent:   pct,
      status:    'Complete',
      done:           true,
      elapsed:        app.timerSeconds,
      tabSwitches:    tabSwitchCount,
      wrongQuestions: (app.missedQuestions||[]).map(missEntry).join(' | '),
      missedSkills:   skillTally(app.missedQuestions),
      startedAt:      app.startedAt || '',
      finishedAt:     app.finishedAt || '',
      events:         JSON.stringify(app.events || []),
      timestamp:      new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    })
  }).catch(() => {});
}

/* Sheet keys: one score game per form ("rliaba-review") and one
   written tab per form ("rliaba_written") — the written tab name
   must end in _written for the Apps Script dashboard read. */
function gameKey()    { return 'rliab' + (app.currentForm || '?').toLowerCase() + '-review'; }
function writtenKey() { return 'rliab' + (app.currentForm || '?').toLowerCase() + '_written'; }
function writtenSessionId() {
  return SESSION_ID + '-' + (app.currentForm || 'x') + '-A' + (app.currentAttemptNum || 1) + '-written';
}

/* The written answer — copied from R.A.D. Online Quiz 1. w1 holds the
   answer; the written sheet is a fixed 7-column row, so no chronology
   fields here (they ride on the score row, which shares app.events). */
function submitWrittenToSheet(answer, elapsedSeconds) {
  const elapsedStr = `${Math.floor(elapsedSeconds / 60)}m ${elapsedSeconds % 60}s`;
  fetch(SHEET_URL, {
    method: 'POST', mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action:    'written',
      game:      writtenKey(),
      sessionId: writtenSessionId(),
      name:      app.studentName || 'Unknown',
      w1: answer, w2: '', w3: '',
      elapsed:   elapsedStr,
      timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    })
  }).catch(() => {});
}

function saveDraftToServer(answer) {
  fetch(SHEET_URL, {
    method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'draft', game: writtenKey(),
      name: app.studentName, sessionId: writtenSessionId(),
      w1: answer, w2: '', w3: ''
    })
  }).catch(() => {});
}

function countWords(text) {
  return String(text || '').trim().split(/\s+/).filter(w => /[A-Za-z0-9]/.test(w)).length;
}

/* ── ROSTER ─────────────────────────────────────────── */
const ROSTER = [
  { name: "Mr. O (Teacher)",           id: "9377" },
  { name: "Avery, Jo'Von",             id: "10053632" },
  { name: "Belasquez Bonilla, Eduin",  id: "10058674" },
  { name: "Castaneda, Kelvin",         id: "10053248" },
  { name: "Chicas-Santos, Allison",    id: "10066737" },
  { name: "Collado, Roniel",           id: "10060249" },
  { name: "Dejesus, Michael",          id: "10049434" },
  { name: "Dock, Fakeem",              id: "10059720" },
  { name: "Douglas, Iyana",            id: "10070980" },
  { name: "Dumphrey, Christopher",     id: "10060696" },
  { name: "Flores, Kiara",             id: "10052834" },
  { name: "Garcia, Ariana",            id: "10045361" },
  { name: "Johnson, Destiny",          id: "10052926" },
  { name: "Jones, Tahji",              id: "10060315" },
  { name: "Lawrence, Eric",            id: "10057451" },
  { name: "Madero, Jovany",            id: "10076374" },
  { name: "Pettway, Lanaura",          id: "10060616" },
  { name: "Polanco Soriano, Thiara",   id: "10060503" },
  { name: "Rivera, Adrianna",          id: "10045661" },
  { name: "Roberts, Robyn",            id: "10060925" },
  { name: "Rojas, Alanie",             id: "10076388" },
  { name: "Sanchez Rodriguez, Johanelyz", id: "10076767" },
  { name: "Vega, Taishmara",           id: "10054043" },
  { name: "Watts, Autumn",             id: "10039032" },
  { name: "Zelaya-Osorto, Nazareth",   id: "10053626" }
];

const GUEST_SLOTS = {
  '937701': 'Guest 1', '937702': 'Guest 2', '937703': 'Guest 3',
  '937704': 'Guest 4', '937705': 'Guest 5', '937706': 'Guest 6',
  '937707': 'Guest 7', '937708': 'Guest 8', '937709': 'Guest 9',
  '937710': 'Guest 10'
};

/* ── BUILD DROPDOWN ─────────────────────────────────── */
(function buildRoster() {
  const sel = document.getElementById('name-select');
  ROSTER.forEach(s => {
    const o = document.createElement('option');
    o.value = s.name; o.textContent = s.name;
    sel.appendChild(o);
  });
  const div = document.createElement('option');
  div.disabled = true; div.textContent = '── Guest Slots ──';
  sel.appendChild(div);
  Object.entries(GUEST_SLOTS).forEach(([code, label]) => {
    const o = document.createElement('option');
    o.value = `GUEST:${code}`; o.textContent = `🙋 ${label}`;
    sel.appendChild(o);
  });
})();

/* ── STATE ──────────────────────────────────────────── */
let loggedInName    = '';
let unlockedForms   = new Set();
let pinModalCallback = null;
let activeSpeakBtn  = null;
let reviewMode      = false;
let reviewAutoRun   = false;

/* ── TEXT HELPERS ───────────────────────────────────
   Passage text is literary, not mathematical, so where
   the Place Value FIAB ran formatMathText() this site
   escapes instead — every choice here is a real sentence
   out of a story and must render exactly as written. */
function esc(raw) {
  if (raw == null) return '';
  return String(raw)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* What the voice should say. Quotation marks and dashes
   make some voices stumble or read punctuation aloud, so
   they become pauses instead. */
function spoken(raw) {
  return String(raw == null ? '' : raw)
    .replace(/[“”‘’"]/g, '')
    .replace(/…/g, ', ')
    .replace(/\s*[—–]\s*/g, ', ')
    .replace(/ {2,}/g, ', ')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ── LETTER GRADE ───────────────────────────────────── */
function letterGrade(pct) {
  if (pct >= 97) return 'A+';
  if (pct >= 93) return 'A';
  if (pct >= 90) return 'A-';
  if (pct >= 87) return 'B+';
  if (pct >= 83) return 'B';
  if (pct >= 80) return 'B-';
  if (pct >= 77) return 'C+';
  if (pct >= 73) return 'C';
  if (pct >= 70) return 'C-';
  if (pct >= 67) return 'D+';
  if (pct >= 63) return 'D';
  if (pct >= 60) return 'D-';
  return 'F';
}

/* ── HELPERS ────────────────────────────────────────── */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getFirstName(name) {
  if (!name) return 'Student';
  if (name.includes(' - ')) return name.split(' - ').pop().trim();
  const parts = name.split(',');
  return parts.length > 1 ? parts[1].trim().split(' ')[0] : name.split(' ')[0];
}

/* ── READ-ALOUD SPEED ───────────────────────────────
   One setting for every 🔊 on the site: Normal, Slow,
   Slower, remembered on this device only.
   The slow settings lower the voice rate AND pause after
   every sentence, the way a teacher reads slowly. Each
   sentence is still read whole, so the voice keeps its
   natural rise and fall. (10/4: breaking sentences into
   4–6 word bits slowed it more but sounded choppy — Marcos:
   "very odd". Rate alone barely registers on Mac voices:
   0.9 → 0.55 measured only ~18–30% slower.)
     factor  multiplies the speaker's own rate
     pause   silence after each sentence, in ms (0 = read
             the whole thing as one, the original way) */
const READ_SPEEDS = [
  { label: 'Normal', factor: 1,    pause: 0    },
  { label: 'Slow',   factor: 0.75, pause: 700  },
  { label: 'Slower', factor: 0.55, pause: 1200 }
];
const SPEED_KEY = 'rliab_read_speed_v1';
let readSpeed = 0;
try { readSpeed = Math.min(READ_SPEEDS.length - 1, Math.max(0, parseInt(localStorage.getItem(SPEED_KEY), 10) || 0)); } catch (e) { readSpeed = 0; }

function setReadSpeed(i) {
  readSpeed = i;
  try { localStorage.setItem(SPEED_KEY, String(i)); } catch (e) { /* the setting just won't be remembered */ }
  stopActiveSpeech();   // the next tap starts at the new speed
  renderSpeedBar();
}

function renderSpeedBar() {
  document.querySelectorAll('.speed-btn').forEach(b => {
    const on = Number(b.dataset.speed) === readSpeed;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

/* Any block of words with a 🔊 just before it: the speaker reads the
   element named by its data-read selector, inside the same row. */
function speakNear(btn) {
  const row = btn.parentElement;
  const el = row && row.querySelector(btn.dataset.read || '.read-text');
  if (el) speakSpans(btn, el, 0.9);
}

let hlTimer = null;
let speechToken = 0;     // bumped on every stop, so a phrase chain that was stopped never resumes
let chunkTimer = null;   // the pause between phrases
function stopActiveSpeech() {
  speechToken++;
  clearTimeout(chunkTimer);
  clearTimeout(hlTimer);
  window.speechSynthesis.cancel();
  document.querySelectorAll('.wrd.hl').forEach(e => e.classList.remove('hl'));
  if (activeSpeakBtn) { activeSpeakBtn.textContent = '🔊'; activeSpeakBtn = null; }
}

/* ── HIGHLIGHT FALLBACK ─────────────────────────────
   Some voices (and some browsers) never fire word-boundary
   events, so the highlight would never move. If no boundary
   arrives shortly after speaking starts, step through the
   words on a timer paced by word length and speech rate. */
function addHighlightFallback(u, spans) {
  let fired = false, i = 0;
  const prevB = u.onboundary, prevE = u.onend;
  u.onboundary = e => { if (e.name === 'word' && !fired) { fired = true; clearTimeout(hlTimer); } if (prevB) prevB(e); };
  u.onend = e => { clearTimeout(hlTimer); spans.forEach(s => s.classList.remove('hl')); if (prevE) prevE(e); };
  const step = () => {
    if (fired) return;
    spans.forEach(s => s.classList.remove('hl'));
    if (i >= spans.length) return;
    const w = spans[i++];
    w.classList.add('hl');
    const len = (w.textContent || '').replace(/[^A-Za-z0-9]/g, '').length;
    hlTimer = setTimeout(step, Math.max(280, len * 70 + 120) / (u.rate || 1));
  };
  clearTimeout(hlTimer);
  hlTimer = setTimeout(step, 500);
}

/* One shared speak routine for anything that has words in
   it — paragraph, question, choice, excerpt, feedback. */
function speakSpans(btn, el, rate) {
  if (activeSpeakBtn === btn) { stopActiveSpeech(); return; }
  stopActiveSpeech();
  if (!el) return;
  if (!el.querySelector('.wrd')) el.innerHTML = wrapWords(el.innerHTML);
  const spans = Array.from(el.querySelectorAll('.wrd')).filter(s => /[A-Za-z0-9]/.test(s.textContent));
  if (!spans.length) return;

  activeSpeakBtn = btn;
  btn.textContent = '⏹';

  const speed  = READ_SPEEDS[readSpeed];
  const chunks = speed.pause ? sentenceChunks(spans) : [spans];
  const token  = speechToken;
  const finish = () => {
    spans.forEach(s => s.classList.remove('hl'));
    if (activeSpeakBtn === btn) { btn.textContent = '🔊'; activeSpeakBtn = null; }
  };

  // One utterance per sentence, a pause, then the next — the word
  // highlight runs inside each phrase exactly as it did before.
  const saySentence = k => {
    if (token !== speechToken) return;
    if (k >= chunks.length) { finish(); return; }
    const part = chunks[k];
    let hlIdx = 0;
    const u = new SpeechSynthesisUtterance(spoken(part.map(s => s.textContent).join(' ')));
    u.lang = 'en-US'; u.rate = (rate || 0.9) * speed.factor;
    u.onboundary = e => {
      if (e.name !== 'word') return;
      part.forEach(s => s.classList.remove('hl'));
      if (part[hlIdx]) part[hlIdx].classList.add('hl');
      hlIdx++;
    };
    u.onend = () => {
      part.forEach(s => s.classList.remove('hl'));
      if (token !== speechToken) return;
      chunkTimer = setTimeout(() => saySentence(k + 1), k + 1 < chunks.length ? speed.pause : 0);
    };
    u.onerror = e => {
      if (token !== speechToken || e.error === 'interrupted' || e.error === 'canceled') return;
      speechToken++;   // a voice error ends the reading instead of skipping ahead
      finish();
    };
    addHighlightFallback(u, part);
    window.speechSynthesis.speak(u);
  };
  saySentence(0);
}

/* Split a run of word spans into whole sentences: a sentence ends after
   . ! ? (closing quotes allowed), but never after a title like "Ms." */
function sentenceChunks(spans) {
  const out = [];
  let cur = [];
  spans.forEach(s => {
    cur.push(s);
    const t = s.textContent;
    if (/[.!?…]['’”)"]*$/.test(t) && !/^(Mr|Mrs|Ms|Dr|St)\.$/.test(t)) { out.push(cur); cur = []; }
  });
  if (cur.length) out.push(cur);
  return out;
}

/* ── ITEM-TYPE HELPERS ──────────────────────────────
   Points available in a bank. Choose-N and hot-text items
   are one point, all picks right (the SBAC rule); the
   written answer is worth nothing here because Mr. O
   scores it. An EBSR is worth one point
   PER PART, so Part A (the inference) and Part B (the
   evidence) are scored and reported separately — that is
   what makes the wrong-answer report usable for
   reteaching, because the two halves fail for different
   reasons. Same rule the Place Value FIAB uses for grid
   rows. */
function bankPoints(bank) {
  return (bank || []).reduce((t, q) => t + (q.type === 'ebsr' ? 2 : q.type === 'cr' ? 0 : 1), 0);
}

/* Group missed elements by skill, most-missed first.
   Returns [{ skill, count }] — the reteaching list. */
function skillBreakdown(missed) {
  const counts = {};
  (missed || []).forEach(m => {
    const k = m.skill || 'Unsorted';
    counts[k] = (counts[k] || 0) + 1;
  });
  return Object.entries(counts)
    .map(([skill, count]) => ({ skill, count }))
    .sort((a, b) => b.count - a.count || a.skill.localeCompare(b.skill));
}

/* Flat "Theme x3, Supporting detail x1" for the Google
   Sheet, so the column is readable even without the
   dashboard. */
function skillTally(missed) {
  return skillBreakdown(missed).map(s => `${s.skill} x${s.count}`).join(', ');
}

/* Skill tag for a scored element. EBSRs carry one skill
   per part: index 0 = Part A, index 1 = Part B. */
function skillFor(q, partIdx) {
  const s = (window.SKILLS || {})[q.id];
  if (Array.isArray(s)) return s[partIdx] || s[0] || 'Unsorted';
  return s || 'Unsorted';
}

/* Every control a student can answer with — used by the
   read lock and by confirm to freeze the item. */
function answerControls() {
  return document.querySelectorAll('.answer-btn, .ht-sent, .cr-textarea');
}

/* Hot-text sentences are spans (so they wrap inside a paragraph),
   and spans cannot be disabled — the locked-choice class is what
   their click handler checks. */
function lockControl(el, locked) {
  el.disabled = locked;
  el.classList.toggle('locked-choice', locked);
  if (el.classList.contains('ht-sent')) el.setAttribute('aria-disabled', locked ? 'true' : 'false');
}

/* ── ATTEMPT TRACKING ───────────────────────────────── */
function getFormAttempts(name) {
  const scores = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
  const counts = { A: 0, B: 0, C: 0 };
  scores.filter(s => s.name === name && s.done).forEach(s => {
    if (counts[s.form] !== undefined) counts[s.form]++;
  });
  return counts;
}

function allFormsCompletedOnce(name) {
  const a = getFormAttempts(name);
  return a.A >= 1 && a.B >= 1 && a.C >= 1;
}

function applyFormLocks(name) {
  const attempts = getFormAttempts(name);
  const allDone1 = allFormsCompletedOnce(name);

  ['A', 'B', 'C'].forEach(form => {
    const btn = document.getElementById(`btn-form-${form}`);
    if (!btn) return;
    const done = attempts[form];
    const sub  = btn.querySelector('.form-btn-sub');

    if (done === 0) {
      btn.classList.remove('locked');
      sub.textContent = '3 stories · 15 questions';
    } else if (done === 1 && !allDone1) {
      btn.classList.add('locked');
      sub.textContent = '✅ Done · finish other forms to retry';
    } else if (done === 1 && allDone1) {
      btn.classList.remove('locked');
      sub.textContent = '🔁 Attempt 2 available';
    } else {
      btn.classList.add('locked');
      sub.textContent = '🔒 2/2 attempts used';
    }
  });
}

/* ── SPEAK DIRECTIONS ───────────────────────────────── */
function speakDir(btn) {
  const p = btn.closest('.dir-section').querySelector('.dir-text');
  speakSpans(btn, p, 0.92);
}

/* ── SPEAK A STORY PARAGRAPH ────────────────────────── */
function speakParagraph(btn) {
  const host = btn.closest('.story-para') || btn.closest('.excerpt-para');
  if (!host) return;
  speakSpans(btn, host.querySelector('.para-text'), 0.9);
}

/* ── READ-ALOUD INTRO SPEAKS ITSELF ─────────────────
   Marcos 10/6: the "Read Aloud is Available!" screen announces itself
   the moment it opens — no reading, no button. The click on "Let's Get
   Started!" is the user gesture the browser needs. The icons are said
   as words, and each word lights up as it is read. Leaving the screen
   (app.show) cancels the speech. */
const INTRO_SAY = { '🔊': 'the speaker button', '⏹': 'the stop button', '—': ',' };
const INTRO_RATE = 0.82;   // Marcos 10/6: 0.92 ran ahead of the highlight
let introToken = 0;
function speakReadAloudIntro() {
  stopActiveSpeech();
  const screen = document.getElementById('readaloud-screen');
  const els = Array.from(screen.querySelectorAll('.ra-read'));
  els.forEach(el => { if (!el.querySelector('.wrd')) el.innerHTML = wrapWords(el.innerHTML); });
  // One piece per box (heading, intro, each card): the highlight lines
  // back up with the voice at the start of every piece instead of drifting.
  const pieces = els.map(el => {
    const parts = [], wordSpan = [], spans = [];
    el.querySelectorAll('.wrd').forEach(sp => {
      const t = sp.textContent.replace(/\uFE0F/g, '').trim();
      const key = t.replace(/[.!?,]+$/, ''), punct = t.slice(key.length);   // "🔊." → icon + "."
      let say = INTRO_SAY[key] != null ? INTRO_SAY[key] + punct : (/[A-Za-z0-9]/.test(t) ? t : '');
      if (!say) return;
      if (say === ',') { if (parts.length) parts[parts.length - 1] += ','; return; }
      if (/^the /.test(say) && /^(every|each)$/i.test(parts[parts.length - 1] || '')) say = say.slice(4);
      // past-tense "read" ("is read aloud") must sound like "red", not "reed" (Marcos 10/6)
      if (/^read[.!?,]?$/i.test(say) && /^(is|was|are|were|be|been|being)$/i.test(parts[parts.length - 1] || '')) say = say.replace(/^read/i, 'red');
      spans.push(sp);
      say.split(' ').forEach(w => { parts.push(w); wordSpan.push(sp); });
    });
    if (parts.length && !/[.!?,]$/.test(parts[parts.length - 1])) parts[parts.length - 1] += '.';
    return { text: parts.join(' '), wordSpan, spans };
  }).filter(p => p.text);
  const factor = (typeof READ_SPEEDS !== 'undefined' && typeof readSpeed !== 'undefined' && READ_SPEEDS[readSpeed]) ? READ_SPEEDS[readSpeed].factor : 1;
  const token = ++introToken;
  const sayPiece = k => {
    // stop for good once the student leaves the screen
    if (token !== introToken || k >= pieces.length || screen.classList.contains('hidden')) return;
    const p = pieces[k];
    const u = new SpeechSynthesisUtterance(p.text);
    u.lang = 'en-US'; u.rate = INTRO_RATE * factor;
    let i = 0;
    u.onboundary = e => {
      if (e.name !== 'word') return;
      p.spans.forEach(sp => sp.classList.remove('hl'));
      if (p.wordSpan[i]) p.wordSpan[i].classList.add('hl');
      i++;
    };
    u.onend = () => { p.spans.forEach(sp => sp.classList.remove('hl')); setTimeout(() => sayPiece(k + 1), 250); };
    addHighlightFallback(u, p.spans);
    window.speechSynthesis.speak(u);
  };
  sayPiece(0);
}

function wrapWords(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  let idx = 0;
  function walk(node) {
    if (node.nodeType === 3) {
      const text = node.textContent.replace(/—/g, ' — ').replace(/  +/g, ' ');
      const words = text.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      words.forEach(part => {
        if (/\S/.test(part)) {
          const sp = document.createElement('span');
          sp.className = 'wrd'; sp.dataset.wi = idx++; sp.textContent = part;
          frag.appendChild(sp);
        } else if (part) {
          frag.appendChild(document.createTextNode(part));
        }
      });
      node.parentNode.replaceChild(frag, node);
    } else {
      [...node.childNodes].forEach(walk);
    }
  }
  walk(tmp);
  return tmp.innerHTML;
}

/* ── STORY MARKUP ───────────────────────────────────
   Shared by the full-screen passage and the side panel,
   so a paragraph is numbered the same in both places —
   a student who notes "paragraph 4" on the story screen
   finds paragraph 4 in the panel. */
function storyParagraphsHTML(passage) {
  const fig = passage.figure;
  return passage.paragraphs.map((t, i) =>
    `<p class="story-para">
       <button class="speak-btn para-speak-btn" onclick="speakParagraph(this)" title="Read paragraph ${i + 1} aloud">🔊</button>
       <span class="para-num" aria-label="Paragraph ${i + 1}">${i + 1}</span>
       <span class="para-text">${esc(t)}</span>
     </p>` + (fig && fig.after === i ? storyFigureHTML(fig) : '')
  ).join('');
}

/* The passage picture. The SVG is Mr. O's own drawing from the
   form file, so it goes in as markup; the caption and alt text
   are escaped like everything else. */
function storyFigureHTML(fig) {
  if (!fig || !fig.svg) return '';
  return `<figure class="story-figure" role="img" aria-label="${esc(fig.alt || fig.caption || 'Picture')}">
      ${fig.svg}
      ${fig.caption ? `<figcaption><button class="speak-btn para-speak-btn" onclick="speakNear(this)" title="Read the caption aloud">🔊</button><span class="read-text">${esc(fig.caption)}</span></figcaption>` : ''}
    </figure>`;
}

function storyNoteHTML(passage) {
  if (!passage.note) return '';
  return `<p class="story-note">
      <button class="speak-btn para-speak-btn" onclick="speakNear(this)" title="Read this note aloud">🔊</button>
      <em class="read-text">${esc(passage.note)}</em>
    </p>`;
}

function storyFootnotesHTML(passage) {
  if (!passage.footnotes || !passage.footnotes.length) return '';
  return `<div class="story-footnotes">
      ${passage.footnotes.map(f =>
        `<div class="footnote"><span class="fn-word">${esc(f.word)}</span> — ${esc(f.meaning)}</div>`
      ).join('')}
    </div>`;
}

/* Side panel that rides along beside every question. */
function renderStoryPanel(passage) {
  const panel = document.getElementById('quiz-story-panel');
  if (!passage) { panel.innerHTML = ''; document.body.classList.remove('story-active'); return; }
  panel.innerHTML = `
    <div class="story-panel-header">
      <span>📖 ${esc(passage.title)}</span>
    </div>
    <div class="story-scroll">
      ${storyNoteHTML(passage)}
      ${storyParagraphsHTML(passage)}
      ${storyFootnotesHTML(passage)}
    </div>`;
  document.body.classList.add('story-active');
}

/* ══════════════════════════════════════════════════════
   APP OBJECT
══════════════════════════════════════════════════════ */
/* ── SESSION EVENT LOG ───────────────────────────────
   start · leave · return · resume · close · finish, each with the
   on-task clock. elapsed is time ON TASK: the timer pauses while the
   page is hidden and counts ticks, so a slept device cannot inflate it. */
function logEvent(kind, extra) {
  if (!app.events) app.events = [];
  app.events.push(Object.assign({
    at: new Date().toISOString(),
    e:  kind,
    q:  (app.currentIndex || 0) + 1,
    on: app.timerSeconds || 0
  }, extra || {}));
  if (app.events.length > 200) app.events.splice(0, app.events.length - 200);
}

const app = {

  /* ── state ── */
  studentName:       '',
  currentForm:       '',
  currentBank:       [],
  currentPassages:   [],
  currentIndex:      0,
  shownPassage:      -1,   // which passage screen the student has already read
  score:             0,
  streak:            0,
  missedQuestions:   [],
  currentAttemptNum: 1,
  selectedAnswer:    null,
  ebsrSelections:    null,
  questionLocked:    false,
  timerSeconds:      0,
  timerInterval:     null,
  timerOn:           false,
  instructInterval:  null,
  passageInterval:   null,
  readInterval:      null,
  nextInterval:      null,

  /* ── screens ── */
  show(id) {
    ['start-screen','readaloud-screen','directions-screen','passage-screen','quiz-screen','end-screen','scoreboard-screen']
      .forEach(s => document.getElementById(s).classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
    window.scrollTo(0, 0);   // every new screen starts at the top
    if (id !== 'quiz-screen') document.body.classList.remove('story-active');
    window.speechSynthesis.cancel();
  },

  /* ── INIT ── */
  init() {
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.remove('hidden');
    document.getElementById('student-login-panel').classList.add('hidden');
  },

  /* ── READ ALOUD INTRO ── */
  showReadAloudIntro() {
    if (!REVIEW_OPEN) return;
    document.getElementById('welcome-panel').classList.add('hidden');
    this.show('readaloud-screen');
    setTimeout(speakReadAloudIntro, 150);   // announces itself (show() just cancelled any speech)
    const btn   = document.getElementById('readaloud-btn');
    const fill  = document.getElementById('readaloud-fill');
    const count = document.getElementById('readaloud-count');
    btn.disabled = true; btn.style.opacity = '0.45'; btn.style.cursor = 'not-allowed';
    count.textContent = 6;
    fill.style.transition = 'none';
    fill.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = 'width 6s linear';
      fill.style.width = '0%';
    }));
    let remaining = 6;
    const iv = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(iv);
        btn.disabled = false; btn.style.opacity = '1';
        btn.style.cursor = 'pointer'; btn.textContent = "✅ Got It — Show Me the Directions!";
      }
    }, 1000);
  },

  /* ── DIRECTIONS ── */
  showDirections() {
    this.show('directions-screen');
    this.startInstructionsTimer();
  },

  showLogin() {
    if (this.instructInterval) { clearInterval(this.instructInterval); this.instructInterval = null; }
    window.speechSynthesis.cancel();
    document.querySelectorAll('.dir-text .wrd.hl').forEach(e => e.classList.remove('hl'));
    this.studentName = '';
    loggedInName = '';
    document.getElementById('resume-container').classList.add('hidden');
    document.getElementById('form-select-section').classList.add('hidden');
    const loginCard = document.getElementById('login-step-card');
    if (loginCard) loginCard.classList.remove('hidden');
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.add('hidden');
    document.getElementById('student-login-panel').classList.remove('hidden');
  },

  /* ── NAME SELECT ── */
  onNameSelect() {
    const val = document.getElementById('name-select').value;
    const pinSec   = document.getElementById('pin-section');
    const guestSec = document.getElementById('guest-name-section');
    document.getElementById('login-error').textContent = '';
    if (!val) { pinSec.classList.add('hidden'); return; }
    pinSec.classList.remove('hidden');
    if (val.startsWith('GUEST:')) {
      guestSec.classList.remove('hidden');
      document.getElementById('pin-label').textContent = '🔒 Enter guest code:';
    } else {
      guestSec.classList.add('hidden');
      document.getElementById('pin-label').textContent = '🔒 Enter your student number:';
    }
    setTimeout(() => document.getElementById('student-pin').focus(), 80);
  },

  /* ── LOGIN ── */
  attemptLogin() {
    const selVal = document.getElementById('name-select').value;
    const pin    = document.getElementById('student-pin').value.trim();
    const errEl  = document.getElementById('login-error');
    errEl.textContent = ''; errEl.style.color = '#c0392b';

    if (!selVal) { errEl.textContent = '⚠️ Please select your name.'; return; }
    if (!pin)    { errEl.textContent = '⚠️ Please enter your student number.'; return; }

    let matched = false, displayName = '';

    if (selVal.startsWith('GUEST:')) {
      const code = selVal.replace('GUEST:', '');
      if (pin === code) {
        const firstName = (document.getElementById('guest-display-name').value || '').trim();
        if (!firstName) { errEl.textContent = '⚠️ Please enter your first name.'; return; }
        matched = true;
        displayName = firstName + ' (Guest)';
      } else {
        errEl.textContent = '❌ Incorrect guest code. Try again.'; return;
      }
    } else {
      const student = ROSTER.find(s => s.name === selVal);
      if (student && student.id === pin) {
        matched = true; displayName = selVal;
      } else {
        errEl.textContent = '❌ Incorrect student number. Try again.'; return;
      }
    }

    if (matched) {
      loggedInName     = displayName;
      this.studentName = displayName;
      document.getElementById('student-pin').value = '';
      document.getElementById('login-error').textContent = '';
      const loginCard = document.getElementById('login-step-card');
      if (loginCard) loginCard.classList.add('hidden');
      document.getElementById('form-select-section').classList.remove('hidden');
      applyFormLocks(displayName);
      this.checkResume();
    }
  },

  /* ── ATTEMPT START ── */
  attemptStart(form) {
    if (!this.studentName) return;
    const attempts = getFormAttempts(this.studentName);
    const done     = attempts[form];
    const allDone1 = allFormsCompletedOnce(this.studentName);
    const name1    = getFirstName(this.studentName);

    if (done === 0) {
      this.startSession(form);
    } else if (done === 1 && !allDone1) {
      alert(`⚠️ ${name1}, you need to finish all three forms before you can retry Form ${form}. Complete the remaining forms first!`);
    } else if (done === 1 && allDone1) {
      this.startSession(form);
    } else if (done >= 2 && !unlockedForms.has(form)) {
      this.showPinModal(
        `🔓 Unlock Form ${form}`,
        `${name1} has already used both attempts for Form ${form}. Enter Teacher PIN to allow an extra retry.`,
        () => { unlockedForms.add(form); this.startSession(form); }
      );
    } else {
      this.startSession(form);
    }
  },

  /* ── TEACHER REVIEW MODE ── */
  promptTeacherReview() {
    const pin = prompt('Enter Teacher PIN to access Review Mode:');
    if (pin !== '9377') { if (pin !== null) alert('Incorrect PIN.'); return; }
    this.studentName = 'Mr. O (Teacher)';
    reviewMode = true;
    localStorage.removeItem(STORAGE_KEY);
    this._showReviewPicker();
  },

  _showReviewPicker() {
    const form = prompt('Choose a form to review:\n1 — Form A\n2 — Form B\n3 — Form C\n\nEnter 1, 2, or 3:');
    const map = { '1': 'A', '2': 'B', '3': 'C' };
    if (!map[form]) { alert('Invalid choice.'); reviewMode = false; return; }
    const mode = prompt('Choose review mode:\n1 — Manual (tap Next each question)\n2 — Auto-run (fully automatic)\n\nEnter 1 or 2:');
    if (mode !== '1' && mode !== '2') { alert('Invalid choice.'); reviewMode = false; return; }
    reviewAutoRun = (mode === '2');
    this.startSession(map[form]);
  },

  exitReviewMode() {
    reviewMode    = false;
    reviewAutoRun = false;
    this.stopTimerEngine();
    const banner = document.getElementById('review-mode-banner');
    if (banner) banner.classList.add('hidden');
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.remove('hidden');
    document.getElementById('student-login-panel').classList.add('hidden');
  },

  _autoAnswer() {
    const q = this.currentBank[this.currentIndex];
    if (q.type === 'ebsr') {
      ['A', 'B'].forEach(part => {
        const key = part === 'A' ? 'partA' : 'partB';
        document.querySelectorAll(`.answer-btn[data-part="${part}"]`).forEach(btn => {
          if (btn.dataset.answer === q[key].answer) this._selectPartChoice(part, q[key].answer, btn);
        });
      });
    } else if (q.type === 'ms' || q.type === 'hottext') {
      document.querySelectorAll('[data-multi]').forEach(el => {
        if (q.answers.includes(el.dataset.answer)) this._toggleMulti(el.dataset.answer, el, q.pick);
      });
    } else if (q.type === 'cr') {
      const ta = document.getElementById('cr-textarea');
      if (ta) { ta.value = q.model; this._onCrInput(ta, true); }
    } else {
      document.querySelectorAll('.answer-btn').forEach(btn => {
        if (btn.dataset.answer === q.answer) this._selectChoice(q.answer, btn);
      });
    }
    setTimeout(() => this.confirmAnswer(), 600);
  },

  /* ── START SESSION ── */
  startSession(form) {
    this.events = []; this.startedAt = new Date().toISOString();
    this.finishedAt = '';
    // Confetti from a previous perfect score keeps animating unless it is
    // stopped here. Home and Try Again both stop it, but "Review Another
    // Form" and a resume do not go through either, so a 0% end screen can
    // end up under someone else's confetti.
    stopConfetti();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(ILFIAB_SESSION_ID_KEY);
    tabSwitchCount = 0;
    const warnBanner = document.getElementById('tab-warning-banner');
    if (warnBanner) warnBanner.classList.add('hidden');
    this.currentForm   = form;
    this.score         = 0;
    this.streak        = 0;
    this.missedQuestions = [];
    this.currentIndex  = 0;
    this.shownPassage  = -1;
    this.timerSeconds  = 0;
    this.questionLocked = false;   // a finished form leaves it set
    localStorage.removeItem(CR_DRAFT_KEY);   // a fresh start never inherits an old draft
    // Fixed up front so the progress row and the final row share one
    // sessionId — the Apps Script then overwrites the progress row
    // instead of leaving it behind as a second row.
    this.currentAttemptNum = reviewMode ? 1 :
      JSON.parse(localStorage.getItem(SCORES_KEY) || '[]')
        .filter(s => s.name === this.studentName && s.form === form && s.done).length + 1;

    const formData = window['FORM_' + form];
    this.currentPassages = formData.passages;

    // Choices shuffle; the PASSAGE ORDER never does, and items
    // never leave their own passage — otherwise the story panel
    // would flip back and forth between three stories.
    const shuffleChoices = q => {
      // hot-text sentences stay in story order (they ARE the story),
      // and a written item has no choices at all
      if (q.type === 'hottext' || q.type === 'cr') return { ...q };
      if (q.type === 'ebsr') {
        return { ...q,
          partA: { ...q.partA, choices: [...q.partA.choices].sort(() => Math.random() - 0.5) },
          partB: { ...q.partB, choices: [...q.partB.choices].sort(() => Math.random() - 0.5) } };
      }
      return { ...q, choices: [...q.choices].sort(() => Math.random() - 0.5) };
    };

    const bank = [];
    this.currentPassages.forEach((_, pIdx) => {
      // Items shuffle inside their story, but the written answer always
      // comes last in its set — by then the student has worked the story.
      const group = formData.items.filter(it => it.p === pIdx && it.type !== 'cr').map(shuffleChoices);
      shuffle(group);
      bank.push(...group, ...formData.items.filter(it => it.p === pIdx && it.type === 'cr').map(shuffleChoices));
    });
    this.currentBank = bank;

    const banner = document.getElementById('review-mode-banner');
    if (banner) {
      banner.classList.toggle('hidden', !reviewMode);
      const label = banner.querySelector('span');
      if (label) label.textContent = reviewAutoRun
        ? '🔍 Teacher Review Mode — auto-run'
        : '🔍 Teacher Review Mode — tap Next to advance';
    }

    logEvent('start');
    this.startTimer();
    this._enterQuestion();
  },

  /* ── PASSAGE GATE ───────────────────────────────────
     Every item knows which story it belongs to. Before
     the first item of a story, the whole story gets its
     own screen; after that the side panel carries it. */
  _enterQuestion() {
    const q = this.currentBank[this.currentIndex];
    if (!q) { this._finishSession(); return; }
    if (q.p !== this.shownPassage) {
      this.showPassage(q.p);
      return;
    }
    this.show('quiz-screen');
    renderStoryPanel(this.currentPassages[q.p]);
    this.renderQuestion();
  },

  showPassage(pIdx) {
    const passage = this.currentPassages[pIdx];
    this.pendingPassage = pIdx;
    this.show('passage-screen');

    const count = this.currentBank.filter(it => it.p === pIdx).length;
    document.getElementById('passage-progress').textContent =
      `Story ${pIdx + 1} of ${this.currentPassages.length}`;
    document.getElementById('passage-qcount').textContent =
      `${count} question${count === 1 ? '' : 's'} coming up`;

    document.getElementById('passage-body').innerHTML = `
      <div class="passage-title-card">
        <div class="passage-title-row">
          <button class="speak-btn" onclick="speakNear(this)" title="Read the title aloud">🔊</button>
          <h2 class="passage-title read-text">${esc(passage.title)}</h2>
        </div>
        <p class="passage-source">${esc(passage.source)}${passage.genre ? ' · ' + esc(passage.genre) : ''}</p>
      </div>
      ${storyNoteHTML(passage)}
      <div class="passage-text">${storyParagraphsHTML(passage)}</div>
      ${storyFootnotesHTML(passage)}`;

    this.startPassageTimer();
  },

  startPassageTimer() {
    if (this.passageInterval) { clearInterval(this.passageInterval); this.passageInterval = null; }
    const btn   = document.getElementById('passage-btn');
    const bar   = document.getElementById('passage-lock-bar');
    const fill  = document.getElementById('passage-lock-fill');
    const count = document.getElementById('passage-lock-count');

    if (reviewMode) {
      bar.classList.add('hidden');
      btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer';
      btn.textContent = "✅ I've read the story — start the questions";
      if (reviewAutoRun) setTimeout(() => this.startPassageQuestions(), 600);
      return;
    }

    bar.classList.remove('hidden');
    btn.disabled = true; btn.style.opacity = '0.45'; btn.style.cursor = 'not-allowed';
    btn.textContent = '⏳ Read the story first…';
    count.textContent = PASSAGE_SECS;
    fill.style.transition = 'none';
    fill.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = `width ${PASSAGE_SECS}s linear`;
      fill.style.width = '0%';
    }));

    let remaining = PASSAGE_SECS;
    this.passageInterval = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(this.passageInterval);
        this.passageInterval = null;
        bar.classList.add('hidden');
        btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer';
        btn.textContent = "✅ I've read the story — start the questions";
      }
    }, 1000);
  },

  startPassageQuestions() {
    if (this.passageInterval) { clearInterval(this.passageInterval); this.passageInterval = null; }
    stopActiveSpeech();
    this.shownPassage = this.pendingPassage;
    this.saveProgress();
    this._enterQuestion();
  },

  /* ── RESUME ── */
  checkResume() {
    const saved = localStorage.getItem(STORAGE_KEY);
    const rc = document.getElementById('resume-container');
    const formSelect = document.getElementById('form-select-section');
    if (saved && rc) {
      const data = JSON.parse(saved);
      if (this.studentName && data.studentName === this.studentName) {
        rc.classList.remove('hidden');
        document.getElementById('resume-detail').textContent =
          `Form ${data.currentForm} — Q${data.currentIndex + 1} of ${data.currentBank.length}`;
        if (formSelect) formSelect.classList.add('hidden');
      } else {
        rc.classList.add('hidden');
        if (formSelect && this.studentName) formSelect.classList.remove('hidden');
      }
    } else if (rc) {
      rc.classList.add('hidden');
      if (formSelect && this.studentName) formSelect.classList.remove('hidden');
    }
  },

  resumeSession() {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return;
    this.studentName    = saved.studentName;
    this.currentForm    = saved.currentForm;
    this.currentBank    = saved.currentBank;
    this.currentPassages = window['FORM_' + saved.currentForm].passages;
    this.currentIndex   = saved.currentIndex;
    this.questionLocked = false;
    // Re-show the story screen on resume — a student coming back
    // cold needs the story again, and the gate makes that free.
    this.shownPassage   = -1;
    this.score          = saved.score;
    this.streak         = saved.streak || 0;
    this.missedQuestions = saved.missedQuestions || [];
    this.timerSeconds   = saved.timerSeconds || 0;
    this.currentAttemptNum = saved.currentAttemptNum || 1;
    this.events = saved.events || [];
    this.startedAt = saved.startedAt || new Date().toISOString();
    logEvent('resume');
    this.startTimer();
    this._enterQuestion();
  },

  saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      studentName:     this.studentName,
      currentForm:     this.currentForm,
      currentBank:     this.currentBank,
      currentIndex:    this.questionLocked ? this.currentIndex + 1 : this.currentIndex, // answered → resume at the next one
      shownPassage:    this.shownPassage,
      score:           this.score,
      streak:          this.streak,
      missedQuestions: this.missedQuestions,
      timerSeconds:    this.timerSeconds,
      currentAttemptNum: this.currentAttemptNum,
      events: this.events,
      startedAt: this.startedAt
    }));
  },

  discardProgress() {
    this.showPinModal(
      '🗑️ Discard Progress',
      'Enter Teacher PIN to clear the current in-progress session. The student will start fresh.',
      () => {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(CR_DRAFT_KEY);
        document.getElementById('resume-container').classList.add('hidden');
        applyFormLocks(this.studentName);
        this.checkResume();
      }
    );
  },

  /* ── OVERALL TIMER ── */
  startTimer() {
    this.stopTimerEngine();
    this.timerOn = true;
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      this._tickTimer();
      if (this.timerSeconds % 30 === 0) this.saveProgress();
    }, 1000);
  },

  stopTimerEngine() {
    if (this.timerInterval) { clearInterval(this.timerInterval); this.timerInterval = null; }
    this.timerOn = false;
  },

  _tickTimer() {
    const m = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
    const s = String(this.timerSeconds % 60).padStart(2, '0');
    const el = document.getElementById('timer-display');
    if (el) el.textContent = `${m}:${s}`;
  },

  /* ── INSTRUCTIONS LOCK (20s) ── */
  startInstructionsTimer() {
    if (this.instructInterval) { clearInterval(this.instructInterval); this.instructInterval = null; }
    const btn   = document.getElementById('ready-btn');
    const fill  = document.getElementById('instruct-fill');
    const count = document.getElementById('instruct-count');
    if (!btn) return;
    if (reviewMode) {
      btn.disabled = false; btn.style.opacity = '1'; btn.style.cursor = 'pointer';
      btn.textContent = "✅ Got It — Let's Begin!";
      return;
    }
    btn.disabled = true;
    btn.style.opacity = '0.45';
    btn.style.cursor  = 'not-allowed';
    if (count) count.textContent = INSTRUCT_SECS;
    if (fill) {
      fill.style.transition = 'none';
      fill.style.width = '100%';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        fill.style.transition = `width ${INSTRUCT_SECS}s linear`;
        fill.style.width = '0%';
      }));
    }
    let remaining = INSTRUCT_SECS;
    this.instructInterval = setInterval(() => {
      remaining--;
      if (count) count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(this.instructInterval);
        this.instructInterval = null;
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.cursor  = 'pointer';
        btn.textContent   = "✅ Got It — Let's Begin!";
      }
    }, 1000);
  },

  /* ── READING LOCK TIMER (15s) ── */
  startReadTimer() {
    if (this.readInterval) { clearInterval(this.readInterval); this.readInterval = null; }
    const bar   = document.getElementById('reading-timer-bar');
    const fill  = document.getElementById('reading-fill');
    const count = document.getElementById('reading-count');

    if (reviewMode) {
      bar.classList.add('hidden');
      answerControls().forEach(b => lockControl(b, false));
      setTimeout(() => this._autoAnswer(), 300);
      return;
    }

    bar.classList.remove('hidden');
    count.textContent = READ_SECS;

    // Single CSS transition — truly smooth over full duration
    fill.style.transition = 'none';
    fill.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = `width ${READ_SECS}s linear`;
      fill.style.width = '0%';
    }));

    answerControls().forEach(b => lockControl(b, true));

    let remaining = READ_SECS;
    this.readInterval = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(this.readInterval);
        this.readInterval = null;
        bar.classList.add('hidden');
        answerControls().forEach(b => lockControl(b, false));
        document.getElementById('confirm-btn').classList.remove('hidden');
      }
    }, 1000);
  },

  /* ── NEXT SOAK TIMER (8s) ── */
  startNextTimer() {
    if (this.nextInterval) { clearInterval(this.nextInterval); this.nextInterval = null; }
    const bar   = document.getElementById('next-timer-bar');
    const fill  = document.getElementById('next-fill');
    const count = document.getElementById('next-count');

    if (reviewMode) {
      bar.classList.add('hidden');
      if (reviewAutoRun) {
        setTimeout(() => this.nextQuestion(), 800);
      } else {
        document.getElementById('next-btn').classList.remove('hidden');
      }
      return;
    }

    bar.classList.remove('hidden');
    count.textContent = NEXT_SECS;

    // Single CSS transition — truly smooth over full duration
    fill.style.transition = 'none';
    fill.style.width = '100%';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = `width ${NEXT_SECS}s linear`;
      fill.style.width = '0%';
    }));

    let remaining = NEXT_SECS;
    this.nextInterval = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      if (remaining <= 0) {
        clearInterval(this.nextInterval);
        this.nextInterval = null;
        bar.classList.add('hidden');
        document.getElementById('next-btn').classList.remove('hidden');
      }
    }, 1000);
  },

  /* ── RENDER QUESTION ── */
  renderQuestion() {
    const q     = this.currentBank[this.currentIndex];
    const total = this.currentBank.length;

    document.getElementById('progress-text').textContent = `Question ${this.currentIndex + 1} of ${total}`;
    document.getElementById('score-text').textContent    = `${getFirstName(this.studentName)} · ${this.score}`;
    document.getElementById('progress-fill').style.width = `${(this.currentIndex / total) * 100}%`;

    this._renderStreak();

    // Question text — for an EBSR this is the two-part instruction,
    // because each part carries its own question inside its block.
    const qtEl = document.getElementById('question-text');
    qtEl.innerHTML = q.type === 'ebsr'
      ? 'This question has two parts. Answer <strong>Part A</strong> and <strong>Part B</strong>.'
      : esc(q.q);

    // Re-shown excerpt, when the item has one
    const exEl = document.getElementById('excerpt-box');
    exEl.classList.toggle('summary-box', !!q.excerptLabel);
    if (q.showFigure) {
      exEl.classList.remove('hidden');
      exEl.innerHTML = `
        <div class="excerpt-label">🖼️ The picture from the story</div>
        ${storyFigureHTML(this.currentPassages[q.p].figure)}`;
    } else if (q.excerpt && q.excerpt.length) {
      exEl.classList.remove('hidden');
      exEl.innerHTML = `
        <div class="excerpt-label">${esc(q.excerptLabel || '📄 From the story')}</div>
        ${q.excerpt.map((t, i) =>
          `<p class="excerpt-para">
             <button class="speak-btn para-speak-btn" onclick="speakParagraph(this)" title="Read this part aloud">🔊</button>
             <span class="para-text">${esc(t)}</span>
           </p>`
        ).join('')}`;
    } else {
      exEl.classList.add('hidden');
      exEl.innerHTML = '';
    }

    // Reset feedback / buttons
    const fb = document.getElementById('feedback');
    fb.className = 'feedback-box';
    fb.style.display = 'none';
    fb.textContent = '';

    const confirmBtn = document.getElementById('confirm-btn');
    confirmBtn.classList.add('hidden');
    confirmBtn.textContent = q.type === 'cr' ? '✍️ Submit My Written Answer' : "✅ That's My Answer!";
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('next-timer-bar').classList.add('hidden');

    // Build the answer area for this item type
    this.selectedAnswer = null;
    this.ebsrSelections = null;
    this.multiSelections = null;
    this.questionLocked = false;
    const wrap = document.getElementById('answers');
    wrap.innerHTML = '';
    wrap.className = 'options-grid';

    if (q.type === 'ebsr')         this._renderEbsr(q, wrap);
    else if (q.type === 'ms')      this._renderMulti(q, wrap);
    else if (q.type === 'hottext') this._renderHotText(q, wrap);
    else if (q.type === 'cr')      this._renderCr(q, wrap);
    else                           this._renderChoices(q, wrap, q.choices, null, q.longChoices);

    if (this.currentIndex > 0 && this.currentIndex % 5 === 0) submitScorePartial();
    this.saveProgress();
    this.startReadTimer();
  },

  /* ── MULTIPLE CHOICE ────────────────────────────────
     `part` is null for a plain item, or 'A' / 'B' inside
     an EBSR so the two blocks select independently. */
  _renderChoices(q, wrap, choices, part, longChoices, pick) {
    choices.forEach((text, i) => {
      const row = document.createElement('div');
      row.className = 'answer-row';

      const btn = document.createElement('button');
      btn.className = 'answer-btn' + (longChoices ? ' excerpt-choice' : '') + (pick ? ' multi-choice' : '');
      btn.dataset.answer = text;
      if (part) btn.dataset.part = part;
      if (pick) {
        btn.dataset.multi = '1';
        btn.setAttribute('role', 'checkbox');
        btn.setAttribute('aria-checked', 'false');
      }
      btn.innerHTML = `${pick ? '<span class="ms-box" aria-hidden="true"></span>' : ''}<strong>${'ABCDEF'[i]}.</strong>&nbsp;<span class="choice-text">${esc(text)}</span>`;
      btn.onclick = () => pick ? this._toggleMulti(text, btn, pick)
                       : part ? this._selectPartChoice(part, text, btn) : this._selectChoice(text, btn);

      const speakBtn = document.createElement('button');
      speakBtn.className = 'choice-speak-btn';
      speakBtn.textContent = '🔊';
      speakBtn.title = 'Read this choice aloud';
      speakBtn.onclick = e => {
        e.stopPropagation();
        speakSpans(speakBtn, btn.querySelector('.choice-text'), 0.9);
      };

      // Speaker sits to the LEFT of the text it reads
      row.appendChild(speakBtn);
      row.appendChild(btn);
      wrap.appendChild(row);
    });
  },

  /* ── EBSR · PART A + PART B ──────────────────────────
     Both parts render on one screen, the way SBAC shows
     them, and both must be answered before confirm. Each
     part is scored and reported on its own, so a student
     who names the right inference but picks the wrong
     evidence still earns the point they earned. */
  _renderEbsr(q, wrap) {
    this.ebsrSelections = { A: null, B: null };
    wrap.className = 'options-grid ebsr-item';

    [['A', q.partA], ['B', q.partB]].forEach(([part, data]) => {
      const block = document.createElement('div');
      block.className = 'ebsr-part';

      const label = document.createElement('div');
      label.className = 'ebsr-label part-' + part;
      label.textContent = 'Part ' + part;
      block.appendChild(label);

      const qRow = document.createElement('div');
      qRow.className = 'ebsr-q-row';
      const qText = document.createElement('div');
      qText.className = 'ebsr-q';
      qText.innerHTML = esc(data.q);
      const qSpeak = document.createElement('button');
      qSpeak.className = 'speak-btn';
      qSpeak.textContent = '🔊';
      qSpeak.title = `Read Part ${part} aloud`;
      qSpeak.onclick = () => speakSpans(qSpeak, qText, 0.92);
      qRow.appendChild(qSpeak);
      qRow.appendChild(qText);
      block.appendChild(qRow);

      const choiceWrap = document.createElement('div');
      choiceWrap.className = 'ebsr-choices';
      this._renderChoices(q, choiceWrap, data.choices, part, data.longChoices);
      block.appendChild(choiceWrap);

      wrap.appendChild(block);
    });
  },

  /* ── CHOOSE TWO / CHOOSE THREE ──────────────────────
     Same rows as multiple choice, with a check box instead
     of a single pick. The student can hold at most `pick`
     answers at a time, so "choose TWO" really means two. */
  _renderMulti(q, wrap) {
    this.multiSelections = [];
    wrap.className = 'options-grid multi-item';
    this._renderChoices(q, wrap, q.choices, null, q.longChoices, q.pick);
    this._renderMultiCount(wrap, q.pick);
  },

  _renderMultiCount(wrap, pick) {
    const c = document.createElement('div');
    c.className = 'multi-count';
    c.id = 'multi-count';
    c.textContent = `Chosen: 0 of ${pick}`;
    wrap.appendChild(c);
  },

  /* ── HOT TEXT ────────────────────────────────────────
     Sentences you tap. layout "list" = one sentence per row,
     each with its own speaker; layout "para" = the paragraph
     re-shown exactly as it reads in the story, every sentence
     tappable in place, one speaker for the whole paragraph. */
  _renderHotText(q, wrap) {
    this.multiSelections = [];
    wrap.className = 'options-grid hottext-item ' + (q.layout === 'para' ? 'ht-layout-para' : 'ht-layout-list');

    const hint = document.createElement('div');
    hint.className = 'ht-hint';
    hint.innerHTML = `<button class="speak-btn para-speak-btn" onclick="speakNear(this)" title="Read the directions aloud">🔊</button>
      <span class="read-text">Tap a sentence to choose it. Tap it again to unselect it. Choose ${q.pick}.</span>`;
    wrap.appendChild(hint);

    const makeSent = text => {
      const sp = document.createElement('span');
      sp.className = 'ht-sent';
      sp.dataset.answer = text;
      sp.dataset.multi = '1';
      sp.setAttribute('role', 'checkbox');
      sp.setAttribute('aria-checked', 'false');
      sp.tabIndex = 0;
      sp.innerHTML = `<span class="choice-text">${esc(text)}</span>`;
      return sp;
    };
    // One listener on the container, not one per sentence: the paragraph
    // speaker re-wraps the paragraph's words (innerHTML), which would throw
    // away handlers set on the sentence spans themselves.
    const delegate = host => {
      const hit = e => e.target.closest && e.target.closest('.ht-sent');
      host.addEventListener('click', e => { const s = hit(e); if (s) this._toggleMulti(s.dataset.answer, s, q.pick); });
      host.addEventListener('keydown', e => {
        const s = hit(e);
        if (s && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); this._toggleMulti(s.dataset.answer, s, q.pick); }
      });
    };

    if (q.layout === 'para') {
      const row = document.createElement('div');
      row.className = 'ht-para-row';
      const speak = document.createElement('button');
      speak.className = 'speak-btn';
      speak.textContent = '🔊';
      speak.title = 'Read the paragraph aloud';
      const para = document.createElement('p');
      para.className = 'ht-para';
      q.choices.forEach((t, i) => {
        if (i) para.appendChild(document.createTextNode(' '));
        para.appendChild(makeSent(t));
      });
      speak.onclick = () => speakSpans(speak, para, 0.9);
      delegate(para);
      row.appendChild(speak);
      row.appendChild(para);
      wrap.appendChild(row);
    } else {
      const list = document.createElement('div');
      list.className = 'ht-list';
      delegate(list);
      wrap.appendChild(list);
      q.choices.forEach(t => {
        const row = document.createElement('div');
        row.className = 'answer-row';
        const sp = makeSent(t);
        sp.classList.add('ht-list-sent');
        const speak = document.createElement('button');
        speak.className = 'choice-speak-btn';
        speak.textContent = '🔊';
        speak.title = 'Read this sentence aloud';
        speak.onclick = e => { e.stopPropagation(); speakSpans(speak, sp.querySelector('.choice-text'), 0.9); };
        row.appendChild(speak);
        row.appendChild(sp);
        list.appendChild(row);
      });
    }
    this._renderMultiCount(wrap, q.pick);
  },

  _toggleMulti(text, el, pick) {
    if (this.questionLocked || el.classList.contains('locked-choice')) return;
    const sel = this.multiSelections || (this.multiSelections = []);
    const at = sel.indexOf(text);
    if (at >= 0) {
      sel.splice(at, 1);
    } else if (sel.length >= pick) {
      this._warn(`⚠️ You can choose only ${pick}. Tap one you already chose to unselect it first.`);
      return;
    } else {
      sel.push(text);
    }
    const on = sel.includes(text);
    el.classList.toggle('selected', on);
    el.setAttribute('aria-checked', on ? 'true' : 'false');
    const c = document.getElementById('multi-count');
    if (c) {
      c.textContent = `Chosen: ${sel.length} of ${pick}`;
      c.classList.toggle('done', sel.length === pick);
    }
  },

  /* ── WRITTEN ANSWER ───────────────────────────────────
     The written-standard rules from R.A.D. Quiz 1: 🔊 at the
     top left of the prompt, a live word count against the
     10-word minimum, and a draft that saves to this device
     at once and to the sheet 3 seconds after typing stops. */
  _crDraftId() {
    const q = this.currentBank[this.currentIndex];
    return [this.studentName, this.currentForm, this.currentAttemptNum, q && q.id].join('|');
  },

  _renderCr(q, wrap) {
    wrap.className = 'options-grid cr-item';
    this.crStartSeconds = this.timerSeconds;
    wrap.innerHTML = `
      <div class="cr-guidance">
        <button class="speak-btn para-speak-btn" onclick="speakNear(this)" title="Read the tip aloud">🔊</button>
        <span class="read-text">${esc(q.guidance)}</span>
      </div>
      <textarea class="cr-textarea" id="cr-textarea" spellcheck="false"
                placeholder="Write your answer here. Use details from the story…"></textarea>
      <div class="word-count-row">Words: <span class="word-count-val" id="cr-wc">0</span><span class="word-count-min">&nbsp;/ ${MIN_WORDS} minimum</span></div>`;
    const ta = wrap.querySelector('#cr-textarea');
    ta.oninput = () => this._onCrInput(ta, false);
    try {
      const saved = JSON.parse(localStorage.getItem(CR_DRAFT_KEY) || 'null');
      if (saved && saved.key === this._crDraftId() && saved.text) { ta.value = saved.text; this._onCrInput(ta, true); }
    } catch (e) { /* a bad draft just means an empty box */ }
  },

  _onCrInput(ta, restoring) {
    const words = countWords(ta.value);
    const el = document.getElementById('cr-wc');
    if (el) { el.textContent = words; el.style.color = words >= MIN_WORDS ? 'var(--correct)' : 'var(--danger)'; }
    if (restoring) return;
    localStorage.setItem(CR_DRAFT_KEY, JSON.stringify({ key: this._crDraftId(), text: ta.value }));
    clearTimeout(this._crDraftTimer);
    const text = ta.value;
    if (!reviewMode) this._crDraftTimer = setTimeout(() => saveDraftToServer(text), 3000);
  },

  _selectChoice(text, btn) {
    if (this.questionLocked) return;
    document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
    this.selectedAnswer = text;
    btn.classList.add('selected');
  },

  _selectPartChoice(part, text, btn) {
    if (this.questionLocked) return;
    document.querySelectorAll(`.answer-btn[data-part="${part}"]`).forEach(b => b.classList.remove('selected'));
    this.ebsrSelections[part] = text;
    btn.classList.add('selected');
  },

  _renderStreak() {
    const el = document.getElementById('streak-bar');
    if (this.streak >= 3) {
      el.textContent = '🔥'.repeat(Math.min(this.streak, 8)) + ` ${this.streak} in a row!`;
    } else {
      el.textContent = '';
    }
  },

  /* ── CONFIRM ANSWER ── */
  _warn(msg) {
    let el = document.getElementById('answer-warning');
    if (!el) {
      el = document.createElement('div');
      el.id = 'answer-warning';
      el.className = 'answer-warning';
      document.getElementById('answers').appendChild(el);
    }
    el.textContent = msg;
    el.classList.remove('hidden');
    clearTimeout(this._warnTimer);
    this._warnTimer = setTimeout(() => el.classList.add('hidden'), 2600);
  },

  confirmAnswer() {
    const q = this.currentBank[this.currentIndex];
    if (this.questionLocked) return;
    if (q.type === 'cr') { this._confirmCr(q); return; }

    let correct, correctAnswerStr;
    let pointsEarned = 0, partsRight = 0, partsTotal = 1;
    let multiRight = 0;

    if (q.type === 'ms' || q.type === 'hottext') {
      const sel = this.multiSelections || [];
      if (sel.length !== q.pick) {
        this._warn(`⚠️ Choose ${q.pick} answers before you confirm. You have ${sel.length}.`);
        return;
      }
      multiRight   = sel.filter(t => q.answers.includes(t)).length;
      correct      = multiRight === q.pick;
      pointsEarned = correct ? 1 : 0;
      correctAnswerStr = q.answers.join('  ·  ');
      if (!correct) {
        // picks saved in the order they appear on screen, so two students
        // who chose the same pair read the same in the sheet
        const shown = [...document.querySelectorAll('[data-multi]')].map(el => el.dataset.answer);
        this.missedQuestions.push({
          id: q.id, q: q.q, skill: skillFor(q, 0),
          yourAnswer: shown.filter(t => sel.includes(t)).join(' | '),
          correct: correctAnswerStr,
          explanation: q.explanation || ''
        });
      }
    } else if (q.type === 'ebsr') {
      if (!this.ebsrSelections || !this.ebsrSelections.A || !this.ebsrSelections.B) {
        this._warn('⚠️ Answer both Part A and Part B before you confirm.');
        return;
      }
      partsTotal = 2;
      const rightA = this.ebsrSelections.A === q.partA.answer;
      const rightB = this.ebsrSelections.B === q.partB.answer;
      partsRight   = (rightA ? 1 : 0) + (rightB ? 1 : 0);
      pointsEarned = partsRight;
      correct      = partsRight === 2;

      [['A', q.partA, rightA, 0], ['B', q.partB, rightB, 1]].forEach(([part, data, right, idx]) => {
        if (right) return;
        this.missedQuestions.push({
          id: `${q.id}.${part}`,
          q: data.q,
          skill: skillFor(q, idx),
          yourAnswer: this.ebsrSelections[part],
          correct: data.answer,
          explanation: data.explanation || ''
        });
      });
      correctAnswerStr = `Part A — ${q.partA.answer}  ·  Part B — ${q.partB.answer}`;
    } else {
      if (!this.selectedAnswer) return;
      correct = this.selectedAnswer === q.answer;
      correctAnswerStr = q.answer;
      pointsEarned = correct ? 1 : 0;
      if (!correct) {
        this.missedQuestions.push({
          id: q.id, q: q.q, skill: skillFor(q, 0),
          yourAnswer: this.selectedAnswer, correct: correctAnswerStr,
          explanation: q.explanation || ''
        });
      }
    }

    this.questionLocked = true;
    this.score += pointsEarned;
    this.streak = correct ? this.streak + 1 : 0;

    // Freeze the item and mark it up
    answerControls().forEach(el => { el.disabled = true; });

    if (q.type === 'ms' || q.type === 'hottext') {
      document.querySelectorAll('[data-multi]').forEach(el => {
        if (q.answers.includes(el.dataset.answer))               el.classList.add('correct');
        else if ((this.multiSelections || []).includes(el.dataset.answer)) el.classList.add('incorrect');
      });
    } else if (q.type === 'ebsr') {
      [['A', q.partA], ['B', q.partB]].forEach(([part, data]) => {
        document.querySelectorAll(`.answer-btn[data-part="${part}"]`).forEach(btn => {
          if (btn.dataset.answer === data.answer)                     btn.classList.add('correct');
          else if (btn.dataset.answer === this.ebsrSelections[part])   btn.classList.add('incorrect');
        });
      });
    } else {
      document.querySelectorAll('.answer-btn').forEach(btn => {
        if (btn.dataset.answer === q.answer)                 btn.classList.add('correct');
        else if (btn.dataset.answer === this.selectedAnswer) btn.classList.add('incorrect');
      });
    }

    const partial = (q.type === 'ebsr' && partsRight === 1) ||
                    ((q.type === 'ms' || q.type === 'hottext') && !correct && multiRight > 0);
    const fb = document.getElementById('feedback');
    fb.className = 'feedback-box ' + (correct ? 'correct' : partial ? 'partial' : 'incorrect');
    fb.style.display = 'block';

    if (q.type === 'ms' || q.type === 'hottext') {
      const what = q.type === 'hottext' ? 'sentences' : 'answers';
      const head = correct
        ? `✅ <strong>Correct!</strong> You found all ${q.pick}.`
        : partial
          ? `⚠️ <strong>${multiRight} of ${q.pick} right.</strong> This question needs every pick right for the point.`
          : `❌ <strong>Not quite.</strong>`;
      fb.innerHTML = `${head}${correct ? '' : `<br>The correct ${what} are:<ul class="fb-list">${q.answers.map(a => `<li>${esc(a)}</li>`).join('')}</ul>`}${correct ? '<br>' : ''}${esc(q.explanation)}`;
    } else if (q.type === 'ebsr') {
      const head = correct
        ? `✅ <strong>Correct!</strong> You got both parts right.`
        : partial
          ? `⚠️ <strong>1 of 2 parts right.</strong> You earned 1 point. Check the part marked in red.`
          : `❌ <strong>Not quite.</strong> Neither part was right.`;
      fb.innerHTML = `${head}<br>
        <strong>Part A</strong> — ${esc(q.partA.answer)}<br>${esc(q.partA.explanation)}<br><br>
        <strong>Part B</strong> — ${esc(q.partB.answer)}<br>${esc(q.partB.explanation)}`;
    } else if (correct) {
      fb.innerHTML = `✅ <strong>Correct!</strong><br>${esc(q.explanation)}`;
    } else {
      fb.innerHTML = `❌ <strong>Not quite.</strong> The correct answer is:<br><strong>${esc(correctAnswerStr)}</strong><br>${esc(q.explanation)}`;
    }

    // Feedback read-aloud button
    const fbSpeakBtn = document.createElement('button');
    fbSpeakBtn.className = 'speak-btn';
    fbSpeakBtn.style.cssText = 'float:left;margin:0 10px 4px 0;';
    fbSpeakBtn.textContent = '🔊';
    const fbBody = document.createElement('div');
    fbBody.className = 'fb-body';
    fbBody.innerHTML = fb.innerHTML;
    fb.innerHTML = '';
    fb.appendChild(fbSpeakBtn);
    fb.appendChild(fbBody);
    fbSpeakBtn.onclick = () => speakSpans(fbSpeakBtn, fbBody, 0.9);

    document.getElementById('confirm-btn').classList.add('hidden');
    document.getElementById('score-text').textContent = `${getFirstName(this.studentName)} · ${this.score}`;
    this._renderStreak();
    this.saveProgress();
    this.startNextTimer();
  },

  /* ── WRITTEN ANSWER · submit ─────────────────────────
     Not scored here and never a "miss": it goes to the
     written tab for Mr. O, and the student sees a strong
     answer and a checklist to compare their own against. */
  _confirmCr(q) {
    const ta = document.getElementById('cr-textarea');
    const text = ta ? ta.value.trim() : '';
    const words = countWords(text);
    if (words < MIN_WORDS) {
      this._warn(`⚠️ Your answer needs at least ${MIN_WORDS} words. You have ${words}.`);
      return;
    }
    this.questionLocked = true;
    clearTimeout(this._crDraftTimer);
    // Teacher review runs type the model answer — keep those out of the written tab.
    if (!reviewMode) submitWrittenToSheet(text, Math.max(0, this.timerSeconds - (this.crStartSeconds || 0)));
    localStorage.removeItem(CR_DRAFT_KEY);
    if (ta) ta.readOnly = true;

    const fb = document.getElementById('feedback');
    fb.className = 'feedback-box written';
    fb.style.display = 'block';
    const fbSpeakBtn = document.createElement('button');
    fbSpeakBtn.className = 'speak-btn';
    fbSpeakBtn.style.cssText = 'float:left;margin:0 10px 4px 0;';
    fbSpeakBtn.textContent = '🔊';
    const fbBody = document.createElement('div');
    fbBody.className = 'fb-body';
    fbBody.innerHTML = `✍️ <strong>Saved for Mr. O!</strong> He reads and scores this answer himself, so it does not change your score here.<br><br>
      <strong>Compare yours with a strong answer:</strong>
      <div class="cr-model">${esc(q.model)}</div>
      <strong>Check your own answer:</strong>
      <ul class="fb-list cr-check">${q.checklist.map(c => `<li>${esc(c)}</li>`).join('')}</ul>`;
    fb.innerHTML = '';
    fb.appendChild(fbSpeakBtn);
    fb.appendChild(fbBody);
    fbSpeakBtn.onclick = () => speakSpans(fbSpeakBtn, fbBody, 0.9);

    document.getElementById('confirm-btn').classList.add('hidden');
    this.saveProgress();
    this.startNextTimer();
  },

  /* ── NEXT QUESTION ── */
  nextQuestion() {
    stopActiveSpeech();
    this.currentIndex++;
    // The answered item is behind us now. Left set, a save during the next
    // story screen (30-second tick, tab hidden, page closed) would record
    // currentIndex + 1 and the resume would skip that story's first item.
    this.questionLocked = false;
    if (this.currentIndex >= this.currentBank.length) {
      this._finishSession();
    } else {
      this._enterQuestion();
    }
  },

  /* ── FINISH SESSION ── */
  _finishSession() {
    this.finishedAt = new Date().toISOString(); logEvent('finish');
    this.stopTimerEngine();
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(ILFIAB_SESSION_ID_KEY);

    const total = bankPoints(this.currentBank);
    const pct   = Math.round((this.score / total) * 100);
    const date  = new Date();

    const scores   = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
    const attemptNum = this.currentAttemptNum || 1;

    if (!reviewMode) {
      scores.push({
        name:    this.studentName,
        form:    this.currentForm,
        attempt: attemptNum,
        score:   this.score,
        total,
        pct,
        elapsed: this.timerSeconds,
        date:    date.toLocaleDateString(),
        time:    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        done:    true
      });
      localStorage.setItem(SCORES_KEY, JSON.stringify(scores));
    }

    submitScoreFinal();

    let letter = 'F', msg = "Let's practice more! 📚";
    if (pct === 100) { letter = 'A+'; msg = "⭐ PERFECT SCORE! ⭐"; }
    else if (pct >= 90) { letter = 'A'; msg = "Outstanding Work! 🌟"; }
    else if (pct >= 80) { letter = 'B'; msg = "Great Job! 👏"; }
    else if (pct >= 70) { letter = 'C'; msg = "Good Effort! 💪"; }
    else if (pct >= 60) { letter = 'D'; msg = "Keep Practicing! 🔄"; }

    this.show('end-screen');

    const reviewNextBtn = document.getElementById('review-next-btn');
    if (reviewNextBtn) reviewNextBtn.classList.toggle('hidden', !reviewMode);

    document.getElementById('final-score-sub').textContent =
      `Form ${this.currentForm} · Attempt ${attemptNum} · ${this.studentName}`;
    document.getElementById('final-msg').textContent = msg;

    const pctEl = document.getElementById('final-percent');
    pctEl.innerHTML = `${this.score}/${total}<br><small style="font-size:0.5em;color:${pct>=70?'var(--correct)':'var(--danger)'};">${pct}% · ${letter}</small>`;
    setTimeout(() => pctEl.classList.add('revealed'), 50);

    // ── Skills to reteach — grouped, most-missed first ──
    const skillSec = document.getElementById('skill-section');
    if (skillSec) {
      const breakdown = skillBreakdown(this.missedQuestions);
      if (breakdown.length) {
        const worst = breakdown[0].count;
        skillSec.classList.remove('hidden');
        document.getElementById('skill-items').innerHTML = breakdown.map(s => {
          const pctWidth = Math.round((s.count / worst) * 100);
          return `<div class="skill-row">
            <div class="skill-name">${esc(s.skill)}</div>
            <div class="skill-bar-wrap"><div class="skill-bar" style="width:${pctWidth}%"></div></div>
            <div class="skill-count">${s.count} missed</div>
          </div>`;
        }).join('');
      } else {
        skillSec.classList.add('hidden');
      }
    }

    const missedSec = document.getElementById('missed-section');
    if (this.missedQuestions.length) {
      missedSec.classList.remove('hidden');
      document.getElementById('missed-items').innerHTML =
        this.missedQuestions.map(m =>
          `<div class="missed-item">
            <div class="mi-label">${esc(m.id)}${m.skill ? ` · <span class="mi-skill">${esc(m.skill)}</span>` : ''}</div>
            <div style="margin:3px 0;">${esc(m.q)}</div>
            <div>Your answer: <span style="color:var(--danger);">${esc(m.yourAnswer)}</span></div>
            <div>✅ Correct: <strong style="color:var(--correct);">${esc(m.correct)}</strong></div>
            ${m.explanation ? `<div style="margin-top:5px;font-size:0.85rem;color:#555;font-style:italic;">💡 ${esc(m.explanation)}</div>` : ''}
          </div>`
        ).join('');
    } else {
      missedSec.classList.add('hidden');
    }

    if (pct >= 70) startConfetti(pct);

    if (!reviewMode && allFormsCompletedOnce(this.studentName)) {
      setTimeout(() => this.showScores(true), 3000);
    }
  },

  /* ── SPEAK QUESTION ── */
  speakQuestion() {
    const qBtn = document.getElementById('speak-q-btn');
    speakSpans(qBtn, document.getElementById('question-text'), 0.92);
  },

  /* ── SCORES ── */
  showScores(autoShow = false) {
    this.show('scoreboard-screen');
    const teacherBtns = document.getElementById('teacher-score-btns');
    if (teacherBtns) teacherBtns.style.display = this.studentName === 'Mr. O (Teacher)' ? 'flex' : 'none';
    if (!reviewMode) this._startScoreLock(autoShow ? 60 : 0);

    const all    = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
    const listEl = document.getElementById('score-list');
    const noEl   = document.getElementById('no-scores-msg');

    if (!all.length) {
      listEl.innerHTML = '';
      noEl.style.display = 'block';
      return;
    }
    noEl.style.display = 'none';

    const forms = ['A', 'B', 'C'];

    const summaryCards = forms.map(form => {
      const best = all.filter(s => s.form === form && s.done)
        .reduce((b, r) => (!b || r.pct > b.pct) ? r : b, null);
      if (!best) {
        return `<div class="sb-summary-card">
          <div class="sb-summary-label">Form ${form}</div>
          <div class="sb-summary-grade" style="color:#ccc;">—</div>
          <div class="sb-summary-score" style="color:#aaa;">Not yet completed</div>
        </div>`;
      }
      const grade = letterGrade(best.pct);
      const gc = best.pct>=90?'#27ae60':best.pct>=80?'#2980b9':best.pct>=70?'#f39c12':best.pct>=60?'#e67e22':'#e74c3c';
      return `<div class="sb-summary-card">
        <div class="sb-summary-label">Form ${form}</div>
        <div class="sb-summary-grade" style="color:${gc};">${grade}</div>
        <div class="sb-summary-score">${best.score}/${best.total} · ${best.pct}%</div>
        <div class="sb-summary-attempt">Best of ${all.filter(s=>s.form===form&&s.done).length} attempt(s)</div>
      </div>`;
    }).join('');

    const details = forms.map(form => {
      const rows = all.filter(s => s.form === form && s.done);
      if (!rows.length) return '';
      const att1 = rows.filter(r => (r.attempt||1) === 1);
      const att2 = rows.filter(r => (r.attempt||1) >= 2);

      const buildTable = (attempts, label, headerColor) => {
        if (!attempts.length) return '';
        return `<div style="margin-bottom:14px;">
          <div style="display:inline-block;background:${headerColor};color:white;
                      font-size:0.72rem;font-weight:bold;letter-spacing:1px;
                      text-transform:uppercase;border-radius:6px;padding:3px 10px;
                      margin-bottom:6px;">${label}</div>
          <table class="scoreboard-table">
            <thead><tr><th>Score</th><th>%</th><th>Grade</th><th>Time</th><th>Date</th></tr></thead>
            <tbody>${attempts.map(r => {
              const grade = letterGrade(r.pct);
              const cls   = r.pct>=90?'score-good':r.pct>=70?'score-ok':'score-bad';
              return `<tr>
                <td>${r.score}/${r.total}</td>
                <td class="${cls}">${r.pct}%</td>
                <td class="${cls}" style="font-weight:800;">${grade}</td>
                <td>${r.time||'—'}</td>
                <td>${r.date}</td>
              </tr>`;
            }).join('')}</tbody>
          </table>
        </div>`;
      };

      return `<h3 style="color:var(--primary);margin:22px 0 8px;border-bottom:2px solid #e0e0e0;padding-bottom:6px;">Form ${form}</h3>
        ${buildTable(att1,'Attempt 1','#d35400')}
        ${buildTable(att2,'Attempt 2','#f39c12')}`;
    }).join('');

    listEl.innerHTML = `
      <div style="margin-bottom:6px;font-size:0.8rem;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1px;">Your Best Scores</div>
      <div class="sb-summary-row">${summaryCards}</div>
      <div style="margin-top:24px;">${details}</div>`;
  },

  _startScoreLock(secs) {
    const bar     = document.getElementById('sb-lock-bar');
    const fill    = document.getElementById('sb-lock-fill');
    const count   = document.getElementById('sb-lock-count');
    const buttons = document.querySelectorAll('#scoreboard-screen button:not(#sb-lock-bar button)');
    if (!secs || secs <= 0) { if (bar) bar.classList.add('hidden'); return; }
    bar.classList.remove('hidden');
    fill.style.width = '100%';
    count.textContent = secs;
    buttons.forEach(b => { b.disabled = true; b.style.opacity = '0.4'; });
    let remaining = secs;
    const iv = setInterval(() => {
      remaining--;
      count.textContent = remaining;
      fill.style.width = (remaining / secs * 100) + '%';
      if (remaining <= 0) {
        clearInterval(iv);
        bar.classList.add('hidden');
        buttons.forEach(b => { b.disabled = false; b.style.opacity = '1'; });
      }
    }, 1000);
  },

  clearScores() {
    const panel = document.getElementById('clear-confirm-panel');
    panel.classList.remove('hidden');
    document.getElementById('clear-pin-input').value = '';
    document.getElementById('clear-pin-error').textContent = '';
    setTimeout(() => document.getElementById('clear-pin-input').focus(), 80);
  },

  confirmClearScores() {
    const pin = document.getElementById('clear-pin-input').value.trim();
    if (pin === '9377') {
      localStorage.removeItem(SCORES_KEY);
      document.getElementById('clear-confirm-panel').classList.add('hidden');
      this.showScores();
    } else {
      document.getElementById('clear-pin-error').textContent = '❌ Incorrect PIN. Try again.';
      document.getElementById('clear-pin-input').value = '';
      document.getElementById('clear-pin-input').focus();
    }
  },

  cancelClearScores() {
    document.getElementById('clear-confirm-panel').classList.add('hidden');
  },

  printResults() {
    const all = JSON.parse(localStorage.getItem(SCORES_KEY) || '[]');
    if (!all.length) { alert('No scores to print yet!'); return; }
    const rows = ['A','B','C'].flatMap(form =>
      all.filter(s => s.form === form).map(r => {
        const cc  = r.pct >= 80 ? 'good' : r.pct >= 60 ? 'ok' : 'bad';
        const att = r.attempt || 1;
        const attStyle = att === 1
          ? 'background:#d35400;color:white;padding:2px 7px;border-radius:4px;font-size:0.8em;'
          : 'background:#f39c12;color:#5a3000;padding:2px 7px;border-radius:4px;font-size:0.8em;';
        return `<tr>
          <td>${r.name||'—'}</td>
          <td>Form ${r.form}</td>
          <td><span style="${attStyle}">Attempt ${att}</span></td>
          <td>${r.score}/${r.total}</td>
          <td class="${cc}">${r.pct}%</td>
          <td>${r.time||'—'}</td>
          <td>${r.date}</td>
        </tr>`;
      })
    ).join('');
    const html = `<html><head><title>Read Literary Texts IAB Review Scores</title>
      <style>body{font-family:Arial;padding:20px;}h2{color:#0f766e;}
      table{width:100%;border-collapse:collapse;margin-top:12px;}
      th,td{border:1px solid #ccc;padding:8px 12px;text-align:center;}
      th{background:#0f766e;color:white;}
      .good{color:green;font-weight:bold;}.ok{color:orange;font-weight:bold;}.bad{color:red;font-weight:bold;}</style>
      </head><body>
      <h2>📚 SBAC Practice — Read Literary Texts (IAB) — Score Report</h2>
      <p>Printed: ${new Date().toLocaleString()}</p>
      <table><tr><th>Name</th><th>Form</th><th>Attempt</th><th>Score</th><th>%</th><th>Time</th><th>Date</th></tr>${rows}</table>
      </body></html>`;
    const w = window.open('', '_blank');
    w.document.write(html); w.document.close(); w.print();
  },

  /* ── END SCREEN ACTIONS ── */
  tryAgain() {
    stopConfetti();
    this.timerSeconds = 0;
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.add('hidden');
    document.getElementById('student-login-panel').classList.remove('hidden');
    applyFormLocks(this.studentName);
    this.checkResume();
  },

  restart() {
    stopConfetti();
    this.stopTimerEngine();
    this.timerSeconds   = 0;
    this.studentName    = '';
    loggedInName        = '';
    unlockedForms       = new Set();
    document.getElementById('name-select').value = '';
    document.getElementById('student-pin').value = '';
    document.getElementById('pin-section').classList.add('hidden');
    document.getElementById('form-select-section').classList.add('hidden');
    document.getElementById('resume-container').classList.add('hidden');
    document.getElementById('login-error').textContent = '';
    const loginCard = document.getElementById('login-step-card');
    if (loginCard) loginCard.classList.remove('hidden');
    this.show('start-screen');
    document.getElementById('welcome-panel').classList.remove('hidden');
    document.getElementById('student-login-panel').classList.add('hidden');
  },

  /* ── GLOBAL PIN MODAL ── */
  showPinModal(title, msg, onSuccess) {
    pinModalCallback = onSuccess;
    document.getElementById('pin-modal-title').textContent = title;
    document.getElementById('pin-modal-msg').textContent   = msg;
    document.getElementById('pin-modal-input').value       = '';
    document.getElementById('pin-modal-error').textContent = '';
    document.getElementById('pin-modal').classList.remove('hidden');
    setTimeout(() => document.getElementById('pin-modal-input').focus(), 80);
  },

  confirmPinModal() {
    const pin = document.getElementById('pin-modal-input').value.trim();
    if (pin === '9377') {
      document.getElementById('pin-modal').classList.add('hidden');
      const cb = pinModalCallback;
      pinModalCallback = null;
      if (cb) cb();
    } else {
      document.getElementById('pin-modal-error').textContent = '❌ Incorrect PIN. Try again.';
      document.getElementById('pin-modal-input').value = '';
      document.getElementById('pin-modal-input').focus();
    }
  },

  cancelPinModal() {
    document.getElementById('pin-modal').classList.add('hidden');
    pinModalCallback = null;
  }
};

/* ── VISIBILITY / UNLOAD ─────────────────────────────── */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (!app.timerOn) return;
    tabSwitchCount++;
    logEvent('leave');
    app.stopTimerEngine();
    app.saveProgress();
    if (app.instructInterval) { clearInterval(app.instructInterval); }
    if (app.readInterval)     { clearInterval(app.readInterval); app.readInterval = null; app._readLockPaused = true; }
    app._wasTimerRunning = true;
  } else {
    if (!app._wasTimerRunning) return;
    app._wasTimerRunning = false;
    logEvent('return');
    const warnBanner = document.getElementById('tab-warning-banner');
    if (warnBanner) warnBanner.classList.remove('hidden');
    app.stopTimerEngine();
    app.timerInterval = setInterval(() => {
      app.timerSeconds++;
      app._tickTimer();
      if (app.timerSeconds % 30 === 0) app.saveProgress();
    }, 1000);
    app.timerOn = true;
    // The read lock stopped while the page was hidden; start it over so the
    // answers unlock again (left alone they stayed locked until a refresh).
    if (app._readLockPaused) { app._readLockPaused = false; app.startReadTimer(); }
  }
});

window.addEventListener('beforeunload', () => {
  if (app.timerOn) logEvent('close');
  if (app.timerOn) app.saveProgress();
});

/* ── CONFETTI ────────────────────────────────────────── */
const canvas = document.getElementById('confetti-canvas');
const ctx    = canvas.getContext('2d');
let particles = [], animId = null;

function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener('resize', resize); resize();

function startConfetti(pct) {
  particles = [];
  let count, cols;
  if (pct === 100) {
    count = 300;
    cols = ['#FFD700','#FFA500','#FFFACD','#f39c12','#ffffff','#FFD700'];
  } else if (pct >= 90) {
    count = 220;
    cols = ['#0f766e','#14b8a6','#2ecc71','#3498db','#e67e22','#e74c3c','#FFD700'];
  } else if (pct >= 80) {
    count = 160;
    cols = ['#0f766e','#14b8a6','#2ecc71','#3498db','#e74c3c','#f39c12'];
  } else {
    count = 80;
    cols = ['#0f766e','#14b8a6','#7f8c8d','#95a5a6','#bdc3c7'];
  }
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      c: cols[~~(Math.random() * cols.length)],
      s: Math.random() * 5 + 3,
      d: Math.random() * 5 + 2,
      r: Math.random() * Math.PI * 2
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r += 0.05);
    ctx.fillStyle = p.c; ctx.fillRect(-p.s/2, -p.s/2, p.s, p.s);
    ctx.restore();
    p.y += p.d; p.x += Math.sin(p.r) * 1.5;
    if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
  });
  animId = requestAnimationFrame(animateConfetti);
}

function stopConfetti() {
  if (animId) cancelAnimationFrame(animId);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  animId = null;
}

/* ── BOOT ────────────────────────────────────────────── */
app.init();
renderSpeedBar();

/* ── CLOSED-TO-STUDENTS LOCK ────────────────────────── */
(function applyReviewLock() {
  if (REVIEW_OPEN) return;
  const btn = document.querySelector('.lgs-btn');
  if (!btn) return;
  btn.disabled = true;
  btn.classList.add('locked');
  btn.textContent = '🔒 Not Open Yet';
  const note = document.createElement('p');
  note.className = 'locked-note';
  note.textContent = "Mr. O will let you know when this review is ready!";
  btn.insertAdjacentElement('afterend', note);
})();
