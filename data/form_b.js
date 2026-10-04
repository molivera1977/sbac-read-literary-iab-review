/* ═══════════════════════════════════════════════════════
   SBAC IAB REVIEW · Read Literary Texts
   FORM B — 3 passages, 15 items, 16 scored points
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
window.FORM_B = {

  passages: [

    /* ── PASSAGE 1 ─────────────────────────────────────
       Realistic fiction that teaches a process. A girl and
       her uncle turn a milk jug into a bird feeder, one
       index card at a time, and a picture shows the parts. */
    {
      id: "B-P1",
      title: "A Window for the Birds",
      source: "Original practice passage",
      genre: "Realistic fiction",
      figure: {
        after: 9,
        caption: "A milk-jug bird feeder like the one Amira and Uncle Sami built",
        alt: "A drawing of a plastic milk jug hanging by a string from a maple branch. The string is tied around the neck of the jug, just under the blue cap, and the jug has a handle on one side. A square window is cut in the front. Below the window, a wooden spoon pokes through the jug and sticks out on both sides as a perch. Birdseed fills the bottom of the jug up to just below the window, and drops of water drip out of small drainage holes in the bottom.",
        svg: '<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif" font-size="14">' +
             '<rect width="600" height="340" rx="12" fill="#fffdf6"/>' +
             // maple branch
             '<path d="M150 34 Q300 24 452 36" fill="none" stroke="#6d4c41" stroke-width="12" stroke-linecap="round"/>' +
             // jug body
             '<path d="M284 90 L316 90 L316 104 Q368 112 374 142 L374 290 Q374 304 360 304 L240 304 Q226 304 226 290 L226 142 Q232 112 284 104 Z" fill="#f4f8fb" stroke="#607d8b" stroke-width="4"/>' +
             // handle
             '<g fill="none" stroke="#607d8b" stroke-width="4"><path d="M330 108 C396 100 404 176 374 184"/><path d="M340 118 C380 114 386 164 374 170"/></g>' +
             // string, tied around the neck
             '<g stroke="#8d6e63" stroke-width="2.5" fill="none"><path d="M300 36 L285 94"/><path d="M300 36 L315 94"/><path d="M283 97 L317 97" stroke-width="3"/></g>' +
             // cap
             '<rect x="281" y="72" width="38" height="18" rx="4" fill="#1e88e5" stroke="#0d47a1" stroke-width="2"/>' +
             // birdseed
             '<path d="M229 238 L371 238 L371 290 Q371 301 360 301 L240 301 Q229 301 229 290 Z" fill="#e2bf74"/>' +
             '<g fill="#a1783a"><circle cx="242" cy="262" r="2"/><circle cx="258" cy="282" r="2"/><circle cx="276" cy="266" r="2"/><circle cx="292" cy="290" r="2"/><circle cx="310" cy="270" r="2"/><circle cx="326" cy="286" r="2"/><circle cx="344" cy="264" r="2"/><circle cx="358" cy="284" r="2"/><circle cx="300" cy="258" r="2"/></g>' +
             // window
             '<rect x="256" y="148" width="88" height="80" rx="6" fill="#5d4037" stroke="#455a64" stroke-width="3"/>' +
             // perch (wooden spoon)
             '<rect x="182" y="243" width="236" height="8" rx="4" fill="#a1887f" stroke="#6d4c41" stroke-width="1.5"/>' +
             '<ellipse cx="430" cy="247" rx="16" ry="10" fill="#a1887f" stroke="#6d4c41" stroke-width="1.5"/>' +
             // drainage holes + drips
             '<g fill="#263238"><ellipse cx="270" cy="304" rx="3" ry="2"/><ellipse cx="300" cy="304" rx="3" ry="2"/><ellipse cx="330" cy="304" rx="3" ry="2"/></g>' +
             '<path d="M270 310 q4 7 0 11 q-4 -4 0 -11 Z M300 314 q4 7 0 11 q-4 -4 0 -11 Z M330 310 q4 7 0 11 q-4 -4 0 -11 Z" fill="#42a5f5"/>' +
             // labels — left
             '<g stroke="#607d8b" stroke-width="1.5"><line x1="176" y1="64" x2="290" y2="64"/><line x1="176" y1="188" x2="262" y2="188"/><line x1="176" y1="280" x2="252" y2="280"/><line x1="176" y1="316" x2="266" y2="306"/></g>' +
             '<g fill="#263238" text-anchor="end"><text x="170" y="68">String</text><text x="170" y="192">Window</text><text x="170" y="284">Birdseed</text><text x="170" y="320">Drainage holes</text></g>' +
             // labels — right
             '<g stroke="#607d8b" stroke-width="1.5"><line x1="322" y1="81" x2="456" y2="81"/><line x1="394" y1="146" x2="456" y2="146"/><line x1="447" y1="245" x2="456" y2="242"/></g>' +
             '<g fill="#263238"><text x="462" y="41">Maple branch</text><text x="462" y="86">Cap</text><text x="462" y="151">Handle</text><text x="462" y="238">Perch</text><text x="462" y="254">(wooden spoon)</text></g>' +
             '</svg>'
      },
      paragraphs: [
        "The first real snow of the year fell on Thursday night. On Friday morning, Amira stood at the kitchen window with her toast and watched three small brown birds hop along the fence. They pecked at the snow, hopped, and pecked again. There was nothing for them to find.",
        "Uncle Sami, who lived in the apartment over the garage, came in stamping snow off his boots. He looked at the birds, and then at the empty milk jug by the recycling bin. “Those birds need a restaurant,” he said. “When I was your age, my grandfather and I built one out of a jug just like that. Want to make one tomorrow?”",
        "That evening, Amira took a pencil and a stack of index cards out of the kitchen drawer. On the first card she wrote SUPPLIES. On the next five cards she wrote STEP 1 through STEP 5. Then she asked Uncle Sami to tell her everything he remembered, and she wrote it all down in her neatest printing. When he mixed up two of the steps, she crossed them out and made fresh cards. By bedtime, the cards sat in a tidy stack on the counter, held together with a clothespin so not one of them could get lost.",
        "On Saturday morning, Amira read the SUPPLIES card out loud while Uncle Sami set everything on the table: the milk jug, washed and dried; a pair of strong scissors; a marker; a long nail; an old wooden spoon; a bag of birdseed; and a ball of string. “You're the boss of this project,” Uncle Sami said. “I'm just the helper with the sharp things.”",
        "“Step one,” Amira read. “Cut a window.” Uncle Sami did not pick up the scissors until she had read the whole card. Amira drew a big square on the front of the jug, leaving about two inches of plastic below it so the seed would not spill out. The plastic was too tough for her hands, so Uncle Sami did the cutting while Amira held the jug still.",
        "“Step two. Poke drainage holes.” Uncle Sami turned the jug upside down, and Amira used the nail to poke four tiny holes in the bottom. “Rain and snow will get in,” Uncle Sami explained, “so the water needs a way out. Wet seed turns moldy, and moldy seed can make birds sick.”",
        "“Step three. Add a perch.” This was Amira's favorite part. Just below the window, she poked a hole in each side of the jug. Then she pushed the handle of the wooden spoon in one hole and out the other, so it stuck out on both sides like a tiny bar. “Now they have somewhere to stand while they eat,” she said.",
        "“Step four. Fill it with seed.” Amira poured the birdseed in through the window, slowly, until it came up just below the bottom edge. “Not too full,” she said. “Or it will all spill out the first time the wind blows.”",
        "“Step five. Hang it up.” Uncle Sami tied the string tightly around the neck of the jug, just under the cap, and made a loop at the top. Then they pulled on their boots and carried the feeder out into the snow.",
        "Amira looked at the fence, where Mrs. Ortiz's orange cat liked to nap. “Not near the fence,” she said. “Too close to Pumpkin.” They chose a low branch of the maple tree instead, right where they could see it from the kitchen window. Uncle Sami tugged hard on the branch two times. It did not bend or crack. “Nice and sturdy,” he said, and he hung the loop over it.",
        "Back inside, Amira took one more blank card from the drawer. She wrote STEP 6: WAIT and clipped it to the front of the stack. Then she pulled a chair up to the window, rested her chin on her hands, and watched the feeder sway in the cold air.",
        "“How long will it take?” she asked.",
        "“Could be an hour,” said Uncle Sami. “Could be a week. First the birds have to find it, and then they have to decide to trust it.”",
        "Amira did not move from her chair. Out on the fence, a small brown bird landed, tipped its head to one side, and looked toward the maple tree."
      ]
    },

    /* ── PASSAGE 2 ─────────────────────────────────────
       Sports fiction with a flashback frame: the last
       penalty kick, the backstory with the older sister,
       back to the kick. The sibling relationship carries
       the written answer. */
    {
      id: "B-P2",
      title: "Pick a Spot",
      source: "Original practice passage",
      genre: "Realistic fiction",
      paragraphs: [
        "The Riverside Rockets and the Oak Hill Owls had played two halves and two overtimes, and the score was still tied, one to one. Now the championship would be decided by penalty kicks. One at a time, each team sent a player to the white spot to shoot against the other team's goalkeeper.",
        "The Owls' fifth kicker had just sent the ball sailing over the crossbar. That meant if Lena Haddad scored on the next kick, the Rockets would be champions. If she missed, the shootout would keep going, and nobody knew for how long.",
        "Lena set the ball on the white spot and stepped back. The Owls' goalkeeper was the tallest girl Lena had ever seen, and she was bouncing on her toes and waving her long arms as if she wanted to fill up the whole goal. Lena reached up and touched the green headband she was wearing. It used to belong to her sister.",
        "Three summers ago, Noor had hung an old bedsheet between the two clothesline poles in their backyard and called it a goal. Noor was sixteen then and played goalkeeper for the high school team. Every evening after dinner, she pulled on her gardening gloves, stood in front of the bedsheet, and made Lena kick ball after ball at her.",
        "“Most kickers pick a spot too late,” Noor told her. “They run up, they see the goalie, and they panic. You pick your spot before you start running. Then you trust it.”",
        "“What if the goalie guesses right?” Lena asked.",
        "“Then she guesses right,” said Noor. “But you still don't change your mind.”",
        "Lena missed more kicks than she made that summer, but Noor never once said they should stop. She chased every wild shot into the rosebushes and tossed it back, and she cheered for every goal as loudly as if the whole town were watching.",
        "Noor had a goal of her own, too. Ever since she was little, she had wanted to be an animal doctor. She had once wrapped a hurt paw on the neighbors' dog with a kitchen towel, and she read thick books about horses and cows the way other kids read comics. Last spring, a college in Colorado with one of the best animal programs in the country said yes to her. Colorado was a thousand miles away.",
        "The night before she left, Noor got cold feet. Lena found her sitting on the back steps in the warm August dark, staring at the old bedsheet goal. “Maybe I should just go to the college here,” Noor said quietly. “Colorado is so far. And who's going to practice with you?”",
        "Lena sat down next to her. She was only eight, but she knew exactly what to say. “You pick your spot before you start running,” she told her sister. “Then you trust it.”",
        "Noor stared at her for a long moment. Then she laughed and wiped her eyes, pulled the green headband off her own head, and put it on Lena's. “Fine,” she said. “But you have to wear this to every game.”",
        "The referee's whistle blew, and Lena was back on the field.",
        "She picked her spot before she started running: the low left corner. She did not look at the goalkeeper's waving arms at all. She looked only at that one corner of the net, and she ran, and she kicked.",
        "The goalkeeper guessed right. She dove to the left, stretching out her long arms, but the ball was too low and too fast. It skidded under her fingertips and into the back of the net.",
        "The Rockets poured off the bench and piled onto Lena so hard that the green headband got knocked down over one eye. She did not even bother to fix it.",
        "After the trophy ceremony, Lena borrowed Dad's phone and called Colorado. Noor answered on the first ring, whispering. She was in the library, studying for a test.",
        "“Low left,” Lena said. “She guessed right, and I didn't change my mind.”",
        "Noor shrieked so loudly that Lena heard somebody in the library say “Shhh!” Then Noor whispered, “I have a big test on dog bones tomorrow. And guess what? I already picked my spot.”"
      ]
    },

    /* ── PASSAGE 3 ─────────────────────────────────────
       Folktale. A queen tests three young people with
       cracked bowls, the honest one wins, and a simile
       carries the moral. */
    {
      id: "B-P3",
      title: "The Cracked Bowls",
      source: "Original practice passage",
      genre: "Folktale",
      note: "A folktale is an old story that people passed down by telling it out loud. Many folktales end with a lesson, called a moral.",
      paragraphs: [
        "Long ago, in a land of green hills and slow brown rivers, there lived a queen named Ilsa. She was not the richest ruler in the world, but her people loved her.",
        "Queen Ilsa lived in a white stone palace at the top of the tallest hill. One spring, when the river flooded and ruined the wheat fields, she did not pretend that all would be well. Instead, she stood in the town square and told the people the truth: there would be less bread that winter, and the palace would eat less too. Around that time, her old advisor, Bram, grew too tired to climb the palace stairs. He asked to spend his last years in his garden, and the queen agreed. So she sent word to every village that she needed a new advisor.",
        "Many people came to the palace hoping to be chosen. The queen spoke with each of them, and at last she picked three: Darin, the son of a rich merchant; Mira, the finest painter in the village; and Pell, a shepherd boy who had never been inside a palace before.",
        "The queen set three clay bowls on the table in front of them. Each bowl had a long crack running down its side. “Take these home with you,” she said. “Tomorrow, bring them back to me whole.”",
        "Darin went straight to the market. He found a potter who sold bowls of the very same size and color, paid for one with a handful of silver coins, and tossed the cracked bowl onto a trash heap.",
        "Mira worked late into the night by candlelight. She pressed a paste of flour and water into the crack, let it dry hard, and painted over it so carefully that no one could tell where the crack had been.",
        "Pell had no money for a new bowl and no paints at all. He sat by his fire for hours, trying everything he could think of. At last he mixed sticky pine sap with ashes from the fire, pressed it deep into the crack, and wrapped the bowl tightly in a strip of cloth while it dried. In the morning, the bowl was strong again, but a dark, crooked line still ran right down its side.",
        "The next day, Darin and Mira set their shining bowls on the queen's table. “Good as new,” said Darin. “Just as you asked,” said Mira. Pell was so anxious that his hands shook as he set his bowl down beside theirs. “I could not make it whole, Your Majesty,” he said. “I filled the crack so it will hold, but you can still see it. I am sorry.”",
        "The queen said nothing. She lifted a pitcher of water and filled all three bowls to the brim. In a moment, the flour paste in Mira's bowl turned soft, and water began to drip onto the table. Darin's bowl did not leak at all, but when the queen turned it in her hands, there was no crack on it anywhere. “This is not the bowl I gave you,” she said, and Darin's face turned red. Pell's bowl, crooked line and all, held every drop.",
        "Then the queen turned to the three of them. “Darin hid the truth with silver, and Mira hid it with paint,” she said. “Only Pell told me what really happened. An honest word is like Pell's bowl. It may not look perfect, but it holds what you put in it. A pretty answer that hides the truth is like a painted crack. It looks fine right up until the moment you need it to hold.”",
        "So Pell became the queen's new advisor. For many years, he told her the truth even when it was hard to hear, and the whole kingdom was better for it.",
        "And it is said that, in that land, families still keep one cracked bowl on the kitchen shelf. When a child is tempted to hide a mistake, a grandparent takes the bowl down, fills it with water, and tells the story of Pell."
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
    { id: "B01", p: 0,
      q: "Read paragraph 3 from the passage. What does paragraph 3 show about Amira?",
      excerpt: [
        "That evening, Amira took a pencil and a stack of index cards out of the kitchen drawer. On the first card she wrote SUPPLIES. On the next five cards she wrote STEP 1 through STEP 5. Then she asked Uncle Sami to tell her everything he remembered, and she wrote it all down in her neatest printing. When he mixed up two of the steps, she crossed them out and made fresh cards. By bedtime, the cards sat in a tidy stack on the counter, held together with a clothespin so not one of them could get lost."
      ],
      choices: [
        "She does not believe that her uncle knows how to build a feeder.",
        "She likes to make a careful plan before she starts something.",
        "She would rather write about the feeder than build it.",
        "She is in a hurry to finish the feeder before bedtime."
      ],
      answer: "She likes to make a careful plan before she starts something.",
      explanation: "Amira writes a card for the supplies and a card for every step, fixes the steps that got mixed up, and clips the cards so none get lost — all before they build anything. That is careful planning. She asks her uncle for help because she trusts what he remembers, and the building waits until Saturday, so she is not rushing." },

    // Item 2 — word meaning in context
    { id: "B02", p: 0,
      q: "Read these sentences from the passage. “Uncle Sami tugged hard on the branch two times. It did not bend or crack.” Then he calls the branch “nice and sturdy.” What does the word sturdy mean?",
      choices: [
        "old and dry",
        "thin and bendy",
        "strong and steady",
        "covered with snow"
      ],
      answer: "strong and steady",
      explanation: "The clues come right before the word: Uncle Sami tugs hard, and the branch does not bend or crack. A branch that holds still when you pull on it is strong and steady. Thin and bendy is the opposite, and nothing in the story says the branch is old or snowy." },

    // Item 3 — purpose of the picture
    { id: "B03", p: 0, showFigure: true,
      q: "Look at the picture from the passage. Why does the author include this picture?",
      choices: [
        "to show what kinds of birds came to eat at the feeder",
        "to help the reader see where each part of the finished feeder is",
        "to explain why moldy seed can make birds sick",
        "to show the steps for cutting plastic safely"
      ],
      answer: "to help the reader see where each part of the finished feeder is",
      explanation: "The picture labels the window, the perch, the birdseed, the drainage holes, the string and the cap on the finished feeder. Seeing them in one place makes the steps in the story easier to understand. There are no birds in the picture, and it does not explain mold or show anyone cutting." },

    // Item 4 — EBSR: conclusion + supporting sentence
    { id: "B04", p: 0, type: "ebsr",
      partA: {
        q: "Part A — What conclusion can be drawn about Amira from the way she chooses a place to hang the feeder?",
        choices: [
          "She is afraid of Mrs. Ortiz's orange cat.",
          "She wants the feeder to hang as high as it can go.",
          "She wants to keep the birds safe while they eat.",
          "She wants to hide the feeder where no one can see it."
        ],
        answer: "She wants to keep the birds safe while they eat.",
        explanation: "Amira will not hang the feeder near the fence because the cat naps there — she is thinking about the birds that will come to eat. Nothing shows she is scared of the cat herself. They pick a LOW branch that they can see from the kitchen window, so the other two choices are the opposite of what happens." },
      partB: {
        q: "Part B — Which sentence from the passage BEST supports the answer in Part A?",
        longChoices: true,
        choices: [
          "“Not too full,” she said. “Or it will all spill out the first time the wind blows.”",
          "“Not near the fence,” she said. “Too close to Pumpkin.”",
          "Uncle Sami tugged hard on the branch two times.",
          "Then she pulled a chair up to the window, rested her chin on her hands, and watched the feeder sway in the cold air."
        ],
        answer: "“Not near the fence,” she said. “Too close to Pumpkin.”",
        explanation: "Amira says no to the fence because it is too close to the cat. That is the moment she keeps the birds out of danger. The seed line is about not spilling, the tug is Uncle Sami checking the branch, and the chair is about waiting." } },

    // Item 5 — main idea of re-shown building paragraphs
    { id: "B05", p: 0,
      q: "Read paragraphs 5 and 6 from the passage again. What is the main idea of these paragraphs?",
      excerpt: [
        "“Step one,” Amira read. “Cut a window.” Uncle Sami did not pick up the scissors until she had read the whole card. Amira drew a big square on the front of the jug, leaving about two inches of plastic below it so the seed would not spill out. The plastic was too tough for her hands, so Uncle Sami did the cutting while Amira held the jug still.",
        "“Step two. Poke drainage holes.” Uncle Sami turned the jug upside down, and Amira used the nail to poke four tiny holes in the bottom. “Rain and snow will get in,” Uncle Sami explained, “so the water needs a way out. Wet seed turns moldy, and moldy seed can make birds sick.”"
      ],
      choices: [
        "Uncle Sami explains why wet seed is bad for birds.",
        "Amira learns how to cut plastic with strong scissors.",
        "Amira and Uncle Sami begin to turn the milk jug into a feeder.",
        "Amira and Uncle Sami hang the feeder on the maple tree."
      ],
      answer: "Amira and Uncle Sami begin to turn the milk jug into a feeder.",
      explanation: "Both paragraphs are the first building steps: cutting the window and poking the drainage holes. Wet seed is one small detail in paragraph 6, Uncle Sami does the cutting because the plastic is too tough for Amira, and the feeder is not hung until later." },

    // Item 6 — hot text: click 2 sentences from a list
    { id: "B06", p: 0, type: "hottext", layout: "list", pick: 2,
      q: "The passage shows that Uncle Sami lets Amira be IN CHARGE of building the feeder. Click on the TWO sentences from the passage that BEST support this idea.",
      choices: [
        "Uncle Sami, who lived in the apartment over the garage, came in stamping snow off his boots.",
        "On the first card she wrote SUPPLIES.",
        "“You're the boss of this project,” Uncle Sami said. “I'm just the helper with the sharp things.”",
        "Uncle Sami did not pick up the scissors until she had read the whole card.",
        "The plastic was too tough for her hands, so Uncle Sami did the cutting while Amira held the jug still.",
        "Uncle Sami tugged hard on the branch two times."
      ],
      answers: [
        "“You're the boss of this project,” Uncle Sami said. “I'm just the helper with the sharp things.”",
        "Uncle Sami did not pick up the scissors until she had read the whole card."
      ],
      explanation: "Uncle Sami calls Amira the boss and himself the helper, and then he waits for her to read each card before he does anything. Both show him letting her lead. The other sentences show someone doing a job, but not who is in charge." },

    /* ── PASSAGE 2 · items 7–11 ── */

    // Item 7 — summary with a missing key event
    { id: "B07", p: 1,
      q: "Read this summary of the passage. Which KEY event is MISSING from the summary?",
      excerptLabel: "📝 A summary of “Pick a Spot”",
      excerpt: [
        "The Rockets and the Owls are tied in a championship soccer game, and Lena steps up to take a penalty kick that could win it. She remembers how her older sister, Noor, taught her in the backyard to pick a spot and trust it. She also remembers the night Noor almost stayed home instead of going to college in Colorado. After the game, Lena calls Noor to tell her what happened."
      ],
      choices: [
        "Noor almost decides not to go to college in Colorado.",
        "Lena kicks the ball into the low left corner and wins the championship.",
        "Lena touches the green headband before she kicks.",
        "The Owls' goalkeeper bounces on her toes and waves her arms."
      ],
      answer: "Lena kicks the ball into the low left corner and wins the championship.",
      explanation: "The summary sets up the big kick and then jumps straight to the phone call, so it never tells what happened when Lena kicked — the most important event in the story. Noor almost staying home is already in the summary, and the headband and the goalkeeper's waving arms are small details." },

    // Item 8 — evidence for a conclusion
    { id: "B08", p: 1, longChoices: true,
      q: "Which detail from the passage BEST shows that Noor was PATIENT while she was teaching Lena?",
      choices: [
        "Noor was sixteen then and played goalkeeper for the high school team.",
        "Lena missed more kicks than she made that summer, but Noor never once said they should stop.",
        "Then she laughed and wiped her eyes, pulled the green headband off her own head, and put it on Lena's.",
        "Noor answered on the first ring, whispering."
      ],
      answer: "Lena missed more kicks than she made that summer, but Noor never once said they should stop.",
      explanation: "Being patient means you keep going even when things go slowly. Lena missed most of her kicks, and Noor still never gave up on the practices. Her age and team tell who she is, and the headband and the phone call happen long after the teaching." },

    // Item 9 — EBSR: character trait + support
    { id: "B09", p: 1, type: "ebsr",
      partA: {
        q: "Part A — Which word BEST describes Lena when she takes the last kick?",
        choices: [
          "careless",
          "focused",
          "boastful",
          "confused"
        ],
        answer: "focused",
        explanation: "Focused means paying attention to one thing and not letting anything distract you. Lena picks her corner first and keeps her eyes on it the whole time, even with the goalkeeper waving her arms. She follows Noor's plan exactly, so she is not careless or confused, and she never brags." },
      partB: {
        q: "Part B — Which sentence from the passage BEST supports the answer in Part A?",
        longChoices: true,
        choices: [
          "Lena reached up and touched the green headband she was wearing.",
          "She did not look at the goalkeeper's waving arms at all.",
          "The Rockets poured off the bench and piled onto Lena so hard that the green headband got knocked down over one eye.",
          "After the trophy ceremony, Lena borrowed Dad's phone and called Colorado."
        ],
        answer: "She did not look at the goalkeeper's waving arms at all.",
        explanation: "The goalkeeper is trying to distract her, and Lena does not even look — that is what being focused looks like. Touching the headband happens before she starts her kick, and the other two choices happen after the kick is over." } },

    // Item 10 — choose TWO: idiom with a literal-reading trap
    { id: "B10", p: 1, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “The night before she left, Noor got cold feet.” What does the phrase “got cold feet” suggest about Noor? Choose TWO answers.",
      choices: [
        "She felt nervous about making such a big change.",
        "Her feet were cold from sitting outside at night.",
        "She started to think about not going after all.",
        "She needed warmer socks for the snow in Colorado.",
        "She could not wait to leave for Colorado."
      ],
      answers: [
        "She felt nervous about making such a big change.",
        "She started to think about not going after all."
      ],
      explanation: "“Getting cold feet” is an idiom — it is not about real feet. It means you get nervous right before something big and start to think about backing out. That matches what Noor says next: “Maybe I should just go to the college here.” The night was warm, so her feet were not really cold, and she was not eager to leave." },

    // Item 11 — written response
    { id: "B11", p: 1, type: "cr",
      q: "What can you infer about the relationship between Lena and her sister Noor? Use details from the passage to support your answer.",
      guidance: "Tell what kind of relationship they have. Then give at least TWO details from the story that prove it, and explain how each one shows it.",
      model: "Lena and Noor are very close, and they help each other be brave. Noor spent her summer evenings teaching Lena penalty kicks in the backyard, and she never said they should stop, even when Lena missed most of her kicks. Later, when Noor got cold feet about leaving for college, Lena used Noor's own advice, “pick your spot,” to help her go. Noor gave Lena her green headband, and Lena wore it in the big game and called Noor right after she scored. Each sister helps the other one go after her goal.",
      checklist: [
        "I said what their relationship is like — not just that they are sisters.",
        "I used at least TWO details from the story.",
        "I explained how each detail shows the relationship."
      ] },

    /* ── PASSAGE 3 · items 12–15 ── */

    // Item 12 — choose TWO synonyms
    { id: "B12", p: 2, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “Pell was so anxious that his hands shook as he set his bowl down beside theirs.” Which TWO words mean about the same as anxious? Choose TWO answers.",
      choices: [
        "proud",
        "worried",
        "sleepy",
        "nervous",
        "cheerful",
        "greedy"
      ],
      answers: [
        "worried",
        "nervous"
      ],
      explanation: "The clue is in the same sentence: Pell's hands shook. He is about to show the queen a bowl he could not make whole, so he is worried and nervous about what she will say. Nothing shows he is proud, sleepy, cheerful or greedy." },

    // Item 13 — summary of a bounded section
    { id: "B13", p: 2,
      q: "Which statement BEST summarizes the LAST THREE paragraphs of the passage?",
      choices: [
        "Darin's face turns red when the queen finds out that he bought a new bowl.",
        "Pell becomes the queen's new advisor.",
        "The queen chooses Pell because he fixed his bowl better than anyone else in the kingdom could.",
        "The queen explains why honesty matters, Pell becomes her advisor and always tells her the truth, and families still use a cracked bowl to teach the lesson."
      ],
      answer: "The queen explains why honesty matters, Pell becomes her advisor and always tells her the truth, and families still use a cracked bowl to teach the lesson.",
      explanation: "A good summary of a section covers every paragraph in it, in a few words. The last three paragraphs are the queen's lesson, Pell's years as her advisor, and the cracked bowl that families still keep. Pell becoming advisor is only one part, Darin's red face comes before that section, and the queen chose Pell for his honesty, not for his fixing skills." },

    // Item 14 — choose THREE: what a simile shows
    { id: "B14", p: 2, type: "ms", pick: 3,
      q: "Read these sentences from the passage. “An honest word is like Pell's bowl. It may not look perfect, but it holds what you put in it. A pretty answer that hides the truth is like a painted crack. It looks fine right up until the moment you need it to hold.” What do these comparisons show about what the queen believes? Choose THREE answers.",
      choices: [
        "Telling the truth matters more than looking perfect.",
        "The queen's advisor must be good at fixing broken bowls.",
        "People can count on someone who is honest.",
        "Bowls with paint on them should never be used in the palace.",
        "Hiding a mistake may look good at first, but it fails when it matters.",
        "Pell's bowl is the most beautiful bowl in the kingdom."
      ],
      answers: [
        "Telling the truth matters more than looking perfect.",
        "People can count on someone who is honest.",
        "Hiding a mistake may look good at first, but it fails when it matters."
      ],
      explanation: "The queen compares words to bowls to explain why she chose Pell: an honest answer may not look perfect, but you can count on it, while a hidden mistake looks fine only until it is tested. The wrong choices read the comparison as if it were about real bowls and real paint instead of about honesty. Pell's bowl even has a crooked line, so it is not the most beautiful." },

    // Item 15 — hot text: click 2 sentences inside a re-shown paragraph
    { id: "B15", p: 2, type: "hottext", layout: "para", pick: 2,
      q: "Read paragraph 2 from the passage. The passage shows that Queen Ilsa is HONEST herself. Click on the TWO sentences in the paragraph that BEST support this idea.",
      choices: [
        "Queen Ilsa lived in a white stone palace at the top of the tallest hill.",
        "One spring, when the river flooded and ruined the wheat fields, she did not pretend that all would be well.",
        "Instead, she stood in the town square and told the people the truth: there would be less bread that winter, and the palace would eat less too.",
        "Around that time, her old advisor, Bram, grew too tired to climb the palace stairs.",
        "He asked to spend his last years in his garden, and the queen agreed.",
        "So she sent word to every village that she needed a new advisor."
      ],
      answers: [
        "One spring, when the river flooded and ruined the wheat fields, she did not pretend that all would be well.",
        "Instead, she stood in the town square and told the people the truth: there would be less bread that winter, and the palace would eat less too."
      ],
      explanation: "Being honest means telling the truth, even when it is hard news. When the flood ruined the wheat, the queen did not pretend things were fine — she told her people the truth about the bread herself. The other sentences tell where she lived and why she needed a new advisor, but they do not show her honesty." }

  ]
};
