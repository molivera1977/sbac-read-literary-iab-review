/* ═══════════════════════════════════════════════════════
   SBAC IAB REVIEW · Read Literary Texts
   FORM A — 3 passages, 15 items, 16 scored points
            (+ 1 written answer Mr. O scores himself)

   Built to the CT IAB blueprint for Read Literary Texts
   (grade 4):
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
window.FORM_A = {

  passages: [

    /* ── PASSAGE 1 ─────────────────────────────────────
       Realistic fiction that teaches a process. A school
       idea comes home, the family builds it step by step,
       and a picture shows how the parts fit together. */
    {
      id: "A-P1",
      title: "Mateo's Worm Bin",
      source: "Original practice passage",
      genre: "Realistic fiction",
      figure: {
        after: 11,
        caption: "A worm bin like the one Mateo and Abuela built",
        alt: "A cutaway drawing of a worm bin. A top bin with a lid and a row of air holes holds damp newspaper strips, worms and food scraps. It rests on two wooden blocks inside a second bin, the catch tray, which catches water that drips out of the drainage holes.",
        svg: '<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif" font-size="14">' +
             '<rect width="600" height="340" rx="12" fill="#fffdf6"/>' +
             // catch tray (second bin)
             '<path d="M165 196 L435 196 L425 306 L175 306 Z" fill="#e3f2fd" stroke="#455a64" stroke-width="4"/>' +
             // wooden blocks
             '<rect x="208" y="262" width="34" height="42" fill="#bc8f5a" stroke="#6d4c2f" stroke-width="2"/>' +
             '<rect x="358" y="262" width="34" height="42" fill="#bc8f5a" stroke="#6d4c2f" stroke-width="2"/>' +
             // drips
             '<path d="M255 268 q4 8 0 12 q-4 -4 0 -12 Z M300 276 q4 8 0 12 q-4 -4 0 -12 Z M345 266 q4 8 0 12 q-4 -4 0 -12 Z" fill="#42a5f5"/>' +
             // top bin
             '<path d="M180 64 L420 64 L410 260 L190 260 Z" fill="#eceff1" stroke="#263238" stroke-width="4"/>' +
             // lid
             '<rect x="168" y="46" width="264" height="16" rx="5" fill="#37474f"/>' +
             // air holes
             '<g fill="#fffdf6" stroke="#263238" stroke-width="1.5"><circle cx="205" cy="80" r="4"/><circle cx="235" cy="80" r="4"/><circle cx="265" cy="80" r="4"/><circle cx="295" cy="80" r="4"/><circle cx="325" cy="80" r="4"/><circle cx="355" cy="80" r="4"/><circle cx="385" cy="80" r="4"/></g>' +
             // bedding
             '<path d="M187 118 L413 118 L408 256 L192 256 Z" fill="#d7ccc8"/>' +
             '<g stroke="#a1887f" stroke-width="2" fill="none"><path d="M196 136 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0"/><path d="M196 170 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0"/><path d="M196 204 q20 -8 40 0 t40 0 t40 0 t40 0 t40 0"/><path d="M198 238 q20 -8 40 0 t40 0 t40 0 t40 0 t36 0"/></g>' +
             // food scraps (corner)
             '<g><ellipse cx="372" cy="150" rx="18" ry="8" fill="#ff9800"/><rect x="350" y="160" width="26" height="9" rx="4" fill="#f57c00"/><circle cx="388" cy="168" r="7" fill="#8d6e63"/><ellipse cx="362" cy="178" rx="12" ry="5" fill="#7cb342"/></g>' +
             // worms
             '<g stroke="#e57373" stroke-width="5" stroke-linecap="round" fill="none"><path d="M220 150 q10 -10 20 0 t20 0"/><path d="M280 190 q10 10 20 0 t20 0"/><path d="M230 226 q8 -9 16 0 t16 0"/><path d="M320 150 q8 9 16 0"/></g>' +
             // drainage holes
             '<g fill="#fffdf6" stroke="#263238" stroke-width="1.5"><circle cx="250" cy="259" r="3.5"/><circle cx="300" cy="259" r="3.5"/><circle cx="350" cy="259" r="3.5"/></g>' +
             // labels — left
             '<g fill="#263238" stroke="#607d8b" stroke-width="1.5">' +
               '<line x1="128" y1="54" x2="168" y2="54"/><line x1="128" y1="86" x2="200" y2="81"/><line x1="128" y1="134" x2="200" y2="138"/><line x1="128" y1="196" x2="280" y2="192"/>' +
             '</g>' +
             '<g fill="#263238" text-anchor="end"><text x="122" y="58">Lid</text><text x="122" y="90">Air holes</text><text x="122" y="132">Damp newspaper</text><text x="122" y="148">bedding</text><text x="122" y="200">Worms</text></g>' +
             // labels — right
             '<g stroke="#607d8b" stroke-width="1.5"><line x1="394" y1="156" x2="470" y2="150"/><line x1="354" y1="262" x2="470" y2="236"/><line x1="392" y1="282" x2="470" y2="278"/><line x1="428" y1="300" x2="470" y2="318"/></g>' +
             '<g fill="#263238"><text x="476" y="146">Food scraps</text><text x="476" y="162">(in one corner)</text><text x="476" y="240">Drainage holes</text><text x="476" y="282">Wooden block</text><text x="476" y="322">Catch tray</text></g>' +
             '</svg>'
      },
      paragraphs: [
        "On Tuesday, Ms. Rivera showed Mateo's class a video about where garbage goes. Most of it, it turned out, rides in a truck to a giant hill outside of town and just sits there for years and years. Ms. Rivera said that almost a third of what a family throws away is food scraps: banana peels, apple cores, coffee grounds, the ends of carrots.",
        "“Those don't belong in the trash at all,” she said. “Worms can eat them and turn them into rich, dark soil. It's called composting, and you can do it in a box at home.”",
        "Mateo did not hear one more word that afternoon. He drew boxes in the margins of his math worksheet, and then he drew worms in the boxes. When the bell rang, he was the first one out the door, and he ran all six blocks home with his backpack bouncing, practicing what he was going to say.",
        "“Abuela,” he called, before the door had even closed behind him, “how do you feel about worms?”",
        "His grandmother looked up from the cutting board, where a pile of carrot peels and squash ends sat waiting for the trash can. “Outside,” she said, “I feel fine about worms. Inside, I feel less fine.”",
        "Mateo explained everything — the truck, the giant hill, the food scraps, the rich, dark soil. He reminded her about the tomato plants on the balcony, which never grew more than a handful of small, sour tomatoes. “Worm soil could fix them,” he said. “Ms. Rivera says it's like vitamins for plants.”",
        "Abuela set down her knife. She looked at the carrot peels for a long moment. “When I was a girl in Puebla, my father kept a pile like that behind our house,” she said slowly. “Peels, eggshells, coffee. In our family, we never wasted a single thing.” Then she wiped her hands on a towel. “Saturday. We go to the hardware store together, and you do the reading.”",
        "On Saturday they bought two dark plastic storage bins with lids, the kind people use to store winter sweaters, and two short blocks of wood. Mateo read from the notes he had copied in class. “The bins have to be dark,” he read, “because worms do not like light.”",
        "Back at the apartment, Abuela held the first bin steady while Mateo drilled a row of small holes around the top edge. Then they flipped it over, and he drilled more holes in the bottom. “Air goes in through the top,” he explained, “and extra water drips out the bottom.”",
        "Next, they set the two blocks of wood inside the second bin and rested the drilled bin on top of them, so there was a gap between the two bottoms. “That's the catch tray,” Mateo said. “Whatever drips out lands in there instead of on the floor.”",
        "Then came the bedding. Mateo tore old newspapers into long strips, and Abuela sprinkled the strips with a spray bottle until they felt like a sponge that had been squeezed out. They fluffed the strips into the top bin and added two handfuls of dirt from the balcony pots.",
        "The worms came last. They had been mailed from a worm farm, and they arrived in a cloth bag that wiggled when Mateo picked it up. He set them gently on top of the bedding and left the lid off with the kitchen light on. One by one, the worms burrowed down into the damp newspaper until not a single one could be seen.",
        "“See?” Mateo said. “They really don't like light.”",
        "Abuela leaned over the bin for a long time without saying anything. Then she went to the cutting board, came back with the carrot peels, and buried them in one corner under the newspaper, just the way Mateo's notes said to.",
        "“Not too much at first,” Mateo warned. “They have to get used to their new home.”",
        "“I know, I know,” said Abuela. “Who do you think taught you to read the directions?” But she was smiling when she put on the lid.",
        "Out on the balcony, the tomato plants waited in their pots, as small and sour as ever. Mateo pressed his face against the glass door. “Two months,” he told them. “Maybe three.” He was almost sure they were listening."
      ]
    },

    /* ── PASSAGE 2 ─────────────────────────────────────
       Sports fiction with a flashback frame: the race,
       the backstory with the older brother, back to the
       finish. The sibling relationship carries the
       written answer. */
    {
      id: "A-P2",
      title: "Anchor Leg",
      source: "Original practice passage",
      genre: "Realistic fiction",
      paragraphs: [
        "The stadium lights at Harmon Field came on while the boys' relays were still running, and by the time the girls lined up for the city championship, the sky above the bleachers had turned dark purple. Nia Brooks stood in the last exchange zone and shook out her hands, one and then the other, the way she always did.",
        "She was the anchor. Her teammates Keisha, Rosa, and Danielle would run the first three legs of the relay, one hundred meters each, and then the baton would come to her. Whatever place the Eastside Eagles were in when it reached her hand, that was the place she had to fix.",
        "Across the track, her mother stood at the fence holding her phone up high, recording everything. Nia knew exactly who the video was for.",
        "Two summers ago, before he moved to Atlanta, her brother Andre had trained her himself. Every morning at six, he walked her to the empty track behind the middle school and made her practice handoffs until her arms ached. He was nineteen and had never run a race in his life, but he had watched about a thousand of them on TV, and he talked through every practice like a sports announcer.",
        "“And Brooks takes the baton,” he would say into a hairbrush as she sprinted past him. “She's flying, folks! Nobody has seen speed like this since the invention of the cheetah!”",
        "“Cheetahs weren't invented,” Nia told him once, out of breath.",
        "“Don't interrupt the broadcast,” said Andre.",
        "Being a real announcer was his dream. He called her races, their cousins' basketball games, and once, when nothing else was happening, a pigeon trying to land on a power line. Then last spring a radio station in Atlanta hired him to answer phones and carry coffee. It was not announcing, but Mom said he had finally gotten his foot in the door. Andre said that if he carried enough coffee, someday they would let him near a microphone.",
        "He couldn't come home for the championship. “Text me the second it's over,” he had said on the phone the night before. “Not after you cool down. Not after you get a snack. The SECOND.”",
        "The starter's gun cracked, and Nia snapped back to Harmon Field.",
        "Keisha got out fast. Rosa held their spot around the curve. But on the third leg, Danielle got bumped by a runner from Westside and stumbled, and by the time she came pounding toward Nia's zone, the Eagles were in third place, two long steps behind the leaders.",
        "Nia started running before Danielle reached her, just the way Andre had taught her. She stretched her hand back without turning her head. “Stick!” Danielle shouted, and the baton slapped into Nia's palm.",
        "When the baton hits your hand, you don't look back. That was the first rule Andre had ever given her. Looking back is how you lose a step.",
        "Nia did not look back. She caught the Southside runner halfway down the straightaway. The Westside girl was still ahead. Fifteen meters left. Ten. Nia's legs were burning, but she pushed harder, because somewhere in her head a voice that sounded a lot like a hairbrush was yelling, She's flying, folks! Nia leaned at the line, and the two runners crossed it so close together that nobody in the bleachers knew who had won.",
        "Then the scoreboard flashed: EASTSIDE — 1.",
        "Keisha and Rosa and Danielle crashed into Nia all at once, and the four of them fell into a pile on the grass. When Nia finally pulled herself free, the first thing she did was run to the fence. Her mother was already holding out the phone.",
        "Nia typed with shaking thumbs: WE WON. I DIDN'T LOOK BACK.",
        "The answer came less than a minute later. It was a voice message, and it was Andre, shouting so loudly that the phone buzzed. “And BROOKS takes it at the line! Ladies and gentlemen, I have never seen anything like it — and I have seen a pigeon land on a power line!”",
        "Nia laughed so hard she had to sit down. Somewhere in Atlanta, she thought, there was a radio station that had no idea what it was missing."
      ]
    },

    /* ── PASSAGE 3 ─────────────────────────────────────
       Folktale. An elder tests three young people, the
       quiet one wins, and a simile carries the moral. */
    {
      id: "A-P3",
      title: "The Keeper of the Spring",
      source: "Original practice passage",
      genre: "Folktale",
      note: "A folktale is a story that people have told and retold for a very long time. Many folktales teach a lesson.",
      paragraphs: [
        "Long ago, in a village at the bottom of a mountain, there lived an old woman named Ama who was the keeper of the spring. Every morning for fifty years, she had climbed the mountain path to the place where the water came bubbling out of the rocks. She cleared away the fallen leaves, she checked that the water ran clean, and then she followed the stream all the way back down to the village. Because of Ama, no one in the village had ever gone thirsty.",
        "But Ama's knees had grown stiff, and the path seemed to get a little steeper every year. She knew the time had come to choose the next keeper. She also knew that this choice mattered more than anything else she had done in fifty years, and she did not want to make it in a hurry. For a whole season, she quietly watched the young people of the village at their work and at their play. At last she chose three of them: Tomas, who was the strongest; Lina, who was the cleverest; and Ren, who was so quiet that most people forgot he was there.",
        "“Tomorrow at sunrise, each of you will go up to the spring,” Ama told them. “Then come back and tell me what you saw.”",
        "Tomas ran the whole way up the mountain. He was back before the sun had cleared the trees, and he was hardly out of breath. “The spring is running,” he said proudly. “And I made it to the top faster than anyone in the village ever has.”",
        "Lina came back an hour later with a notebook full of numbers. “There are one thousand, two hundred and twelve steps to the top,” she said. “The water comes out of the rock at about one full bucket every ten breaths. I measured it three times.”",
        "Ren did not come back until almost noon. His sleeves were wet to the elbows, and there was mud on both of his knees.",
        "“The spring is fine,” he said. “But halfway down the mountain, a big branch has fallen across the stream. The water is piling up behind it and spilling out onto the path. If it stays there, the houses at the bottom of the village will run low on water by next week.” He looked down at his muddy knees. “I couldn't move the branch by myself, so I dug a little ditch around it. The water is running again, for now. But it needs more than one person.”",
        "Ama was quiet for a long time. Then she said, “Ren will be the next keeper of the spring.”",
        "Tomas and Lina were astonished. They looked at each other, then at Ren, then at Ama, as if one of them must have heard wrong. “But I was the fastest,” said Tomas. “And I was the most careful,” said Lina. “I counted every step.”",
        "“You were both very good at reaching the spring,” said Ama. “But the spring is not where the people live. A village is like a stream. When one stone blocks it at the top, every house at the bottom goes thirsty. The keeper must care for the whole stream, from the first drop to the last house.”",
        "The next morning, Tomas used his strong arms to lift the branch out of the water, and Lina used her clever mind to plan a low stone wall so that falling branches would never block the stream again. Ren walked beside them the whole way, watching the water.",
        "And it is said that, to this day, the keepers of that village do not stop when they reach the spring. Every morning they walk the whole stream, from the top of the mountain to the very last house."
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
    { id: "A01", p: 0,
      q: "Read paragraph 3 from the passage. What does paragraph 3 show about Mateo?",
      excerpt: [
        "Mateo did not hear one more word that afternoon. He drew boxes in the margins of his math worksheet, and then he drew worms in the boxes. When the bell rang, he was the first one out the door, and he ran all six blocks home with his backpack bouncing, practicing what he was going to say."
      ],
      choices: [
        "He is eager to try out the idea he learned in class.",
        "He is worried that he did not finish his math worksheet.",
        "He would rather draw pictures than do his schoolwork.",
        "He is in a hurry because he is late getting home."
      ],
      answer: "He is eager to try out the idea he learned in class.",
      explanation: "Everything in the paragraph comes from the worm idea: he stops listening, he draws worms in boxes, he runs home first, and he practices what he will say. That is what being eager looks like. Nothing says he is late, and the drawing is about the idea, not about skipping work." },

    // Item 2 — word meaning in context
    { id: "A02", p: 0,
      q: "Read this sentence from the passage. “One by one, the worms burrowed down into the damp newspaper until not a single one could be seen.” What does the word burrowed mean in this sentence?",
      choices: [
        "dug their way in",
        "went to sleep",
        "climbed out",
        "rolled into balls"
      ],
      answer: "dug their way in",
      explanation: "The clues are “down into the damp newspaper” and “not a single one could be seen.” The worms went down into the bedding and disappeared, so burrowed means dug their way in. Climbing out would leave them in plain sight." },

    // Item 3 — purpose of the picture
    { id: "A03", p: 0, showFigure: true,
      q: "Look at the picture from the passage. Why does the author include this picture?",
      choices: [
        "to show how the parts of the worm bin fit together",
        "to show how many worms Mateo ordered from the farm",
        "to explain why worms do not like light",
        "to show what the tomato plants will look like with worm soil"
      ],
      answer: "to show how the parts of the worm bin fit together",
      explanation: "The picture labels the lid, the air holes, the bedding, the drainage holes, the wooden blocks and the catch tray, and shows one bin sitting inside the other. Those parts are hard to picture from words alone. It does not count worms, show tomatoes, or explain anything about light." },

    // Item 4 — EBSR: conclusion + supporting sentence
    { id: "A04", p: 0, type: "ebsr",
      partA: {
        q: "Part A — What conclusion can be drawn about why Abuela agrees to build the worm bin?",
        choices: [
          "It reminds her of the way her own family made sure nothing went to waste.",
          "She wants Mateo to earn a good grade from Ms. Rivera.",
          "She is tired of carrying the trash down to the street.",
          "She has always wanted to keep worms as pets."
        ],
        answer: "It reminds her of the way her own family made sure nothing went to waste.",
        explanation: "Abuela starts out unsure (“Inside, I feel less fine”). She changes her mind right after she remembers her father's pile in Puebla. The story never mentions a grade, the trash, or wanting pets." },
      partB: {
        q: "Part B — Which sentence from the passage BEST supports the answer in Part A?",
        longChoices: true,
        choices: [
          "“In our family, we never wasted a single thing.”",
          "“Outside,” she said, “I feel fine about worms. Inside, I feel less fine.”",
          "“Not too much at first,” Mateo warned.",
          "On Saturday they bought two dark plastic storage bins with lids, the kind people use to store winter sweaters, and two short blocks of wood."
        ],
        answer: "“In our family, we never wasted a single thing.”",
        explanation: "Abuela says this just before she agrees to go to the hardware store, so it shows why she says yes. The “less fine” line shows how she felt before she changed her mind, and the other two choices happen after she has already agreed." } },

    // Item 5 — main idea of re-shown building paragraphs
    { id: "A05", p: 0,
      q: "Read paragraphs 9 and 10 from the passage again. What is the main idea of these paragraphs?",
      excerpt: [
        "Back at the apartment, Abuela held the first bin steady while Mateo drilled a row of small holes around the top edge. Then they flipped it over, and he drilled more holes in the bottom. “Air goes in through the top,” he explained, “and extra water drips out the bottom.”",
        "Next, they set the two blocks of wood inside the second bin and rested the drilled bin on top of them, so there was a gap between the two bottoms. “That's the catch tray,” Mateo said. “Whatever drips out lands in there instead of on the floor.”"
      ],
      choices: [
        "Mateo and Abuela begin to build the worm bin.",
        "Mateo explains why worms need air.",
        "Abuela learns how to use a drill.",
        "The worms arrive from the worm farm."
      ],
      answer: "Mateo and Abuela begin to build the worm bin.",
      explanation: "Both paragraphs are about the first building steps: drilling the holes and setting one bin inside the other. Air is one small detail inside paragraph 9, Abuela never uses the drill, and the worms do not arrive until later." },

    // Item 6 — hot text: click 2 sentences from a list
    { id: "A06", p: 0, type: "hottext", layout: "list", pick: 2,
      q: "The passage shows that Mateo and Abuela work TOGETHER. Click on the TWO sentences from the passage that BEST support this idea.",
      choices: [
        "Mateo did not hear one more word that afternoon.",
        "He reminded her about the tomato plants on the balcony, which never grew more than a handful of small, sour tomatoes.",
        "“Saturday. We go to the hardware store together, and you do the reading.”",
        "Back at the apartment, Abuela held the first bin steady while Mateo drilled a row of small holes around the top edge.",
        "He set them gently on top of the bedding and left the lid off with the kitchen light on.",
        "Out on the balcony, the tomato plants waited in their pots, as small and sour as ever."
      ],
      answers: [
        "“Saturday. We go to the hardware store together, and you do the reading.”",
        "Back at the apartment, Abuela held the first bin steady while Mateo drilled a row of small holes around the top edge."
      ],
      explanation: "In the first sentence Abuela plans the trip so they go together and each has a job — he does the reading. In the second, both of them work on the same bin at the same moment. The other sentences show only one person, or no one, doing something." },

    /* ── PASSAGE 2 · items 7–11 ── */

    // Item 7 — summary with a missing key event
    { id: "A07", p: 1,
      q: "Read this summary of the passage. Which KEY event is MISSING from the summary?",
      excerptLabel: "📝 A summary of “Anchor Leg”",
      excerpt: [
        "Nia is the anchor runner for the Eastside Eagles at the city relay championship. While she waits for the baton, she remembers how her brother Andre trained her on the school track and called her practices like a sports announcer. On the third leg of the race, Danielle stumbles, and Nia gets the baton in third place. After the race, Nia texts Andre, and he answers with a funny voice message."
      ],
      choices: [
        "Nia passes the other runners and wins the race at the finish line.",
        "Nia's mother records the race on her phone.",
        "Danielle gets bumped and falls behind.",
        "Nia's teammates pile on top of her on the grass."
      ],
      answer: "Nia passes the other runners and wins the race at the finish line.",
      explanation: "A summary has to include the events the story depends on. The summary jumps from Nia getting the baton in third place straight to the text message, so it never says she won — the biggest event of all. Danielle's stumble is already in the summary, and the phone video and the pile on the grass are small details." },

    // Item 8 — evidence for a conclusion
    { id: "A08", p: 1, longChoices: true,
      q: "Which detail from the passage BEST shows that Andre cares a lot about how Nia's race turns out?",
      choices: [
        "“Text me the second it's over,” he had said on the phone the night before. “Not after you cool down. Not after you get a snack. The SECOND.”",
        "Then last spring a radio station in Atlanta hired him to answer phones and carry coffee.",
        "Andre said that if he carried enough coffee, someday they would let him near a microphone.",
        "“Don't interrupt the broadcast,” said Andre."
      ],
      answer: "“Text me the second it's over,” he had said on the phone the night before. “Not after you cool down. Not after you get a snack. The SECOND.”",
      explanation: "Andre cannot be there, so he makes Nia promise to tell him the very second the race ends — he even says it three ways. That is someone who cares a lot about how it turns out. The other choices are about his own life or his jokes, not about this race." },

    // Item 9 — EBSR: character trait + support
    { id: "A09", p: 1, type: "ebsr",
      partA: {
        q: "Part A — Which word BEST describes Nia during the race?",
        choices: [
          "determined",
          "unsure",
          "boastful",
          "careless"
        ],
        answer: "determined",
        explanation: "Determined means you keep pushing toward a goal even when it is hard. Nia starts in third place, her legs are burning, and she pushes harder anyway. She never brags and she follows Andre's rules exactly, so boastful and careless do not fit." },
      partB: {
        q: "Part B — Which sentence from the passage BEST supports the answer in Part A?",
        longChoices: true,
        choices: [
          "Nia's legs were burning, but she pushed harder, because somewhere in her head a voice that sounded a lot like a hairbrush was yelling, She's flying, folks!",
          "Nia Brooks stood in the last exchange zone and shook out her hands, one and then the other, the way she always did.",
          "Across the track, her mother stood at the fence holding her phone up high, recording everything.",
          "Nia laughed so hard she had to sit down."
        ],
        answer: "Nia's legs were burning, but she pushed harder, because somewhere in her head a voice that sounded a lot like a hairbrush was yelling, She's flying, folks!",
        explanation: "“Her legs were burning, but she pushed harder” is determination in action — it is hard, and she keeps going. Shaking out her hands is a habit before the race, and the other two happen off the track." } },

    // Item 10 — choose TWO: idiom with a literal-reading trap
    { id: "A10", p: 1, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “It was not announcing, but Mom said he had finally gotten his foot in the door.” What does the phrase “gotten his foot in the door” suggest about Andre? Choose TWO answers.",
      choices: [
        "He has a first chance to work at a place where he wants to be.",
        "His job could lead to the work he really wants someday.",
        "He hurt his foot on a door at the radio station.",
        "He stands by the front door so he can answer the phones.",
        "He is already announcing games on the radio."
      ],
      answers: [
        "He has a first chance to work at a place where he wants to be.",
        "His job could lead to the work he really wants someday."
      ],
      explanation: "“Getting your foot in the door” is an idiom — it does not mean a real foot or a real door. It means you got a small first chance somewhere that can lead to something bigger. That matches the next sentence: if he carries enough coffee, someday they might let him near a microphone. He is not announcing yet." },

    // Item 11 — written response
    { id: "A11", p: 1, type: "cr",
      q: "What can you infer about the relationship between Nia and her brother Andre? Use details from the passage to support your answer.",
      guidance: "Tell what kind of relationship they have. Then give at least TWO details from the story that prove it, and explain how each one shows it.",
      model: "Nia and Andre are very close, and they cheer each other on. Andre woke up early every morning to train Nia on the track, and he made practice fun by calling it like a sports announcer. Even though he lives in Atlanta now, he made her promise to text him “the SECOND” the race was over, and he answered with a funny announcer message. During the race, Nia heard his voice in her head telling her she was flying, which shows how much his support means to her.",
      checklist: [
        "I said what their relationship is like — not just that they are brother and sister.",
        "I used at least TWO details from the story.",
        "I explained how each detail shows the relationship."
      ] },

    /* ── PASSAGE 3 · items 12–15 ── */

    // Item 12 — choose TWO synonyms
    { id: "A12", p: 2, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “Tomas and Lina were astonished.” Which TWO words mean about the same as astonished? Choose TWO answers.",
      choices: [
        "amazed",
        "surprised",
        "angry",
        "tired",
        "proud",
        "bored"
      ],
      answers: [
        "amazed",
        "surprised"
      ],
      explanation: "The next sentence is the clue: they look at each other “as if one of them must have heard wrong.” That is how people act when something amazes or surprises them. They are not tired or bored, and nothing shows anger or pride." },

    // Item 13 — summary of a bounded section
    { id: "A13", p: 2,
      q: "Which statement BEST summarizes the LAST THREE paragraphs of the passage?",
      choices: [
        "Ama explains that the keeper must care for the whole village, the three young people fix the stream together, and the keepers still walk the whole stream today.",
        "Tomas and Lina are upset because they were not chosen to be the keeper of the spring.",
        "Tomas lifts a heavy branch out of the stream with his strong arms.",
        "Ren becomes the keeper because he was the last one to come back down the mountain."
      ],
      answer: "Ama explains that the keeper must care for the whole village, the three young people fix the stream together, and the keepers still walk the whole stream today.",
      explanation: "A good summary of a section covers every paragraph in it, in a few words. The last three paragraphs are Ama's explanation, the three of them fixing the stream, and the tradition that lasts. Tomas lifting the branch is only one detail, Tomas and Lina's surprise comes before that section, and Ren was not chosen for being last." },

    // Item 14 — choose THREE: what a simile shows
    { id: "A14", p: 2, type: "ms", pick: 3,
      q: "Read these sentences from the passage. “A village is like a stream. When one stone blocks it at the top, every house at the bottom goes thirsty.” What does this comparison show about what Ama believes? Choose THREE answers.",
      choices: [
        "Everyone in the village is connected to everyone else.",
        "A small problem in one place can hurt people far away.",
        "A keeper has to watch out for the whole village, not just one part of it.",
        "The houses in the village should be moved closer to the spring.",
        "The keeper should carry stones up to the top of the mountain.",
        "Only the people at the bottom of the village need water."
      ],
      answers: [
        "Everyone in the village is connected to everyone else.",
        "A small problem in one place can hurt people far away.",
        "A keeper has to watch out for the whole village, not just one part of it."
      ],
      explanation: "Ama compares the village to a stream to explain why she chose Ren: what happens in one spot reaches every house, so the keeper has to care about all of it. The wrong choices read the comparison as if it were about real stones and real houses instead of about how a village works." },

    // Item 15 — hot text: click 2 sentences inside a re-shown paragraph
    { id: "A15", p: 2, type: "hottext", layout: "para", pick: 2,
      q: "Read paragraph 2 from the passage. The passage shows that Ama is CAREFUL about choosing the next keeper. Click on the TWO sentences in the paragraph that BEST support this idea.",
      choices: [
        "But Ama's knees had grown stiff, and the path seemed to get a little steeper every year.",
        "She knew the time had come to choose the next keeper.",
        "She also knew that this choice mattered more than anything else she had done in fifty years, and she did not want to make it in a hurry.",
        "For a whole season, she quietly watched the young people of the village at their work and at their play.",
        "At last she chose three of them: Tomas, who was the strongest; Lina, who was the cleverest; and Ren, who was so quiet that most people forgot he was there."
      ],
      answers: [
        "She also knew that this choice mattered more than anything else she had done in fifty years, and she did not want to make it in a hurry.",
        "For a whole season, she quietly watched the young people of the village at their work and at their play."
      ],
      explanation: "Being careful about a choice means taking your time and paying close attention. Ama refuses to hurry, and she spends a whole season watching before she picks anyone. The other sentences explain why a choice is needed or name who she chose, but they do not show HOW carefully she chose." }

  ]
};
