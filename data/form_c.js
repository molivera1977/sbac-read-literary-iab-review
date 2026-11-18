/* ═══════════════════════════════════════════════════════
   SBAC IAB REVIEW · Read Literary Texts
   FORM C — 3 passages, 15 items, 16 scored points
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
window.FORM_C = {

  passages: [

    /* ── PASSAGE 1 ─────────────────────────────────────
       Realistic fiction that teaches a process. A school
       idea comes home, the family builds it step by step,
       and a picture shows how the parts fit together. */
    {
      id: "C-P1",
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
        "On Tuesday, Ms. Rivera showed Mateo's class a video about where garbage goes. Most of it, it turned out, rides in a truck to a giant hill outside of town and just sits there for years and years. Ms. Rivera said that a big part of what a family throws away is food scraps: banana peels, apple cores, coffee grounds, the ends of carrots.",
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
      id: "C-P2",
      title: "Anchor Leg",
      source: "Original practice passage",
      genre: "Realistic fiction",
      paragraphs: [
        "The stadium lights at Harmon Field came on while the boys' relays were still running, and by the time the girls lined up for the city championship, the sky above the bleachers had turned dark purple. Nia Brooks stood in the last exchange zone and shook out her hands, one and then the other, the way she always did.",
        "She was the anchor. Her teammates Keisha, Talia, and Danielle would run the first three legs of the relay, one hundred meters each, and then the baton would come to her. Whatever place the Eastside Eagles were in when it reached her hand, that was the place she had to fix.",
        "Across the track, her mother stood at the fence holding her phone up high, recording everything. Nia knew exactly who the video was for.",
        "Two summers ago, before he moved to Atlanta, her brother Andre had trained her himself. Every morning at six, he walked her to the empty track behind the middle school and made her practice handoffs until her arms ached. He was nineteen and had never run a race in his life, but he had watched about a thousand of them on TV, and he talked through every practice like a sports announcer.",
        "“And Brooks takes the baton,” he would say into a hairbrush as she sprinted past him. “She's flying, folks! Nobody has seen speed like this since the invention of the cheetah!”",
        "“Cheetahs weren't invented,” Nia told him once, out of breath.",
        "“Don't interrupt the broadcast,” said Andre.",
        "Being a real announcer was his dream. He called her races, their cousins' basketball games, and once, when nothing else was happening, a pigeon trying to land on a power line. Then last spring a radio station in Atlanta hired him to answer phones and carry coffee. It was not announcing, but Mom said he had finally gotten his foot in the door. Andre said that if he carried enough coffee, someday they would let him near a microphone.",
        "He couldn't come home for the championship. “Text me the second it's over,” he had said on the phone the night before. “Not after you cool down. Not after you get a snack. The SECOND.”",
        "The starter's gun cracked, and Nia snapped back to Harmon Field.",
        "Keisha got out fast. Talia held their spot around the curve. But on the third leg, Danielle got bumped by a runner from Westside and stumbled, and by the time she came pounding toward Nia's zone, the Eagles were in third place, two long steps behind the leaders.",
        "Nia started running before Danielle reached her, just the way Andre had taught her. She stretched her hand back without turning her head. “Stick!” Danielle shouted, and the baton slapped into Nia's palm.",
        "When the baton hits your hand, you don't look back. That was the first rule Andre had ever given her. Looking back is how you lose a step.",
        "Nia did not look back. She caught the Southside runner halfway down the straightaway. The Westside girl was still ahead. Fifteen meters left. Ten. Nia's legs were burning, but she pushed harder, because somewhere in her head a voice that sounded a lot like a hairbrush was yelling, She's flying, folks! Nia leaned at the line, and the two runners crossed it so close together that nobody in the bleachers knew who had won.",
        "Then the scoreboard flashed: EASTSIDE — 1.",
        "Keisha and Talia and Danielle crashed into Nia all at once, and the four of them fell into a pile on the grass. When Nia finally pulled herself free, the first thing she did was run to the fence. Her mother was already holding out the phone.",
        "Nia typed with shaking thumbs: WE WON. I DIDN'T LOOK BACK.",
        "The answer came less than a minute later. It was a voice message, and it was Andre, shouting so loudly that the phone buzzed. “And BROOKS takes it at the line! Ladies and gentlemen, I have never seen anything like it — and I have seen a pigeon land on a power line!”",
        "Nia laughed so hard she had to sit down. Somewhere in Atlanta, she thought, there was a radio station that had no idea what it was missing."
      ]
    },

    /* ── PASSAGE 3 ─────────────────────────────────────
       Folktale. An old orchard keeper asks three young
       people to share twelve apples between two houses.
       The one who goes and asks what each family needs
       wins over the even split and the quick guess; a
       shoe simile carries the moral (fair does not always
       mean the same). */
    {
      id: "C-P3",
      title: "The Orchard Keeper",
      source: "Original practice passage",
      genre: "Folktale",
      note: "A folktale is a story that people have told and retold for a very long time. Many folktales teach a lesson.",
      paragraphs: [
        "There was once a village on a green hill where the apple orchard belonged to everyone. For fifty years, an old man named Hugo had been the keeper of the orchard. Every autumn, he picked the apples and gave them out to the families, so that no one in the village would go hungry during the long winter. But Hugo's back had grown stiff, and the ladders seemed to get taller every year. He knew that the orchard would soon need a new keeper.",
        "Three young people asked for the job. Anton was the best at numbers in the whole village, and he could add up a long list faster than the schoolteacher. Nell asked more questions than anyone on the hill, and she could talk to anyone about anything. And Bela was the fastest at everything, from running races to finishing her chores.",
        "Hugo handed each of them a basket of twelve apples. “At the end of Mill Lane there are two houses, a big stone house and a small wooden cottage,” he said. “Decide how to share these apples between those two houses in the fairest way you can. Then come back at sunset and tell me what you decided.”",
        "Anton did not even need to leave the orchard. He counted the apples twice and split them into two neat piles of six. At sunset he said proudly, “Six apples for each house. Both houses get exactly the same, so it is fair.”",
        "Bela ran all the way to the end of Mill Lane and back before lunch. “I took one look,” she said. “The stone house is three times as big as the cottage, so more people must live there. I would give nine apples to the big house and three to the little one.”",
        "Nell came back last, with dust from the lane all over her shoes. She had knocked on both doors and asked who lived inside and how much food each family had saved for the winter. At the cottage, a little boy had pulled her inside to show her the green frog he kept in a jar by the window. She had also counted the children in the cottage twice, because they kept running in and out the door. Then she sat down on the orchard wall to tell Hugo what she had found.",
        "“The stone house belongs to Mr. Grout, the miller,” said Nell. “He lives there all by himself, and his cellar is already full of flour and cheese. The cottage belongs to the Fenn family. There are nine of them, and all they have left is one sack of potatoes. So I would give one apple to Mr. Grout and eleven apples to the Fenns.”",
        "Hugo smiled for the first time all day. “Nell will be the next keeper of the orchard,” he said.",
        "Anton and Bela were astonished. Anton stared down at his two neat piles, and Bela's mouth fell open. “But eleven and one are not the same at all,” said Anton.",
        "“Fair does not always mean the same,” said Hugo. “Being fair is like making shoes. If you make every pair the same size, the shoes will fit almost no one. You have to measure each foot first. Anton made every pair the same, and Bela guessed the sizes just by looking. Only Nell went and measured.”",
        "So Nell became the keeper of the orchard. Every autumn, before a single apple was picked, she walked from house to house with her questions. She asked who had a new baby, whose garden had dried up, and who had plenty to share. Then she gave each family what it needed, and no one in the village went hungry.",
        "And people say that, to this day, the orchard keeper on that green hill knocks on every door before giving out a single apple."
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
    { id: "C01", p: 0,
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
      explanation: "All of paragraph 3 comes from the worm idea. Mateo stops listening. He draws worms in boxes. He runs home first. He practices what he will say. Those acts show he is eager. Nothing says he is late. He draws because of the worm idea. His drawing is not about skipping work." },

    // Item 2 — word meaning in context
    { id: "C02", p: 0,
      q: "Read this sentence from the passage. “One by one, the worms burrowed down into the damp newspaper until not a single one could be seen.” What does the word **burrowed** mean in this sentence?",
      choices: [
        "dug their way in",
        "went to sleep",
        "climbed out",
        "rolled into balls"
      ],
      answer: "dug their way in",
      explanation: "Look at two clues. The first clue is “down into the damp newspaper”. The second clue is “not a single one could be seen.” The worms went down into the bedding. Then the worms were gone from sight. So burrowed means dug their way in. Climbing out would leave the worms in plain sight." },

    // Item 3 — purpose of the picture
    { id: "C03", p: 0, showFigure: true,
      q: "Look at the picture from the passage. Why does the author include this picture?",
      choices: [
        "to show how the parts of the worm bin fit together",
        "to show how many worms Mateo ordered from the farm",
        "to explain why worms do not like light",
        "to show what the tomato plants will look like with worm soil"
      ],
      answer: "to show how the parts of the worm bin fit together",
      explanation: "The labels show the lid and the air holes. The labels show the bedding and the drainage holes. The labels show the wooden blocks and the catch tray. The picture shows one bin sitting inside the other bin. These parts are hard to picture from words alone. The picture does not count worms. The picture does not show tomatoes. The picture says nothing about light." },

    // Item 4 — EBSR: conclusion + supporting sentence
    { id: "C04", p: 0, type: "ebsr",
      partA: {
        q: "What conclusion can be drawn about why Abuela agrees to build the worm bin?",
        choices: [
          "It reminds her of the way her own family made sure nothing went to waste.",
          "She wants Mateo to earn a good grade from Ms. Rivera for building the worm bin.",
          "She is tired of carrying the trash all the way down to the street.",
          "She has always wanted to keep a few worms as pets inside the apartment."
        ],
        answer: "It reminds her of the way her own family made sure nothing went to waste.",
        explanation: "At first, Abuela is unsure. She says, “Inside, I feel less fine.” She remembers her father's pile in Puebla. Right after, she changes her mind. The story never names a grade. She never says she is tired of the trash. She never says she wants pets. She even says she feels less fine about worms inside." },
      partB: {
        q: "Which sentence from the passage **best** supports the answer in Part A?",
        longChoices: true,
        choices: [
          "“In our family, we never wasted a single thing.”",
          "“Outside,” she said, “I feel fine about worms. Inside, I feel less fine.”",
          "“Not too much at first,” Mateo warned.",
          "On Saturday they bought two dark plastic storage bins with lids, the kind people use to store winter sweaters, and two short blocks of wood."
        ],
        answer: "“In our family, we never wasted a single thing.”",
        explanation: "Abuela says, “we never wasted a single thing.” Just after, she agrees to go to the hardware store. So her words show why she says yes. The “less fine” line shows how she felt at first. She had not changed her mind yet. The other two choices happen after she says yes." } },

    // Item 5 — main idea of re-shown building paragraphs
    { id: "C05", p: 0,
      q: "Read paragraphs 9 and 10 from the passage again. What is the main idea of these paragraphs?",
      excerpt: [
        "Back at the apartment, Abuela held the first bin steady while Mateo drilled a row of small holes around the top edge. Then they flipped it over, and he drilled more holes in the bottom. “Air goes in through the top,” he explained, “and extra water drips out the bottom.”",
        "Next, they set the two blocks of wood inside the second bin and rested the drilled bin on top of them, so there was a gap between the two bottoms. “That's the catch tray,” Mateo said. “Whatever drips out lands in there instead of on the floor.”"
      ],
      choices: [
        "Mateo and Abuela begin to build the worm bin.",
        "Mateo explains that air goes in through the holes at the top.",
        "Abuela learns how to use a drill to make holes in the bin.",
        "The worms arrive from the worm farm."
      ],
      answer: "Mateo and Abuela begin to build the worm bin.",
      explanation: "Paragraphs 9 and 10 are about the first building steps. Step one is to drill the holes. Step two is to set one bin in the other bin. Air is just a small detail in paragraph 9. Abuela never uses the drill. She holds the bin while Mateo drills. The worms do not come until later." },

    // Item 6 — hot text: click 2 sentences from a list
    { id: "C06", p: 0, type: "hottext", layout: "list", pick: 2,
      q: "The passage shows that Mateo and Abuela work together. Click on the **two** sentences from the passage that **best** support this idea.",
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
      explanation: "In the first sentence, Abuela plans the trip. She and Mateo will go together. Each person has a job. Mateo does the reading. In the second sentence, both of them work on the same bin. They work at the same time. The other sentences show just one person doing something. Some sentences show no one at all." },

    /* ── PASSAGE 2 · items 7–11 ── */

    // Item 7 — summary with a missing key event
    { id: "C07", p: 1,
      q: "Read this summary of the passage. Which key event is missing from the summary?",
      excerptLabel: "📝 A summary of “Anchor Leg”",
      excerpt: [
        "Nia is the anchor runner for the Eastside Eagles at the city relay championship. While she waits for the baton, she remembers how her brother Andre trained her on the school track and called her practices like a sports announcer. On the third leg of the race, Danielle stumbles, and Nia gets the baton in third place. After the race, Nia texts Andre, and he answers with a funny voice message."
      ],
      choices: [
        "Nia passes the other runners and wins the race at the finish line.",
        "Nia's mother stands at the fence and records the whole race on her phone.",
        "Danielle gets bumped by a runner from Westside and falls behind on the third leg.",
        "Nia's teammates pile on top of her on the grass."
      ],
      answer: "Nia passes the other runners and wins the race at the finish line.",
      explanation: "A summary has to tell the events the story needs. Nia gets the baton in third place. Then the summary jumps straight to the text. The summary never says Nia won. Her win is the biggest event of all. Danielle's stumble is in the summary. The phone video is a small detail. The pile on the grass is a small detail too." },

    // Item 8 — evidence for a conclusion
    { id: "C08", p: 1, longChoices: true,
      q: "Which detail from the passage **best** shows that Andre cares a lot about how Nia's race turns out?",
      choices: [
        "“Text me the second it's over,” he had said on the phone the night before.",
        "Then last spring a radio station in Atlanta hired him to answer phones and carry coffee.",
        "Andre said that if he carried enough coffee, someday they would let him near a microphone.",
        "“And Brooks takes the baton,” he would say into a hairbrush as she sprinted past him."
      ],
      answer: "“Text me the second it's over,” he had said on the phone the night before.",
      explanation: "Andre cannot be at the race. So he asks Nia to text him the very second the race is over. He does not want to wait even a little to find out how it went. His words show he cares a lot about how the race turns out. Two choices are about his new job. One choice is about how he talked like an announcer at practice. Those choices are not about this race." },

    // Item 9 — EBSR: character trait + support
    { id: "C09", p: 1, type: "ebsr",
      partA: {
        q: "Which word **best** describes Nia during the race?",
        choices: [
          "determined",
          "unsure",
          "boastful",
          "careless"
        ],
        answer: "determined",
        explanation: "Determined means you keep pushing toward a goal. You keep pushing even when the goal is hard. Nia starts in third place. Her legs are burning. Nia pushes harder anyway. Nia never brags. She follows Andre's rules exactly. So boastful does not fit Nia. Careless does not fit Nia either. Nia is not unsure. She never stops to wonder what to do. She runs hard all the way to the line." },
      partB: {
        q: "Which sentence from the passage **best** supports the answer in Part A?",
        longChoices: true,
        choices: [
          "Nia's legs were burning, but she pushed harder, because somewhere in her head a voice that sounded a lot like a hairbrush was yelling, She's flying, folks!",
          "Nia Brooks stood in the last exchange zone and shook out her hands, one and then the other, the way she always did.",
          "Across the track, her mother stood at the fence holding her phone up high, recording everything.",
          "Nia laughed so hard she had to sit down."
        ],
        answer: "Nia's legs were burning, but she pushed harder, because somewhere in her head a voice that sounded a lot like a hairbrush was yelling, She's flying, folks!",
        explanation: "Nia's “legs were burning, but she pushed harder”. Those words show Nia is determined as she runs. The race is hard, and she keeps going. Shaking out her hands is a habit before the race. The other two choices happen off the track." } },

    // Item 10 — choose TWO: idiom with a literal-reading trap
    { id: "C10", p: 1, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “It was not announcing, but Mom said he had finally gotten his foot in the door.” What does the phrase “gotten his foot in the door” suggest about Andre? Choose **two** answers.",
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
      explanation: "The phrase “gotten his foot in the door” is an idiom. The phrase does not mean a real foot. The phrase does not mean a real door. The phrase means you got a small first chance at a place. The small chance can lead to something bigger. The next sentence fits the phrase. If Andre carries enough coffee, the station might let him near a microphone someday. He is not announcing yet." },

    // Item 11 — written response
    { id: "C11", p: 1, type: "cr",
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
    { id: "C12", p: 2, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “Anton and Bela were astonished.” Which **two** words mean about the same as **astonished**? Choose **two** answers.",
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
      explanation: "The next sentence is the clue. Anton stares down at his two neat piles. Bela's mouth falls open. People act this way when something amazes them. People act this way when something surprises them. Nothing shows that Anton and Bela are tired or bored. Anton argues that the numbers are not the same. But angry does not mean the same as astonished. Anton spoke proudly earlier in the story. But proud does not mean the same as astonished either." },

    // Item 13 — summary of a bounded section
    { id: "C13", p: 2,
      q: "Which statement **best** summarizes the last three paragraphs of the passage?",
      choices: [
        "Hugo explains that a keeper must be good with numbers, Nell gives every family the same number of apples, and keepers still count all of the apples twice.",
        "Anton tells Hugo that eleven apples and one apple are not the same.",
        "Hugo explains that fair does not always mean the same, Nell asks every family what it needs each autumn, and keepers still knock on every door first.",
        "Nell asks each family whether it has a new baby."
      ],
      answer: "Hugo explains that fair does not always mean the same, Nell asks every family what it needs each autumn, and keepers still knock on every door first.",
      explanation: "A good summary covers each paragraph in a section. Here the section is the last three paragraphs. First, Hugo explains what fair means. Next, Nell asks every family what it needs each autumn. Last, the keepers still knock on every door today. Asking about a new baby is just one detail. Anton's words about eleven and one come before the section. One choice says a keeper must be good with numbers. But Hugo did not choose Anton, the one who was best at numbers. That choice also says Nell gives every family the same number. But Nell did not plan to give both houses the same. She said she would give one apple to the miller and eleven to the Fenns. Nothing in the section says the keepers count the apples twice." },

    // Item 14 — choose THREE: what a simile shows
    { id: "C14", p: 2, type: "ms", pick: 3,
      q: "Read these sentences from the passage. “Being fair is like making shoes. If you make every pair the same size, the shoes will fit almost no one. You have to measure each foot first.” What does this comparison show about what Hugo believes? Choose **three** answers.",
      choices: [
        "Giving everyone the same amount is not always fair.",
        "The next keeper should learn how to make shoes.",
        "Different people can need different things.",
        "Every family in the village needs new shoes for the winter.",
        "You should find out what people need before you decide.",
        "Every family should get the same number of apples."
      ],
      answers: [
        "Giving everyone the same amount is not always fair.",
        "Different people can need different things.",
        "You should find out what people need before you decide."
      ],
      explanation: "Hugo compares being fair to making shoes. Shoes that are all one size fit almost no one. In the same way, giving everyone the same amount is not always fair. Feet come in different sizes, and people have different needs. You measure each foot before you make the shoes. So you should find out what people need first. Two wrong choices act like the shoes are real shoes. But Hugo is talking about sharing apples, not about making shoes. One wrong choice says every family should get the same number. Hugo believes the opposite." },

    // Item 15 — hot text: click 2 sentences inside a re-shown paragraph
    { id: "C15", p: 2, type: "hottext", layout: "para", pick: 2,
      q: "Read paragraph 6 from the passage. The passage shows that Nell makes sure she knows the facts about each family. Click on the **two** sentences in the paragraph that **best** support this idea.",
      choices: [
        "Nell came back last, with dust from the lane all over her shoes.",
        "She had knocked on both doors and asked who lived inside and how much food each family had saved for the winter.",
        "At the cottage, a little boy had pulled her inside to show her the green frog he kept in a jar by the window.",
        "She had also counted the children in the cottage twice, because they kept running in and out the door.",
        "Then she sat down on the orchard wall to tell Hugo what she had found."
      ],
      answers: [
        "She had knocked on both doors and asked who lived inside and how much food each family had saved for the winter.",
        "She had also counted the children in the cottage twice, because they kept running in and out the door."
      ],
      explanation: "To make sure of something, you check it so you know it is right. Nell does not guess. She knocks on both doors and asks who lives inside and how much food each family has saved. Then she counts the children twice, so she knows the number is right. The dusty shoes only show that Nell walked down the lane. The frog is just something a boy wanted her to see. Sitting on the wall only tells what Nell did next. Those sentences do not show Nell checking the facts." }

  ]
};
