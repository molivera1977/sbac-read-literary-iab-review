/* ═══════════════════════════════════════════════════════
   SKILL TAGS — what each scored element is testing.
   The three forms are built slot for slot from the same
   blueprint, so item N tests the same skill on every form
   and Form A → B → C compares skill by skill.
   EBSR items carry one skill PER PART: [Part A, Part B].
   Names shared with the Inferences (Literary) FIAB review
   are spelled the same, so the two reviews compare too.
   The written answer (item 11) is scored by Mr. O, never
   by the site — its tag is here for the record only.
═══════════════════════════════════════════════════════ */
(function () {
  const SLOTS = {
    '01': "Character inference",
    '02': "Word meaning",
    '03': "Picture purpose",
    '04': ["Drawing conclusions", "Supporting detail"],
    '05': "Main idea",
    '06': "Evidence selection",
    '07': "Summarizing",
    '08': "Evidence selection",
    '09': ["Character inference", "Supporting detail"],
    '10': "Figurative language",
    '11': "Written response",
    '12': "Word meaning",
    '13': "Summarizing",
    '14': "Figurative language",
    '15': "Evidence selection"
  };
  const skills = {};
  ['A', 'B', 'C'].forEach(form =>
    Object.entries(SLOTS).forEach(([n, s]) => { skills[form + n] = s; }));
  window.SKILLS = skills;
})();
