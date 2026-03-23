// ===== INCIDENT DATA =====
// Each entry focuses on what Trump SAID or DID — his actual words and actions.
const incidents = [

  // ===== 2015 =====
  {
    date: "2015-06-16",
    title: "\"They're bringing drugs. They're bringing crime. They're rapists.\"",
    body: "In the speech that launched it all, Trump descended the golden escalator at Trump Tower and immediately called Mexican immigrants rapists and criminals. He graciously added: \"And some, I assume, are good people.\" He also promised to build a \"great, great wall\" and make Mexico pay for it. Mexico did not pay for it.",
    quote: "When Mexico sends its people, they're not sending their best. They're bringing drugs. They're bringing crime. They're rapists. And some, I assume, are good people.",
    tags: ["Immigration", "Campaign Launch"],
    sources: [
      { name: "Politico", url: "https://www.politico.com/story/2015/06/donald-trump-2016-announcement-10-best-lines-119066" },
      { name: "YouTube (Full Speech)", url: "https://www.youtube.com/watch?v=kAIfU5RBBso" }
    ]
  },
  {
    date: "2015-06-16",
    title: "\"I will be the greatest jobs president that God ever created.\"",
    body: "In the same escalator speech, Trump casually positioned himself above the Almighty in the employment department. Just one of many promises from a speech that also included \"I promise I will never be in a bicycle race\" — a dig at John Kerry for breaking his leg cycling at 72.",
    quote: "I will be the greatest jobs president that God ever created. I tell you that.",
    tags: ["Self-Aggrandizing", "Campaign Launch"],
    sources: [
      { name: "Politico (155 Craziest)", url: "https://www.politico.com/magazine/story/2016/11/the-155-craziest-things-trump-said-this-cycle-214420" }
    ]
  },
  {
    date: "2015-07-17",
    title: "\"He's a war hero because he was captured. I like people that weren't captured.\"",
    body: "At the Family Leadership Summit in Iowa, Trump dismissed Senator John McCain — a man who spent five and a half years as a POW in Vietnam, enduring torture and refusing early release — because he got captured. Trump, who received five draft deferments including one for \"bone spurs,\" apparently prefers his war heroes un-tortured.",
    quote: "He's a war hero because he was captured. I like people that weren't captured, OK?",
    tags: ["Military", "John McCain"],
    sources: [
      { name: "Politico (155 Craziest)", url: "https://www.politico.com/magazine/story/2016/11/the-155-craziest-things-trump-said-this-cycle-214420" },
      { name: "YouTube (Compilation)", url: "https://www.youtube.com/watch?v=kAIfU5RBBso" }
    ]
  },
  {
    date: "2015-08-07",
    title: "\"Blood coming out of her wherever.\"",
    body: "After Fox News' Megyn Kelly asked Trump tough questions at the first GOP debate, he went on CNN and said: \"You could see there was blood coming out of her eyes, blood coming out of her wherever.\" He later said he meant her nose. Sure.",
    quote: "You could see there was blood coming out of her eyes, blood coming out of her wherever.",
    tags: ["Misogyny", "Media"],
    sources: [
      { name: "Politico (155 Craziest)", url: "https://www.politico.com/magazine/story/2016/11/the-155-craziest-things-trump-said-this-cycle-214420" }
    ]
  },
  {
    date: "2015-09-09",
    title: "\"Look at that face! Would anyone vote for that?\"",
    body: "In a Rolling Stone interview, Trump attacked GOP rival Carly Fiorina's physical appearance. \"Look at that face! Would anyone vote for that? Can you imagine that, the face of our next president?\" He later claimed he was talking about her \"persona.\" The quote was in a section about her face.",
    quote: "Look at that face! Would anyone vote for that? Can you imagine that, the face of our next president?!",
    tags: ["Misogyny", "GOP Primary"],
    sources: [
      { name: "Politico (155 Craziest)", url: "https://www.politico.com/magazine/story/2016/11/the-155-craziest-things-trump-said-this-cycle-214420" }
    ]
  },

  // ===== 2016 =====
  {
    date: "2016-01-23",
    title: "\"I could stand in the middle of Fifth Avenue and shoot somebody and I wouldn't lose voters.\"",
    body: "At a rally in Iowa, Trump bragged about the loyalty of his supporters by suggesting he could commit murder in broad daylight and face no political consequences. The crowd cheered. It might be the most honest thing he's ever said.",
    quote: "I could stand in the middle of Fifth Avenue and shoot somebody and I wouldn't lose voters.",
    tags: ["Self-Aggrandizing", "Rally"],
    sources: [
      { name: "Politico (155 Craziest)", url: "https://www.politico.com/magazine/story/2016/11/the-155-craziest-things-trump-said-this-cycle-214420" }
    ]
  },
  {
    date: "2016-02-06",
    title: "\"I would bring back waterboarding. And a hell of a lot worse.\"",
    body: "At a GOP debate in New Hampshire, Trump enthusiastically endorsed torture — not just waterboarding, but whatever's worse than waterboarding. He didn't specify what that might be, but his delivery suggested he'd been thinking about it.",
    quote: "I would bring back waterboarding. And I'd bring back a hell of a lot worse than waterboarding.",
    tags: ["Torture", "Debate"],
    sources: [
      { name: "Politico (155 Craziest)", url: "https://www.politico.com/magazine/story/2016/11/the-155-craziest-things-trump-said-this-cycle-214420" }
    ]
  },
  {
    date: "2016-07-21",
    title: "\"I alone can fix it.\"",
    body: "At the Republican National Convention, Trump accepted the nomination with a speech that painted America as a dystopian hellscape that only one man — him — could save. The line became a defining moment of his brand of strongman politics.",
    quote: "I alone can fix it.",
    tags: ["Authoritarianism", "RNC"],
    sources: [
      { name: "Politico (155 Craziest)", url: "https://www.politico.com/magazine/story/2016/11/the-155-craziest-things-trump-said-this-cycle-214420" }
    ]
  },
  {
    date: "2016-10-07",
    title: "\"Grab 'em by the pussy. You can do anything.\"",
    body: "The Washington Post published a 2005 Access Hollywood tape of Trump bragging to Billy Bush about sexually assaulting women. He described moving on a married woman \"like a bitch,\" said he \"just start kissing\" beautiful women without waiting, and that \"when you're a star, they let you do it.\" He called it \"locker room talk.\" Multiple women subsequently came forward with assault allegations.",
    quote: "I just start kissing them. It's like a magnet. Just kiss. I don't even wait. And when you're a star, they let you do it. You can do anything. Grab 'em by the pussy.",
    tags: ["Sexual Assault", "Access Hollywood"],
    sources: [
      { name: "BBC (Full Transcript)", url: "https://www.bbc.com/news/election-us-2016-37595321" },
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Donald_Trump_Access_Hollywood_tape" },
      { name: "19th News", url: "https://19thnews.org/2024/11/gen-z-access-hollywood-tiktok-trump/" }
    ]
  },

  // ===== 2017 =====
  {
    date: "2017-01-21",
    title: "Insists His Inauguration Crowd Was the Biggest Ever (It Wasn't)",
    body: "The very first full day of Trump's presidency, Press Secretary Sean Spicer was sent out to angrily insist Trump's inauguration crowd was \"the largest audience to ever witness an inauguration — period — both in person and around the globe.\" Side-by-side photos showed Obama's 2009 crowd was visibly larger. Kellyanne Conway defended Spicer's claims as \"alternative facts.\" And so it began.",
    quote: null,
    tags: ["Lies", "Inauguration", "Alternative Facts"],
    sources: [
      { name: "NPR", url: "https://www.npr.org/2017/01/24/511433428/the-alternative-facts-of-a-presidential-inauguration" }
    ]
  },
  {
    date: "2017-05-31",
    title: "\"Despite the constant negative press covfefe\"",
    body: "At 12:06 AM, the President of the United States tweeted an incomplete thought containing a word that doesn't exist. The tweet stayed up for six hours. Rather than admit it was a typo, Press Secretary Spicer said \"the president and a small group of people know exactly what he meant.\" They did not elaborate.",
    quote: "Despite the constant negative press covfefe",
    tags: ["Twitter", "Covfefe"],
    sources: [
      { name: "New York Times", url: "https://www.nytimes.com/2017/05/31/us/politics/covfefe-trump-twitter.html" },
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Covfefe" }
    ]
  },
  {
    date: "2017-08-15",
    title: "\"Very fine people on both sides.\"",
    body: "After a white supremacist rally in Charlottesville, Virginia — where neo-Nazis chanted \"Jews will not replace us\" and a counter-protester was killed when a man drove his car into a crowd — Trump held a press conference and said there were \"very fine people on both sides.\" He blamed the \"alt-left\" and complained about the removal of Robert E. Lee statues.",
    quote: "You also had people that were very fine people, on both sides. You had people in that group that were there to protest the taking down of, to them, a very, very important statue.",
    tags: ["White Supremacy", "Charlottesville"],
    sources: [
      { name: "PolitiFact (Full Context)", url: "https://www.politifact.com/article/2019/apr/26/context-trumps-very-fine-people-both-sides-remarks/" },
      { name: "YouTube (CNBC)", url: "https://www.youtube.com/watch?v=JmaZR8E12bs" },
      { name: "Politico (Transcript)", url: "https://www.politico.com/story/2017/08/15/full-text-trump-comments-white-supremacists-alt-left-transcript-241662" }
    ]
  },
  {
    date: "2017-08-21",
    title: "Stares Directly Into a Solar Eclipse",
    body: "Despite literally every expert, scientist, and parent of a toddler saying \"don't look at the sun,\" the President of the United States walked onto the White House balcony and stared directly into a solar eclipse without protective glasses. An aide shouted \"don't look!\" He looked. He eventually put on glasses, but the photo of him squinting at the sun became an instant meme and possibly the most perfect metaphor of his presidency.",
    quote: null,
    tags: ["Eclipse", "You Can't Make This Up"],
    sources: [
      { name: "CNN", url: "https://www.cnn.com/2017/08/21/politics/trump-solar-eclipse" },
      { name: "Yahoo News", url: "https://www.yahoo.com/news/fact-check-photo-allegedly-shows-130000147.html" }
    ]
  },
  {
    date: "2017-10-03",
    title: "Throws Paper Towels at Hurricane Survivors Like T-Shirts at a Pep Rally",
    body: "Visiting Puerto Rico after Hurricane Maria — which killed nearly 3,000 people and left the island without power for months — Trump tossed rolls of paper towels into a crowd of survivors like he was shooting souvenirs into the stands at a basketball game. He also picked up a solar-powered flashlight, apparently unaware of the ongoing power outage, and said \"you don't need 'em anymore.\" He later said it was \"a great day.\"",
    quote: null,
    tags: ["Hurricane Maria", "Puerto Rico"],
    sources: [
      { name: "YouTube (Guardian)", url: "https://www.youtube.com/watch?v=kEe7_zgZbuI" },
      { name: "BBC News", url: "https://www.bbc.com/news/world-us-canada-41504165" },
      { name: "CNN", url: "https://www.cnn.com/2017/10/03/politics/donald-trump-paper-towels-puerto-rico" }
    ]
  },

  // ===== 2019 =====
  {
    date: "2019-07-14",
    title: "\"Go back to where you came from.\"",
    body: "Trump tweeted that four congresswomen of color — Reps. Ocasio-Cortez, Omar, Tlaib, and Pressley — should \"go back and help fix the totally broken and crime infested places from which they came.\" Three of the four were born in the United States. The fourth, Ilhan Omar, came to the US as a child refugee. All are American citizens. 57% of Republicans said they agreed with the tweets.",
    quote: "Why don't they go back and help fix the totally broken and crime infested places from which they came.",
    tags: ["Racism", "Congress"],
    sources: [
      { name: "NPR", url: "https://www.npr.org/2019/07/15/741737426/in-tweet-trump-tells-congresswomen-to-go-back-where-they-came-from" },
      { name: "Rutgers", url: "https://womenrun.rutgers.edu/timeline/trump-tells-democratic-congresswomen-to-go-back-to-their-countries/" }
    ]
  },
  {
    date: "2019-09-04",
    title: "Draws on a Hurricane Map with a Sharpie to Prove He Was Right",
    body: "After incorrectly tweeting that Hurricane Dorian would hit Alabama (it wasn't going to), Trump doubled down for four straight days. He displayed an official NOAA forecast map in the Oval Office that someone had crudely extended with a black Sharpie to include Alabama. Rather than admit a mistake about a weather forecast, the President of the United States committed what appeared to be a federal crime (altering an official weather forecast is illegal). NOAA later issued a statement backing Trump, reportedly under political pressure.",
    quote: null,
    tags: ["Sharpiegate", "Lies"],
    sources: [
      { name: "NPR", url: "https://www.npr.org/2019/09/04/757586936/trump-displays-altered-map-of-hurricane-dorians-path-to-include-alabama" },
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Hurricane_Dorian%E2%80%93Alabama_controversy" },
      { name: "YouTube (ABC News)", url: "https://www.youtube.com/watch?v=ibwEYMRJ4p8" }
    ]
  },

  // ===== 2020 =====
  {
    date: "2020-04-23",
    title: "\"Supposing you brought the light inside the body... and then I see the disinfectant...\"",
    body: "At a COVID-19 briefing, after a scientist presented research on sunlight and bleach killing the virus on surfaces, Trump went rogue. He mused aloud about injecting disinfectant into human lungs and putting UV light \"inside the body.\" Dr. Birx sat frozen in visible horror. Poison control centers reported a spike in calls. Trump later said he was being \"sarcastic.\" The video says otherwise.",
    quote: "And then I see the disinfectant, where it knocks it out in a minute. One minute. And is there a way we can do something like that, by injection inside or almost a cleaning?",
    tags: ["COVID-19", "Bleach", "Public Health"],
    sources: [
      { name: "BBC News", url: "https://www.bbc.com/news/world-us-canada-52407177" },
      { name: "Politico", url: "https://www.politico.com/news/2021/04/23/trump-bleach-one-year-484399" }
    ]
  },

  // ===== 2023 =====
  {
    date: "2023-08-24",
    title: "First President in History to Have a Mugshot Taken",
    body: "Trump surrendered himself at the Fulton County Jail in Atlanta after being indicted on racketeering charges for attempting to overturn the 2020 election in Georgia. He was booked as inmate #P01135809, fingerprinted, and photographed. The resulting mugshot — a scowling, defiant glare into the camera — became instantly iconic. Trump, naturally, started selling it on t-shirts and coffee mugs within hours.",
    quote: null,
    tags: ["Indictment", "Mugshot", "Georgia"],
    sources: [
      { name: "BBC News", url: "https://www.bbc.com/news/world-us-canada-66612345" },
      { name: "PBS", url: "https://www.pbs.org/newshour/politics/photo-mugshot-of-donald-trump-released-after-arrest-in-georgia" },
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mug_shot_of_Donald_Trump" }
    ]
  },

  // ===== 2024 =====
  {
    date: "2024-10-20",
    title: "Opens a Rally by Talking About Arnold Palmer's Penis",
    body: "At a rally in Latrobe, Pennsylvania — Arnold Palmer's hometown — Trump spent the opening minutes of his campaign speech talking about the late golfer's genitalia. He described Palmer as \"all man\" and told a story about how other golfers were impressed by Palmer's endowment in the locker room showers. This was his closing pitch to voters two weeks before the election.",
    quote: null,
    tags: ["Rally", "You Can't Make This Up"],
    sources: [
      { name: "Politico", url: "https://www.politico.com/news/2024/10/21/trump-arnold-palmer-comments-campaign-closing-00184763" },
      { name: "LA Times", url: "https://www.latimes.com/politics/story/2024-10-20/2024-election-donald-trump-arnold-palmer-genitalia" },
      { name: "YouTube (CNN)", url: "https://www.youtube.com/watch?v=BW1Oj5kCiE0" }
    ]
  },

  // ===== 2025 =====
  {
    date: "2025-01-07",
    title: "\"It might be that you'll have to do something\" — on Seizing Greenland by Force",
    body: "At a Mar-a-Lago press conference, Trump refused to rule out using military force to take control of Greenland (a Danish territory) and the Panama Canal. He also floated using \"economic force\" to annex Canada, calling the US-Canada border an \"artificially drawn line.\" Denmark said \"Greenland is not for sale.\" Panama said the canal stays Panamanian \"forever.\" Canada's PM said there wasn't \"a snowball's chance in hell\" of a merger. Trump Jr. flew to Greenland on a \"personal day trip.\"",
    quote: "We need them for economic security. I'm not going to commit to that [ruling out military force]. It might be that you'll have to do something.",
    tags: ["Territorial Threats", "Foreign Policy"],
    sources: [
      { name: "BBC News", url: "https://www.bbc.com/news/articles/c4gzn48jwz2o" },
      { name: "ABC News", url: "https://abcnews.com/Politics/trump-threatens-land-grabs-panama-canal-greenland-force/story?id=117428826" },
      { name: "NPR", url: "https://www.npr.org/2025/01/11/nx-s1-5253910/donald-trump-greenland-panama-canal-canada" }
    ]
  },
  {
    date: "2025-01-18",
    title: "Launches His Own Meme Coin Two Days Before Being Sworn In",
    body: "Two days before his inauguration, Trump launched $TRUMP — a cryptocurrency meme coin that rocketed to a $5.5 billion market cap within hours. Ethics experts called it an unprecedented conflict of interest: a president-elect selling a financial product literally named after himself. Melania launched her own coin the next day. The crypto bro-to-commander-in-chief pipeline was complete.",
    quote: null,
    tags: ["Crypto", "Ethics", "Conflicts of Interest"],
    sources: [
      { name: "BBC News", url: "https://www.bbc.com/news/articles/c9vmym2jvy9o" },
      { name: "Politico", url: "https://www.politico.com/news/2025/01/18/trump-crypto-meme-coin-inauguration-00199157" },
      { name: "Reuters", url: "https://www.reuters.com/technology/trumps-new-crypto-token-jumps-ahead-his-inauguration-2025-01-20/" }
    ]
  },
  {
    date: "2025-01-20",
    title: "\"F--- it. Release 'em all.\" — Pardons Nearly All 1,600 January 6 Rioters",
    body: "Within hours of taking the oath, Trump issued blanket clemency to nearly all 1,600 January 6 defendants — including those who beat police officers with flagpoles, used bear spray, and carried weapons. Proud Boys and Oath Keepers leaders were freed. Many pardoned rioters had prior records including rape, domestic violence, and child exploitation. Insiders said Trump's last-minute decision was literally: \"F--- it. Release 'em all.\"",
    quote: null,
    tags: ["January 6", "Pardons"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pardon_of_January_6_United_States_Capitol_attack_defendants" },
      { name: "NPR", url: "https://www.npr.org/2025/01/30/nx-s1-5276336/donald-trump-jan-6-rape-assault-pardons-rioters" }
    ]
  },
  {
    date: "2025-01-20",
    title: "Musk Does a Nazi Salute at the Inauguration Rally (Twice)",
    body: "At Trump's inauguration rally, Elon Musk performed a gesture widely interpreted as a Nazi salute — twice. Germany called it unmistakable. Neo-Nazi groups celebrated. 166 Jewish leaders signed an open letter condemning it. Musk dismissed it, then made a series of Nazi-themed puns on social media to taunt critics. American opinion split along party lines: 73% of Harris voters called it a Nazi salute, 79% of Trump voters said it was a gesture from the heart.",
    quote: null,
    tags: ["Elon Musk", "Inauguration", "Extremism"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/Elon_Musk_salute_controversy" }
    ]
  },
  {
    date: "2025-02-01",
    title: "Launches the Largest Trade War in Modern History",
    body: "Trump slapped 25% tariffs on all imports from Canada and Mexico, plus 10% on China. This kicked off an escalating trade war that would eventually see tariffs on China reach 145%. He threatened to \"permanently shut down\" Canada's auto industry. Over the next months, tariffs expanded to steel, aluminum, autos, lumber, and eventually almost everything, from almost everywhere.",
    quote: null,
    tags: ["Tariffs", "Trade War"],
    sources: [
      { name: "Wikipedia", url: "https://en.wikipedia.org/wiki/2025%E2%80%932026_United_States_trade_war_with_Canada_and_Mexico" },
      { name: "Reuters (Full Timeline)", url: "https://www.reuters.com/business/autos-transportation/major-developments-trumps-trade-war-2026-02-23/" }
    ]
  },
  {
    date: "2025-02-16",
    title: "DOGE Promised $2 Trillion in Savings. Spending Went Up.",
    body: "Elon Musk's DOGE started chainsaw-cutting federal agencies. ~317,000 employees left government by year's end. Musk promised $2 trillion in savings, then $1 trillion, then $150 billion. The NYT found the 13 largest claimed savings were all wrong. The punchline: government spending actually increased in 2025. Musk rage-quit in May after feuding with Trump's cabinet.",
    quote: null,
    tags: ["DOGE", "Elon Musk", "Government"],
    sources: [
      { name: "NPR", url: "https://www.npr.org/2025/12/22/nx-s1-5647415/2025-trump-doge-musk" },
      { name: "The Independent", url: "https://www.independent.co.uk/news/world/americas/us-politics/trump-doge-government-spending-2025-b2890243.html" }
    ]
  },
  {
    date: "2025-03-15",
    title: "His Defense Secretary Accidentally Texted War Plans to a Magazine Editor",
    body: "National Security Adviser Mike Waltz accidentally added The Atlantic's editor-in-chief Jeffrey Goldberg to a Signal group chat where top officials were planning airstrikes on Yemen. Goldberg received detailed attack plans — weapons, targets, timing — two hours before the bombs fell. He literally watched it unfold from a supermarket parking lot. It later emerged Hegseth shared the same plans in a second Signal chat with his wife, brother, and personal lawyer. The White House insisted these were \"NOT war plans.\" They were.",
    quote: "\"These were NOT 'war plans.'\" — White House Press Secretary (narrator: they were war plans)",
    tags: ["National Security", "Signal Leak"],
    sources: [
      { name: "The Atlantic", url: "https://www.theatlantic.com/politics/archive/2025/03/trump-administration-accidentally-texted-me-its-war-plans/682151/" },
      { name: "ABC News", url: "https://abcnews.com/Politics/messages-yemen-war-plans-inadvertently-shared-reporter-timeline/story?id=120128447" },
      { name: "Al Jazeera (Transcript)", url: "https://www.aljazeera.com/news/2025/3/27/full-transcript-of-trump-teams-yemen-attack-plan-that-was-shared-on-signal" }
    ]
  },
  {
    date: "2025-03-15",
    title: "Deports People to a Foreign Mega-Prison, Ignores the Judge Who Said Stop",
    body: "Trump invoked the 1798 Alien Enemies Act to deport alleged Venezuelan gang members. When a federal judge ordered the flights stopped, the administration sent the planes anyway — deporting 200+ people to El Salvador's notorious CECOT prison. The DOJ argued the judge lacked authority to stop them. The judge called their filings \"alarmingly inadequate\" and moved toward contempt. A later ruling found the whole thing violated due process.",
    quote: null,
    tags: ["Immigration", "Rule of Law"],
    sources: [
      { name: "Reuters", url: "https://www.reuters.com/world/us/us-removes-hundreds-alleged-venezuelan-gang-members-under-now-blocked-authority-2025-03-16/" },
      { name: "NPR", url: "https://www.npr.org/2025/12/22/nx-s1-5652187/alien-enemies-act-deportations-case" },
      { name: "Fox News", url: "https://www.foxnews.com/politics/doj-says-owes-deported-venezuelans-no-due-process-dares-courts-intervene" }
    ]
  },
  {
    date: "2025-04-02",
    title: "\"This is a great time to buy.\" — Hours Before Reversing His Own Tariff Crash",
    body: "Trump declared April 2 \"Liberation Day\" and unveiled tariffs so extreme the S&P 500 dropped 12% in four days. Then on April 9, he posted \"this is a great time to buy\" on Truth Social. Hours later, he announced a 90-day tariff pause, sending the market up 9.5% in a single day. If you or I timed a stock tip like that, the SEC would have questions.",
    quote: "This is a great time to buy!!! — Trump on Truth Social, hours before reversing his own tariffs",
    tags: ["Tariffs", "Stock Market"],
    sources: [
      { name: "Yahoo Finance", url: "https://finance.yahoo.com/news/stock-market-made-back-losses-124038060.html" },
      { name: "Reuters", url: "https://www.reuters.com/markets/wealth/global-markets-tariffs-graphic-pix-2025-04-02/" }
    ]
  },
  {
    date: "2025-12-24",
    title: "About Half of Project 2025 Quietly Implemented Despite \"I Have Nothing to Do With It\"",
    body: "During the campaign, Trump repeatedly insisted he had nothing to do with Project 2025. By year's end, monitoring groups found roughly half of the 920-page conservative blueprint had been enacted. Planned Parenthood defunded (200 clinics facing closure), DEI programs gutted, LGBTQ+ protections rolled back, federal employee protections stripped. The playbook Trump never read was being executed almost line by line.",
    quote: null,
    tags: ["Project 2025", "Policy"],
    sources: [
      { name: "PBS", url: "https://www.pbs.org/newshour/politics/tracking-how-much-of-project-2025-the-trump-administration-achieved-this-year" }
    ]
  },

  // ===== 2026 =====
  {
    date: "2026-03-01",
    title: "\"We can go forever.\" — Starts a War with Iran",
    body: "The US and Israel launched strikes on Iran, igniting a conflict across the Middle East. Oil prices surged, markets dropped, Iran struck Gulf nations in retaliation. The DOGE cuts Trump bragged about? Turns out firing all those \"unnecessary\" federal employees hampered the government's ability to respond to the war his administration started. Even some MAGA supporters began questioning the plan. Trump's response on Fox News: \"We can go forever.\"",
    quote: "Nobody has the technology or the weapons that we have. We're way ahead of schedule. We can go forever.",
    tags: ["Iran War", "Military"],
    sources: [
      { name: "Politico", url: "https://www.politico.com/news/2026/03/13/trump-iran-war-ending-timeline-00828138" },
      { name: "Fortune", url: "https://fortune.com/2026/03/15/iran-war-trump-political-fallout-midterms-gop-democrats-maga-split/" },
      { name: "Al Jazeera", url: "https://www.aljazeera.com/news/liveblog/2026/3/15/iran-war-live-trump-urges-world-to-keep-hormuz-strait-open" }
    ]
  },
  {
    date: "2026-03-11",
    title: "\"There's something wrong with their genetics.\"",
    body: "After a shooting in Virginia, Trump went on Fox News and blamed the \"genetics\" of Muslim and Iranian immigrants. \"They just go bad,\" he told Brian Kilmeade. \"There's something wrong with their genetics. Their genetics are not exactly... your genetics.\" The comments were condemned across the spectrum as echoing eugenics. This from the guy who also referenced \"Hitler did some good things\" during the 2024 campaign.",
    quote: "They just go bad... there's something wrong with their genetics. Their genetics are not exactly... your genetics.",
    tags: ["Racism", "Eugenics"],
    sources: [
      { name: "HuffPost", url: "https://www.huffpost.com/entry/trump-eugenics-wrong-genes_n_69b462b1e4b0676e64bf55b9" },
      { name: "YouTube (Fox News Clip)", url: "https://www.youtube.com/watch?v=tvxu9boRFIM" },
      { name: "Common Dreams", url: "https://www.commondreams.org/news/trump-eugenics" }
    ]
  },
  {
    date: "2026-03-21",
    title: "\"Good, I'm glad he's dead.\" -- On the Death of Robert Mueller",
    body: "Former FBI Director Robert Mueller -- the man who spent two years investigating Russian interference in Trump's 2016 campaign -- died at age 81. Within hours, the President of the United States posted on Truth Social: \"Robert S. Mueller III just died. Good, I'm glad he's dead. He can no longer hurt innocent people!\" Even by Trump's standards for dancing on graves (he trashed Colin Powell the day after he died and mocked John McCain for years after his death), openly celebrating the death of a decorated Vietnam veteran and lifelong public servant hit different. Republicans and Democrats both condemned the remarks. Trump did not elaborate or walk it back.",
    quote: "Robert S. Mueller III just died. Good, I'm glad he's dead. He can no longer hurt innocent people!",
    tags: ["Mueller", "Cruelty"],
    sources: [
      { name: "CNN", url: "https://www.cnn.com/2026/03/21/politics/donald-trump-robert-mueller-insensitive-comments" },
      { name: "New York Times", url: "https://www.nytimes.com/2026/03/21/us/politics/trump-mueller-death.html" },
      { name: "USA Today", url: "https://www.usatoday.com/story/news/politics/2026/03/21/trump-responds-robert-mueller-death/89263401007/" },
      { name: "YouTube (ABC News)", url: "https://www.youtube.com/watch?v=dRB_QcD7j1w" }
    ]
  },
  {
    date: "2026-03-22",
    title: "\"Hit and obliterate their various POWER PLANTS, STARTING WITH THE BIGGEST ONE FIRST!\"",
    body: "On Day 23 of the Iran war he started, with oil prices soaring and the Strait of Hormuz effectively closed, Trump issued an ultimatum from his Florida golf resort via Truth Social: Iran has 48 hours to reopen the strait or the US will obliterate their power plants. Iran responded by threatening to shut Hormuz completely and destroy infrastructure across the entire Gulf region. Meanwhile, Iran fired missiles at a joint US-UK base in the Indian Ocean and struck near Israel's nuclear facility in Dimona. The 48-hour countdown to potential catastrophic escalation was posted in all-caps, naturally, and signed like a business letter: \"Thank you for your attention to this matter. President DONALD J. TRUMP.\"",
    quote: "If Iran doesn't FULLY OPEN, WITHOUT THREAT, the Strait of Hormuz, within 48 HOURS from this exact point in time, the United States of America will hit and obliterate their various POWER PLANTS, STARTING WITH THE BIGGEST ONE FIRST! Thank you for your attention to this matter. President DONALD J. TRUMP.",
    tags: ["Iran War", "Escalation", "Truth Social"],
    sources: [
      { name: "NPR", url: "https://www.npr.org/2026/03/22/nx-s1-5756308/trump-threatens-obliterate-irans-power-plants-iran-strikes-2-israeli-cities" },
      { name: "Fox News (Live Updates)", url: "https://www.foxnews.com/live-news/us-iran-israel-war-latest-march-22" },
      { name: "Reuters", url: "https://www.reuters.com/world/middle-east/trump-iran-trade-threats-over-energy-targets-war-escalates-2026-03-22/" },
      { name: "Al Jazeera (Live Blog)", url: "https://www.aljazeera.com/news/liveblog/2026/3/22/iran-war-live-trump-threatens-attacks-on-power-plants-over-hormuz-strait" }
    ]
  }
];

// ===== SORT reverse-chronologically (newest first) =====
incidents.sort((a, b) => new Date(b.date) - new Date(a.date));

// ===== RENDER =====
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function getYear(dateStr) {
  return dateStr.substring(0, 4);
}

function renderTimeline(filter = 'all') {
  const container = document.getElementById('timeline');
  container.innerHTML = '';

  const filtered = filter === 'all'
    ? incidents
    : incidents.filter(inc => getYear(inc.date) === filter);

  if (filtered.length === 0) {
    container.innerHTML = '<p class="no-results">No incidents found for this filter.</p>';
    return;
  }

  let currentYear = null;
  let entryIndex = 0;

  filtered.forEach((inc) => {
    const year = getYear(inc.date);

    if (year !== currentYear) {
      currentYear = year;
      const yearDiv = document.createElement('div');
      yearDiv.className = 'timeline-year';
      yearDiv.innerHTML = `<h2>${year}</h2>`;
      container.appendChild(yearDiv);
    }

    const entry = document.createElement('article');
    entry.className = 'timeline-entry';
    entry.style.animationDelay = `${Math.min(entryIndex, 12) * 50}ms`;
    entryIndex++;

    const quoteHTML = inc.quote
      ? `<blockquote class="entry-quote">${inc.quote}</blockquote>`
      : '';

    const tagsHTML = inc.tags.map(t => `<span class="tag">${t}</span>`).join('');

    const sourcesHTML = inc.sources.map(s =>
      `<a href="${s.url}" class="source-link" target="_blank" rel="noopener noreferrer">${s.name}</a>`
    ).join('');

    entry.innerHTML = `
      <div class="entry-card">
        <time class="entry-date" datetime="${inc.date}">${formatDate(inc.date)}</time>
        <h3 class="entry-title">${inc.title}</h3>
        <div class="entry-tags">${tagsHTML}</div>
        <p class="entry-body">${inc.body}</p>
        ${quoteHTML}
        <div class="entry-sources">${sourcesHTML}</div>
      </div>
    `;

    container.appendChild(entry);
  });

  document.getElementById('incident-count').textContent = incidents.length;
}

// ===== YEAR FILTER =====
const years = [...new Set(incidents.map(i => getYear(i.date)))].sort((a, b) => b - a);
const pillContainer = document.querySelector('.year-pills');
if (pillContainer) {
  pillContainer.innerHTML = '<button class="pill active" role="tab" aria-selected="true" data-year="all">All</button>';
  years.forEach(y => {
    pillContainer.innerHTML += `<button class="pill" role="tab" aria-selected="false" data-year="${y}">${y}</button>`;
  });

  pillContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.pill');
    if (!btn) return;
    pillContainer.querySelectorAll('.pill').forEach(p => {
      p.classList.remove('active');
      p.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    renderTimeline(btn.dataset.year);
  });
}

// ===== THEME TOGGLE =====
(function(){
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  updateToggleIcon();

  t && t.addEventListener('click', () => {
    d = d === 'dark' ? 'light' : 'dark';
    r.setAttribute('data-theme', d);
    t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
    updateToggleIcon();
  });

  function updateToggleIcon() {
    if (!t) return;
    t.innerHTML = d === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();

// ===== INIT =====
renderTimeline();
