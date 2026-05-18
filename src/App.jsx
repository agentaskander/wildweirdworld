import { useEffect } from 'react'
import './App.css'

const PORT = 3195
const OFFICIAL_DOMAIN = 'wildweirdworld.com'
const OFFICIAL_URL = `https://${OFFICIAL_DOMAIN}`

const ontologyDomains = [
  {
    title: 'Universe Layer',
    emoji: '🌎',
    connectsTo: ['Game Portfolio', 'Founder OS'],
    items: [
      'Wild Weird World HQ',
      'Zoo Queen Command Center',
      'WWW HQ = Wild Weird World Headquarters',
      'hidden founder meaning: Wild Weird World Hive Queen',
    ],
  },
  {
    title: 'Game Portfolio Layer',
    emoji: '🎮',
    connectsTo: ['Characters', 'Content'],
    items: [
      'Dub Dub Dub: Ducks in the Tub',
      'Pet Café: Weird Critter Rescue',
      'Surviving the First Day of School',
      'Frog Fashion Runway',
      'Daddy Long Legs Detective Agency',
      'Mini Zoo Mogul',
      'Critter Rescue Sleepover',
      'Animal Influencer Academy',
    ],
  },
  {
    title: 'Character & Creature Layer',
    emoji: '🐸',
    connectsTo: ['Stories', 'Kindness Missions'],
    items: [
      'Collectible ducks',
      'Frogs',
      'Daddy long legs spiders',
      'Mini zoo animals',
      'Weird critters',
      'Friend tester avatars',
      'NPC helpers',
      'Kindness heroes',
    ],
  },
  {
    title: 'Business Management Layer',
    emoji: '📋',
    connectsTo: ['Launch Readiness', 'Parent Approval'],
    items: [
      'Vision',
      'Mission',
      'Milestones',
      'Quick wins',
      'Founder XP',
      'Friend feedback',
      'Parent approval',
      'Practice merch studio',
      'Launch readiness',
    ],
  },
  {
    title: 'Content Domain Layer',
    emoji: '🎬',
    connectsTo: ['Games', 'Approval Queue'],
    items: [
      'Video ideas',
      'Scripts',
      'Behind-the-scenes posts',
      'Friend polls',
      'Character reveals',
      'Weird Animal of the Week',
      'Game trailers',
      'Parent approval queue',
    ],
  },
  {
    title: 'Merch Layer',
    emoji: '✨',
    connectsTo: ['Practice Shop', 'Feedback'],
    items: [
      'Stickers',
      'Bracelets',
      'Trading cards',
      'Keychains',
      'Notebooks',
      'Mini zoo passports',
      'Practice shop ideas',
    ],
  },
  {
    title: 'Safety Layer',
    emoji: '🛡️',
    connectsTo: ['Every Layer'],
    items: [
      'Parent-approved only',
      'No real sales inside app',
      'No stranger DMs',
      'No public comments from strangers',
      'No collection of kid data',
      'Friend feedback only',
      'Practice business learning',
    ],
  },
  {
    title: 'Outcomes Layer',
    emoji: '🏆',
    connectsTo: ['Next Update'],
    items: [
      'Creative confidence',
      'Friend engagement',
      'Storytelling',
      'Basic business thinking',
      'Software/game learning',
      'Kindness and animal curiosity',
      'Founder discipline',
    ],
  },
]

const flowSteps = ['Idea', 'Game', 'Content', 'Merch', 'Feedback', 'Next Update']

const dashboardCards = [
  {
    title: 'Domain secured: wildweirdworld.com',
    eyebrow: 'Official domain',
    emoji: '🌐',
    text: 'The parent-owned Wild Weird World domain is secured for future approved publishing.',
    href: OFFICIAL_URL,
  },
  {
    title: 'Secure creator handles',
    eyebrow: 'Parent planning',
    emoji: '🔐',
    text: 'Track parent-approved account reservations before launch, with no posting automation.',
    href: '/handles',
  },
  {
    title: 'Open plans & mockups',
    eyebrow: 'Blueprint board',
    emoji: '🗺️',
    text: 'Collect founder-friendly sketches, mockups, calendars, and parent review plans.',
    href: '/plans',
  },
  {
    title: 'Dub Dub Dub',
    eyebrow: 'New game world',
    emoji: '🛁',
    text: 'Explore secret drains, collectible ducks, glowing cave oceans, and hidden tub kingdoms.',
    href: '/dub-dub-dub',
  },
  {
    title: 'Moss Hollow Studios',
    eyebrow: 'Umbrella world',
    emoji: '🌿',
    text: 'Step into the cozy weird studio for frogs, lanterns, friendship, and game universes.',
    href: '/moss-hollow-studios',
  },
  {
    title: 'Creator Empire',
    eyebrow: 'Friendship-first',
    emoji: '📹',
    text: 'Plan kid-safe videos, update logs, fan art, and creator confidence without vanity metrics.',
    href: '/creator-empire',
  },
  {
    title: 'Ontology Builder',
    eyebrow: 'Reward badge',
    emoji: '🏅',
    text: 'Map how each safe idea connects before building the next game update.',
  },
  {
    title: 'Practice Studio',
    eyebrow: 'Founder lab',
    emoji: '🧪',
    text: 'Try merch, content, and mission ideas without real payments or public posting.',
  },
  {
    title: 'Parent-Safe Queue',
    eyebrow: 'Safety check',
    emoji: '✅',
    text: 'Keep every publish idea in a parent-approved lane.',
  },
]

const universeLinks = [
  ['Universe', 'Games'],
  ['Games', 'Characters'],
  ['Characters', 'Content'],
  ['Content', 'Practice Merch'],
  ['Practice Merch', 'Friend Feedback'],
  ['Friend Feedback', 'Next Update'],
  ['Safety', 'Every Step'],
]

const ontologyFlowChains = [
  ['Universe', 'Games', 'Characters', 'Content', 'Practice Merch', 'Friend Feedback', 'Next Update'],
  ['Safety', 'Parent Approval', 'Launch Readiness'],
]

const handlePatterns = [
  '@WildWeirdWorld',
  '@WildWeirdWorldHQ',
  '@WildWeirdWorldKids',
  '@ZooQueenHQ',
  '@WeirdCritterCafe',
  '@ZooQueenCommand',
  '@MiniZooMogul',
  '@DaddyLongLegsDetective',
  '@PetCafeRescue',
  '@FrogFashionRunway',
  '@CritterRescueSleepover',
  '@AnimalInfluencerAcademy',
  '@FirstDaySurvivor',
  '@SpiderSilkSmoothie',
]

const primaryHandlePatterns = handlePatterns.slice(0, 5)
const restoredHandlePatterns = handlePatterns.slice(5)

const platformCards = [
  {
    section: 'Secure First',
    platform: 'Domain',
    priority: 'Secured',
    suggestedHandle: OFFICIAL_DOMAIN,
    why: 'Official home base for Wild Weird World when parent-approved publishing begins.',
    parentOwner: 'Parent-owned',
    safety: 'Parent manages domain, DNS, and publishing.',
    status: 'Secured',
    nextStep: 'Keep renewal, DNS, and publishing access in the parent password manager.',
  },
  {
    section: 'Secure First',
    platform: 'YouTube',
    priority: 'Secure Now',
    suggestedHandle: '@WildWeirdWorldHQ',
    why: 'Best home for game trailers, safe project updates, and parent-approved videos.',
    parentOwner: 'Parent-owned brand channel',
    safety: 'No public DMs; comments off or parent-reviewed.',
    status: 'Not checked',
    nextStep: 'Check handle and reserve with parent recovery email.',
  },
  {
    section: 'Secure First',
    platform: 'TikTok',
    priority: 'Secure Now',
    suggestedHandle: '@WildWeirdWorldHQ',
    why: 'Protects the brand name before short videos are planned.',
    parentOwner: 'Parent-owned placeholder only',
    safety: 'No posting unless parent approves; no DMs.',
    status: 'Not checked',
    nextStep: 'Reserve only; keep account private until launch plan is approved.',
  },
  {
    section: 'Secure First',
    platform: 'Instagram',
    priority: 'Secure Now',
    suggestedHandle: '@WildWeirdWorld',
    why: 'Useful for character reveals, art, and parent-approved behind-the-scenes posts.',
    parentOwner: 'Parent-owned brand account',
    safety: 'No stranger comments without parent review.',
    status: 'Not checked',
    nextStep: 'Check primary and HQ handle variants.',
  },
  {
    section: 'Secure First',
    platform: 'Roblox group name',
    priority: 'Secure Now',
    suggestedHandle: 'Wild Weird World HQ',
    why: 'Protects the game community name for future parent-managed use.',
    parentOwner: 'Parent-managed group name',
    safety: 'No open community features for kids yet.',
    status: 'Not checked',
    nextStep: 'Search group name availability and reserve safely.',
  },
  {
    section: 'Secure First',
    platform: 'Gmail / Google account',
    priority: 'Secure Now',
    suggestedHandle: 'wildweirdworldhq',
    why: 'Creates a parent-controlled recovery identity for brand accounts.',
    parentOwner: 'Parent recovery email required',
    safety: 'No child personal info in account details.',
    status: 'Not checked',
    nextStep: 'Reserve Google identity and store recovery details.',
  },
  {
    section: 'Secure First',
    platform: 'Domain names',
    priority: 'Secured',
    suggestedHandle: OFFICIAL_DOMAIN,
    why: 'Keeps the brand name available for the future public website.',
    parentOwner: 'Parent-owned domain account',
    safety: 'Parent manages domain, DNS, and publishing.',
    status: 'Secured',
    nextStep: 'Record registrar, DNS, and renewal details in the parent password manager.',
  },
  {
    section: 'Secure First',
    platform: 'Pinterest',
    priority: 'Secure Now',
    suggestedHandle: '@WildWeirdWorldHQ',
    why: 'Good for parent-approved mood boards, animal inspiration, and craft references.',
    parentOwner: 'Parent-owned planning account',
    safety: 'No child personal boards or private info.',
    status: 'Not checked',
    nextStep: 'Reserve handle and keep boards brand-only.',
  },
  {
    section: 'Secure First',
    platform: 'Etsy shop name placeholder',
    priority: 'Secure Now',
    suggestedHandle: 'WildWeirdWorldHQ',
    why: 'Protects a practice shop name for future parent-run merch.',
    parentOwner: 'Parent-owned only',
    safety: 'No real sales from this app; parent handles any future shop.',
    status: 'Not checked',
    nextStep: 'Check name only; do not open sales from WWW-HQ.',
  },
  {
    section: 'Secure First',
    platform: 'Redbubble/print-on-demand placeholder',
    priority: 'Secure Now',
    suggestedHandle: 'WildWeirdWorldHQ',
    why: 'Protects a parent-owned placeholder for future art experiments.',
    parentOwner: 'Parent-owned only',
    safety: 'No real selling or shipping from WWW-HQ.',
    status: 'Not checked',
    nextStep: 'Check handle and record availability.',
  },
  {
    section: 'Future Options',
    platform: 'Threads',
    priority: 'Later',
    suggestedHandle: '@WildWeirdWorldHQ',
    why: 'May help with parent-written launch notes later.',
    parentOwner: 'Parent-owned future account',
    safety: 'No kid posting or direct messaging.',
    status: 'Not checked',
    nextStep: 'Revisit after primary handles are secured.',
  },
  {
    section: 'Future Options',
    platform: 'X',
    priority: 'Later',
    suggestedHandle: '@WildWeirdWorldHQ',
    why: 'Useful only if a parent wants an official update channel.',
    parentOwner: 'Parent-owned future account',
    safety: 'Avoid public replies from strangers for now.',
    status: 'Not checked',
    nextStep: 'Reserve only after primary family-safe channels.',
  },
  {
    section: 'Future Options',
    platform: 'Facebook Page',
    priority: 'Later',
    suggestedHandle: 'Wild Weird World HQ',
    why: 'Could become a parent-facing announcement page.',
    parentOwner: 'Parent-owned page',
    safety: 'No child personal details or open comments.',
    status: 'Not checked',
    nextStep: 'Consider only for parent audience.',
  },
  {
    section: 'Future Options',
    platform: 'Discord community placeholder',
    priority: 'Later',
    suggestedHandle: 'Wild Weird World HQ',
    why: 'Possible future parent-run community, not a kid space yet.',
    parentOwner: 'Parent-run only',
    safety: 'Not for kids yet; no open DMs.',
    status: 'Not checked',
    nextStep: 'Do not launch community until parent moderation plan exists.',
  },
  {
    section: 'Future Options',
    platform: 'Twitch',
    priority: 'Later',
    suggestedHandle: '@WildWeirdWorldHQ',
    why: 'Future-only option for parent-approved demos.',
    parentOwner: 'Parent-owned future account',
    safety: 'No live streaming without parent plan.',
    status: 'Not checked',
    nextStep: 'Skip until games are ready.',
  },
  {
    section: 'Avoid For Now',
    platform: 'Snapchat',
    priority: 'Avoid for Now',
    suggestedHandle: '@WildWeirdWorldHQ',
    why: 'Not needed for safe founder practice.',
    parentOwner: 'Do not create for now',
    safety: 'Avoid kid-facing messaging features.',
    status: 'Not checked',
    nextStep: 'Leave off the launch checklist.',
  },
  {
    section: 'Avoid For Now',
    platform: 'Reddit',
    priority: 'Avoid for Now',
    suggestedHandle: 'WildWeirdWorldHQ',
    why: 'Open public discussion is not needed before launch.',
    parentOwner: 'Do not create for now',
    safety: 'Avoid stranger comments and public debate spaces.',
    status: 'Not checked',
    nextStep: 'Revisit only with a parent moderation plan.',
  },
]

const namingRules = [
  'Keep names short',
  'Avoid using child’s real name',
  'Avoid birth year, school, city, or private info',
  'Use brand handles, not personal handles',
  'Keep one master spreadsheet or parent password manager',
  'Parent owns all accounts',
  'Use recovery email controlled by parent',
]

const parentSafetyChecklist = [
  'Parent owns account',
  'Two-factor authentication enabled',
  'No public DMs',
  'Comments off or parent-reviewed',
  'No location sharing',
  'No face/voice posting unless parent approves',
  'No real sales without parent handling',
  'No school name or personal details',
  'Keep practice/friend-feedback language',
]

const bestNextActions = [
  'Check @WildWeirdWorldHQ',
  'Reserve Gmail/Google identity',
  'Secure Roblox group name',
]

const planSections = [
  {
    title: 'Universe Blueprint',
    cards: [
      {
        name: 'Zoo Queen Command Center dashboard wireframe',
        purpose: 'Map the first screen for games, missions, ideas, and parent review.',
        status: 'Draft',
        nextAction: 'Sketch the top navigation and dashboard cards.',
      },
      {
        name: 'Season 1 roadmap poster',
        purpose: 'Show the first batch of safe games, content ideas, and feedback loops.',
        status: 'Sketch',
        nextAction: 'Pick the first three launch themes.',
      },
    ],
  },
  {
    title: 'Game Mockups',
    cards: [
      {
        name: 'Pet Café lobby sketch',
        purpose: 'Plan the friendly entry area for weird critter rescue.',
        status: 'Sketch',
        nextAction: 'Draw counter, adoption board, and cozy critter zones.',
      },
      {
        name: 'First Day of School panic meter concept',
        purpose: 'Design a kid-friendly meter for brave choices and calm-down moments.',
        status: 'Draft',
        nextAction: 'List safe meter states and reward moments.',
      },
    ],
  },
  {
    title: 'Character Sheets',
    cards: [
      {
        name: 'Weird Critter adoption card mockup',
        purpose: 'Create a safe character card format for traits, care tips, and kindness quests.',
        status: 'Ready for Friend Feedback',
        nextAction: 'Ask friends which critter traits feel funniest.',
      },
      {
        name: 'Daddy Long Legs Detective character sheet',
        purpose: 'Define the detective helper, clue style, and gentle mystery tone.',
        status: 'Draft',
        nextAction: 'Add outfit, catchphrase, and first mystery clue.',
      },
    ],
  },
  {
    title: 'Content Calendar',
    cards: [
      {
        name: 'Social video storyboard template',
        purpose: 'Plan parent-approved videos before anything is posted.',
        status: 'Parent Review',
        nextAction: 'Add hook, scene list, safety check, and approval box.',
      },
      {
        name: 'Frog Fashion Runway outfit board',
        purpose: 'Collect outfit ideas for frog characters and future reveal posts.',
        status: 'Sketch',
        nextAction: 'Choose five silly outfit themes.',
      },
    ],
  },
  {
    title: 'Practice Merch Board',
    cards: [
      {
        name: 'Sticker sheet mockup',
        purpose: 'Practice arranging critters, logos, and funny labels without real selling.',
        status: 'Draft',
        nextAction: 'Pick eight sticker ideas for parent review.',
      },
      {
        name: 'Mini Zoo passport printable',
        purpose: 'Create a printable practice collectible for zoo missions and stamps.',
        status: 'Sketch',
        nextAction: 'Sketch cover, stamp boxes, and animal facts.',
      },
    ],
  },
  {
    title: 'Friend Feedback Forms',
    cards: [
      {
        name: 'Friend feedback form',
        purpose: 'Collect simple friend reactions without personal data.',
        status: 'Parent Review',
        nextAction: 'Keep questions about favorites, fun, and confusing parts only.',
      },
    ],
  },
  {
    title: 'Next Update Planner',
    cards: [
      {
        name: 'Next update planner',
        purpose: 'Turn safe feedback into one small improvement at a time.',
        status: 'Sketch',
        nextAction: 'Add columns for idea, reason, parent check, and next build step.',
      },
    ],
  },
  {
    title: 'Parent Review Checklist',
    cards: [
      {
        name: 'Parent approval checklist',
        purpose: 'Review privacy, comments, sales, images, and publishing before anything goes out.',
        status: 'Parent Review',
        nextAction: 'Add checkboxes for no DMs, no kid data, and no real sales.',
      },
    ],
  },
]

const dubCharacters = [
  {
    name: 'Captain Quackson',
    icon: '🦆',
    bio: 'Explorer duck captain who believes every drain is a doorway.',
    traits: ['brave', 'splashy', 'map-loving'],
    favoriteItems: ['bubble compass', 'tiny captain hat', 'glow-shell map'],
    collectible: 'Rare captain duck with explorer gear and bathtub badge variants.',
  },
  {
    name: 'Professor Bubble',
    icon: '🫧',
    bio: 'Axolotl scientist and inventor who studies portal foam.',
    traits: ['curious', 'gentle', 'sparkly-smart'],
    favoriteItems: ['bubble beakers', 'safety goggles', 'portable bubble lab'],
    collectible: 'Science helper figure with gadget accessories and experiment stickers.',
  },
  {
    name: 'Tubert',
    icon: '🐸',
    bio: 'Frog king of the drain tunnels who guards the old water roads.',
    traits: ['royal', 'dramatic', 'kind-hearted'],
    favoriteItems: ['lily crown', 'echo scepter', 'snack moss'],
    collectible: 'Regal frog card with crown upgrades and tunnel map pieces.',
  },
  {
    name: 'Longlegs Lucy',
    icon: '🕸️',
    bio: 'Friendly daddy long legs spider engineer who repairs pipe bridges.',
    traits: ['helpful', 'clever', 'steady'],
    favoriteItems: ['silk toolkit', 'mini wrench', 'bridge blueprints'],
    collectible: 'Engineer buddy with bridge-building charms and silky trail effects.',
  },
  {
    name: 'Draino',
    icon: '🧭',
    bio: 'Trash panda tunnel guide who knows every shortcut under the bathroom floor.',
    traits: ['resourceful', 'funny', 'snack-motivated'],
    favoriteItems: ['lantern lid', 'crumb pouch', 'secret tunnel stamps'],
    collectible: 'Guide badge card with lantern skins and hidden route stickers.',
  },
]

const dubWorlds = [
  {
    name: 'Drain Kingdom',
    lore: 'A glowing pipe city where water-road bells ring whenever a new tub portal opens.',
    hook: 'Find royal keys, old maps, and Tubert’s hidden throne room.',
    collectibles: ['lily crowns', 'pipe pearls', 'royal drain coins'],
  },
  {
    name: 'Sea Spider Caverns',
    lore: 'Soft purple caves woven with safe silk bridges and tiny lantern nests.',
    hook: 'Repair bridge paths with Longlegs Lucy and unlock cave murals.',
    collectibles: ['silk charms', 'glow pebbles', 'bridge badges'],
  },
  {
    name: 'Forgotten Bathroom Temple',
    lore: 'An ancient tiled temple with soap-stone statues and whispery bubble doors.',
    hook: 'Match tile symbols to wake up the gentle bathtub guardians.',
    collectibles: ['soap gems', 'temple stickers', 'bubble runes'],
  },
  {
    name: 'Bubble Reef',
    lore: 'A warm reef of floating bubbles, giggle coral, and sleepy foam fish.',
    hook: 'Bounce through bubble lanes to rescue lost ducklings.',
    collectibles: ['foam flowers', 'reef badges', 'duckling cards'],
  },
  {
    name: 'Tub Ocean',
    lore: 'A huge cave ocean under the house where moonlight glows through drain stars.',
    hook: 'Sail the bathmat raft and search for rare portal currents.',
    collectibles: ['glow shells', 'raft flags', 'current maps'],
  },
  {
    name: 'Sewer Safari',
    lore: 'A silly safe safari route full of odd critters, snack clues, and echo tunnels.',
    hook: 'Follow Draino’s lantern trail to photograph weird friendly creatures.',
    collectibles: ['safari stamps', 'lantern skins', 'critter snapshots'],
  },
  {
    name: 'The Golden Drain',
    lore: 'A legendary glowing drain said to connect every weird world for one splashy minute.',
    hook: 'Collect seven bath tokens to open a rare crossover portal.',
    collectibles: ['gold tokens', 'portal stickers', 'legendary duck costumes'],
  },
]

const gameplayLoop = ['EXPLORE', 'COLLECT', 'CUSTOMIZE', 'RESCUE', 'DISCOVER']

const kidLoveCards = [
  ['Exploration', 'Every drain can become a secret map.'],
  ['Weird creatures', 'Friendly oddballs make each tunnel feel surprising.'],
  ['Friendship', 'Helpers solve splashy problems together.'],
  ['Creativity', 'Tub bases, stickers, and costumes make the world personal.'],
  ['Imagination', 'Ordinary bathrooms become hidden kingdoms.'],
  ['Hidden secrets', 'Rare portals reward careful looking.'],
  ['Humor', 'Silly water logic keeps the adventure light.'],
]

const duckRarities = [
  ['Bubble Common', 'Everyday duck friends with bright bath colors.'],
  ['Glow Rare', 'Ducks that shimmer near cave oceans and secret pipes.'],
  ['Golden Portal', 'Legendary ducks found only when the Golden Drain wakes up.'],
]

const mossGameWorlds = [
  {
    title: 'Surviving the First Day of School',
    icon: '🐸',
    role: 'Social survival comedy',
    summary:
      'A weird school roleplay full of frog escapes, classroom pets, chaotic cafeteria events, bug club gossip, and a popularity meter that rewards kindness over clout.',
    artPlaceholders: ['Locker sticker wall', 'Frog escape map', 'Cafeteria chaos board'],
    systems: [
      'school popularity meter',
      'strange substitute teacher events',
      'emotional/social roleplay choices',
      'friend group rumors with safe outcomes',
    ],
    roadmap: ['Bug Club Week', 'Classroom Pet Rescue', 'Cafeteria Mystery Day'],
    socialIdeas: ['first-day reaction clips', 'choose my desk sticker', 'frog hallway chase replay'],
    archetypes: ['new kid hero', 'cafeteria legend', 'bug club founder', 'mysterious substitute'],
  },
  {
    title: 'Spider Café',
    icon: '🕷️',
    role: 'Cute creepy cozy café',
    summary:
      'Players run a rainy terrarium café with bug pastries, frog tea, spider silk decorations, glowing drinks, odd creature customers, and collectible furniture.',
    artPlaceholders: ['Rainy window booth', 'Silk menu board', 'Terrarium lounge layout'],
    systems: ['bug pastry crafting', 'frog tea recipes', 'customer friendship stamps', 'furniture collecting'],
    roadmap: ['Glow Drink Night', 'Terrarium Lounge Upgrade', 'Tiny Umbrella Furniture Set'],
    socialIdeas: ['drink recipe reveals', 'cozy café tours', 'odd customer of the week'],
    archetypes: ['gentle spider owner', 'frog tea regular', 'moth pastry critic', 'rainy window poet'],
  },
  {
    title: 'Dumpster Raccoon Tycoon',
    icon: '🦝',
    role: 'Breakout chaos tycoon',
    summary:
      'Build a raccoon trash empire with shiny object collecting, dumpster upgrades, shopping cart vehicles, raccoon factions, pizza box artifacts, legendary dumpsters, and dance parties.',
    artPlaceholders: ['Trash throne room', 'Shopping cart garage', 'Legendary dumpster showroom'],
    systems: [
      'raccoon kingdom building',
      'shiny object economy',
      'neighborhood raids with silly safe stakes',
      'meme and emote collection',
      'raccoon mafia factions as cartoon clubs',
    ],
    roadmap: ['Golden Pizza Box Event', 'Shopping Cart Grand Prix', 'Moonlight Dumpster Dance Party'],
    socialIdeas: ['raccoon dance emotes', 'before/after dumpster upgrades', 'legendary trash pull reactions'],
    archetypes: ['chaos CEO', 'pizza box historian', 'cart racer', 'trash empire decorator'],
    viralFeatures: [
      'one-button raccoon dance party',
      'rare shiny object reveal clips',
      'shopping cart wipeout moments',
      'legendary dumpster opening animations',
      'custom trash palace tours',
    ],
  },
  {
    title: 'Snail Mail Club',
    icon: '🐌',
    role: 'Soft friendship sim',
    summary:
      'Magical letters, customizable snail homes, cozy gardens, gift exchanges, sticker collections, and emotional support mechanics built around gentle friendship.',
    artPlaceholders: ['Snail mailbox village', 'Sticker garden path', 'Letter-writing nook'],
    systems: ['magical letters', 'friendship gifts', 'snail home decorating', 'supportive note prompts'],
    roadmap: ['Garden Pen Pal Week', 'Sticker Swap Day', 'Moonlit Mail Route'],
    socialIdeas: ['letter reveal templates', 'snail home tours', 'kindness prompt cards'],
    archetypes: ['mail carrier', 'garden friend', 'sticker collector', 'quiet comfort buddy'],
  },
  {
    title: 'Midnight Zoo',
    icon: '🦇',
    role: 'Flagship wonder world',
    summary:
      'A nighttime zoo of glowing creatures, lantern bats, moss deer, moon foxes, magical aquarium tunnels, cave systems, hidden lore, and comforting mystery.',
    artPlaceholders: ['Lantern bat aviary', 'Moon fox trail', 'Aquarium tunnel glow map'],
    systems: ['nighttime weather', 'ambient music concepts', 'hidden lore fragments', 'creature care rituals'],
    roadmap: ['Rain Lantern Festival', 'Moon Fox Trail', 'Cave Aquarium Expansion'],
    socialIdeas: ['creature reveal shorts', 'night walk clips', 'lantern naming polls'],
    archetypes: ['quiet guide', 'glowing keeper', 'lost moon fox', 'lantern bat friend'],
  },
  {
    title: 'Frog Camp',
    icon: '🐸',
    role: 'Summer swamp adventure',
    summary:
      'Creature collecting, swamp canoe races, bug hunts, campfire stories, hidden cryptids, friendship cabins, summer events, and badge achievements.',
    artPlaceholders: ['Cabin sticker board', 'Canoe race creek', 'Campfire cryptid poster'],
    systems: ['badge achievements', 'friendship cabins', 'safe bug hunts', 'cryptid clue trails'],
    roadmap: ['Canoe Cup', 'Cryptid Campfire Week', 'Cabin Badge Board'],
    socialIdeas: ['camp badge reveals', 'canoe race clips', 'cryptid clue guesses'],
    archetypes: ['camp counselor frog', 'badge collector', 'cryptid spotter', 'canoe champion'],
  },
  {
    title: 'Webcore High',
    icon: '🕸️',
    role: 'Future flagship social RP',
    summary:
      'A weird cozy expressive school with neon rainy hallways, internet-culture creature clubs, glowing vending machines, hidden rooms, emotional roleplay, outfits, and lore-heavy atmosphere.',
    artPlaceholders: ['Neon hallway mood board', 'Glowing vending machine', 'Hidden club room map'],
    systems: ['style/outfit identity', 'creature clubs', 'emotional roleplay systems', 'secret room lore'],
    roadmap: ['Rainy Hallway Launch', 'Creature Club Fair', 'Hidden Room Season'],
    socialIdeas: ['outfit transitions', 'club invite clips', 'mysterious vending machine pulls'],
    archetypes: ['neon hallway poet', 'club founder', 'vending machine oracle', 'quiet lore hunter'],
  },
]

const mossMascots = [
  {
    name: 'Mossy',
    icon: '🐸',
    role: 'Main frog mascot',
    personality: 'Kind, curious, a little nervous, but always first to say hello.',
    lore: 'Mossy keeps the studio lantern lit and knows which puddles lead to new worlds.',
    visualNotes: 'Soft green hoodie, leaf backpack, tiny lantern charm, sticker-covered notebook.',
    favoriteItems: ['moss lantern', 'bug sticker book', 'warm cocoa lily pad'],
    dialogue: ['“We can be brave, but tiny.”', '“That puddle looks suspiciously magical.”'],
    merch: 'Plush frog, sticker sheet, lantern pin, notebook cover.',
  },
  {
    name: 'Binx',
    icon: '🦝',
    role: 'Trash raccoon chaos CEO',
    personality: 'Loud, funny, brilliant at turning junk into treasure.',
    lore: 'Binx founded the first trash palace after finding a golden pizza box at midnight.',
    visualNotes: 'Tiny crown, snack cape, shopping cart keys, shiny object sash.',
    favoriteItems: ['pizza box artifacts', 'bottle-cap medals', 'shopping cart wheels'],
    dialogue: ['“Trash? No. Future empire.”', '“Everybody dance. The dumpster is legendary.”'],
    merch: 'Meme stickers, emote pack, trash crown keychain, dance party shirt.',
  },
  {
    name: 'Velvet',
    icon: '🕷️',
    role: 'Spider Café owner',
    personality: 'Gentle, stylish, calm during chaos, secretly very funny.',
    lore: 'Velvet built a café where even spooky-looking friends get a warm cup of frog tea.',
    visualNotes: 'Silk apron, rain boots, tiny teacup tray, glowing thread decorations.',
    favoriteItems: ['frog tea', 'bug pastries', 'silk garlands'],
    dialogue: ['“Cute creepy is still cozy.”', '“One glowing tea for your weird little day.”'],
    merch: 'Café apron, recipe cards, spider silk sticker borders, tea cup charm.',
  },
  {
    name: 'Luma',
    icon: '🦇',
    role: 'Midnight Zoo guide',
    personality: 'Soft-spoken, mysterious, protective, loves quiet wonder.',
    lore: 'Luma guides visitors through glowing habitats and tells stories only lanterns remember.',
    visualNotes: 'Lantern wings, moon-map scarf, star freckles, aquarium-glow badge.',
    favoriteItems: ['moon maps', 'glow berries', 'rain lanterns'],
    dialogue: ['“Walk softly. The moon foxes are listening.”', '“Mystery can feel like home.”'],
    merch: 'Glow pin, lantern plush, moon fox map poster, nighttime sticker sheet.',
  },
  {
    name: 'Postie',
    icon: '🐌',
    role: 'Snail mail carrier',
    personality: 'Patient, warm, emotionally wise, never rushes a good note.',
    lore: 'Postie carries letters that arrive exactly when a friend needs them.',
    visualNotes: 'Mail satchel shell, flower stamps, tiny glasses, garden boots.',
    favoriteItems: ['friendship stamps', 'pressed flowers', 'cozy mail routes'],
    dialogue: ['“Slow mail still gets there.”', '“A kind note can be a tiny blanket.”'],
    merch: 'Stamp stickers, letter kit, shell backpack charm, garden postcard set.',
  },
]

const studioPrinciples = [
  ['Safe weirdness', 'Strange should feel inviting, not scary. Every odd creature has a soft place to land.'],
  ['Animal-first storytelling', 'Creatures are not props; they carry feelings, friendships, jokes, and secrets.'],
  ['Friendship-driven gameplay', 'The best win condition is helping someone feel included.'],
  ['Creativity over competition', 'Players decorate, roleplay, collect, and tell stories before chasing ranks.'],
  ['Cozy chaos', 'Funny mess is welcome when it stays safe, kind, and imaginative.'],
]

const creatorEmpirePillars = [
  ['Videos', 'Short parent-approved clips that show worlds, characters, updates, and funny moments.'],
  ['Shorts', 'Tiny scene ideas, mascot reactions, outfit reveals, and creature discoveries.'],
  ['Fan art', 'Safe prompts for friends to draw mascots, stickers, and cozy weird rooms.'],
  ['Roleplay clips', 'Small story scenes focused on friendship, feelings, and funny choices.'],
  ['Update logs', 'Creator confidence notes about what changed and what was learned.'],
  ['Friend screenshots', 'Parent-approved, no personal details, shared only when safe.'],
  ['Social sharing', 'Brand-first sharing with parent review and no public DMs.'],
  ['Audience/community', 'A kindness-first circle, not a popularity contest.'],
]

function currentRoute() {
  return window.location.pathname.replace(/\/$/, '') || '/'
}

function isRoute(route) {
  return currentRoute() === route
}

function Navigation() {
  return (
    <nav className="top-nav" aria-label="Wild Weird World HQ navigation">
      <a className={isRoute('/') ? 'active' : undefined} href="/">
        Dashboard
      </a>
      <a className={isRoute('/dub-dub-dub') ? 'active' : undefined} href="/dub-dub-dub">
        Dub Dub Dub
      </a>
      <a
        className={isRoute('/moss-hollow-studios') ? 'active' : undefined}
        href="/moss-hollow-studios"
      >
        Moss Hollow
      </a>
      <a className={isRoute('/ontology') ? 'active' : undefined} href="/ontology">
        Ontology
      </a>
      <a className={isRoute('/handles') ? 'active' : undefined} href="/handles">
        Handles
      </a>
      <a className={isRoute('/plans') ? 'active' : undefined} href="/plans">
        Plans
      </a>
      <a className={isRoute('/creator-empire') ? 'active' : undefined} href="/creator-empire">
        Creator Empire
      </a>
    </nav>
  )
}

function Shell({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

function Seo({ title, description }) {
  useEffect(() => {
    document.title = title
    const ensureMeta = (selector, attributes) => {
      let tag = document.head.querySelector(selector)
      if (!tag) {
        tag = document.createElement('meta')
        document.head.appendChild(tag)
      }
      Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value))
    }

    ensureMeta('meta[name="description"]', { name: 'description', content: description })
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    ensureMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    ensureMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: `${OFFICIAL_URL}/dub-dub-dub`,
    })
  }, [title, description])

  return null
}

function Dashboard() {
  return (
    <Shell>
      <main>
        <section className="hero-panel">
          <p className="eyebrow">Wild Weird World HQ</p>
          <h1>Zoo Queen Command Center</h1>
          <p className="lede">
            Kid-safe founder command center for games, weird animal worlds, creative projects,
            practice merch ideas, and friend-focused experiences.
          </p>
          <div className="hero-actions">
            <a href="/ontology">Open Ontology</a>
            <a href="/handles">Secure creator handles</a>
            <a href="/plans">Open plans & mockups</a>
            <a href="/moss-hollow-studios">Enter Moss Hollow</a>
            <a href={OFFICIAL_URL}>Official domain</a>
            <span>Local port {PORT}</span>
          </div>
        </section>

        <section className="domain-banner" aria-label="Official domain">
          <strong>Domain secured: {OFFICIAL_DOMAIN}</strong>
          <span>Parent-owned home base for future approved publishing.</span>
        </section>

        <section className="card-grid" aria-label="Dashboard quick links">
          {dashboardCards.map((card) => (
            <article className="feature-card" key={card.title}>
              <span className="card-emoji" aria-hidden="true">
                {card.emoji}
              </span>
              <p className="eyebrow">{card.eyebrow}</p>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              {card.href ? (
                <a className="card-link" href={card.href}>
                  Open
                </a>
              ) : null}
            </article>
          ))}
        </section>

        <section className="flow-panel" aria-labelledby="dashboard-flow">
          <p className="eyebrow">Founder loop</p>
          <h2 id="dashboard-flow">From Idea → Game → Content → Merch → Feedback → Next Update</h2>
          <FlowMap />
        </section>
      </main>
    </Shell>
  )
}

function FlowMap() {
  return (
    <ol className="flow-map">
      {flowSteps.map((step, index) => (
        <li key={step}>
          <span>{index + 1}</span>
          <strong>{step}</strong>
        </li>
      ))}
    </ol>
  )
}

function DubHeroVisual() {
  return (
    <div className="dub-hero-visual" aria-label="Bathtub portal with ducks and bubbles">
      <div className="underwater-glow"></div>
      <div className="bathtub-portal">
        <span className="portal-duck duck-one">🦆</span>
        <span className="portal-duck duck-two">🛁</span>
        <span className="portal-duck duck-three">🦆</span>
        <div className="drain-ring"></div>
      </div>
      {Array.from({ length: 14 }, (_, index) => (
        <span className={`bubble bubble-${index + 1}`} key={`bubble-${index + 1}`}></span>
      ))}
    </div>
  )
}

function DubDubDubPage() {
  const pageTitle = 'Dub Dub Dub™ | Ducks in the Tub'
  const pageDescription =
    'A kid-safe game concept about ducks riding through secret drains, glowing cave oceans, hidden kingdoms, and cozy weird worlds.'

  return (
    <Shell>
      <Seo title={pageTitle} description={pageDescription} />
      <main className="dub-page">
        <section className="dub-hero" aria-labelledby="dub-title">
          <div className="dub-hero-copy">
            <p className="eyebrow">New game concept</p>
            <h1 id="dub-title">Dub Dub Dub™</h1>
            <p className="dub-subtitle">Ducks in the Tub</p>
            <h2>One bathtub connects every weird world.</h2>
            <p className="lede">
              Ride with ducks through secret drains, underground rivers, glowing cave oceans, and
              hidden sea kingdoms.
            </p>
            <div className="hero-actions">
              <a href="#drain-portal">Explore the Drain Portal</a>
              <a href="#characters">Meet the Characters</a>
            </div>
          </div>
          <DubHeroVisual />
        </section>

        <section className="dub-lore" id="drain-portal" aria-labelledby="dub-lore-title">
          <div>
            <p className="eyebrow">What is Dub Dub Dub?</p>
            <h2 id="dub-lore-title">A secret underwater universe hidden beneath ordinary bathtubs.</h2>
          </div>
          <p>
            Dub Dub Dub begins when bathwater spins just right and the drain becomes a tiny glowing
            door. Under the tub are hidden worlds, subterranean rivers, drain kingdoms, underwater
            trains, weird creatures, and secret portals that only brave duck explorers can find.
          </p>
        </section>

        <section className="dub-map" aria-labelledby="dub-map-title">
          <p className="eyebrow">Tub tunnel map</p>
          <h2 id="dub-map-title">Follow the bubbles from bathroom to ocean cave.</h2>
          <div className="map-path">
            {['Bathtub Portal', 'Pipe Slide', 'Bubble Train', 'Cave Ocean', 'Golden Drain'].map(
              (stop, index) => (
                <div className="map-stop" key={stop}>
                  <span>{index + 1}</span>
                  <strong>{stop}</strong>
                </div>
              ),
            )}
          </div>
        </section>

        <section className="dub-section" id="characters" aria-labelledby="dub-characters-title">
          <div className="section-heading">
            <p className="eyebrow">Character grid</p>
            <h2 id="dub-characters-title">Meet the splash crew.</h2>
          </div>
          <div className="dub-card-grid character-grid">
            {dubCharacters.map((character) => (
              <article className="dub-character-card" key={character.name}>
                <span className="dub-icon" aria-hidden="true">
                  {character.icon}
                </span>
                <h3>{character.name}</h3>
                <p>{character.bio}</p>
                <div className="chips">
                  {character.traits.map((trait) => (
                    <span key={trait}>{trait}</span>
                  ))}
                </div>
                <dl className="platform-details">
                  <div>
                    <dt>Favorite items</dt>
                    <dd>{character.favoriteItems.join(', ')}</dd>
                  </div>
                  <div>
                    <dt>Collectible potential</dt>
                    <dd>{character.collectible}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="dub-section" aria-labelledby="dub-worlds-title">
          <div className="section-heading">
            <p className="eyebrow">Secret worlds</p>
            <h2 id="dub-worlds-title">Every drain opens somewhere strange.</h2>
          </div>
          <div className="dub-card-grid">
            {dubWorlds.map((world, index) => (
              <article className={`world-card world-card-${index + 1}`} key={world.name}>
                <h3>{world.name}</h3>
                <p>{world.lore}</p>
                <strong>{world.hook}</strong>
                <div className="chips">
                  {world.collectibles.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="dub-gameplay" aria-labelledby="dub-gameplay-title">
          <div>
            <p className="eyebrow">Gameplay loop</p>
            <h2 id="dub-gameplay-title">Explore, collect, customize, rescue, discover.</h2>
            <p>
              Players collect ducks, decorate tub bases, rescue gentle creatures, unlock hidden
              paths, find rare portals, earn stickers, and dress up characters with cozy costumes.
            </p>
          </div>
          <ol className="gameplay-loop">
            {gameplayLoop.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="rarity-row">
            {duckRarities.map(([rarity, text]) => (
              <article key={rarity}>
                <strong>{rarity}</strong>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="dub-section" aria-labelledby="kid-love-title">
          <div className="section-heading">
            <p className="eyebrow">Why kids love it</p>
            <h2 id="kid-love-title">Cozy wonder with silly secrets.</h2>
          </div>
          <div className="kid-love-grid">
            {kidLoveCards.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="www-connection" aria-labelledby="www-connection-title">
          <p className="eyebrow">Wild Weird World connection</p>
          <h2 id="www-connection-title">The drain is a tiny doorway to bigger weird worlds.</h2>
          <p>
            Dub Dub Dub can quietly connect to future crossover worlds, creature universes, and
            hidden portals across Wild Weird World. A rare tub current might drift toward ZooQueen,
            Weird Critter Cafe, or even a brave school-day adventure from Surviving the First Day of
            School.
          </p>
        </section>

        <section className="dub-cta" aria-labelledby="dub-cta-title">
          <p className="eyebrow">Drain portal ready</p>
          <h2 id="dub-cta-title">Ready to go down the drain?</h2>
          <div className="hero-actions">
            <a href="#drain-portal">Join the Adventure</a>
            <a href="/">Explore WWW HQ</a>
          </div>
        </section>
      </main>
    </Shell>
  )
}

function UniverseMap() {
  return (
    <section className="universe-map" aria-labelledby="universe-map-title">
      <div>
        <p className="eyebrow">Universe Map</p>
        <h2 id="universe-map-title">Everything connects through safe creative practice.</h2>
      </div>
      <div className="orbit-map" aria-label="Universe relationship map">
        <div className="orbit-center">WWW HQ</div>
        {universeLinks.map(([from, to]) => (
          <div className="orbit-chip" key={`${from}-${to}`}>
            <strong>{from}</strong>
            <span>connects to</span>
            <strong>{to}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

function OntologyFlowChains() {
  return (
    <section className="ontology-flow-chains" aria-labelledby="ontology-visual-flow-title">
      <div className="section-heading">
        <p className="eyebrow">Visual ontology flow</p>
        <h2 id="ontology-visual-flow-title">How the Wild Weird World loop moves.</h2>
      </div>
      {ontologyFlowChains.map((chain) => (
        <div className="flow-chain" key={chain.join('-')} aria-label={chain.join(' connects to ')}>
          {chain.map((item, index) => (
            <div className="flow-chain-step" key={item}>
              <span>{item}</span>
              {index < chain.length - 1 ? <strong>CONNECTS TO</strong> : null}
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

function FounderOS() {
  return (
    <section className="founder-os" aria-labelledby="founder-os-title">
      <p className="eyebrow">Founder Operating System</p>
      <h2 id="founder-os-title">A parent-safe way to practice building.</h2>
      <div className="os-lanes">
        {['Vision', 'Mission', 'Milestones', 'Quick wins', 'Founder XP', 'Parent approval'].map(
          (lane, index) => (
            <div className="os-lane" key={lane}>
              <span>{index + 1}</span>
              <strong>{lane}</strong>
              <small>connects to safe next steps</small>
            </div>
          ),
        )}
      </div>
    </section>
  )
}

function OntologyPage() {
  return (
    <Shell>
      <main>
        <section className="ontology-hero">
          <p className="eyebrow">Ontology</p>
          <h1>Wild Weird World Ontology</h1>
          <p className="lede">
            “How the universe connects games, characters, social ideas, merch, missions, and
            founder skills.”
          </p>
        </section>

        <UniverseMap />

        <OntologyFlowChains />

        <section className="ontology-grid" aria-label="Public-safe ontology domains">
          {ontologyDomains.map((domain) => (
            <article className="ontology-card" key={domain.title}>
              <div className="ontology-card-header">
                <span className="card-emoji" aria-hidden="true">
                  {domain.emoji}
                </span>
                <div>
                  <p className="eyebrow">connects to {domain.connectsTo.join(' + ')}</p>
                  <h2>{domain.title}</h2>
                </div>
              </div>
              <div className="chips">
                {domain.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <FounderOS />

        <section className="flow-panel" aria-labelledby="ontology-flow">
          <p className="eyebrow">Creative update path</p>
          <h2 id="ontology-flow">From Idea → Game → Content → Merch → Feedback → Next Update</h2>
          <FlowMap />
        </section>
      </main>
    </Shell>
  )
}

function PlatformCard({ platform }) {
  return (
    <article className="platform-card">
      <div className="platform-card-top">
        <div>
          <p className="eyebrow">{platform.platform}</p>
          <h3>{platform.suggestedHandle}</h3>
        </div>
        <span className={`priority-chip ${platform.priority.toLowerCase().replaceAll(' ', '-')}`}>
          {platform.priority}
        </span>
      </div>
      <dl className="platform-details">
        <div>
          <dt>Why it matters</dt>
          <dd>{platform.why}</dd>
        </div>
        <div>
          <dt>Parent owner status</dt>
          <dd>{platform.parentOwner}</dd>
        </div>
        <div>
          <dt>Safety note</dt>
          <dd>{platform.safety}</dd>
        </div>
        <div>
          <dt>Reservation status</dt>
          <dd>{platform.status}</dd>
        </div>
        <div>
          <dt>Next step</dt>
          <dd>{platform.nextStep}</dd>
        </div>
      </dl>
    </article>
  )
}

function HandleSection({ title }) {
  const cards = platformCards.filter((platform) => platform.section === title)

  return (
    <section className="handle-section" aria-labelledby={`${title.replaceAll(' ', '-').toLowerCase()}-title`}>
      <div className="section-heading">
        <p className="eyebrow">handle plan</p>
        <h2 id={`${title.replaceAll(' ', '-').toLowerCase()}-title`}>{title}</h2>
      </div>
      <div className="platform-grid">
        {cards.map((platform) => (
          <PlatformCard platform={platform} key={`${platform.section}-${platform.platform}`} />
        ))}
      </div>
    </section>
  )
}

function HandleSecurityScore() {
  const completed = parentSafetyChecklist.filter((_, index) => index < 3).length
  const score = Math.round((completed / parentSafetyChecklist.length) * 100)

  return (
    <section className="score-panel" aria-labelledby="handle-score-title">
      <div>
        <p className="eyebrow">parent control tracker</p>
        <h2 id="handle-score-title">Handle Security Score</h2>
        <p>
          Static planning score based on {completed} of {parentSafetyChecklist.length} safety
          habits marked as ready.
        </p>
      </div>
      <div className="score-meter" style={{ '--score': `${score}%` }}>
        <strong>{score}%</strong>
        <span>planning ready</span>
      </div>
    </section>
  )
}

function HandlesPage() {
  return (
    <Shell>
      <main>
        <section className="handles-hero">
          <p className="eyebrow">Handles</p>
          <h1>Social Handle Tracker</h1>
          <p className="lede">
            “Parent-approved places to reserve the Wild Weird World name before launch.”
          </p>
          <div className="hero-actions">
            <a href={OFFICIAL_URL}>Official domain: {OFFICIAL_DOMAIN}</a>
          </div>
        </section>

        <section className="handle-patterns" aria-labelledby="handle-patterns-title">
          <div className="section-heading">
            <p className="eyebrow">recommended patterns</p>
            <h2 id="handle-patterns-title">Brand handles to check first</h2>
            <p className="section-note">Reserve brand/game handles, not personal child handles.</p>
          </div>
          <div className="handle-groups">
            <div>
              <h3>Primary</h3>
              <div className="chips handle-chips">
                {primaryHandlePatterns.map((handle) => (
                  <span key={handle}>{handle}</span>
                ))}
              </div>
            </div>
            <div>
              <h3>Game handle ideas</h3>
              <div className="chips handle-chips">
                {restoredHandlePatterns.map((handle) => (
                  <span key={handle}>{handle}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HandleSecurityScore />

        <section className="next-actions" aria-labelledby="next-actions-title">
          <p className="eyebrow">Best next 3 actions</p>
          <h2 id="next-actions-title">Do these before any launch planning.</h2>
          <ol>
            {bestNextActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ol>
        </section>

        <HandleSection title="Secure First" />
        <HandleSection title="Future Options" />
        <HandleSection title="Avoid For Now" />

        <section className="rule-grid" aria-label="Naming rules and parent safety checklist">
          <article className="rules-card">
            <p className="eyebrow">Naming Rules</p>
            <h2>Naming Rules</h2>
            <ul>
              {namingRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </article>
          <article className="rules-card">
            <p className="eyebrow">Parent Safety Checklist</p>
            <h2>Parent Safety Checklist</h2>
            <ul>
              {parentSafetyChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </Shell>
  )
}

function PlanCard({ plan }) {
  return (
    <article className="plan-card">
      <div className="platform-card-top">
        <div>
          <p className="eyebrow">{plan.status}</p>
          <h3>{plan.name}</h3>
        </div>
        <span className={`status-chip ${plan.status.toLowerCase().replaceAll(' ', '-')}`}>
          {plan.status}
        </span>
      </div>
      <p>{plan.purpose}</p>
      <a className="mockup-link" href="#add-mockup-link">
        Add mockup link
      </a>
      <dl className="platform-details">
        <div>
          <dt>Next action</dt>
          <dd>{plan.nextAction}</dd>
        </div>
      </dl>
    </article>
  )
}

function PlansPage() {
  return (
    <Shell>
      <main>
        <section className="plans-hero">
          <p className="eyebrow">Plans</p>
          <h1>WWW-HQ Plans & Mockups</h1>
          <p className="lede">
            “Founder-friendly blueprints for games, content, merch, and next updates.”
          </p>
        </section>

        <section className="plans-board" aria-label="Plans and mockups board">
          {planSections.map((section) => (
            <article className="plans-section" key={section.title}>
              <div className="section-heading">
                <p className="eyebrow">planning lane</p>
                <h2>{section.title}</h2>
              </div>
              <div className="plan-grid">
                {section.cards.map((plan) => (
                  <PlanCard plan={plan} key={plan.name} />
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
    </Shell>
  )
}

function MossGameCard({ game }) {
  return (
    <article className="moss-game-card">
      <span className="dub-icon" aria-hidden="true">
        {game.icon}
      </span>
      <p className="eyebrow">{game.role}</p>
      <h3>{game.title}</h3>
      <p>{game.summary}</p>
      <div className="moss-mini-grid">
        <div>
          <strong>Concept art placeholders</strong>
          <ul>
            {game.artPlaceholders.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Systems</strong>
          <ul>
            {game.systems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Future update roadmap</strong>
          <ul>
            {game.roadmap.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Social gameplay ideas</strong>
          <ul>
            {game.socialIdeas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Character archetypes</strong>
          <ul>
            {game.archetypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      {game.viralFeatures ? (
        <div className="viral-feature-box">
          <strong>Potential Viral Features</strong>
          <div className="chips">
            {game.viralFeatures.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  )
}

function MascotCard({ mascot }) {
  return (
    <article className="mascot-card">
      <span className="dub-icon" aria-hidden="true">
        {mascot.icon}
      </span>
      <p className="eyebrow">{mascot.role}</p>
      <h3>{mascot.name}</h3>
      <p>{mascot.personality}</p>
      <dl className="platform-details">
        <div>
          <dt>Lore</dt>
          <dd>{mascot.lore}</dd>
        </div>
        <div>
          <dt>Visual notes</dt>
          <dd>{mascot.visualNotes}</dd>
        </div>
        <div>
          <dt>Favorite items</dt>
          <dd>{mascot.favoriteItems.join(', ')}</dd>
        </div>
        <div>
          <dt>Dialogue examples</dt>
          <dd>{mascot.dialogue.join(' / ')}</dd>
        </div>
        <div>
          <dt>Future merch potential</dt>
          <dd>{mascot.merch}</dd>
        </div>
      </dl>
    </article>
  )
}

function MossHollowStudiosPage() {
  return (
    <Shell>
      <main className="moss-page">
        <section className="moss-hero">
          <p className="eyebrow">Studio umbrella</p>
          <h1>🌿 Moss Hollow Studios</h1>
          <p className="lede">
            A mossy, glowing, rain-soft studio for weird cozy animals, friendship stories, social
            roleplay, frogs, raccoons, spiders, lantern creatures, and handmade worlds.
          </p>
          <div className="hero-actions">
            <a href="#moss-portfolio">Explore the portfolio</a>
            <a href="/creator-empire">Build the creator empire</a>
          </div>
        </section>

        <section className="moss-overview">
          <div>
            <p className="eyebrow">Emotional identity</p>
            <h2>Safe weirdness, soft mystery, and friendship-first play.</h2>
          </div>
          <p>
            Moss Hollow Studios should feel like a doodlebook found under a rainy porch: handmade
            signs, bug jars, terrariums, nighttime lanterns, mossy paths, cozy chaos, and strange
            animal friends who make creativity feel safe.
          </p>
        </section>

        <section className="studio-principles" aria-label="Moss Hollow design principles">
          {studioPrinciples.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section id="moss-portfolio" className="moss-section" aria-labelledby="moss-portfolio-title">
          <div className="section-heading">
            <p className="eyebrow">Additive portfolio expansion</p>
            <h2 id="moss-portfolio-title">Game universe pages and lore boards</h2>
          </div>
          <div className="moss-game-grid">
            {mossGameWorlds.map((game) => (
              <MossGameCard game={game} key={game.title} />
            ))}
          </div>
        </section>

        <section className="moss-section" aria-labelledby="mascot-system-title">
          <div className="section-heading">
            <p className="eyebrow">Recurring mascot system</p>
            <h2 id="mascot-system-title">Studio characters that can travel between worlds</h2>
          </div>
          <div className="mascot-grid">
            {mossMascots.map((mascot) => (
              <MascotCard mascot={mascot} key={mascot.name} />
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function CreatorEmpirePage() {
  return (
    <Shell>
      <main className="creator-page">
        <section className="creator-hero">
          <p className="eyebrow">Kid-safe creator strategy</p>
          <h1>Build Your Own Weird Creature Creator Empire</h1>
          <p className="lede">
            A friendship-first plan for videos, shorts, fan art, roleplay clips, update logs, and
            creator confidence without chasing vanity metrics.
          </p>
        </section>

        <section className="creator-grid" aria-label="Creator empire planning pillars">
          {creatorEmpirePillars.map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="moss-overview">
          <div>
            <p className="eyebrow">Community promise</p>
            <h2>Creativity and friendship come first.</h2>
          </div>
          <p>
            The goal is not to look popular. The goal is to keep making worlds, sharing safe little
            stories, celebrating friend feedback, and growing confidence one cozy weird update at a
            time.
          </p>
        </section>
      </main>
    </Shell>
  )
}

function BrandFooter() {
  return (
    <footer className="brand-footer">
      Official domain: <a href={OFFICIAL_URL}>{OFFICIAL_DOMAIN}</a>
    </footer>
  )
}

function App() {
  return (
    <>
      {isRoute('/ontology') ? (
        <OntologyPage />
      ) : isRoute('/handles') ? (
        <HandlesPage />
      ) : isRoute('/dub-dub-dub') ? (
        <DubDubDubPage />
      ) : isRoute('/moss-hollow-studios') ? (
        <MossHollowStudiosPage />
      ) : isRoute('/creator-empire') ? (
        <CreatorEmpirePage />
      ) : isRoute('/plans') ? (
        <PlansPage />
      ) : (
        <Dashboard />
      )}
      <BrandFooter />
    </>
  )
}

export default App
