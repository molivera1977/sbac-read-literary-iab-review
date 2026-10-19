/* ═══════════════════════════════════════════════════════
   SBAC IAB REVIEW · Read Literary Texts
   WARM UP — the lower rung, done before Forms A, B and C.
   3 SHORT passages, 15 items, 16 scored points
   (+ 1 written answer Mr. O scores himself)

   Same format as the forms, slot for slot: the same three
   genres, the same item types in the same order, and the
   same question wording. What changes is the reading:
   each story is about 300 words (the forms run ~700),
   written in shorter sentences with easier words, and
   every explanation names the paragraph with the clue.
     P1 (6 items) realistic fiction that teaches a PROCESS,
                  with an embedded picture
     P2 (5 items) sports fiction with a flashback frame
     P3 (4 items) traditional-style folktale with a test
                  and a moral
   Item mix: 7 MC (incl. 1 summary-gap) · 3 choose-more-than-one
             2 EBSR (Part A + Part B, a point each)
             2 hot-text (click the sentences) · 1 written ✍️
   All passages are original writing for this review —
   no secure test passage or item is reproduced.
═══════════════════════════════════════════════════════ */
window.FORM_W = {

  passages: [

    /* ── PASSAGE 1 ─────────────────────────────────────
       Realistic fiction that teaches a process. A boy and
       his aunt plant tomato seeds in an egg carton, and a
       picture shows how the parts fit together. */
    {
      id: "W-P1",
      title: "Seeds in an Egg Carton",
      source: "Original practice passage",
      genre: "Realistic fiction",
      figure: {
        after: 7,
        caption: "An egg carton garden like the one Leo and Aunt Rosa made",
        alt: "A drawing of three egg carton cups cut in half so you can see inside. Each cup is filled with dirt, and two seeds sit under a thin layer of dirt near the top. Water drops fall onto the cups from above. Each cup has a small drain hole in the bottom, and drips fall from the holes into the lid, which sits under the carton.",
        svg: '<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif" font-size="14">' +
             '<rect width="600" height="340" rx="12" fill="#fffdf6"/>' +
             // water drops falling onto the cups
             '<path d="M190 84 q5 9 0 13 q-5 -4 0 -13 Z M212 100 q5 9 0 13 q-5 -4 0 -13 Z M275 82 q5 9 0 13 q-5 -4 0 -13 Z M297 98 q5 9 0 13 q-5 -4 0 -13 Z M360 86 q5 9 0 13 q-5 -4 0 -13 Z M382 102 q5 9 0 13 q-5 -4 0 -13 Z" fill="#42a5f5"/>' +
             // dirt inside each cup
             '<path d="M164 146 L174 230 Q200 246 226 230 L236 146 Z M249 146 L259 230 Q285 246 311 230 L321 146 Z M334 146 L344 230 Q370 246 396 230 L406 146 Z" fill="#7b5a3c"/>' +
             // seeds under a thin layer of dirt
             '<g fill="#f3e5c0" stroke="#a1887f" stroke-width="1"><ellipse cx="190" cy="160" rx="6" ry="3.5"/><ellipse cx="210" cy="160" rx="6" ry="3.5"/><ellipse cx="275" cy="160" rx="6" ry="3.5"/><ellipse cx="295" cy="160" rx="6" ry="3.5"/><ellipse cx="360" cy="160" rx="6" ry="3.5"/><ellipse cx="380" cy="160" rx="6" ry="3.5"/></g>' +
             // the cups
             '<path d="M162 132 L172 232 Q200 250 228 232 L238 132 M247 132 L257 232 Q285 250 313 232 L323 132 M332 132 L342 232 Q370 250 398 232 L408 132" fill="none" stroke="#8d8d8d" stroke-width="4"/>' +
             // carton rim
             '<path d="M152 132 L418 132" stroke="#8d8d8d" stroke-width="7" stroke-linecap="round"/>' +
             // drain holes + drips
             '<g fill="#263238"><ellipse cx="200" cy="241" rx="4" ry="2.5"/><ellipse cx="285" cy="241" rx="4" ry="2.5"/><ellipse cx="370" cy="241" rx="4" ry="2.5"/></g>' +
             '<path d="M200 250 q4 7 0 11 q-4 -4 0 -11 Z M285 252 q4 7 0 11 q-4 -4 0 -11 Z M370 250 q4 7 0 11 q-4 -4 0 -11 Z" fill="#42a5f5"/>' +
             // lid under the carton
             '<rect x="146" y="270" width="278" height="24" rx="6" fill="#eceff1" stroke="#8d8d8d" stroke-width="3"/>' +
             '<path d="M156 286 L414 286" stroke="#90caf9" stroke-width="4" stroke-linecap="round"/>' +
             // labels — left
             '<g stroke="#607d8b" stroke-width="1.5"><line x1="136" y1="92" x2="184" y2="92"/><line x1="136" y1="160" x2="182" y2="160"/><line x1="136" y1="205" x2="176" y2="205"/><line x1="136" y1="246" x2="194" y2="243"/></g>' +
             '<g fill="#263238" text-anchor="end"><text x="130" y="96">Water drops</text><text x="130" y="164">Seeds</text><text x="130" y="209">Dirt</text><text x="130" y="250">Drain hole</text></g>' +
             // labels — right
             '<g stroke="#607d8b" stroke-width="1.5"><line x1="404" y1="178" x2="440" y2="178"/><line x1="424" y1="282" x2="440" y2="282"/></g>' +
             '<g fill="#263238"><text x="446" y="182">Egg carton cup</text><text x="446" y="278">Lid</text><text x="446" y="294">(catches drips)</text></g>' +
             '</svg>'
      },
      paragraphs: [
        "It was a cold, gray day in March. Leo's Aunt Rosa came over with a paper bag. In the bag were an empty egg carton, a small sack of dirt, and a pack of tomato seeds.",
        "“Spring is almost here,” Aunt Rosa said. “Let's start a garden today. We can start it right on the kitchen table.”",
        "Leo had a lot of questions. How could a tiny seed turn into a big plant? How long would it take? Did seeds need sun, like people need food?",
        "Aunt Rosa laughed. “Those are great questions,” she said. “Let's find out together.”",
        "First, they got the egg carton ready. Aunt Rosa cut off the lid with a pair of scissors while Leo held the carton still. Then Leo used a pencil to poke a small hole in the bottom of each cup. “The holes let extra water drip out,” Aunt Rosa said. “Seeds do not like mud.”",
        "Next, Leo filled each cup with dirt. He pressed the dirt down softly with his thumb. Aunt Rosa set the lid under the carton to catch the drips.",
        "Then it was time for the seeds. They were tiny, flat, and pale. Leo put exactly two seeds in each cup, not one more. He covered them with a thin layer of dirt, just like the seed pack said.",
        "Last, Leo sprinkled water over the cups. He did not pour it. He let just a few drops fall on each cup, so the seeds would not wash away.",
        "They set the carton on the sunny windowsill. Leo made a sign for it. The sign said TOMATOES, PLEASE DO NOT TOUCH.",
        "Every morning, Leo ran to the window to check. On the sixth morning, he saw tiny green sprouts poking out of the dirt. “They're growing!” he shouted. “Aunt Rosa, come and look!”"
      ]
    },

    /* ── PASSAGE 2 ─────────────────────────────────────
       Sports fiction with a flashback frame: the last free
       throw, the summer at the park with the older brother,
       back to the shot. The sibling relationship carries
       the written answer. */
    {
      id: "W-P2",
      title: "One More Shot",
      source: "Original practice passage",
      genre: "Realistic fiction",
      paragraphs: [
        "The basketball game was tied, and time had run out. But Maya got one free throw. If she made it, the Tigers would win.",
        "Maya had butterflies in her stomach as she walked to the line. Her hands were shaking. The gym was very loud. She looked up into the stands. Her big brother, Theo, was in the front row. He gave her a thumbs-up.",
        "Last summer, Theo had taken Maya to the park almost every day. The old hoop there had no net. Theo showed her how to shoot. “Bend your knees,” he said. “Keep your eyes on the hoop. Then let it go.”",
        "At first, Maya missed almost every shot. The ball bounced off the hoop and rolled into the grass. Theo ran after the ball every single time, and he never got mad. He just tossed it back and said, “One more shot.”",
        "By the end of the summer, Maya could make five shots in a row. Theo cheered so loudly that a dog in the park started barking.",
        "Now Maya stood at the line in the gym. The referee handed her the ball. She took a deep breath, and her hands stopped shaking.",
        "She bent her knees. She kept her eyes on the hoop. Then she let it go.",
        "The ball flew through the air and dropped right through the net. Swish! The Tigers had won!",
        "After the game, Maya ran to the stands and gave Theo a big hug. “One more shot,” she said, laughing. Theo grinned. “That was the best one of all,” he said."
      ]
    },

    /* ── PASSAGE 3 ─────────────────────────────────────
       Folktale. An old cook tests three young helpers with
       one carrot and one onion each; the one who shares
       wins, and a comparison carries the moral. */
    {
      id: "W-P3",
      title: "The Village Soup",
      source: "Original practice passage",
      genre: "Folktale",
      note: "A folktale is an old story that people passed down by telling it out loud. Many folktales end with a lesson, called a moral.",
      paragraphs: [
        "Long ago, in a small village by the sea, there lived an old cook named Grandmother Wren. Every winter, she made a big pot of soup for anyone who was hungry.",
        "One winter, Grandmother Wren grew too old to lift the heavy pot. “I need a helper to cook the soup,” she said. Three young people came to help. Bo was very strong. Lin was very fast. Pip was very small.",
        "Grandmother Wren gave each of them one carrot and one onion. “Bring me a pot of soup by sunset,” she said. “Then I will choose my helper.”",
        "Bo built a huge fire. He boiled his carrot and onion in a giant pot of water. But the pot was so big that the soup tasted like plain water.",
        "Lin was in such a hurry that she cooked her soup too fast. It burned black on the bottom of the pot.",
        "Pip walked home slowly with his carrot and onion. On the way, he saw an old man sitting alone in the cold. Pip gave the old man his carrot to eat. Then he sat with him until the old man's hands were warm. The old man smiled and gave Pip a handful of beans.",
        "Next, Pip met a girl whose family had very little food. He gave them half of his onion. The girl's mother gave Pip a potato. Soon, the neighbors came out with a little rice, a pinch of salt, and some greens.",
        "At sunset, Pip carried a pot of thick, hot soup to Grandmother Wren. Everyone who had helped him came along.",
        "Grandmother Wren tasted all three soups. Bo's soup was plain, and Lin's soup was burned. Pip's soup was the best she had ever tasted. Grandmother Wren was so delighted that she laughed out loud.",
        "“Pip, you will be my helper,” she said. “Your soup is like our village. One person alone does not have much. But when everyone adds a little, there is enough for all.”",
        "From then on, Pip cooked the village soup every winter. And whenever someone came to help, Pip always said, “Bring a little. We will share it all.”"
      ]
    }
  ],

  /* ══════════════════════════════════════════════════════
     ITEMS — the `p` field is the passage index (0, 1, 2).
       (no type)      4-choice multiple choice, 1 point
       type:"ebsr"    Part A + Part B, 1 point each
       type:"ms"      choose `pick` answers, 1 point, all
                      of them right or no point (SBAC rule)
       type:"hottext" click `pick` sentences, 1 point, all
                      or nothing; layout "list" or "para"
       type:"cr"      written answer — 0 auto points, sent
                      to the written tab for Mr. O to score
     Paragraph numbers in questions are 1-based, the way
     students see them.
  ══════════════════════════════════════════════════════ */
  items: [

    /* ── PASSAGE 1 · items 1–6 ── */

    // Item 1 — characterization from one paragraph
    { id: "W01", p: 0,
      q: "Read paragraph 3 from the passage. What does paragraph 3 show about Leo?",
      excerpt: [
        "Leo had a lot of questions. How could a tiny seed turn into a big plant? How long would it take? Did seeds need sun, like people need food?"
      ],
      choices: [
        "He is curious and wants to learn how plants grow.",
        "He thinks a garden is a silly idea.",
        "He is upset because it is a gray day.",
        "He wants Aunt Rosa to do all the work."
      ],
      answer: "He is curious and wants to learn how plants grow.",
      explanation: "Paragraph 3 is full of Leo's questions. He asks how a seed turns into a plant. He asks how long the seed will take to grow. He asks if seeds need sun. Asking a lot of questions shows Leo is curious. He wants to learn. Paragraph 3 does not say Leo thinks the garden is silly. Paragraph 3 does not say he is upset. Paragraph 3 does not say he wants Aunt Rosa to do the work." },

    // Item 2 — word meaning in context
    { id: "W02", p: 0,
      q: "Read these sentences from the passage. “Last, Leo sprinkled water over the cups. He did not pour it.” Then he lets “just a few drops” fall on each cup. What does the word sprinkled mean?",
      choices: [
        "poured out a lot at one time",
        "dropped a little here and there",
        "dug a small hole",
        "wiped until dry"
      ],
      answer: "dropped a little here and there",
      explanation: "Paragraph 8 gives the clues. Leo did not pour the water. He let just a few drops fall on each cup. So sprinkled means he dropped a little water here and there. Pouring a lot at one time is the opposite." },

    // Item 3 — purpose of the picture
    { id: "W03", p: 0, showFigure: true,
      q: "Look at the picture from the passage. Why does the author include this picture?",
      choices: [
        "to show how the parts of the egg carton garden fit together",
        "to show what the tomato plants will look like in the summer",
        "to show the sign that Leo made",
        "to explain why seeds need sun"
      ],
      answer: "to show how the parts of the egg carton garden fit together",
      explanation: "The picture labels the cups, the dirt and the seeds. The picture labels the drain holes, the lid and the water drops. All the parts are in one place. So the picture helps you see how the parts fit together. The picture does not show big tomato plants. The picture does not show Leo's sign. The picture shows nothing about sun." },

    // Item 4 — EBSR: conclusion + supporting sentence
    { id: "W04", p: 0, type: "ebsr",
      partA: {
        q: "Part A — What conclusion can be drawn about Aunt Rosa from the way she answers Leo's questions?",
        choices: [
          "She likes helping Leo learn new things.",
          "She thinks Leo asks too many questions.",
          "She does not like to eat tomatoes.",
          "She wants to plant the garden by herself."
        ],
        answer: "She likes helping Leo learn new things.",
        explanation: "In paragraph 3, Leo asks a lot of questions. In paragraph 4, Aunt Rosa laughs. “Those are great questions,” she says. Then she says, “Let's find out together.” She is happy to help Leo learn. She calls his questions great. So she does not think Leo asks too many. The story does not say Aunt Rosa does not like tomatoes. Leo does most of the planting." },
      partB: {
        q: "Part B — Which sentence from the passage BEST supports the answer in Part A?",
        longChoices: true,
        choices: [
          "It was a cold, gray day in March.",
          "“Those are great questions,” she said. “Let's find out together.”",
          "Aunt Rosa set the lid under the carton to catch the drips.",
          "Every morning, Leo ran to the window to check."
        ],
        answer: "“Those are great questions,” she said. “Let's find out together.”",
        explanation: "The right sentence shows how Aunt Rosa answers Leo's questions. She says the questions are great. She says they will find out together. So she likes to help Leo learn. Setting the lid under the carton is a job. The job is not an answer to his questions. One wrong sentence tells about the weather. One wrong sentence tells how Leo checks the seeds." } },

    // Item 5 — main idea of re-shown paragraphs
    { id: "W05", p: 0,
      q: "Read paragraphs 5 and 6 from the passage again. What is the main idea of these paragraphs?",
      excerpt: [
        "First, they got the egg carton ready. Aunt Rosa cut off the lid with a pair of scissors while Leo held the carton still. Then Leo used a pencil to poke a small hole in the bottom of each cup. “The holes let extra water drip out,” Aunt Rosa said. “Seeds do not like mud.”",
        "Next, Leo filled each cup with dirt. He pressed the dirt down softly with his thumb. Aunt Rosa set the lid under the carton to catch the drips."
      ],
      choices: [
        "Aunt Rosa explains why seeds do not like mud.",
        "Leo learns how to cut with scissors.",
        "Leo and Aunt Rosa get the egg carton ready for the seeds.",
        "Leo and Aunt Rosa see the first green sprouts."
      ],
      answer: "Leo and Aunt Rosa get the egg carton ready for the seeds.",
      explanation: "Paragraphs 5 and 6 tell the first jobs. The first job is cutting off the lid. The next job is poking holes. The third job is filling the cups with dirt. All of these jobs get the carton ready for the seeds. The mud is one small detail. Aunt Rosa does the cutting, not Leo. The sprouts come later, in paragraph 10." },

    // Item 6 — hot text: click 2 sentences from a list
    { id: "W06", p: 0, type: "hottext", layout: "list", pick: 2,
      q: "The passage shows that Leo is CAREFUL when he plants the seeds. Click on the TWO sentences from the passage that BEST support this idea.",
      choices: [
        "Leo's Aunt Rosa came over with a paper bag.",
        "Next, Leo filled each cup with dirt.",
        "Leo put exactly two seeds in each cup, not one more.",
        "He covered them with a thin layer of dirt, just like the seed pack said.",
        "They set the carton on the sunny windowsill.",
        "“They're growing!” he shouted."
      ],
      answers: [
        "Leo put exactly two seeds in each cup, not one more.",
        "He covered them with a thin layer of dirt, just like the seed pack said."
      ],
      explanation: "Paragraph 7 shows Leo is careful. He puts exactly two seeds in each cup, not one more. He covers the seeds with a thin layer of dirt. He does just what the seed pack said. The wrong choices tell about the bag and the dirt. The wrong choices tell about the windowsill and the sprouts too. The wrong choices do not show Leo being careful." },

    /* ── PASSAGE 2 · items 7–11 ── */

    // Item 7 — summary with a missing key event
    { id: "W07", p: 1,
      q: "Read this summary of the passage. Which KEY event is MISSING from the summary?",
      excerptLabel: "📝 A summary of “One More Shot”",
      excerpt: [
        "The basketball game is tied, and Maya gets one free throw that could win it. She sees her big brother, Theo, in the stands. She remembers how Theo taught her to shoot at the park last summer and never gave up on her. After the game, Maya runs to the stands and hugs Theo."
      ],
      choices: [
        "Theo teaches Maya how to shoot at the park.",
        "Maya makes the free throw, and the Tigers win the game.",
        "A dog in the park starts barking.",
        "The referee hands Maya the ball."
      ],
      answer: "Maya makes the free throw, and the Tigers win the game.",
      explanation: "The summary jumps from the free throw to the hug. The summary does not tell what happened when Maya shot. The key event is left out. Maya makes the shot. The Tigers win (paragraph 8). Theo's teaching is in the summary. The dog is a small detail. The referee is a small detail too." },

    // Item 8 — evidence for a conclusion
    { id: "W08", p: 1, longChoices: true,
      q: "Which detail from the passage BEST shows that Theo was PATIENT while he was teaching Maya?",
      choices: [
        "Her big brother, Theo, was in the front row.",
        "Theo ran after the ball every single time, and he never got mad.",
        "Theo cheered so loudly that a dog in the park started barking.",
        "After the game, Maya ran to the stands and gave Theo a big hug."
      ],
      answer: "Theo ran after the ball every single time, and he never got mad.",
      explanation: "Being patient means you keep going. You do not get upset when things are slow. In paragraph 4, Maya misses almost every shot. Theo still chases the ball each time. He never gets mad. One wrong detail tells where Theo sat. One wrong detail tells how he cheered. One wrong detail is the hug after the game." },

    // Item 9 — EBSR: character trait + support
    { id: "W09", p: 1, type: "ebsr",
      partA: {
        q: "Part A — Which word BEST describes Maya when she takes the last shot?",
        choices: [
          "bored",
          "calm",
          "angry",
          "careless"
        ],
        answer: "calm",
        explanation: "Calm means quiet and steady, not upset. Right before the shot, Maya takes a deep breath. Then her hands stop shaking (paragraph 6). Her hands were shaking when she walked to the line (paragraph 2). So Maya's hands show a change. Nothing shows Maya is bored or angry. Maya is not careless. She does every step Theo taught her." },
      partB: {
        q: "Part B — Which sentence from the passage BEST supports the answer in Part A?",
        longChoices: true,
        choices: [
          "Maya had butterflies in her stomach as she walked to the line.",
          "He gave her a thumbs-up.",
          "She took a deep breath, and her hands stopped shaking.",
          "The Tigers had won!"
        ],
        answer: "She took a deep breath, and her hands stopped shaking.",
        explanation: "Maya takes a deep breath. Then her hands stop shaking. Her hands show Maya is calm when she shoots. The butterflies come earlier, when Maya was still nervous. The thumbs-up is from Theo. The win comes after the shot." } },

    // Item 10 — choose TWO: idiom with a literal-reading trap
    { id: "W10", p: 1, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “Maya had butterflies in her stomach as she walked to the line.” What does the phrase “had butterflies in her stomach” suggest about Maya? Choose TWO answers.",
      choices: [
        "She felt nervous.",
        "Real butterflies were flying inside her.",
        "She was worried she might miss.",
        "She was hungry for a snack.",
        "She was sure the shot would go in."
      ],
      answers: [
        "She felt nervous.",
        "She was worried she might miss."
      ],
      explanation: "The phrase “had butterflies in her stomach” is an idiom. The idiom does not mean real butterflies. The idiom means your stomach feels jumpy. You feel jumpy because you are nervous or worried. Maya is about to take the shot. The shot could win the game. So she is nervous. She is worried she might miss. Maya is not hungry. She is not sure the shot will go in." },

    // Item 11 — written response
    { id: "W11", p: 1, type: "cr",
      q: "What can you infer about the relationship between Maya and her brother Theo? Use details from the passage to support your answer.",
      guidance: "Tell what kind of relationship they have. Then give at least TWO details from the story that prove it, and explain how each one shows it.",
      model: "Maya and Theo are close, and Theo cares about helping Maya. Last summer, Theo took Maya to the park almost every day to teach her how to shoot. When she missed, he never got mad and said, “One more shot.” That shows he believed in her. At the game, he sat in the front row and gave her a thumbs-up, which shows he wanted her to do well. After the game, Maya ran to the stands to hug him, which shows she wanted to share the win with him. They care about each other.",
      checklist: [
        "I said what their relationship is like — not just that they are brother and sister.",
        "I used at least TWO details from the story.",
        "I explained how each detail shows the relationship."
      ] },

    /* ── PASSAGE 3 · items 12–15 ── */

    // Item 12 — choose TWO synonyms
    { id: "W12", p: 2, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “Grandmother Wren was so delighted that she laughed out loud.” Which TWO words mean about the same as delighted? Choose TWO answers.",
      choices: [
        "angry",
        "happy",
        "sleepy",
        "pleased",
        "scared",
        "hungry"
      ],
      answers: [
        "happy",
        "pleased"
      ],
      explanation: "The clues are in paragraph 9. Pip's soup is the best soup Grandmother Wren has ever tasted. She laughs out loud. So delighted means very happy and pleased. No clue shows she is angry or sleepy. No clue shows she is scared or hungry." },

    // Item 13 — summary of a bounded section
    { id: "W13", p: 2,
      q: "Which statement BEST summarizes the LAST THREE paragraphs of the passage?",
      choices: [
        "Pip gives his carrot to an old man in the cold.",
        "Pip becomes Grandmother Wren's helper.",
        "Grandmother Wren chooses Pip because he can cook faster than anyone else.",
        "Grandmother Wren loves Pip's soup. She picks him as her helper because sharing makes enough for all. Pip shares soup every winter after that."
      ],
      answer: "Grandmother Wren loves Pip's soup. She picks him as her helper because sharing makes enough for all. Pip shares soup every winter after that.",
      explanation: "A good summary of a section covers each paragraph. A good summary uses a few words. Look at the last three paragraphs. Grandmother Wren tastes the soups. She picks Pip and tells the lesson. Then Pip cooks each winter. Pip becoming her helper is just one part. Pip gives his carrot away before the section. Grandmother Wren chose Pip for sharing. She did not pick him for being fast. Lin was the fast one." },

    // Item 14 — choose THREE: what a comparison shows
    { id: "W14", p: 2, type: "ms", pick: 3,
      q: "Read these sentences from the passage. “Your soup is like our village. One person alone does not have much. But when everyone adds a little, there is enough for all.” What does this comparison show about what Grandmother Wren believes? Choose THREE answers.",
      choices: [
        "Sharing helps everyone have enough.",
        "Every house in the village should grow carrots.",
        "People can do more together than alone.",
        "The village needs a bigger soup pot.",
        "Everyone has a little something they can give.",
        "Pip is the strongest person in the village."
      ],
      answers: [
        "Sharing helps everyone have enough.",
        "People can do more together than alone.",
        "Everyone has a little something they can give."
      ],
      explanation: "Grandmother Wren compares the soup to the village. She says one person alone does not have much. But what if everyone adds a little? Then there is enough for all. So she believes sharing helps all. She thinks people can do more together. She thinks everyone can give a little. The wrong choices act like the words are just about real soup and pots. Bo was the strong one, not Pip." },

    // Item 15 — hot text: click 2 sentences inside a re-shown paragraph
    { id: "W15", p: 2, type: "hottext", layout: "para", pick: 2,
      q: "Read paragraph 6 from the passage. The passage shows that Pip is KIND. Click on the TWO sentences in the paragraph that BEST support this idea.",
      choices: [
        "Pip walked home slowly with his carrot and onion.",
        "On the way, he saw an old man sitting alone in the cold.",
        "Pip gave the old man his carrot to eat.",
        "Then he sat with him until the old man's hands were warm.",
        "The old man smiled and gave Pip a handful of beans."
      ],
      answers: [
        "Pip gave the old man his carrot to eat.",
        "Then he sat with him until the old man's hands were warm."
      ],
      explanation: "Being kind means helping someone. Being kind means caring how someone feels. Pip gives the old man his carrot. Then Pip sits with the old man until the old man's hands are warm. The old man gives Pip beans. The old man is kind too. But the beans come from the old man, not Pip. The other sentences only tell where Pip was going and what he saw." }

  ]
};
