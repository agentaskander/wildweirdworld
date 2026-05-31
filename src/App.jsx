import { useEffect } from 'react'
import './App.css'
import {
  hollowCoastBooks,
  hollowCoastCharacters,
  hollowCoastCreatures,
  hollowCoastLocations,
  hollowCoastMerchConcepts,
  hollowCoastOverview,
  hollowCoastPortalNetwork,
  hollowCoastRealms,
  hollowCoastRobloxHooks,
  hollowCoastSocialIdeas,
  hollowCoastStoryThreads,
} from './data/stories/hollowCoast'
import {
  queenJellyCharacters,
  queenJellyGames,
  queenJellyLore,
  queenJellyRegions,
  queenJellyTypes,
  queenJellyUniverse,
} from './data/queenJelly'
import {
  clobotArchetypes,
  clobotCommunitySystem,
  clobotCreatorArchetypes,
  clobotCreatorFeatures,
  clobotDefinitions,
  clobotEducationAngles,
  clobotExpressionVariants,
  clobotFaceGameplayHooks,
  clobotGame,
  clobotGameplayLoop,
  clobotIdentityKits,
  clobotItems,
  clobotLab,
  clobotLabUiIdeas,
  clobotMarketingKit,
  clobotMechanics,
  clobotRealms,
  clobotRoadmap,
  clobotSocialCreator,
} from './data/clobotGame'
import {
  blogArticles,
  founderSections,
  gameDevForKidsSections,
  processSteps,
  seoCharacters,
  seoCoreLinks,
  seoGames,
  seoWorlds,
} from './data/seoExpansion'

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
    title: 'Hollow Coast Chronicles',
    eyebrow: 'Story archive',
    emoji: '🌊',
    text: 'Explore a foggy coast of portals, lighthouse secrets, reef civilizations, and friendship mysteries.',
    href: '/stories/hollow-coast',
  },
  {
    title: 'Queen Jelly',
    eyebrow: 'Nectar Realm',
    emoji: '🍯',
    text: 'Enter a magical pollinator realm of jelly keepers, moon blooms, cozy ecology, and Roblox-ready quests.',
    href: '/queen-jelly',
  },
  {
    title: 'Clobot Game',
    eyebrow: 'Roblox-native concept',
    emoji: '🤖',
    text: 'Build strange little helper bots for signal worlds, modular creativity, and cozy sci-fi exploration.',
    href: '/clobot-game',
  },
  {
    title: 'Clobot Face Lab',
    eyebrow: 'Optional experiment',
    emoji: '◔',
    text: 'Design expressive lowercase-c bot faces, emotion variants, stickers, gadgets, and playful identities.',
    href: '/clobot-lab-next',
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
      <a className={currentRoute().startsWith('/stories') ? 'active' : undefined} href="/stories">
        Stories
      </a>
      <a
        className={currentRoute().startsWith('/queen-jelly') ? 'active' : undefined}
        href="/queen-jelly"
      >
        Queen Jelly
      </a>
      <a className={isRoute('/clobot-game') ? 'active' : undefined} href="/clobot-game">
        Clobot
      </a>
      <a
        className={
          isRoute('/clobot-lab-classic') ||
          isRoute('/clobot-lab-next') ||
          isRoute('/experiments/clobot-creator') ||
          isRoute('/clobot-lab')
            ? 'active'
            : undefined
        }
        href="/clobot-lab-next"
      >
        Face Lab
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
      <a className={isRoute('/games') ? 'active' : undefined} href="/games">
        Games
      </a>
      <a className={isRoute('/characters') ? 'active' : undefined} href="/characters">
        Characters
      </a>
      <a className={isRoute('/worlds') ? 'active' : undefined} href="/worlds">
        Worlds
      </a>
      <a className={isRoute('/founder') ? 'active' : undefined} href="/founder">
        Founder
      </a>
      <a className={currentRoute().startsWith('/blog') ? 'active' : undefined} href="/blog">
        Blog
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

function RouteSeo({ title, description, path = currentRoute(), type = 'website', schema }) {
  useEffect(() => {
    document.title = title
    const canonicalUrl = `${OFFICIAL_URL}${path}`
    const ensureTag = (selector, createTag, attributes) => {
      let tag = document.head.querySelector(selector)
      if (!tag) {
        tag = document.createElement(createTag)
        document.head.appendChild(tag)
      }
      Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value))
    }

    ensureTag('meta[name="description"]', 'meta', { name: 'description', content: description })
    ensureTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: canonicalUrl })
    ensureTag('meta[property="og:title"]', 'meta', { property: 'og:title', content: title })
    ensureTag('meta[property="og:description"]', 'meta', {
      property: 'og:description',
      content: description,
    })
    ensureTag('meta[property="og:type"]', 'meta', { property: 'og:type', content: type })
    ensureTag('meta[property="og:url"]', 'meta', { property: 'og:url', content: canonicalUrl })
    ensureTag('meta[name="twitter:card"]', 'meta', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    ensureTag('meta[name="twitter:title"]', 'meta', { name: 'twitter:title', content: title })
    ensureTag('meta[name="twitter:description"]', 'meta', {
      name: 'twitter:description',
      content: description,
    })

    if (schema) {
      let jsonTag = document.head.querySelector('script[data-route-schema="true"]')
      if (!jsonTag) {
        jsonTag = document.createElement('script')
        jsonTag.type = 'application/ld+json'
        jsonTag.setAttribute('data-route-schema', 'true')
        document.head.appendChild(jsonTag)
      }
      jsonTag.textContent = JSON.stringify(schema)
    }
  }, [description, path, schema, title, type])

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
            <a href="/stories/hollow-coast">Explore Hollow Coast</a>
            <a href="/queen-jelly">Visit Queen Jelly</a>
            <a href="/clobot-game">Open Clobot Game</a>
            <a href="/clobot-lab-next">Open Face Lab</a>
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

const storyRoutes = [
  ['Archive', '/stories'],
  ['Overview', '/stories/hollow-coast'],
  ['Characters', '/stories/hollow-coast/characters'],
  ['Locations', '/stories/hollow-coast/locations'],
  ['Books', '/stories/hollow-coast/books'],
  ['Creatures', '/stories/hollow-coast/creatures'],
  ['Realms', '/stories/hollow-coast/realms'],
  ['Portal Network', '/stories/hollow-coast/portal-network'],
  ['Merch Lab', '/stories/hollow-coast/merch-lab'],
  ['Social Kit', '/stories/hollow-coast/social-media-kit'],
]

function StoryNav() {
  return (
    <nav className="story-nav" aria-label="Hollow Coast story navigation">
      {storyRoutes.map(([label, href]) => (
        <a className={isRoute(href) ? 'active' : undefined} href={href} key={href}>
          {label}
        </a>
      ))}
    </nav>
  )
}

function HollowCoastHero({ eyebrow = 'Moss Hollow Studios', title = hollowCoastOverview.title }) {
  return (
    <section className="hollow-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{hollowCoastOverview.subtitle}</p>
        <div className="hero-actions">
          <a href="/stories/hollow-coast/characters">Open character cards</a>
          <a href="/stories/hollow-coast/books">Explore books</a>
          <a href="/stories/hollow-coast/portal-network">Map portals</a>
        </div>
      </div>
      <div className="coast-map-card" aria-label="Glowing Hollow Coast map">
        <span className="map-mist mist-one"></span>
        <span className="map-mist mist-two"></span>
        {['Cove', 'Caverns', 'Reef', 'Lighthouse', 'Arches'].map((node, index) => (
          <span className={`portal-dot portal-dot-${index + 1}`} key={node}>
            {node}
          </span>
        ))}
        <strong>Fog Map 01</strong>
      </div>
    </section>
  )
}

function StoryHubPage() {
  return (
    <Shell>
      <main className="stories-page">
        <section className="stories-hub-hero">
          <p className="eyebrow">Moss Hollow Studios</p>
          <h1>Story Worlds Archive</h1>
          <p className="lede">
            A public-safe library for cozy mysteries, creature cards, franchise maps, game hooks,
            and kid-friendly creator planning.
          </p>
          <div className="hero-actions">
            <a href="/stories/hollow-coast">Explore the Coast</a>
            <a href="/moss-hollow-studios">Moss Hollow Studios</a>
          </div>
        </section>
        <StoryNav />
        <section className="story-franchise-grid" aria-label="Story franchise cards">
          <article className="journal-card feature-franchise-card">
            <p className="eyebrow">Flagship story bible</p>
            <h2>Hollow Coast Chronicles</h2>
            <p>
              Foggy coves, portal tides, lighthouse clues, underwater archives, and friendship-first
              mystery adventures built for stories, Roblox worlds, cards, and safe content ideas.
            </p>
            <a className="card-link" href="/stories/hollow-coast">
              Explore the Coast
            </a>
          </article>
          <article className="journal-card">
            <p className="eyebrow">Studio section</p>
            <h2>🌿 Moss Hollow Studios</h2>
            <p>
              Weird cozy design principles, safe weirdness, animal-first storytelling, friendship
              gameplay, and handmade world-building energy.
            </p>
            <a className="card-link" href="/moss-hollow-studios">
              Enter Studio
            </a>
          </article>
        </section>
      </main>
    </Shell>
  )
}

function StudioFranchiseSection() {
  return (
    <section className="studio-franchise-section">
      <div>
        <p className="eyebrow">Expandable studio section</p>
        <h2>🌿 Moss Hollow Studios builds safe weirdness.</h2>
      </div>
      <div className="journal-grid">
        {[
          ['Emotional identity', 'Cozy mystery, brave friendships, and strange places that still feel safe.'],
          ['Animal-first storytelling', 'Creatures are helpers, clue keepers, guides, and collectible friends.'],
          ['Creativity over competition', 'The best reward is a better story, a kinder choice, or a new map page.'],
          ['Franchise-ready worlds', 'Each story can become books, cards, Roblox locations, safe videos, and merch concepts.'],
        ].map(([title, text]) => (
          <article className="journal-card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function StoryThreadGraph() {
  return (
    <section className="story-section" aria-labelledby="thread-graph-title">
      <div className="section-heading">
        <p className="eyebrow">Intertwining story threads</p>
        <h2 id="thread-graph-title">Every mystery tugs on another string.</h2>
      </div>
      <div className="thread-graph">
        {hollowCoastStoryThreads.map((thread, index) => (
          <article className={`thread-card thread-card-${index + 1}`} key={thread.title}>
            <h3>{thread.title}</h3>
            <p>{thread.summary}</p>
            <div className="chips">
              {thread.beats.map((beat) => (
                <span key={beat}>{beat}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function HollowCoastPage() {
  return (
    <Shell>
      <main className="stories-page hollow-page">
        <HollowCoastHero />
        <StoryNav />
        <StudioFranchiseSection />

        <section className="story-section" aria-labelledby="coast-quick-title">
          <div className="section-heading">
            <p className="eyebrow">Explorer journal</p>
            <h2 id="coast-quick-title">Start with the living map.</h2>
          </div>
          <div className="journal-grid">
            {hollowCoastOverview.designWords.map((word) => (
              <article className="journal-card sticker-card" key={word}>
                <span>✦</span>
                <h3>{word}</h3>
                <p>Design cue for pages, maps, lore cards, collectibles, and safe story posts.</p>
              </article>
            ))}
          </div>
        </section>

        <StoryThreadGraph />

        <section className="story-section" aria-labelledby="route-overview-title">
          <div className="section-heading">
            <p className="eyebrow">Archive rooms</p>
            <h2 id="route-overview-title">Choose a Hollow Coast shelf.</h2>
          </div>
          <div className="story-route-grid">
            {storyRoutes.slice(2).map(([label, href]) => (
              <a className="route-tile" href={href} key={href}>
                <strong>{label}</strong>
                <span>Open archive</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function CharacterLoreCard({ character }) {
  return (
    <article className="lore-card character-lore-card">
      <span className="dub-icon" aria-hidden="true">
        {character.icon}
      </span>
      <p className="eyebrow">{character.role}</p>
      <h2>{character.name}</h2>
      <p>{character.bio}</p>
      <div className="chips">
        {character.personality.map((trait) => (
          <span key={trait}>{trait}</span>
        ))}
      </div>
      {[
        ['Relationships', character.relationships],
        ['Secrets', character.secrets],
        ['Arc progression', character.arcProgression],
        ['Associated locations', character.associatedLocations],
        ['Associated creatures', character.associatedCreatures],
        ['Future story hooks', character.futureStoryHooks],
        ['Merch concepts', character.merchConcepts],
        ['Roblox role ideas', character.robloxRoleIdeas],
      ].map(([label, items]) => (
        <details key={label}>
          <summary>{label}</summary>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      ))}
    </article>
  )
}

function HollowCoastCharactersPage() {
  return (
    <Shell>
      <main className="stories-page">
        <HollowCoastHero eyebrow="Character archive" title="Hollow Coast Characters" />
        <StoryNav />
        <section className="story-section">
          <div className="character-lore-grid">
            {hollowCoastCharacters.map((character) => (
              <CharacterLoreCard character={character} key={character.name} />
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function LocationLoreCard({ location }) {
  return (
    <article className="lore-card location-lore-card">
      <span className="dub-icon" aria-hidden="true">
        {location.icon}
      </span>
      <p className="eyebrow">{location.mood}</p>
      <h2>{location.name}</h2>
      <strong>{location.visualCard}</strong>
      <p>{location.lore}</p>
      {[
        ['Story connections', location.storyConnections],
        ['Creature presence', location.creaturePresence],
        ['Future chapter hooks', location.futureChapterHooks],
      ].map(([label, items]) => (
        <details key={label} open={label === 'Story connections'}>
          <summary>{label}</summary>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      ))}
    </article>
  )
}

function HollowCoastLocationsPage() {
  return (
    <Shell>
      <main className="stories-page">
        <HollowCoastHero eyebrow="Location system" title="Hollow Coast Locations" />
        <StoryNav />
        <section className="story-section">
          <div className="location-lore-grid">
            {hollowCoastLocations.map((location) => (
              <LocationLoreCard location={location} key={location.name} />
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function BookExplorerCard({ book }) {
  return (
    <article className="book-explorer-card">
      <p className="eyebrow">{book.series}</p>
      <h2>{book.title}</h2>
      <p>{book.premise}</p>
      <div className="chapter-stack">
        {book.chapters.map((chapter, index) => (
          <details className="chapter-card" key={chapter.title} open={index === 0}>
            <summary>
              <span>Chapter {index + 1}</span>
              <strong>{chapter.title}</strong>
            </summary>
            <div className="chapter-grid">
              {[
                ['Themes', chapter.themes],
                ['Story points', chapter.storyPoints],
                ['Character intersections', chapter.characterIntersections],
                ['Future foreshadowing', chapter.futureForeshadowing],
                ['Merch tie-ins', chapter.merchTieIns],
                ['Roblox tie-ins', chapter.robloxTieIns],
                ['Social content hooks', chapter.socialContentHooks],
              ].map(([label, items]) => (
                <div key={label}>
                  <strong>{label}</strong>
                  <ul>
                    {items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </article>
  )
}

function HollowCoastBooksPage() {
  return (
    <Shell>
      <main className="stories-page">
        <HollowCoastHero eyebrow="Book + chapter explorer" title="Hollow Coast Books" />
        <StoryNav />
        <section className="story-section">
          <div className="book-stack">
            {hollowCoastBooks.map((book) => (
              <BookExplorerCard book={book} key={book.title} />
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function SimpleArchivePage({ title, eyebrow, items, detailLabel = 'Archive note' }) {
  return (
    <Shell>
      <main className="stories-page">
        <HollowCoastHero eyebrow={eyebrow} title={title} />
        <StoryNav />
        <section className="story-section">
          <div className="journal-grid">
            {items.map(([name, text]) => (
              <article className="journal-card collectible-card" key={name}>
                <p className="eyebrow">{detailLabel}</p>
                <h2>{name}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function HollowCoastPortalNetworkPage() {
  return (
    <Shell>
      <main className="stories-page">
        <HollowCoastHero eyebrow="Portal network" title="Hollow Coast Portal Network" />
        <StoryNav />
        <section className="story-section portal-network-section">
          <div className="section-heading">
            <p className="eyebrow">Lore graph map</p>
            <h2>Routes connect only when the story needs them.</h2>
          </div>
          <div className="portal-network-map">
            {hollowCoastPortalNetwork.map(([from, to, note], index) => (
              <article className={`portal-route portal-route-${index + 1}`} key={`${from}-${to}`}>
                <strong>{from}</strong>
                <span>connects to</span>
                <strong>{to}</strong>
                <small>{note}</small>
              </article>
            ))}
          </div>
        </section>
        <StoryThreadGraph />
      </main>
    </Shell>
  )
}

function HollowCoastMerchLabPage() {
  return (
    <Shell>
      <main className="stories-page">
        <HollowCoastHero eyebrow="Practice merch lab" title="Hollow Coast Merch Lab" />
        <StoryNav />
        <section className="story-section merch-lab-section">
          <div className="section-heading">
            <p className="eyebrow">Parent-safe concepts</p>
            <h2>Ideas only, no real sales inside the app.</h2>
          </div>
          <div className="journal-grid">
            {hollowCoastMerchConcepts.map(([name, text]) => (
              <article className="journal-card merch-card" key={name}>
                <h2>{name}</h2>
                <p>{text}</p>
                <div className="chips">
                  <span>Parent review</span>
                  <span>Practice concept</span>
                  <span>No checkout</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function HollowCoastSocialMediaKitPage() {
  return (
    <Shell>
      <main className="stories-page">
        <HollowCoastHero eyebrow="Social media kit" title="Hollow Coast Social Media Kit" />
        <StoryNav />
        <section className="story-section social-kit-section">
          <div className="section-heading">
            <p className="eyebrow">Creativity + friendship</p>
            <h2>Safe content prompts for parent-reviewed storytelling.</h2>
          </div>
          <div className="journal-grid">
            {hollowCoastSocialIdeas.map(([name, text]) => (
              <article className="journal-card" key={name}>
                <h2>{name}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="story-section">
          <div className="section-heading">
            <p className="eyebrow">Roblox/world expansion hooks</p>
            <h2>Game ideas that stay friendship-first.</h2>
          </div>
          <div className="journal-grid">
            {hollowCoastRobloxHooks.map(([name, text]) => (
              <article className="journal-card collectible-card" key={name}>
                <h2>{name}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

const queenJellyRoutes = [
  ['Realm', '/queen-jelly'],
  ['Characters', '/queen-jelly/characters'],
  ['Regions', '/queen-jelly/regions'],
  ['Lore', '/queen-jelly/lore'],
  ['Jellies', '/queen-jelly/jellies'],
  ['Games', '/queen-jelly/games'],
]

function QueenJellyNav() {
  return (
    <nav className="queen-nav" aria-label="Queen Jelly navigation">
      {queenJellyRoutes.map(([label, href]) => (
        <a className={isRoute(href) ? 'active' : undefined} href={href} key={href}>
          {label}
        </a>
      ))}
    </nav>
  )
}

function QueenJellyHero({ eyebrow = 'Queen Jelly Bee', title = queenJellyUniverse.title }) {
  return (
    <section className="queen-hero">
      <div className="queen-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="queen-subtitle">{queenJellyUniverse.realm}</p>
        <p className="lede">{queenJellyUniverse.tagline}</p>
        <div className="hero-actions">
          <a href="/queen-jelly/characters">Meet the Keepers</a>
          <a href="/queen-jelly/jellies">Collect Jellies</a>
          <a href="/queen-jelly/games">Game Concepts</a>
        </div>
      </div>
      <div className="nectar-orb" aria-label="Glowing Nectar Realm portal">
        <span className="pollen pollen-one"></span>
        <span className="pollen pollen-two"></span>
        <span className="pollen pollen-three"></span>
        <strong>Queen Jelly Bee</strong>
      </div>
    </section>
  )
}

function QueenJellyLandingPage() {
  return (
    <Shell>
      <main className="queen-page">
        <QueenJellyHero />
        <QueenJellyNav />

        <section className="queen-section nectar-overview" aria-labelledby="nectar-title">
          <div>
            <p className="eyebrow">Nectar Realm overview</p>
            <h2 id="nectar-title">A warm little world where nature hums back.</h2>
          </div>
          <p>
            Queen Jelly is a magical ecology universe for flower paths, moon moth messages, mushroom
            archives, swamp markets, floating apiaries, and gentle creature quests. It can grow into
            QueenJelly.org storytelling, Wild Weird World crossovers, and Roblox experiences while
            staying parent-safe and kid-friendly.
          </p>
        </section>

        <section className="queen-section">
          <div className="section-heading">
            <p className="eyebrow">Universe pillars</p>
            <h2>Cozy fantasy ecology without lectures.</h2>
          </div>
          <div className="queen-card-grid">
            {queenJellyUniverse.pillars.map((pillar) => (
              <article className="queen-card jelly-glow-card" key={pillar}>
                <h3>{pillar}</h3>
                <p>Built for soft wonder, stewardship, creature care, and expandable story play.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="queen-section">
          <div className="section-heading">
            <p className="eyebrow">Featured characters</p>
            <h2>Helpers, scouts, scholars, builders, and market troublemakers.</h2>
          </div>
          <div className="queen-card-grid">
            {queenJellyCharacters.slice(0, 4).map((character) => (
              <QueenCharacterCard character={character} key={character.name} compact />
            ))}
          </div>
        </section>

        <section className="queen-section">
          <div className="section-heading">
            <p className="eyebrow">Regions preview</p>
            <h2>Map the gardens, forests, hollows, markets, and sky hives.</h2>
          </div>
          <div className="queen-map-grid">
            {queenJellyRegions.map((region) => (
              <a className="queen-region-tile" href="/queen-jelly/regions" key={region.name}>
                <span>{region.icon}</span>
                <strong>{region.name}</strong>
              </a>
            ))}
          </div>
        </section>

        <section className="queen-section queen-split">
          <article>
            <p className="eyebrow">Lore preview</p>
            <h2>Living Resonance, Jelly Keepers, and Static Fog.</h2>
            <p>
              The Nectar Realm glows when characters care for habitats, repair routes, and listen
              to the soft signals moving through flowers, roots, mushrooms, silk, and jelly pools.
            </p>
            <a className="card-link" href="/queen-jelly/lore">
              Open lore
            </a>
          </article>
          <article>
            <p className="eyebrow">Roblox / WWW expansion</p>
            <h2>Quest loops that reward helping the realm.</h2>
            <p>
              Future games can focus on jelly collecting, festival decorating, habitat repair,
              market quests, archive puzzles, and seasonal kid-safe story events.
            </p>
            <a className="card-link" href="/queen-jelly/games">
              Open game concepts
            </a>
          </article>
        </section>

        <section className="queen-section ecology-layer">
          <p className="eyebrow">Ecology education layer</p>
          <h2>Pollinator stewardship as magical care, not homework.</h2>
          <p>
            Queen Jelly can gently introduce pollination, habitats, seasonal changes, responsible
            collecting, and community care through quests and stories. The tone stays comforting,
            playful, and non-medical.
          </p>
        </section>
      </main>
    </Shell>
  )
}

function QueenCharacterCard({ character, compact = false }) {
  return (
    <article className="queen-card queen-character-card">
      <span className="dub-icon" aria-hidden="true">
        {character.icon}
      </span>
      <p className="eyebrow">{character.role}</p>
      <h2>{character.name}</h2>
      <div className="chips">
        {character.personality.map((trait) => (
          <span key={trait}>{trait}</span>
        ))}
      </div>
      {!compact ? (
        <dl className="platform-details">
          <div>
            <dt>Abilities</dt>
            <dd>{character.abilities.join(', ')}</dd>
          </div>
          <div>
            <dt>Story purpose</dt>
            <dd>{character.storyPurpose}</dd>
          </div>
          <div>
            <dt>Roblox role</dt>
            <dd>{character.robloxRole}</dd>
          </div>
        </dl>
      ) : (
        <p>{character.storyPurpose}</p>
      )}
    </article>
  )
}

function QueenJellyCharactersPage() {
  return (
    <Shell>
      <main className="queen-page">
        <QueenJellyHero eyebrow="Character garden" title="Queen Jelly Characters" />
        <QueenJellyNav />
        <section className="queen-section">
          <div className="queen-card-grid">
            {queenJellyCharacters.map((character) => (
              <QueenCharacterCard character={character} key={character.name} />
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function QueenJellyRegionsPage() {
  return (
    <Shell>
      <main className="queen-page">
        <QueenJellyHero eyebrow="Nectar Realm map" title="Queen Jelly Regions" />
        <QueenJellyNav />
        <section className="queen-section">
          <div className="queen-card-grid">
            {queenJellyRegions.map((region) => (
              <article className="queen-card queen-region-card" key={region.name}>
                <span className="dub-icon" aria-hidden="true">
                  {region.icon}
                </span>
                <h2>{region.name}</h2>
                <p>{region.atmosphere}</p>
                <dl className="platform-details">
                  <div>
                    <dt>Inhabitants</dt>
                    <dd>{region.inhabitants.join(', ')}</dd>
                  </div>
                  <div>
                    <dt>Story hooks</dt>
                    <dd>{region.storyHooks.join(' / ')}</dd>
                  </div>
                  <div>
                    <dt>Game mechanic ideas</dt>
                    <dd>{region.gameMechanics.join(', ')}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function QueenJellyLorePage() {
  return (
    <Shell>
      <main className="queen-page">
        <QueenJellyHero eyebrow="Core lore" title="Queen Jelly Lore" />
        <QueenJellyNav />
        <section className="queen-section">
          <div className="queen-lore-timeline">
            {queenJellyLore.map((item, index) => (
              <article className="queen-card lore-bloom-card" key={item.title}>
                <span className="timeline-number">{index + 1}</span>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <strong>{item.meaning}</strong>
              </article>
            ))}
          </div>
        </section>
        <section className="queen-section ecology-layer">
          <p className="eyebrow">QueenJelly.org connection</p>
          <h2>Queen Jelly Bee is the public face of the realm.</h2>
          <p>
            QueenJelly.org can introduce the Nectar Realm, character cards, gentle ecology stories,
            collectible jelly ideas, and future games without exposing private planning systems.
          </p>
        </section>
      </main>
    </Shell>
  )
}

function QueenJellyJelliesPage() {
  return (
    <Shell>
      <main className="queen-page">
        <QueenJellyHero eyebrow="Collectible jelly system" title="Queen Jelly Types" />
        <QueenJellyNav />
        <section className="queen-section">
          <div className="queen-card-grid">
            {queenJellyTypes.map((jelly) => (
              <article className="queen-card jelly-type-card" key={jelly.name}>
                <p className="eyebrow">{jelly.color}</p>
                <h2>{jelly.name}</h2>
                <p>{jelly.meaning}</p>
                <dl className="platform-details">
                  <div>
                    <dt>Powers</dt>
                    <dd>{jelly.powers.join(', ')}</dd>
                  </div>
                  <div>
                    <dt>Future product/game tie-ins</dt>
                    <dd>{jelly.tieIns.join(', ')}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function QueenJellyGamesPage() {
  return (
    <Shell>
      <main className="queen-page">
        <QueenJellyHero eyebrow="WWW / Roblox expansion" title="Queen Jelly Games" />
        <QueenJellyNav />
        <section className="queen-section">
          <div className="book-stack">
            {queenJellyGames.map((game) => (
              <article className="queen-card queen-game-card" key={game.title}>
                <p className="eyebrow">Game concept</p>
                <h2>{game.title}</h2>
                <p>{game.loop}</p>
                <div className="chapter-grid">
                  {[
                    ['Player actions', game.playerActions],
                    ['Collectibles', game.collectibles],
                    ['Seasonal events', game.seasonalEvents],
                    ['Safety-friendly kid tone', [game.safetyTone]],
                  ].map(([label, items]) => (
                    <div key={label}>
                      <strong>{label}</strong>
                      <ul>
                        {items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function ClobotHeroVisual() {
  return (
    <div className="clobot-visual" aria-label="Glowing Clobot signal world">
      <div className="clobot-core">
        <span className="bot-eye"></span>
        <span className="bot-eye"></span>
        <strong>CLOBOT</strong>
      </div>
      {['Scout', 'Glow', 'Echo', 'Moss', 'Chaos'].map((chip, index) => (
        <span className={`signal-chip signal-chip-${index + 1}`} key={chip}>
          {chip}
        </span>
      ))}
    </div>
  )
}

function ClobotGamePage() {
  return (
    <Shell>
      <main className="clobot-page">
        <section className="clobot-hero">
          <div>
            <p className="eyebrow">Standalone Roblox-native universe</p>
            <h1>{clobotGame.title}</h1>
            <p className="clobot-subtitle">{clobotGame.subtitle}</p>
            <p className="lede">{clobotGame.positioning}</p>
            <div className="hero-actions">
              <a href="#clobot-loop">Explore the loop</a>
              <a href="#clobot-realms">Visit signal realms</a>
              <a href="#clobot-roadmap">Long-term vision</a>
            </div>
          </div>
          <ClobotHeroVisual />
        </section>

        <section className="clobot-section clobot-not-section" aria-label="Clobot boundary notes">
          {clobotGame.whatItIsNot.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </section>

        <section className="clobot-section" aria-labelledby="what-clobot-title">
          <div className="section-heading">
            <p className="eyebrow">What is a Clobot?</p>
            <h2 id="what-clobot-title">A tiny machine friend with a weird little job.</h2>
          </div>
          <div className="clobot-grid">
            {clobotDefinitions.map(([title, text]) => (
              <article className="clobot-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="clobot-section" id="clobot-loop" aria-labelledby="clobot-loop-title">
          <div className="section-heading">
            <p className="eyebrow">Core gameplay loop</p>
            <h2 id="clobot-loop-title">Explore, teach, repair, unlock, and build again.</h2>
          </div>
          <ol className="clobot-loop">
            {clobotGameplayLoop.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </section>

        <section className="clobot-section" aria-labelledby="clobot-mechanics-title">
          <div className="section-heading">
            <p className="eyebrow">Game mechanics</p>
            <h2 id="clobot-mechanics-title">Playful systems that feel creative, not technical.</h2>
          </div>
          <div className="clobot-grid">
            {clobotMechanics.map((mechanic) => (
              <article className="clobot-card mechanic-card" key={mechanic.title}>
                <h3>{mechanic.title}</h3>
                <p>{mechanic.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="clobot-section" id="clobot-realms" aria-labelledby="clobot-realms-title">
          <div className="section-heading">
            <p className="eyebrow">World design</p>
            <h2 id="clobot-realms-title">Signal biomes for strange little adventures.</h2>
          </div>
          <div className="clobot-realm-grid">
            {clobotRealms.map((realm) => (
              <article className="clobot-card realm-card" key={realm.name}>
                <p className="eyebrow">{realm.mood}</p>
                <h3>{realm.name}</h3>
                <p>{realm.biome}</p>
                <dl className="platform-details">
                  <div>
                    <dt>Creatures</dt>
                    <dd>{realm.creatures.join(', ')}</dd>
                  </div>
                  <div>
                    <dt>Resources</dt>
                    <dd>{realm.resources.join(', ')}</dd>
                  </div>
                  <div>
                    <dt>Gameplay style</dt>
                    <dd>{realm.gameplay}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="clobot-section clobot-split" aria-labelledby="clobot-social-title">
          <div>
            <p className="eyebrow">Social + creator angle</p>
            <h2 id="clobot-social-title">Make bots, rooms, puzzles, and safe cosmetic creations.</h2>
            <p>
              Clobot should feel like a creator playground: players decorate mini bases, design bot
              skins, build signal puzzles, and share moderated challenge rooms with friends.
            </p>
          </div>
          <div className="chips clobot-creator-chips">
            {clobotSocialCreator.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="clobot-section" aria-labelledby="clobot-archetypes-title">
          <div className="section-heading">
            <p className="eyebrow">Bot personalities + item examples</p>
            <h2 id="clobot-archetypes-title">Collectible identity without copycat trends.</h2>
          </div>
          <div className="clobot-dual-grid">
            <div className="clobot-card">
              <h3>Personality archetypes</h3>
              {clobotArchetypes.map(([name, text]) => (
                <p key={name}>
                  <strong>{name}:</strong> {text}
                </p>
              ))}
            </div>
            <div className="clobot-card">
              <h3>Fake item examples</h3>
              {clobotItems.map(([name, text]) => (
                <p key={name}>
                  <strong>{name}:</strong> {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="clobot-section" id="clobot-roadmap" aria-labelledby="clobot-roadmap-title">
          <div className="section-heading">
            <p className="eyebrow">Long-term vision</p>
            <h2 id="clobot-roadmap-title">A practical path from web prototype to persistent worlds.</h2>
          </div>
          <div className="clobot-roadmap">
            {clobotRoadmap.map((phase) => (
              <article className="clobot-card roadmap-card" key={phase.phase}>
                <p className="eyebrow">{phase.phase}</p>
                <h3>{phase.title}</h3>
                <ul>
                  {phase.goals.map((goal) => (
                    <li key={goal}>{goal}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="clobot-section clobot-footer-cta">
          <p className="eyebrow">Wild Weird World connection</p>
          <h2>A new lane for robotics, imagination, and signal creatures.</h2>
          <p>
            Clobot can connect back to WWW HQ as a distinct game idea and creator system, while
            staying independent from finance systems, market mechanics, or dashboard aesthetics.
          </p>
          <div className="hero-actions">
            <a href="/">Return to WWW HQ</a>
            <a href="/plans">Open plans</a>
          </div>
        </section>
      </main>
    </Shell>
  )
}

function ClobotLogoFace({
  variant = 1,
  label = 'Clobot base face',
  size = 'large',
  geometry = 'next',
  fill = true,
}) {
  return (
    <svg
      className={`clobot-logo-face clobot-logo-face-${geometry} clobot-logo-face-${size} clobot-logo-face-${variant}`}
      role="img"
      aria-label={label}
      viewBox="0 0 120 120"
    >
      {fill ? <circle className="clobot-face-fill" cx="52" cy="60" r="39" /> : null}
      <path className="clobot-face-c clobot-face-c-classic" d="M 84 23 A 43 43 0 1 0 84 97" />
      <path className="clobot-face-c clobot-face-c-next" d="M 86 30 A 38 38 0 1 0 86 90" />
      <circle className="clobot-face-eye clobot-face-eye-left" cx="43" cy="44" r="6.2" />
      <circle className="clobot-face-eye clobot-face-eye-right" cx="62" cy="44" r="6.2" />
      <path className="clobot-face-brow clobot-face-brow-left" d="M 38 36 Q 46 31 54 36" />
      <path className="clobot-face-brow clobot-face-brow-right" d="M 58 36 Q 66 31 74 36" />
      <circle className="clobot-face-spark clobot-face-spark-one" cx="91" cy="39" r="3" />
      <circle className="clobot-face-spark clobot-face-spark-two" cx="88" cy="76" r="2.5" />
    </svg>
  )
}

function ClobotLabSwitcher({ active }) {
  return (
    <nav className="clobot-compare-switcher" aria-label="Clobot Face Lab comparison">
      <a className={active === 'classic' ? 'active' : undefined} href="/clobot-lab-classic">
        Classic
      </a>
      <a className={active === 'next' ? 'active' : undefined} href="/clobot-lab-next">
        Next Experiment
      </a>
    </nav>
  )
}

function ClobotLabPage({ version = 'next' }) {
  const featuredFaces = clobotExpressionVariants.slice(0, 6)
  const isClassic = version === 'classic'
  const faceGeometry = isClassic ? 'classic' : 'next'

  return (
    <Shell>
      <main className="clobot-page clobot-lab-page">
        <section className="clobot-hero clobot-lab-hero">
          <div>
            <p className="eyebrow">
              {isClassic ? 'Classic Creator Lab' : clobotLab.shortName}
            </p>
            <h1>{isClassic ? 'Clobot Creator Lab Classic' : clobotLab.name}</h1>
            <p className="clobot-subtitle">
              {isClassic
                ? 'Original preserved creator-kit direction for comparison.'
                : clobotLab.subtitle}
            </p>
            <p className="lede">{clobotLab.positioning}</p>
            <div className="hero-actions">
              <a href="#clobot-creator">Build a bot</a>
              <a href="#identity-kits">Identity kits</a>
              <a href="#creator-gallery">Creator system</a>
            </div>
          </div>
          <div className="clobot-lab-station" aria-label="Rotating Clobot creator station">
            <div className="lab-ring ring-one"></div>
            <div className="lab-ring ring-two"></div>
            <ClobotLogoFace
              variant={1}
              geometry={faceGeometry}
              fill={!isClassic}
              label={
                isClassic
                  ? 'Classic clean Clobot creator face preserved for comparison'
                  : 'Next Clov lowercase c face with higher eyes and thin stroke'
              }
            />
            <small>{isClassic ? 'classic clean' : 'next experiment'}</small>
          </div>
        </section>

        <ClobotLabSwitcher active={version} />

        <section className="clobot-section clobot-boundary-card">
          <p className="eyebrow">Branding rule</p>
          <h2>Start from the original Clov face, then remix with care.</h2>
          <p>{clobotLab.boundary}</p>
          <div className="chips clobot-creator-chips">
            <span>Optional</span>
            <span>Experimental</span>
            <span>Emotion-first</span>
            <span>Roblox-readable</span>
            <span>Not core gameplay</span>
          </div>
        </section>

        <section className="clobot-section" aria-labelledby="face-dna-title">
          <div className="section-heading">
            <p className="eyebrow">Base Clov Geometry</p>
            <h2 id="face-dna-title">Every Clobot begins from the original Clov face structure.</h2>
          </div>
          <div className="base-geometry-compare">
            {isClassic ? (
              <article className="clobot-card">
                <ClobotLogoFace
                  variant={1}
                  geometry="classic"
                  fill
                  label="Classic Clobot face with inner circle"
                  size="medium"
                />
                <p className="eyebrow">Classic / Circle</p>
                <h3>Optional comparison</h3>
                <p>
                  Preserves the inner circle version so the geometry can be compared directly.
                </p>
              </article>
            ) : null}
            <article className="clobot-card">
              <ClobotLogoFace
                variant={1}
                geometry={faceGeometry}
                fill={!isClassic}
                label={
                  isClassic
                    ? 'Classic clean Clov geometry without inner circle'
                    : 'Next base Clov geometry with thinner C and higher eyes'
                }
                size="medium"
              />
              {isClassic ? <p className="eyebrow">Classic / Clean</p> : <p className="eyebrow">Next / Experimental</p>}
              <h3>{isClassic ? 'Recommended default' : 'Next base'}</h3>
              <p>
                {isClassic
                  ? 'Clean no-circle version keeps the C and eyes readable without fill mismatch.'
                  : 'Thinner, airier, more circular C geometry with eyes raised inside the open mark.'}
              </p>
            </article>
          </div>
          <div className="face-system-demo">
            {featuredFaces.map((face, index) => (
              <article className={`face-example face-example-${index + 1}`} key={face.name}>
                <ClobotLogoFace
                  variant={index + 1}
                  geometry={faceGeometry}
                  fill={!isClassic}
                  label={`${face.name} Clobot face`}
                  size="medium"
                />
                <h3>{face.name}</h3>
                <p>{face.emotion}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="clobot-section" id="clobot-creator" aria-labelledby="clobot-creator-title">
          <div className="section-heading">
            <p className="eyebrow">Build Your Own Clobot</p>
            <h2 id="clobot-creator-title">Start from the c-face, then evolve expression and identity.</h2>
          </div>
          <div className="clobot-grid">
            {clobotCreatorFeatures.map(([title, text]) => (
              <article className="clobot-card lab-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="clobot-section" id="identity-kits" aria-labelledby="identity-kits-title">
          <div className="section-heading">
            <p className="eyebrow">Clobot Face Kits</p>
            <h2 id="identity-kits-title">Recognizable expression DNA, not rigid uniforms.</h2>
          </div>
          <div className="clobot-grid">
            {clobotIdentityKits.map((kit) => (
              <article className="clobot-card identity-kit-card" key={kit.title}>
                <h3>{kit.title}</h3>
                <p>{kit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="clobot-section" aria-labelledby="expression-title">
          <div className="section-heading">
            <p className="eyebrow">Expression system</p>
            <h2 id="expression-title">Collectible faces that preserve the c silhouette.</h2>
          </div>
          <div className="expression-grid">
            {clobotExpressionVariants.map((variant, index) => (
              <article className="clobot-card expression-card" key={variant.name}>
                <ClobotLogoFace
                  variant={(index % 6) + 1}
                  geometry={faceGeometry}
                  fill={!isClassic}
                  label={`${variant.name} Clobot face`}
                  size="small"
                />
                <p className="eyebrow">{variant.rarity} · {variant.biome}</p>
                <h3>{variant.name}</h3>
                <p>{variant.emotion}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="clobot-section" aria-labelledby="face-gameplay-title">
          <div className="section-heading">
            <p className="eyebrow">Gameplay integration</p>
            <h2 id="face-gameplay-title">Faces keep kids attached because bots react back.</h2>
          </div>
          <div className="clobot-grid">
            {clobotFaceGameplayHooks.map(([title, text]) => (
              <article className="clobot-card lab-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="clobot-section" aria-labelledby="marketing-kit-title">
          <div className="section-heading">
            <p className="eyebrow">Clobot Marketing Kit</p>
            <h2 id="marketing-kit-title">Playful imagination, not monetized influencer culture.</h2>
          </div>
          <div className="clobot-grid">
            {clobotMarketingKit.map(([title, text]) => (
              <article className="clobot-card lab-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="clobot-section clobot-split" id="creator-gallery">
          <div>
            <p className="eyebrow">Community creation system</p>
            <h2>Share, remix, publish ideas, and host tiny exhibitions safely.</h2>
            <p>
              The lab can support template remixing, themed bot families, repair shops, test rooms,
              and moderated galleries while keeping the main Clobot world open, mysterious, and
              unconstrained.
            </p>
          </div>
          <div className="chips clobot-creator-chips">
            {clobotCommunitySystem.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="clobot-section" aria-labelledby="creator-archetypes-title">
          <div className="section-heading">
            <p className="eyebrow">Creator archetypes</p>
            <h2 id="creator-archetypes-title">Different makers should make different kinds of weird.</h2>
          </div>
          <div className="clobot-grid">
            {clobotCreatorArchetypes.map(([title, text]) => (
              <article className="clobot-card archetype-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="clobot-section clobot-dual-grid" aria-label="Educational and UI ideas">
          <article className="clobot-card">
            <p className="eyebrow">Educational angle</p>
            <h2>Soft systems learning through play.</h2>
            <div className="chips clobot-creator-chips">
              {clobotEducationAngles.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
          <article className="clobot-card">
            <p className="eyebrow">Optional UI ideas</p>
            <h2>Maker tools that can evolve later.</h2>
            <div className="chips clobot-creator-chips">
              {clobotLabUiIdeas.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="clobot-section clobot-footer-cta">
          <p className="eyebrow">Protecting creative diversity</p>
          <h2>Keep the strange inventions strange.</h2>
          <p>
            Face Lab gives players expressive c-face DNA, remix prompts, and creation tools, but
            the broader Clobot universe still welcomes asymmetry, odd silhouettes, mossy builds,
            scrap machines, signal creatures, and unexpected identities.
          </p>
          <div className="hero-actions">
            <a href="/clobot-game">Return to core game</a>
            <a href={isClassic ? '/clobot-lab-next' : '/clobot-lab-classic'}>
              {isClassic ? 'Open Next Experiment' : 'Open Classic'}
            </a>
            <a href="/">WWW HQ</a>
          </div>
        </section>
      </main>
    </Shell>
  )
}

function CoreLinkBar() {
  return (
    <nav className="seo-core-links" aria-label="Core site links">
      {seoCoreLinks.map(([label, href]) => (
        <a href={href} key={href}>
          {label}
        </a>
      ))}
    </nav>
  )
}

function SeoHero({ eyebrow, title, description }) {
  return (
    <section className="seo-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{description}</p>
      <CoreLinkBar />
    </section>
  )
}

function GamesIndexPage() {
  const description =
    'Master index of Wild Weird World games, Roblox ideas, animal games, cozy games, funny games, school games, and adventure worlds.'

  return (
    <Shell>
      <RouteSeo
        title="Wild Weird World Games | Animal Games, Roblox Ideas, Cozy Worlds"
        description={description}
        path="/games"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Wild Weird World Games',
          url: `${OFFICIAL_URL}/games`,
        }}
      />
      <main className="seo-page">
        <SeoHero eyebrow="Game index" title="Wild Weird World Games" description={description} />
        <section className="seo-section">
          <div className="section-heading">
            <p className="eyebrow">Featured and coming soon</p>
            <h2>Animal games, school games, adventure games, cozy games, and funny games.</h2>
          </div>
          <div className="seo-card-grid">
            {seoGames.map((game) => (
              <article className="seo-card" key={game.title}>
                <p className="eyebrow">{game.status}</p>
                <h2>{game.title}</h2>
                <p>{game.summary}</p>
                <dl className="platform-details">
                  <div>
                    <dt>World</dt>
                    <dd>{game.world}</dd>
                  </div>
                  <div>
                    <dt>Genre tags</dt>
                    <dd>{game.genres.join(', ')}</dd>
                  </div>
                  <div>
                    <dt>Animal tags</dt>
                    <dd>{game.animals.join(', ')}</dd>
                  </div>
                </dl>
                <a className="card-link" href={game.slug}>
                  Open game page
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function CharactersPage() {
  const description =
    'Character encyclopedia for animal game characters, kids game characters, frogs, raccoons, Spider Cafe characters, Midnight Zoo creatures, Webcore High students, and Ducks in a Tub heroes.'

  return (
    <Shell>
      <RouteSeo
        title="Game Character Encyclopedia | Animal Game Characters"
        description={description}
        path="/characters"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Game Character Encyclopedia',
          url: `${OFFICIAL_URL}/characters`,
        }}
      />
      <main className="seo-page">
        <SeoHero eyebrow="Character encyclopedia" title="Game Characters" description={description} />
        <section className="seo-section">
          <div className="seo-card-grid">
            {seoCharacters.map(([name, descriptionText, personality, favoriteItems, world]) => (
              <article className="seo-card" key={name}>
                <p className="eyebrow">{descriptionText}</p>
                <h2>{name}</h2>
                <p>{personality}</p>
                <dl className="platform-details">
                  <div>
                    <dt>Favorite things</dt>
                    <dd>{favoriteItems.join(', ')}</dd>
                  </div>
                  <div>
                    <dt>World association</dt>
                    <dd>
                      <a href="/worlds">{world}</a>
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function WorldsPage() {
  const description =
    'World encyclopedia for kids game worlds, fantasy worlds, Roblox worlds, maps, lore, creatures, locations, and activities.'

  return (
    <Shell>
      <RouteSeo
        title="Game Worlds Encyclopedia | Kids Fantasy Worlds and Maps"
        description={description}
        path="/worlds"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Game Worlds Encyclopedia',
          url: `${OFFICIAL_URL}/worlds`,
        }}
      />
      <main className="seo-page">
        <SeoHero eyebrow="World encyclopedia" title="Kids Game Worlds" description={description} />
        <section className="seo-section">
          <div className="seo-card-grid">
            {seoWorlds.map((world) => (
              <article className="seo-card world-seo-card" key={world.name}>
                <h2>{world.name}</h2>
                <p>{world.lore}</p>
                <dl className="platform-details">
                  <div>
                    <dt>Maps</dt>
                    <dd>{world.maps.join(', ')}</dd>
                  </div>
                  <div>
                    <dt>Creatures</dt>
                    <dd>{world.creatures.join(', ')}</dd>
                  </div>
                  <div>
                    <dt>Activities</dt>
                    <dd>{world.activities.join(', ')}</dd>
                  </div>
                </dl>
                <a className="card-link" href={world.game}>
                  Visit related game
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function FounderPage() {
  const description =
    'Founder story for a young creator building games, Roblox ideas, animal worlds, cozy weird characters, and beginner game design projects.'

  return (
    <Shell>
      <RouteSeo
        title="Young Game Developer Founder Story | Wild Weird World"
        description={description}
        path="/founder"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Wild Weird World Founder Story',
          url: `${OFFICIAL_URL}/founder`,
        }}
      />
      <main className="seo-page">
        <SeoHero eyebrow="Founder story" title="Young Creator Building Games" description={description} />
        <section className="seo-section">
          <div className="article-body">
            {founderSections.map(([title, text]) => (
              <article key={title}>
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function BlogIndexPage() {
  const description =
    'Game design blog for kids game development, Roblox game ideas, animal games, cozy games, creative worldbuilding, and beginner design education.'

  return (
    <Shell>
      <RouteSeo
        title="Kids Game Development Blog | Roblox Ideas and Animal Games"
        description={description}
        path="/blog"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Wild Weird World Game Design Blog',
          url: `${OFFICIAL_URL}/blog`,
        }}
      />
      <main className="seo-page">
        <SeoHero eyebrow="Blog" title="Game Design Blog" description={description} />
        <section className="seo-section">
          <div className="blog-list">
            {blogArticles.map((article) => (
              <article className="blog-list-card" key={article.slug}>
                <p className="eyebrow">Article {article.order}</p>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <div className="chips">
                  {article.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="card-link" href={article.path}>
                  Read article
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  )
}

function BlogArticlePage({ article }) {
  return (
    <Shell>
      <RouteSeo
        title={`${article.title} | Wild Weird World Blog`}
        description={article.description}
        path={article.path}
        type="article"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.description,
          url: `${OFFICIAL_URL}${article.path}`,
        }}
      />
      <main className="seo-page article-page">
        <SeoHero eyebrow="Game design article" title={article.title} description={article.description} />
        <article className="seo-section article-body">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="article-links">
            <a href={article.link}>Explore related guide</a>
            <a href="/games">Games index</a>
            <a href="/characters">Character encyclopedia</a>
            <a href="/worlds">World encyclopedia</a>
            <a href="/founder">Founder story</a>
          </div>
        </article>
      </main>
    </Shell>
  )
}

function GameDevForKidsPage() {
  const description =
    'Long-form beginner guide to game development for kids, Roblox basics, art, design, storytelling, testing, publishing safety, and working with friends.'

  return (
    <Shell>
      <RouteSeo
        title="Game Development for Kids | Learn Roblox and Beginner Design"
        description={description}
        path="/game-dev-for-kids"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Guide',
          name: 'Game Development for Kids',
          url: `${OFFICIAL_URL}/game-dev-for-kids`,
        }}
      />
      <main className="seo-page">
        <SeoHero eyebrow="Authority guide" title="Game Development for Kids" description={description} />
        <section className="seo-section article-body">
          {gameDevForKidsSections.map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
              <p>
                In a Wild Weird World project, this step connects back to one small public-safe
                deliverable: a game page, a character card, a world map, a testable Roblox idea, or
                a simple loop that a parent-approved friend can understand without private context.
                Keeping each step visible and simple helps young creators learn design habits while
                protecting safety, privacy, and creative confidence.
              </p>
            </article>
          ))}
        </section>
      </main>
    </Shell>
  )
}

function HowWeBuildGamesPage() {
  const description =
    'Transparent studio process for game development, indie game design workflow, idea generation, sketching, character design, story, testing, feedback, and iteration.'

  return (
    <Shell>
      <RouteSeo
        title="How We Build Games | Indie Game Design Workflow"
        description={description}
        path="/how-we-build-games"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How We Build Games',
          url: `${OFFICIAL_URL}/how-we-build-games`,
        }}
      />
      <main className="seo-page">
        <SeoHero eyebrow="Studio process" title="How We Build Games" description={description} />
        <section className="process-strip" aria-label="Game development process placeholders">
          {processSteps.map(([title], index) => (
            <div className="process-placeholder" key={title}>
              <span>{index + 1}</span>
              <strong>{title}</strong>
            </div>
          ))}
        </section>
        <section className="seo-section article-body">
          {processSteps.map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
              <p>
                This stage is intentionally practical. It creates a public-safe artifact that can be
                linked from the games index, characters encyclopedia, worlds encyclopedia, or blog.
                A sketch might become a map placeholder. A character note might become a profile.
                A prototype test might become a clearer FAQ. The workflow favors visible learning
                over private claims or inflated achievements.
              </p>
            </article>
          ))}
        </section>
      </main>
    </Shell>
  )
}

const gamePageCopy = {
  '/frog-camp': {
    title: 'Frog Camp',
    meta: 'Complete Frog Camp game page for a cozy animal game about frogs, camp activities, creature collecting, summer swamp quests, screenshots, and FAQ.',
    sections: ['Overview', 'Story', 'Characters', 'Camp activities', 'Creature collecting', 'Screenshots section', 'FAQ'],
    crossLinks: ['/spider-cafe', '/dumpster-raccoon-tycoon', '/dub-dub-dub'],
    focus:
      'Frog Camp is a summer swamp adventure where players join frog campers, collect badges, race canoes, decorate friendship cabins, investigate gentle cryptids, and learn how a small animal game can grow into a memorable Roblox world.',
  },
  '/spider-cafe': {
    title: 'Spider Cafe',
    meta: 'Complete Spider Cafe game page for a cozy cafe game with spider characters, menu systems, upgrades, decorations, world lore, and FAQ.',
    sections: ['Story', 'Menu system', 'Spider characters', 'Cafe upgrades', 'Decorations', 'World lore', 'FAQ'],
    crossLinks: ['/frog-camp', '/dumpster-raccoon-tycoon', '/dub-dub-dub'],
    focus:
      'Spider Cafe is a cute creepy cozy cafe simulation where gentle spider characters serve frog tea, bug pastries, glowing drinks, and kindness inside a rainy terrarium world.',
  },
  '/dumpster-raccoon-tycoon': {
    title: 'Dumpster Raccoon Tycoon',
    meta: 'Complete Dumpster Raccoon Tycoon game page for a funny animal tycoon about trash empire mechanics, collectibles, kingdom upgrades, raccoon lore, and FAQ.',
    sections: ['Story', 'Trash empire mechanics', 'Collectibles', 'Kingdom upgrades', 'Raccoon lore', 'FAQ'],
    crossLinks: ['/frog-camp', '/spider-cafe', '/dub-dub-dub'],
    focus:
      'Dumpster Raccoon Tycoon is a cartoon animal tycoon about building a trash empire, collecting shiny objects, upgrading legendary dumpsters, driving shopping carts, and turning safe silly chaos into a repeatable game loop.',
  },
}

function SeoGameLandingPage({ game }) {
  return (
    <Shell>
      <RouteSeo
        title={`${game.title} Game | Wild Weird World`}
        description={game.meta}
        path={currentRoute()}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'VideoGame',
          name: game.title,
          description: game.meta,
          url: `${OFFICIAL_URL}${currentRoute()}`,
        }}
      />
      <main className="seo-page game-landing-page">
        <SeoHero eyebrow="Game landing page" title={game.title} description={game.focus} />
        <section className="seo-section article-body">
          {game.sections.map((section, index) => (
            <article key={section}>
              <h2>{section}</h2>
              <p>
                {game.title} uses this {section.toLowerCase()} layer to make the game readable for
                new players, parents, and future collaborators. The page explains what the player
                does, why the world is fun, how the characters support the loop, and where the idea
                fits inside Wild Weird World. Instead of promising finished features, it describes a
                public-safe design direction that can become maps, Roblox prototypes, screenshots,
                character cards, and testable quests over time.
              </p>
              <p>
                The design goal is simple: make the first minute clear and the next discovery
                tempting. Players should understand the main action, meet a memorable animal
                character, find a cozy or funny location, and earn a small reward that belongs to
                the world. In section {index + 1}, the focus stays on beginner-friendly game design,
                animal game storytelling, safe creative worldbuilding, and repeatable play that can
                be tested without private systems or monetization claims.
              </p>
            </article>
          ))}
          <article>
            <h2>Cross-links</h2>
            <div className="article-links">
              {game.crossLinks.map((href) => (
                <a href={href} key={href}>
                  {href.replace('/', '').replaceAll('-', ' ')}
                </a>
              ))}
              <a href="/games">All games</a>
              <a href="/characters">Characters</a>
              <a href="/worlds">Worlds</a>
              <a href="/blog">Blog</a>
            </div>
          </article>
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
  const blogArticle = blogArticles.find((article) => isRoute(article.path))
  const seoGamePage = gamePageCopy[currentRoute()]

  return (
    <>
      {isRoute('/stories') ? (
        <StoryHubPage />
      ) : isRoute('/stories/hollow-coast') ? (
        <HollowCoastPage />
      ) : isRoute('/stories/hollow-coast/characters') ? (
        <HollowCoastCharactersPage />
      ) : isRoute('/stories/hollow-coast/locations') ? (
        <HollowCoastLocationsPage />
      ) : isRoute('/stories/hollow-coast/books') ? (
        <HollowCoastBooksPage />
      ) : isRoute('/stories/hollow-coast/creatures') ? (
        <SimpleArchivePage
          title="Hollow Coast Creatures"
          eyebrow="Creature encyclopedia"
          items={hollowCoastCreatures}
          detailLabel="Creature card"
        />
      ) : isRoute('/stories/hollow-coast/realms') ? (
        <SimpleArchivePage
          title="Hollow Coast Realms"
          eyebrow="Realm atlas"
          items={hollowCoastRealms}
          detailLabel="Realm card"
        />
      ) : isRoute('/stories/hollow-coast/portal-network') ? (
        <HollowCoastPortalNetworkPage />
      ) : isRoute('/stories/hollow-coast/merch-lab') ? (
        <HollowCoastMerchLabPage />
      ) : isRoute('/stories/hollow-coast/social-media-kit') ? (
        <HollowCoastSocialMediaKitPage />
      ) : isRoute('/queen-jelly') ? (
        <QueenJellyLandingPage />
      ) : isRoute('/queen-jelly/characters') ? (
        <QueenJellyCharactersPage />
      ) : isRoute('/queen-jelly/regions') ? (
        <QueenJellyRegionsPage />
      ) : isRoute('/queen-jelly/lore') ? (
        <QueenJellyLorePage />
      ) : isRoute('/queen-jelly/jellies') ? (
        <QueenJellyJelliesPage />
      ) : isRoute('/queen-jelly/games') ? (
        <QueenJellyGamesPage />
      ) : isRoute('/clobot-game') ? (
        <ClobotGamePage />
      ) : isRoute('/clobot-lab-classic') ? (
        <ClobotLabPage version="classic" />
      ) : isRoute('/clobot-lab-next') ||
        isRoute('/experiments/clobot-creator') ||
        isRoute('/clobot-lab') ? (
        <ClobotLabPage version="next" />
      ) : isRoute('/ontology') ? (
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
      ) : isRoute('/games') ? (
        <GamesIndexPage />
      ) : isRoute('/characters') ? (
        <CharactersPage />
      ) : isRoute('/worlds') ? (
        <WorldsPage />
      ) : isRoute('/founder') ? (
        <FounderPage />
      ) : isRoute('/blog') ? (
        <BlogIndexPage />
      ) : blogArticle ? (
        <BlogArticlePage article={blogArticle} />
      ) : isRoute('/game-dev-for-kids') ? (
        <GameDevForKidsPage />
      ) : isRoute('/how-we-build-games') ? (
        <HowWeBuildGamesPage />
      ) : seoGamePage ? (
        <SeoGameLandingPage game={seoGamePage} />
      ) : (
        <Dashboard />
      )}
      <BrandFooter />
    </>
  )
}

export default App
