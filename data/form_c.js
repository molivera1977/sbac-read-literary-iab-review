/* ═══════════════════════════════════════════════════════
   SBAC IAB REVIEW · Read Literary Texts
   FORM C — 3 passages, 15 items, 16 scored points
            (+ 1 written answer Mr. O scores himself)

   Built to the CT IAB blueprint for Read Literary Texts
   (grade 4):
     P1 (6 items) realistic fiction that teaches a PROCESS,
                  with an embedded picture
     P2 (5 items) sports fiction with a flashback frame
     P3 (4 items) traditional-style fable with a test
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
       Realistic fiction that teaches a process. Two
       cousins build a kite from garage leftovers, step by
       step, and a picture shows how the parts fit. */
    {
      id: "C-P1",
      title: "Two Sticks and a Bag",
      source: "Original practice passage",
      genre: "Realistic fiction",
      figure: {
        after: 8,
        caption: "A homemade kite like the one Malik and Desmond built",
        alt: "A drawing of a diamond-shaped kite. A long stick runs from top to bottom, and a short stick crosses it near the top, tied in an X. A frame string runs around the four ends of the sticks, and a plastic sail covers the frame. A bridle string is tied to the top and bottom of the long stick, with a small loop where the flying line is tied. A tail with bows hangs from the bottom.",
        svg: '<svg viewBox="0 0 600 340" xmlns="http://www.w3.org/2000/svg" font-family="Georgia, serif" font-size="14">' +
             '<rect width="600" height="340" rx="12" fill="#fffdf6"/>' +
             // sail (plastic bag)
             '<path d="M300 28 L395 85 L300 250 L205 85 Z" fill="#bbdefb"/>' +
             // frame string
             '<path d="M300 28 L395 85 L300 250 L205 85 Z" fill="none" stroke="#455a64" stroke-width="2"/>' +
             // sticks
             '<g stroke="#8d6e43" stroke-width="5" stroke-linecap="round"><line x1="300" y1="28" x2="300" y2="250"/><line x1="205" y1="85" x2="395" y2="85"/></g>' +
             // string tied in an X where the sticks cross
             '<path d="M292 77 L308 93 M308 77 L292 93" stroke="#37474f" stroke-width="2.5"/>' +
             // bridle + loop
             '<path d="M300 40 Q352 110 352 140 Q352 170 300 230" fill="none" stroke="#c62828" stroke-width="2"/>' +
             '<circle cx="352" cy="140" r="5" fill="none" stroke="#c62828" stroke-width="2"/>' +
             // flying line
             '<line x1="356" y1="144" x2="446" y2="336" stroke="#263238" stroke-width="1.5"/>' +
             // tail with bows
             '<path d="M300 250 q-16 16 -4 32 q12 16 -6 34" fill="none" stroke="#ef6c00" stroke-width="4"/>' +
             '<g fill="#ef6c00"><path d="M286 276 L306 288 L306 276 L286 288 Z"/><path d="M280 310 L300 322 L300 310 L280 322 Z"/></g>' +
             // labels — left
             '<g stroke="#607d8b" stroke-width="1.5"><line x1="156" y1="32" x2="298" y2="48"/><line x1="156" y1="86" x2="212" y2="85"/><line x1="156" y1="148" x2="242" y2="150"/><line x1="156" y1="208" x2="290" y2="206"/><line x1="156" y1="300" x2="288" y2="300"/></g>' +
             '<g fill="#263238" text-anchor="end"><text x="150" y="36">Long stick</text><text x="150" y="90">Short stick</text><text x="150" y="152">Frame string</text><text x="150" y="212">Sail (plastic bag)</text><text x="150" y="304">Tail</text></g>' +
             // labels — right
             '<g stroke="#607d8b" stroke-width="1.5"><line x1="446" y1="110" x2="346" y2="110"/><line x1="446" y1="152" x2="359" y2="142"/><line x1="446" y1="262" x2="414" y2="264"/></g>' +
             '<g fill="#263238"><text x="452" y="114">Bridle</text><text x="452" y="156">Loop</text><text x="452" y="266">Flying line</text></g>' +
             '</svg>'
      },
      paragraphs: [
        "On the first windy day of spring, the sky over Carver Park was full of kites, including one shaped like a giant purple octopus. Malik Johnson tipped his head back to watch them, so far back that his cap fell off.",
        "“Can we get one?” he asked his cousin Desmond, who was fourteen and was staying with Malik's family for spring break. Desmond picked up Malik's cap and handed it back. “Why buy one?” he said. “We can build a kite out of stuff you already have in your garage.”",
        "That was all Malik needed to hear. He was the kind of kid who wanted to know how everything worked. He had once taken apart an old alarm clock just to see the gears inside, and he had a whole notebook full of drawings of bridges, rockets, and the insides of flashlights. Before they had even left the park, he had the notebook open and his pencil ready. “Okay,” he said. “Step one. Go.”",
        "Desmond laughed. “Step one is finding the parts.” In the garage, they found two thin wooden sticks, one about three feet long and one a little shorter. They also found a ball of string, a roll of tape, scissors, and a big plastic garbage bag. “Grandpa Ike and I made a kite every spring when I was your age,” Desmond said, “so I could do this with my eyes closed.”",
        "First, they made the frame. Desmond showed Malik how to lay the shorter stick across the longer one, about a quarter of the way down from the top, so the two sticks made a shape like a lowercase t. “You tie it,” Desmond said, handing him the string. “I'll just tell you where.” Malik wrapped the string around the place where the sticks crossed, first one way and then the other, making an X. He pulled until the string was taut and the sticks did not wobble at all when he tapped them.",
        "Next came the frame string. Desmond used the tip of the scissors to scratch a tiny notch into each end of both sticks. Malik ran the string through the notch at the top, then across to the notch on the right, down to the bottom, over to the left, and back up to the top again. When he was done, the string made the outline of a diamond around the sticks. “That's the shape of the whole kite,” Desmond said. “Now it just needs a skin.”",
        "The skin was the sail. They cut the garbage bag open, spread it flat, and laid the frame on top of it. Malik traced around the diamond of string with a marker, leaving a border about two fingers wide. Then Desmond handed Malik the scissors and stepped back. Malik cut slowly along the line, with his tongue poking out of the corner of his mouth. Together they folded the border over the frame string and taped it down all the way around.",
        "“Now the most important part,” Desmond said. “The bridle.” Malik poked two small holes in the plastic and tied a piece of string from the top of the long stick to a spot near the bottom. Desmond pinched the bridle string a little above the middle and tied a small loop there. “The flying line ties onto this loop,” he explained. “The bridle tips the kite at just the right angle, so the wind pushes it up instead of knocking it down.”",
        "Last came the tail. Malik knotted strips of leftover plastic end to end, with a bow at every knot, until the tail was longer than he was. They tied it to the bottom of the long stick. “Without a tail, a kite spins around in circles,” Desmond said. “The tail keeps it pointed at the sky.”",
        "Malik tied the flying line to the loop, and they carried the kite outside. But the afternoon had gone completely still. The leaves on the maple tree hung down without moving, and the flag at the school across the street drooped against its pole.",
        "Malik sat down on the front steps with the kite across his knees. He opened his notebook and drew the kite, part by part, and labeled every piece. “Weather report says wind tomorrow,” Desmond said, sitting down next to him. Malik turned to a fresh page and wrote in big letters: LAST STEP: WAIT FOR THE WIND."
      ]
    },

    /* ── PASSAGE 2 ─────────────────────────────────────
       Sports fiction with a flashback frame: the free
       throws, the summer with the little sister who
       counted every shot, back to the last shot. The
       sibling relationship carries the written answer. */
    {
      id: "C-P2",
      title: "One Hundred Before Dinner",
      source: "Original practice passage",
      genre: "Realistic fiction",
      paragraphs: [
        "Two seconds were left on the clock, and the Hillcrest Hawks were behind the Bay View Bulldogs, 42 to 41. Kenji Watanabe stood at the free-throw line with the ball in his hands. The gym was so quiet that he could hear the scoreboard buzzing. He had been fouled on his way to the basket, and now he had two shots. Make one, and the game would be tied. Make both, and the Hawks would be the league champions.",
        "Kenji bounced the ball once, twice, three times. His palms were damp, and the rim looked smaller than it ever had before. He glanced up at the bleachers. There in the front row was his little sister, Mika, holding Grandma's old camera up to her eye.",
        "All summer long, Mika had been the reason Kenji practiced. The court at the end of Larch Street had a bent rim and a net made of chains, and every afternoon before dinner, the two of them walked down there with Kenji's ball. Mika was eight, two years younger than Kenji, and much too short to block a shot. But she chased down every rebound and bounced the ball back to him, and she kept count out loud. “Forty-one. Forty-two. That one doesn't count. It hit the backboard first.”",
        "“One hundred before dinner,” she said every single day, the way a coach would. Some days it took until the streetlights came on, but Mika never once asked to go home early, not even when the mosquitoes came out.",
        "Mika had a dream of her own. She wanted to be a sports photographer, the kind who kneels right next to the court and catches the exact second a ball leaves a player's fingers. Their neighbor Mrs. Okafor took pictures for the town newspaper, and every Saturday she taught Mika how to hold the camera steady and when to press the button. Mika was still learning the ropes, and most of her pictures came out blurry. But she carried the camera everywhere.",
        "One evening, after Kenji's hundredth shot finally rattled through the chains, Mika flopped down on the warm blacktop. “When you play in the championship,” she said, “I'm going to take a picture of your winning shot. It will be my first real sports picture.”",
        "Kenji laughed. “What if I don't make the winning shot?”",
        "“You will,” said Mika, as if it were the easiest thing in the world. “You make a hundred every day.”",
        "“Two shots,” the referee said, and Kenji was back in the gym.",
        "He bent his knees, the way he had a thousand times on Larch Street, and flicked his wrist. The ball hit the front of the rim, bounced straight up, rolled all the way around, and dropped through. Forty-two to forty-two. The Hawks fans jumped to their feet, and then the referee held up one finger, and they sat back down.",
        "One more. Kenji took a deep breath. In his head, he could hear Mika counting the way she always did at the very end of practice, slow and loud. Ninety-eight. Ninety-nine.",
        "He bent his knees. He flicked his wrist. The ball went up in a high, soft arc and fell through the net without touching the rim. The buzzer sounded, the scoreboard flashed 43 to 42, and the Hawks fans came pouring out of the bleachers.",
        "By the time Kenji's teammates set him back down, Mika was pushing through the crowd with the camera held high over her head. “I got it!” she shouted. She turned the little screen around so he could see. There was the ball, a small orange circle in the air, just leaving his fingertips. It was not even a little bit blurry.",
        "Kenji looked at the picture for a long time. Then he put his arm around his sister's shoulders. “That was number one hundred,” he said. “You counted every single one. Half of this win is yours.”"
      ]
    },

    /* ── PASSAGE 3 ─────────────────────────────────────
       Fable. An old tortoise tests three animals with a
       walk up a hill, the humble one wins, and a lantern
       simile carries the moral. */
    {
      id: "C-P3",
      title: "The Slowest Climb",
      source: "Original practice passage",
      genre: "Fable",
      note: "A fable is a short story, often with animals as the characters, that teaches a lesson. The lesson is called the moral.",
      paragraphs: [
        "Long ago, the animals of Fern Valley had a guardian who watched over them, and for one hundred years that guardian was Grandmother Tortoise. She knew which paths flooded in the spring and which caves stayed warm in the winter. When a young animal wandered off and got lost, she was always the one who found it. But Grandmother Tortoise had grown very old, and her eyes were not as sharp as they used to be. She knew it was time to choose a new guardian.",
        "One morning she called the animals together at the bottom of Thimble Hill. “Tomorrow at noon, I will choose the next guardian,” she said. “Whoever wishes to be chosen should meet me right here. We will walk to the top of the hill together, and at the top I will make my choice.”",
        "The next day, three animals were waiting at the bottom of the hill. There was Bear, who was the strongest animal in the valley. There was Fox, who was the cleverest. And there was Field Mouse, who was small and gray and hardly ever spoke at meetings.",
        "Grandmother Tortoise took one slow step up the path, and then another. Bear could not stand to go so slowly. “Watch this, everyone!” he shouted, and he charged straight up the steepest side of the hill, knocking rocks loose as he went. Fox gave a little smile and slipped into the bushes, for she knew a secret rabbit trail that was shorter than any path. Only Field Mouse stayed behind.",
        "The climb took the whole afternoon. Every few steps, Grandmother Tortoise stopped to rest, and each time, Field Mouse sat down beside her and waited as if she had nowhere else to be. Halfway up, the path passed a patch of wild strawberries. Then it grew steep and rocky, and Field Mouse ran ahead to push the loose pebbles out of the old tortoise's way. Even when the sun began to sink toward the trees, Field Mouse did not try to hurry her friend along.",
        "When at last they reached the top, Bear was stretched out on a flat rock in the sun. “What took you so long?” he called. “I've been up here for hours.” Fox stepped out from behind a bush and brushed off her tail. “I would have been here even sooner,” she said, “but I stopped to take a nap. Nobody else knows about the rabbit trail.”",
        "Grandmother Tortoise caught her breath. Then she said, “Field Mouse will be the next guardian of Fern Valley.”",
        "Bear and Fox were perplexed. Bear scratched his head with one huge paw, and Fox tilted her head to one side, as if she were trying to solve a riddle. “But I got here first,” said Bear. “And I found the quickest way,” said Fox.",
        "“I did not ask you to reach the top of the hill,” said Grandmother Tortoise. “I asked you to walk to the top with me. A guardian is like a lantern on a dark path. A lantern does not run ahead so that everyone will look at it. It stays close beside the traveler, so the traveler can see where to step.”",
        "Field Mouse looked down at her small gray paws. “But I am the smallest one here,” she said quietly. Grandmother Tortoise smiled. “A small lantern lights the path just as well as a big one,” she said.",
        "That evening, the four of them walked back down Thimble Hill together. Bear carried Grandmother Tortoise on his broad back, one careful step at a time, and Fox walked beside him and pointed out the loose rocks. Field Mouse walked at the front, looking back every few steps to make sure that no one was left behind.",
        "And it is said that, to this day, whenever the animals of Fern Valley choose a new guardian, they climb Thimble Hill together, and no one is allowed to walk faster than the slowest animal."
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
      q: "Read paragraph 3 from the passage. What does paragraph 3 show about Malik?",
      excerpt: [
        "That was all Malik needed to hear. He was the kind of kid who wanted to know how everything worked. He had once taken apart an old alarm clock just to see the gears inside, and he had a whole notebook full of drawings of bridges, rockets, and the insides of flashlights. Before they had even left the park, he had the notebook open and his pencil ready. “Okay,” he said. “Step one. Go.”"
      ],
      choices: [
        "He is upset that his family will not buy him a kite.",
        "He likes to find out how things are built and how they work.",
        "He would rather draw pictures than fly a kite at the park.",
        "He is worried that building a kite will be too hard for him."
      ],
      answer: "He likes to find out how things are built and how they work.",
      explanation: "The paragraph says he “wanted to know how everything worked,” and then proves it: he took apart a clock to see the gears and drew the insides of flashlights. That is a curious kid who loves figuring out how things are made. He is not upset or worried — he is ready to start before they even leave the park." },

    // Item 2 — word meaning in context
    { id: "C02", p: 0,
      q: "Read this sentence from the passage. “He pulled until the string was taut and the sticks did not wobble at all when he tapped them.” What does the word taut mean in this sentence?",
      choices: [
        "loose and floppy",
        "pulled tight",
        "tied in a bow",
        "wet and heavy"
      ],
      answer: "pulled tight",
      explanation: "The clues are “He pulled until” and “the sticks did not wobble at all.” Pulling hard on a string makes it tight, and a tight string holds the sticks still. A loose, floppy string would let them wobble." },

    // Item 3 — purpose of the picture
    { id: "C03", p: 0, showFigure: true,
      q: "Look at the picture from the passage. Why does the author include this picture?",
      choices: [
        "to show the kites Malik saw flying over Carver Park",
        "to show how high the kite will fly when the wind comes",
        "to show where each part of the finished kite goes",
        "to explain why Grandpa Ike liked to build kites"
      ],
      answer: "to show where each part of the finished kite goes",
      explanation: "The picture labels the long stick, the short stick, the frame string, the sail, the bridle, the loop, the flying line and the tail, so readers can see how the steps in the story fit together. It does not show the park, the sky, or Grandpa Ike." },

    // Item 4 — EBSR: conclusion + supporting sentence
    { id: "C04", p: 0, type: "ebsr",
      partA: {
        q: "Part A — What conclusion can be drawn about Desmond?",
        choices: [
          "He has never flown a kite, but he wants to learn.",
          "He would rather work alone than with Malik.",
          "He has made kites many times before.",
          "He is tired of staying at Malik's house for spring break."
        ],
        answer: "He has made kites many times before.",
        explanation: "Desmond says he made a kite with Grandpa Ike “every spring,” so he “could do this with my eyes closed.” That tells us he has done it many times. He works with Malik the whole time, and nothing shows he is bored or new to kites." },
      partB: {
        q: "Part B — Which sentence from the passage BEST supports the answer in Part A?",
        longChoices: true,
        choices: [
          "“Can we get one?” he asked his cousin Desmond, who was fourteen and was staying with Malik's family for spring break.",
          "“Grandpa Ike and I made a kite every spring when I was your age,” Desmond said, “so I could do this with my eyes closed.”",
          "Malik traced around the diamond of string with a marker, leaving a border about two fingers wide.",
          "“Weather report says wind tomorrow,” Desmond said, sitting down next to him."
        ],
        answer: "“Grandpa Ike and I made a kite every spring when I was your age,” Desmond said, “so I could do this with my eyes closed.”",
        explanation: "“Every spring” means he built kites year after year, and “with my eyes closed” means he knows the steps by heart. The first choice only tells his age and why he is visiting, the third is about Malik, and the weather report says nothing about building kites before." } },

    // Item 5 — main idea of re-shown building paragraphs
    { id: "C05", p: 0,
      q: "Read paragraphs 5 and 6 from the passage again. What is the main idea of these paragraphs?",
      excerpt: [
        "First, they made the frame. Desmond showed Malik how to lay the shorter stick across the longer one, about a quarter of the way down from the top, so the two sticks made a shape like a lowercase t. “You tie it,” Desmond said, handing him the string. “I'll just tell you where.” Malik wrapped the string around the place where the sticks crossed, first one way and then the other, making an X. He pulled until the string was taut and the sticks did not wobble at all when he tapped them.",
        "Next came the frame string. Desmond used the tip of the scissors to scratch a tiny notch into each end of both sticks. Malik ran the string through the notch at the top, then across to the notch on the right, down to the bottom, over to the left, and back up to the top again. When he was done, the string made the outline of a diamond around the sticks. “That's the shape of the whole kite,” Desmond said. “Now it just needs a skin.”"
      ],
      choices: [
        "Malik cuts the sail out of a plastic garbage bag.",
        "Malik and Desmond find the parts they need in the garage.",
        "Desmond explains why a kite needs a tail.",
        "Malik and Desmond build the frame of the kite."
      ],
      answer: "Malik and Desmond build the frame of the kite.",
      explanation: "Paragraph 5 starts with “First, they made the frame,” and paragraph 6 finishes it with the frame string. Both paragraphs are about the sticks and string that hold the kite together. Finding the parts happens before, and the sail and tail come later." },

    // Item 6 — hot text: click 2 sentences from a list
    { id: "C06", p: 0, type: "hottext", layout: "list", pick: 2,
      q: "The passage shows that Desmond wants Malik to do the building HIMSELF while Desmond teaches. Click on the TWO sentences from the passage that BEST support this idea.",
      choices: [
        "Desmond picked up Malik's cap and handed it back.",
        "“You tie it,” Desmond said, handing him the string.",
        "When he was done, the string made the outline of a diamond around the sticks.",
        "Then Desmond handed Malik the scissors and stepped back.",
        "“Without a tail, a kite spins around in circles,” Desmond said.",
        "The leaves on the maple tree hung down without moving, and the flag at the school across the street drooped against its pole."
      ],
      answers: [
        "“You tie it,” Desmond said, handing him the string.",
        "Then Desmond handed Malik the scissors and stepped back."
      ],
      explanation: "In both sentences Desmond hands Malik the tool and lets him do the job — he even “stepped back” so Malik could cut. Handing back a cap is just being nice, the tail sentence is Desmond explaining, and the other two do not show Desmond at all." },

    /* ── PASSAGE 2 · items 7–11 ── */

    // Item 7 — summary with a missing key event
    { id: "C07", p: 1,
      q: "Read this summary of the passage. Which KEY event is MISSING from the summary?",
      excerptLabel: "📝 A summary of “One Hundred Before Dinner”",
      excerpt: [
        "Kenji steps to the free-throw line with two seconds left and his team behind by one point. He sees his little sister Mika in the bleachers with a camera and remembers how she chased his rebounds and counted his shots all summer. His first free throw rolls around the rim and drops in to tie the game. After the game, Mika shows Kenji the picture she took."
      ],
      choices: [
        "Kenji's first free throw ties the score.",
        "Mrs. Okafor teaches Mika how to use a camera.",
        "Kenji makes his second free throw, and the Hawks win.",
        "Kenji's teammates lift him up after the game."
      ],
      answer: "Kenji makes his second free throw, and the Hawks win.",
      explanation: "The summary jumps from the first free throw straight to the picture, so it never tells how the game ends — the most important event in the story. The first free throw is already in the summary, and Mrs. Okafor's lessons and the teammates lifting Kenji are small details." },

    // Item 8 — evidence for a conclusion
    { id: "C08", p: 1, longChoices: true,
      q: "Which detail from the passage BEST shows that Mika is sure Kenji will succeed?",
      choices: [
        "But she chased down every rebound and bounced the ball back to him, and she kept count out loud.",
        "There in the front row was his little sister, Mika, holding Grandma's old camera up to her eye.",
        "Their neighbor Mrs. Okafor took pictures for the town newspaper, and every Saturday she taught Mika how to hold the camera steady and when to press the button.",
        "“You will,” said Mika, as if it were the easiest thing in the world."
      ],
      answer: "“You will,” said Mika, as if it were the easiest thing in the world.",
      explanation: "Kenji asks what happens if he misses, and Mika answers “You will” as if there were no question about it. That shows she is sure he will make the shot. Chasing rebounds shows she helps him, but not that she is sure he will win, and the other two are about the camera." },

    // Item 9 — EBSR: character trait + support
    { id: "C09", p: 1, type: "ebsr",
      partA: {
        q: "Part A — Which word BEST describes Kenji at the END of the passage?",
        choices: [
          "jealous",
          "grateful",
          "boastful",
          "disappointed"
        ],
        answer: "grateful",
        explanation: "Grateful means thankful for what someone did for you. Right after he wins, Kenji gives Mika credit for counting every shot. He does not brag, he is not disappointed, and he is happy about her picture, not jealous of it." },
      partB: {
        q: "Part B — Which sentence from the passage BEST supports the answer in Part A?",
        longChoices: true,
        choices: [
          "He had been fouled on his way to the basket, and now he had two shots.",
          "Kenji bounced the ball once, twice, three times.",
          "“You counted every single one. Half of this win is yours.”",
          "The buzzer sounded, the scoreboard flashed 43 to 42, and the Hawks fans came pouring out of the bleachers."
        ],
        answer: "“You counted every single one. Half of this win is yours.”",
        explanation: "Kenji is thanking Mika by sharing the win with her — that is what a grateful person does. The other sentences tell what happens during the game, not how Kenji feels about his sister." } },

    // Item 10 — choose TWO: idiom with a literal-reading trap
    { id: "C10", p: 1, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “Mika was still learning the ropes, and most of her pictures came out blurry.” What does the phrase “learning the ropes” suggest about Mika? Choose TWO answers.",
      choices: [
        "She is just starting to learn how to do something new.",
        "She is learning how to tie knots in a rope.",
        "She is learning the basic skills a photographer needs.",
        "She climbs the ropes in gym class to get stronger.",
        "She already takes pictures for the town newspaper."
      ],
      answers: [
        "She is just starting to learn how to do something new.",
        "She is learning the basic skills a photographer needs."
      ],
      explanation: "“Learning the ropes” is an idiom — it has nothing to do with real ropes. It means you are new at something and still learning how it is done. The sentence before tells what Mika is learning: how to hold the camera steady and when to press the button. Mrs. Okafor is the one who works for the newspaper, not Mika." },

    // Item 11 — written response
    { id: "C11", p: 1, type: "cr",
      q: "What can you infer about the relationship between Kenji and his sister Mika? Use details from the passage to support your answer.",
      guidance: "Tell what kind of relationship they have. Then give at least TWO details from the story that prove it, and explain how each one shows it.",
      model: "Kenji and Mika are very close, and they help each other with their dreams. All summer, Mika went to the court with Kenji every day, chased his rebounds, and counted until he made one hundred shots, even when the mosquitoes came out. She believed in him so much that when he asked what would happen if he missed, she just said, “You will.” Kenji cares about her too. At the end he tells her that “Half of this win is yours,” and he looks at the picture she took for a long time, which shows he is proud of her and her dream of being a sports photographer.",
      checklist: [
        "I said what their relationship is like — not just that they are brother and sister.",
        "I used at least TWO details from the story.",
        "I explained how each detail shows the relationship."
      ] },

    /* ── PASSAGE 3 · items 12–15 ── */

    // Item 12 — choose TWO synonyms
    { id: "C12", p: 2, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “Bear and Fox were perplexed.” Which TWO words mean about the same as perplexed? Choose TWO answers.",
      choices: [
        "pleased",
        "puzzled",
        "sleepy",
        "confused",
        "hungry",
        "proud"
      ],
      answers: [
        "puzzled",
        "confused"
      ],
      explanation: "The next sentence is the clue: Bear scratches his head, and Fox tilts her head “as if she were trying to solve a riddle.” That is how people act when they are puzzled or confused. They are not pleased about the choice, and nothing shows they are sleepy or hungry." },

    // Item 13 — summary of a bounded section
    { id: "C13", p: 2,
      q: "Which statement BEST summarizes the LAST THREE paragraphs of the passage?",
      choices: [
        "Grandmother Tortoise explains that a guardian should be like a lantern that stays close to others.",
        "Field Mouse learns that being small does not matter, the four animals walk down the hill together, and the valley still climbs at the slowest animal's pace.",
        "Bear carries Grandmother Tortoise down Thimble Hill on his broad back.",
        "Bear and Fox are so upset that Field Mouse was chosen that they leave Fern Valley, and from that day on no animal ever climbs Thimble Hill again."
      ],
      answer: "Field Mouse learns that being small does not matter, the four animals walk down the hill together, and the valley still climbs at the slowest animal's pace.",
      explanation: "A good summary of a section covers every paragraph in it. The last three paragraphs are Field Mouse's worry about being small, the walk down the hill together, and the custom that lasts to this day. The lantern explanation comes just before that section, Bear carrying the tortoise is only one detail, and Bear and Fox never leave the valley." },

    // Item 14 — choose THREE: what a simile shows
    { id: "C14", p: 2, type: "ms", pick: 3,
      q: "Read these sentences from the passage. “A guardian is like a lantern on a dark path. A lantern does not run ahead so that everyone will look at it. It stays close beside the traveler, so the traveler can see where to step.” What does this comparison show about what Grandmother Tortoise believes? Choose THREE answers.",
      choices: [
        "A good guardian helps others instead of trying to be noticed.",
        "The guardian should carry a lantern when it gets dark.",
        "A leader should stay close to the ones who need help.",
        "The path up Thimble Hill is too dark to climb at night.",
        "Being first matters less than helping others along the way.",
        "The guardian should be the brightest animal in the valley."
      ],
      answers: [
        "A good guardian helps others instead of trying to be noticed.",
        "A leader should stay close to the ones who need help.",
        "Being first matters less than helping others along the way."
      ],
      explanation: "Grandmother Tortoise compares a guardian to a lantern to explain her choice. Bear and Fox ran ahead to be first and to be admired, but Field Mouse stayed beside her, the way a lantern stays with a traveler. The wrong choices read the comparison as if it were about real lanterns and real darkness, or about being the brightest — the opposite of her lesson." },

    // Item 15 — hot text: click 2 sentences inside a re-shown paragraph
    { id: "C15", p: 2, type: "hottext", layout: "para", pick: 2,
      q: "Read paragraph 5 from the passage. The passage shows that Field Mouse is PATIENT. Click on the TWO sentences in the paragraph that BEST support this idea.",
      choices: [
        "The climb took the whole afternoon.",
        "Every few steps, Grandmother Tortoise stopped to rest, and each time, Field Mouse sat down beside her and waited as if she had nowhere else to be.",
        "Halfway up, the path passed a patch of wild strawberries.",
        "Then it grew steep and rocky, and Field Mouse ran ahead to push the loose pebbles out of the old tortoise's way.",
        "Even when the sun began to sink toward the trees, Field Mouse did not try to hurry her friend along."
      ],
      answers: [
        "Every few steps, Grandmother Tortoise stopped to rest, and each time, Field Mouse sat down beside her and waited as if she had nowhere else to be.",
        "Even when the sun began to sink toward the trees, Field Mouse did not try to hurry her friend along."
      ],
      explanation: "Being patient means waiting calmly without trying to rush. Field Mouse sits and waits every time the tortoise rests, and she never hurries her, even as it gets late. Pushing the pebbles away shows she is helpful, not patient, and the other sentences describe the climb and the path." }

  ]
};
