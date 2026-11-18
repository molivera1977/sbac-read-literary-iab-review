/* ═══════════════════════════════════════════════════════
   SBAC IAB REVIEW · Read Literary Texts
   FORM B — 3 passages, 15 items, 16 scored points
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
window.FORM_B = {

  passages: [

    /* ── PASSAGE 1 ─────────────────────────────────────
       Realistic fiction that teaches a process. Two
       cousins build a kite from garage leftovers, step by
       step, and a picture shows how the parts fit. */
    {
      id: "B-P1",
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
      id: "B-P2",
      title: "One Hundred Before Dinner",
      source: "Original practice passage",
      genre: "Realistic fiction",
      paragraphs: [
        "No time was left on the clock, and the Hillcrest Hawks were behind the Bay View Bulldogs, 42 to 41. Kenji Watanabe stood at the free-throw line with the ball in his hands. The gym was so quiet that he could hear the scoreboard buzzing. He had been fouled on his way to the basket, and now he had two shots. Make one, and the game would be tied. Make both, and the Hawks would be the league champions.",
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
       Fable. An old oriole tests three young birds with a
       nest in a windy oak. The one whose nest fell twice,
       and who learned why each time, wins over the one
       whose nest stood by luck; a map simile carries the
       moral (a mistake teaches you, if you study it). */
    {
      id: "B-P3",
      title: "The Nest Teacher",
      source: "Original practice passage",
      genre: "Fable",
      note: "A fable is a short story, often with animals as the characters, that teaches a lesson. The lesson is called the moral.",
      paragraphs: [
        "Long ago, the young birds of Alder Wood learned to build their nests from Old Oriole. Her nests were so well made that in forty springs, not one of them had ever fallen. But Old Oriole's wings now ached on chilly mornings, so she decided it was time to choose a new nest teacher.",
        "She invited three young birds, Thrush, Jay, and Finch, to the enormous oak at the edge of the forest. None of them had ever built a nest alone. “Each of you will build a nest in this tree,” Old Oriole told them. “The wind blows especially hard here, so build carefully. In three days I will return, and you will tell me what you learned.”",
        "Jay did not waste a minute. He grabbed the nearest sticks he could find, piled them where two branches met, close to the trunk, and finished his nest by lunchtime. He did not realize it, but he had built in a spot where the trunk protected his nest from the wind.",
        "Finch and Thrush built their nests far out on a long, thin branch. That night the wind came roaring through Alder Wood, the thin branch whipped back and forth, and by morning both nests lay broken on the ground. Finch stared at the scattered pieces and shook out her feathers. “Nest building is just not for me,” she announced, and she flew home.",
        "Thrush hopped down and examined every piece to discover what had gone wrong. The bottom had pulled apart when the branch shook, so she carried mud from the creek, one beakful at a time, and built a second nest with a solid floor. This time the nest itself held together, but that night the thin branch bent so far in the wind that the whole nest tipped over and fell.",
        "On the third morning, the grass under the oak was wet and cold. Thrush's wings ached from carrying all that mud, but she gathered new sticks and started over for the third time. This time she chose a short, thick branch close to the trunk, where the wind could not bend it. Up in his nest, Jay sang loudly about how quickly he had finished. Thrush did not stop to rest until the last stick was in place, long after the sun had gone down.",
        "That night the wind roared again, but Thrush's new nest did not move at all. The next morning Old Oriole returned to hear what they had learned, and Finch came along to see who would be chosen.",
        "Jay puffed out his chest. “I learned that I am just good at this,” he said. “My nest never fell, not even once.” Finch shrugged and said, “I learned that I am not.” Then Thrush spoke. “I learned that a nest needs a mud floor, that thin branches bend in the wind, and that the safest spot is close to the trunk.”",
        "Old Oriole nodded slowly. “Thrush will be the next nest teacher,” she said.",
        "Jay and Finch were perplexed. Jay looked from his own nest to Thrush's nest and back again, as if he had missed an important part of the story, and Finch opened her beak and closed it again without saying anything. “But her nest fell down two times,” said Jay. “Mine never fell at all.”",
        "“Your nest stood, Jay, but you cannot tell me why it stood,” said Old Oriole. “Thrush can. A fallen nest is like a map. It shows you every wrong turn, so you never take that turn again. But a map only helps if you stop and read it. Thrush has two maps, and she has read them both.”",
        "The following spring, Thrush hung her two fallen nests on a low branch for the young birds to study. Jay and Finch came to her first lesson, and this time, when Finch's nest fell, she did not fly home. She picked up the pieces and looked.",
        "Ever since then, whenever a young bird's first nest falls in Alder Wood, the older birds never say, “Too bad.” They say, “Good. Now go pick up the pieces and look.”"
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
      explanation: "Paragraph 3 says Malik “wanted to know how everything worked.” Then the paragraph gives proof. Malik took apart a clock to see the gears. He drew the insides of flashlights. Malik is a curious kid. He loves to find out how things are made. Malik is not upset. He is not worried. He is ready to start while he and Desmond are still at the park." },

    // Item 2 — word meaning in context
    { id: "B02", p: 0,
      q: "Read this sentence from the passage. “He pulled until the string was taut and the sticks did not wobble at all when he tapped them.” What does the word **taut** mean in this sentence?",
      choices: [
        "loose and floppy",
        "pulled tight",
        "tied in a bow",
        "wet and heavy"
      ],
      answer: "pulled tight",
      explanation: "There are two clues. The first clue is “He pulled until.” The second clue is “the sticks did not wobble at all.” Pulling hard on a string makes the string tight. A tight string holds the sticks still. A loose, floppy string would let the sticks wobble." },

    // Item 3 — purpose of the picture
    { id: "B03", p: 0, showFigure: true,
      q: "Look at the picture from the passage. Why does the author include this picture?",
      choices: [
        "to show the kites Malik saw flying over Carver Park",
        "to show how high the kite will fly when the wind comes",
        "to show where each part of the finished kite goes",
        "to explain why Grandpa Ike liked to build kites"
      ],
      answer: "to show where each part of the finished kite goes",
      explanation: "The picture has labels. The labels name the long stick and the short stick. The labels name the frame string, the sail, and the bridle. The labels name the loop, the flying line, and the tail. The labels help readers see how the steps in the story fit together. The picture does not show the park or the sky. The picture does not show Grandpa Ike." },

    // Item 4 — EBSR: conclusion + supporting sentence
    { id: "B04", p: 0, type: "ebsr",
      partA: {
        q: "What conclusion can be drawn about Desmond?",
        choices: [
          "He has never flown a kite, but he wants to learn.",
          "He would rather work alone than with Malik.",
          "He has made kites many times before.",
          "He is tired of staying at Malik's house for spring break."
        ],
        answer: "He has made kites many times before.",
        explanation: "Desmond says he made a kite with Grandpa Ike “every spring.” So he “could do this with my eyes closed.” The words tell us Desmond has made kites many times. He works with Malik the whole time. Nothing shows Desmond is bored. Nothing shows he is new to kites." },
      partB: {
        q: "Which sentence from the passage **best** supports the answer in Part A?",
        longChoices: true,
        choices: [
          "“Can we get one?” he asked his cousin Desmond, who was fourteen and was staying with Malik's family for spring break.",
          "“Grandpa Ike and I made a kite every spring when I was your age,” Desmond said, “so I could do this with my eyes closed.”",
          "Malik traced around the diamond of string with a marker, leaving a border about two fingers wide.",
          "“Weather report says wind tomorrow,” Desmond said, sitting down next to him."
        ],
        answer: "“Grandpa Ike and I made a kite every spring when I was your age,” Desmond said, “so I could do this with my eyes closed.”",
        explanation: "The words “every spring” mean Desmond made kites year after year. The words “with my eyes closed” mean he knows the steps by heart. One choice tells about spring break. That choice only tells his age and why he is there. The choice with the marker is about Malik. The weather report does not tell if he made kites before." } },

    // Item 5 — main idea of re-shown building paragraphs
    { id: "B05", p: 0,
      q: "Read paragraphs 5 and 6 from the passage again. What is the main idea of these paragraphs?",
      excerpt: [
        "First, they made the frame. Desmond showed Malik how to lay the shorter stick across the longer one, about a quarter of the way down from the top, so the two sticks made a shape like a lowercase t. “You tie it,” Desmond said, handing him the string. “I'll just tell you where.” Malik wrapped the string around the place where the sticks crossed, first one way and then the other, making an X. He pulled until the string was taut and the sticks did not wobble at all when he tapped them.",
        "Next came the frame string. Desmond used the tip of the scissors to scratch a tiny notch into each end of both sticks. Malik ran the string through the notch at the top, then across to the notch on the right, down to the bottom, over to the left, and back up to the top again. When he was done, the string made the outline of a diamond around the sticks. “That's the shape of the whole kite,” Desmond said. “Now it just needs a skin.”"
      ],
      choices: [
        "Malik cuts the sail out of a plastic garbage bag.",
        "Malik and Desmond find the parts they need in the garage.",
        "Desmond uses the scissors to scratch a tiny notch into each end of both sticks.",
        "Malik and Desmond build the part that gives the kite its shape."
      ],
      answer: "Malik and Desmond build the part that gives the kite its shape.",
      explanation: "Paragraph 5 starts with “First, they made the frame.” The frame is the sticks and the string. In paragraph 6, Malik runs the frame string around the sticks. Then Desmond says, “That's the shape of the whole kite.” So both paragraphs are about building the part that gives the kite its shape. Scratching the notches is just one small step. Finding the parts comes first. The sail comes later." },

    // Item 6 — hot text: click 2 sentences from a list
    { id: "B06", p: 0, type: "hottext", layout: "list", pick: 2,
      q: "The passage shows that Desmond wants Malik to do the building himself while Desmond teaches. Click on the **two** sentences from the passage that **best** support this idea.",
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
      explanation: "In the two right answers, Desmond hands Malik a tool. Then he lets Malik do the job. He even “stepped back” so Malik could cut. Handing back a cap is just a nice thing to do. In the tail sentence, Desmond explains. The two other sentences do not show Desmond at all." },

    /* ── PASSAGE 2 · items 7–11 ── */

    // Item 7 — summary with a missing key event
    { id: "B07", p: 1,
      q: "Read this summary of the passage. Which key event is missing from the summary?",
      excerptLabel: "📝 A summary of “One Hundred Before Dinner”",
      excerpt: [
        "Kenji steps to the free-throw line with no time left and his team behind by one point. He sees his little sister Mika in the bleachers with a camera and remembers how she chased his rebounds and counted his shots all summer. His first free throw rolls around the rim and drops in to tie the game. After the game, Mika shows Kenji the picture she took."
      ],
      choices: [
        "Kenji's first free throw ties the score.",
        "Mrs. Okafor teaches Mika how to use a camera.",
        "Kenji makes his second free throw, and the Hawks win.",
        "Kenji's teammates lift him up after the game."
      ],
      answer: "Kenji makes his second free throw, and the Hawks win.",
      explanation: "The summary has the first free throw. Then the summary jumps straight to the picture. So the summary skips the end of the game. The end is the most important event in the story. Mrs. Okafor's lessons are small details. The team lifts Kenji up. The lift is a small detail too." },

    // Item 8 — evidence for a conclusion
    { id: "B08", p: 1, longChoices: true,
      q: "Which detail from the passage **best** shows that Mika is sure Kenji will succeed?",
      choices: [
        "But she chased down every rebound and bounced the ball back to him, and she kept count out loud.",
        "There in the front row was his little sister, Mika, holding Grandma's old camera up to her eye.",
        "Their neighbor Mrs. Okafor took pictures for the town newspaper, and every Saturday she taught Mika how to hold the camera steady and when to press the button.",
        "“You will,” said Mika, as if it were the easiest thing in the world."
      ],
      answer: "“You will,” said Mika, as if it were the easiest thing in the world.",
      explanation: "Kenji asks what happens if he misses. Mika says “You will.” She says the words as if there were no question at all. Mika's answer shows she is sure he will make the shot. Chasing rebounds shows Mika helps Kenji. But chasing rebounds does not show she is sure he will win. The other two choices are about the camera." },

    // Item 9 — EBSR: character trait + support
    { id: "B09", p: 1, type: "ebsr",
      partA: {
        q: "Which word **best** describes Kenji at the end of the passage?",
        choices: [
          "jealous",
          "grateful",
          "boastful",
          "disappointed"
        ],
        answer: "grateful",
        explanation: "Grateful means thankful for what someone did for you. Kenji wins the game. Right then, he gives Mika credit for counting each shot. Kenji does not brag. He is not disappointed. He is glad about Mika's picture. He is not jealous of the picture." },
      partB: {
        q: "Which sentence from the passage **best** supports the answer in Part A?",
        longChoices: true,
        choices: [
          "He had been fouled on his way to the basket, and now he had two shots.",
          "Kenji bounced the ball once, twice, three times.",
          "“You counted every single one. Half of this win is yours.”",
          "The buzzer sounded, the scoreboard flashed 43 to 42, and the Hawks fans came pouring out of the bleachers."
        ],
        answer: "“You counted every single one. Half of this win is yours.”",
        explanation: "Kenji thanks Mika. He shares the win with her. Sharing the win is what a grateful person does. The other choices tell what goes on in the game. The other choices do not tell how Kenji feels about his sister." } },

    // Item 10 — choose TWO: idiom with a literal-reading trap
    { id: "B10", p: 1, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “Mika was still learning the ropes, and most of her pictures came out blurry.” What does the phrase “learning the ropes” suggest about Mika? Choose **two** answers.",
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
      explanation: "The words “learning the ropes” are an idiom. The idiom is not about real ropes. The idiom means you are new at something. You are still learning how the job is done. The sentence before tells what Mika learns. She learns how to hold the camera steady. She learns when to press the button. Mrs. Okafor works for the newspaper. Mika does not." },

    // Item 11 — written response
    { id: "B11", p: 1, type: "cr",
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
    { id: "B12", p: 2, type: "ms", pick: 2,
      q: "Read this sentence from the passage. “Thrush hopped down and examined every piece to discover what had gone wrong.” Which **two** words mean about the same as **examined**? Choose **two** answers.",
      choices: [
        "fixed",
        "studied",
        "dropped",
        "checked",
        "gathered",
        "hid"
      ],
      answers: [
        "studied",
        "checked"
      ],
      explanation: "The rest of the sentence is the clue. Thrush looks at every piece “to discover what had gone wrong.” To find out what went wrong, you look closely and check each piece. So examined means studied or checked. Thrush fixes the problem later, with mud. But fixed does not mean the same as examined. Gathered, dropped and hid do not mean looked at closely." },

    // Item 13 — summary of a bounded section
    { id: "B13", p: 2,
      q: "Which statement **best** summarizes the last three paragraphs of the passage?",
      choices: [
        "Jay tells Old Oriole that his nest never fell, not even once.",
        "Old Oriole explains that a fallen nest can teach you, Thrush uses her fallen nests to teach, and the birds still say to look closely when a nest falls.",
        "Finch picks up the pieces of her fallen nest and looks at them.",
        "Old Oriole explains that a good nest never falls, Thrush builds a nest for each young bird, and the birds still build all of their nests close to the trunk."
      ],
      answer: "Old Oriole explains that a fallen nest can teach you, Thrush uses her fallen nests to teach, and the birds still say to look closely when a nest falls.",
      explanation: "A good summary of a section covers each paragraph. The last three paragraphs tell three things. First, Old Oriole explains that a fallen nest is like a map. Next, Thrush teaches the young birds with her two fallen nests. Last, the older birds still tell a young bird to look at a nest that falls. Finch picking up the pieces is just one detail. Jay's words about his nest come before the section. One choice says a good nest never falls. But Old Oriole chose Thrush, and her nest fell two times. That choice also says Thrush builds a nest for each bird. Nothing in the section shows her building nests for others. And nothing in the section says where the birds build their nests now." },

    // Item 14 — choose THREE: what a simile shows
    { id: "B14", p: 2, type: "ms", pick: 3,
      q: "Read these sentences from the passage. “A fallen nest is like a map. It shows you every wrong turn, so you never take that turn again. But a map only helps if you stop and read it. Thrush has two maps, and she has read them both.” What does this comparison show about what Old Oriole believes? Choose **three** answers.",
      choices: [
        "Mistakes can show you what not to do next time.",
        "Young birds should carry a map when they fly far from home.",
        "A mistake helps you only if you stop and learn from it.",
        "Thrush is better than Jay at finding her way through the woods.",
        "Thrush's two fallen nests were not a waste of time.",
        "A good nest builder never lets a nest fall, not even once."
      ],
      answers: [
        "Mistakes can show you what not to do next time.",
        "A mistake helps you only if you stop and learn from it.",
        "Thrush's two fallen nests were not a waste of time."
      ],
      explanation: "Old Oriole compares a fallen nest to a map. A map shows you the wrong turns. In the same way, a mistake shows you what not to do. But a map helps only if you read it. So you have to stop and learn from a mistake. Thrush has two maps, and she has read them both. So her two fallen nests were worth something. Two wrong choices act like the map is a real map. But Old Oriole is talking about nests, not about finding the way. One wrong choice says a good builder never lets a nest fall. Old Oriole believes the opposite. She chose Thrush, and her nest fell two times." },

    // Item 15 — hot text: click 2 sentences inside a re-shown paragraph
    { id: "B15", p: 2, type: "hottext", layout: "para", pick: 2,
      q: "Read paragraph 6 from the passage. The passage shows that Thrush is determined. Click on the **two** sentences in the paragraph that **best** support this idea.",
      choices: [
        "On the third morning, the grass under the oak was wet and cold.",
        "Thrush's wings ached from carrying all that mud, but she gathered new sticks and started over for the third time.",
        "This time she chose a short, thick branch close to the trunk, where the wind could not bend it.",
        "Up in his nest, Jay sang loudly about how quickly he had finished.",
        "Thrush did not stop to rest until the last stick was in place, long after the sun had gone down."
      ],
      answers: [
        "Thrush's wings ached from carrying all that mud, but she gathered new sticks and started over for the third time.",
        "Thrush did not stop to rest until the last stick was in place, long after the sun had gone down."
      ],
      explanation: "Determined means you keep going toward a goal, even when it is hard. Thrush's wings ache, but she starts over a third time. She does not stop to rest until her nest is done, even after dark. Choosing a thick branch shows that Thrush learned from her mistakes. But that sentence tells where she built, not that she kept going. The sentence about the grass only tells what the morning was like. The sentence about Jay does not show Thrush at all." }

  ]
};
