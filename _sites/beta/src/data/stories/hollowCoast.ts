export type HollowCoastCharacter = {
  name: string
  role: string
  icon: string
  bio: string
  personality: string[]
  relationships: string[]
  secrets: string[]
  arcProgression: string[]
  associatedLocations: string[]
  associatedCreatures: string[]
  futureStoryHooks: string[]
  merchConcepts: string[]
  robloxRoleIdeas: string[]
}

export type HollowCoastLocation = {
  name: string
  icon: string
  mood: string
  visualCard: string
  lore: string
  storyConnections: string[]
  creaturePresence: string[]
  futureChapterHooks: string[]
}

export type HollowCoastChapter = {
  title: string
  themes: string[]
  storyPoints: string[]
  characterIntersections: string[]
  futureForeshadowing: string[]
  merchTieIns: string[]
  robloxTieIns: string[]
  socialContentHooks: string[]
}

export type HollowCoastBook = {
  series: string
  title: string
  premise: string
  chapters: HollowCoastChapter[]
}

export const hollowCoastOverview = {
  title: 'Hollow Coast Chronicles',
  studio: 'Moss Hollow Studios',
  subtitle: 'A foggy coastal mystery archive for friendship, portals, and hidden worlds.',
  safetyNote:
    'Public-safe franchise planning only: no private data, no real DMs, no payments, and no kid data collection.',
  designWords: [
    'magical explorer journal',
    'cozy mystery',
    'layered maps',
    'glowing portal accents',
    'collectible-card lore',
    'foggy coast',
  ],
}

export const hollowCoastCharacters: HollowCoastCharacter[] = [
  {
    name: 'Samantha Vale',
    role: 'Map keeper and brave pattern spotter',
    icon: '🗺️',
    bio: 'Samantha notices tiny changes in tides, shells, windows, and old maps before anyone else does.',
    personality: ['curious', 'careful', 'loyal', 'quietly daring'],
    relationships: ['Jake’s best mystery partner', 'Claire Vale’s daughter', 'trusted by Stanley'],
    secrets: ['Can hear portal hums inside seashells', 'Keeps a moon-tide journal under her bed'],
    arcProgression: ['Learns to trust her clues', 'Becomes the coast’s youngest archive keeper'],
    associatedLocations: ['Blackwater Cove', 'Tideway Portals', 'tree rings'],
    associatedCreatures: ['glow crabs', 'echo gulls', 'reef octopus messengers'],
    futureStoryHooks: ['Finds a map that rewrites itself after rain', 'Chooses which portal to stabilize first'],
    merchConcepts: ['journal kit', 'map stickers', 'shell compass charm'],
    robloxRoleIdeas: ['portal cartographer', 'clue finder', 'co-op puzzle leader'],
  },
  {
    name: 'Jake Mercer',
    role: 'Lantern runner and cliff-path scout',
    icon: '🏮',
    bio: 'Jake races ahead with a lantern, a backpack of snacks, and a habit of making scary places funny.',
    personality: ['funny', 'restless', 'protective', 'bold'],
    relationships: ['Eli’s older brother', 'Samantha’s adventure teammate', 'Grandpa Rowan’s listener'],
    secrets: ['Knows a shortcut under the lighthouse stairs', 'Is afraid of deep water but hides it'],
    arcProgression: ['Turns jokes into courage', 'Learns when to slow down and listen'],
    associatedLocations: ['lighthouse', 'mountain crossings', 'Lantern Caverns'],
    associatedCreatures: ['lantern moths', 'moss otters', 'tide foxes'],
    futureStoryHooks: ['Builds a rescue signal for lost explorers', 'Finds a lantern that points backward in time'],
    merchConcepts: ['lantern keychain', 'scout patch set', 'snack-pack enamel pin'],
    robloxRoleIdeas: ['path scout', 'signal runner', 'lantern puzzle helper'],
  },
  {
    name: 'Eli Mercer',
    role: 'Tiny inventor and creature whisperer',
    icon: '🔧',
    bio: 'Eli turns shells, bottle caps, and old watch parts into gentle gadgets for helping coast creatures.',
    personality: ['inventive', 'sweet', 'observant', 'surprisingly brave'],
    relationships: ['Jake’s little brother', 'Grandpa Rowan’s workshop buddy', 'Stanley’s treat supplier'],
    secrets: ['Made a portal alarm from a lunchbox', 'Can calm frightened creatures by humming'],
    arcProgression: ['Moves from sidekick to essential problem solver', 'Builds the first safe portal beacon'],
    associatedLocations: ['Fairy Fort Hill', 'underwater ruins', 'Blackwater Cove'],
    associatedCreatures: ['snail couriers', 'bubblefish', 'stone-ring beetles'],
    futureStoryHooks: ['Invents a tide clock', 'Repairs a broken reef gate without waking it up'],
    merchConcepts: ['gadget sticker sheet', 'mini tool notebook', 'creature-care badges'],
    robloxRoleIdeas: ['gadget crafter', 'creature helper', 'beacon builder'],
  },
  {
    name: 'Grandpa Rowan Mercer',
    role: 'Retired explorer with unfinished maps',
    icon: '📜',
    bio: 'Rowan once crossed the coast portals and came home with a compass that refuses to point north.',
    personality: ['warm', 'mysterious', 'patient', 'story-rich'],
    relationships: ['Jake and Eli’s grandfather', 'old friend of the lighthouse keeper'],
    secrets: ['Left a promise inside the Reef of Echoes', 'Knows the lost explorer’s real route'],
    arcProgression: ['Shares the truth in safe pieces', 'Helps the kids finish what his crew could not'],
    associatedLocations: ['The Reef of Echoes', 'lighthouse', 'stone arches'],
    associatedCreatures: ['reef archivists', 'moon eels', 'compass gulls'],
    futureStoryHooks: ['His old field notes reveal a second coast', 'A missing chapter washes ashore'],
    merchConcepts: ['field journal replica', 'compass patch', 'old map poster'],
    robloxRoleIdeas: ['quest giver', 'archive mentor', 'memory-map unlocker'],
  },
  {
    name: 'Claire Vale',
    role: 'Parent guardian and archive organizer',
    icon: '☕',
    bio: 'Claire keeps the story grounded with snacks, safety rules, and a sharp eye for fake legends.',
    personality: ['steady', 'kind', 'protective', 'practical'],
    relationships: ['Samantha’s mom', 'checks in with Rowan', 'sets the safe exploration rules'],
    secrets: ['Recognizes a symbol from her own childhood', 'Has one sealed postcard from the coast'],
    arcProgression: ['Moves from skeptic to trusted guide', 'Creates the parent-approved exploration code'],
    associatedLocations: ['Blackwater Cove', 'lighthouse', 'Tideway Portals'],
    associatedCreatures: ['porch moths', 'harbor seals', 'paper-wing sprites'],
    futureStoryHooks: ['Deciphers a postcard warning', 'Sets a rescue plan when portals flicker'],
    merchConcepts: ['approval checklist cards', 'cozy mug', 'archive binder labels'],
    robloxRoleIdeas: ['safety guide', 'home-base keeper', 'quest approval NPC'],
  },
  {
    name: 'Stanley',
    role: 'Pocket-sized clue finder',
    icon: '🐾',
    bio: 'Stanley is small, scruffy, and always three steps away from the clue everyone missed.',
    personality: ['sniffy', 'loyal', 'silly', 'surprisingly wise'],
    relationships: ['Samantha’s trusted buddy', 'Eli’s gadget tester', 'Jake’s snack negotiator'],
    secrets: ['Digs only where portals are sleeping', 'Barks at invisible tide lines'],
    arcProgression: ['From comic relief to tiny hero', 'Finds the safest path home'],
    associatedLocations: ['Fairy Fort Hill', 'tree rings', 'Blackwater Cove'],
    associatedCreatures: ['sand sprites', 'glow beetles', 'mini cave crabs'],
    futureStoryHooks: ['Finds a buried doorbell to another realm', 'Leads a rescue during thick fog'],
    merchConcepts: ['plush', 'paw-print stickers', 'detective bandana'],
    robloxRoleIdeas: ['companion pet', 'clue-sniffing helper', 'rescue trail marker'],
  },
  {
    name: 'Underwater Octopus Civilization',
    role: 'Reef archivists and portal engineers',
    icon: '🐙',
    bio: 'A thoughtful civilization beneath the Reef of Echoes stores memories in glowing ink gardens.',
    personality: ['wise', 'ceremonial', 'playful', 'protective'],
    relationships: ['Guardians of reef gates', 'Rowan’s unfinished promise', 'Samantha’s future allies'],
    secrets: ['Their oldest gate is cracking', 'They remember every visitor by ripple pattern'],
    arcProgression: ['From hidden legend to trusted neighbor', 'Teach portal care without revealing too much'],
    associatedLocations: ['The Reef of Echoes', 'underwater ruins', 'Bubble Archive'],
    associatedCreatures: ['ink sprites', 'coral librarians', 'lantern jellyfish'],
    futureStoryHooks: ['Host a moonlit council', 'Ask the kids to retrieve a missing memory pearl'],
    merchConcepts: ['creature cards', 'glow ink sticker pack', 'reef council poster'],
    robloxRoleIdeas: ['reef faction', 'memory quests', 'underwater city roleplay'],
  },
  {
    name: 'Lighthouse Keeper',
    role: 'Watcher of fog signals',
    icon: '🕯️',
    bio: 'The keeper appears whenever the fog gets too quiet and leaves notes folded like little boats.',
    personality: ['cryptic', 'gentle', 'watchful', 'soft-spoken'],
    relationships: ['Knows Rowan’s old crew', 'Protects Claire’s family from unsafe tides'],
    secrets: ['Is guarding a portal lens', 'May know where the lost explorer waited'],
    arcProgression: ['Stops hiding behind warnings', 'Teaches the kids how to read lighthouse colors'],
    associatedLocations: ['lighthouse', 'Tideway Portals', 'stone arches'],
    associatedCreatures: ['fog moths', 'beam birds', 'clockwork barnacles'],
    futureStoryHooks: ['A lantern code appears during a storm', 'The keeper disappears into a blue beam'],
    merchConcepts: ['signal pin set', 'folded-boat notes', 'lighthouse night poster'],
    robloxRoleIdeas: ['signal decoder', 'fog event host', 'portal lens guardian'],
  },
  {
    name: 'Lost Explorer',
    role: 'Missing trailblazer of the outer portals',
    icon: '🧭',
    bio: 'A legendary explorer vanished while charting portals that connect sea caves to mountain doors.',
    personality: ['brilliant', 'kind', 'reckless', 'hopeful'],
    relationships: ['Rowan’s old expedition link', 'watched by the lighthouse keeper'],
    secrets: ['Left friendly clues to prevent panic', 'May be alive in a slowed-down realm'],
    arcProgression: ['Begins as a mystery', 'Becomes a rescue mission and a warning about rushing'],
    associatedLocations: ['mountain crossings', 'The Golden Arch', 'The Reef of Echoes'],
    associatedCreatures: ['map moths', 'tide deer', 'echo whales'],
    futureStoryHooks: ['A boot print appears on a dry cave wall', 'A chapter ends with a fresh compass mark'],
    merchConcepts: ['explorer card', 'compass mug', 'lost route map'],
    robloxRoleIdeas: ['season mystery', 'hidden NPC trail', 'artifact recovery quests'],
  },
]

export const hollowCoastLocations: HollowCoastLocation[] = [
  {
    name: 'Blackwater Cove',
    icon: '🌊',
    mood: 'foggy home base',
    visualCard: 'Dark tide pools, silver driftwood, shell wind chimes, and lantern reflections.',
    lore: 'The cove looks ordinary until low tide reveals symbols pressed into the wet sand.',
    storyConnections: ['Samantha finds the first portal hum', 'Claire sets the exploration rules'],
    creaturePresence: ['glow crabs', 'echo gulls', 'sand sprites'],
    futureChapterHooks: ['A tide pool shows a room that is not nearby', 'A message appears in sea foam'],
  },
  {
    name: 'Lantern Caverns',
    icon: '🏮',
    mood: 'warm cave mystery',
    visualCard: 'Amber lights hang from stone ribs while water whispers under wooden bridges.',
    lore: 'Every lantern was left by someone who found their way back from a portal.',
    storyConnections: ['Jake learns to slow down', 'Eli tests the first beacon'],
    creaturePresence: ['lantern moths', 'moss otters', 'sleeping stone crabs'],
    futureChapterHooks: ['One lantern turns blue', 'A bridge points toward a room that was not there yesterday'],
  },
  {
    name: 'Fairy Fort Hill',
    icon: '🍄',
    mood: 'sketchbook magic',
    visualCard: 'Tiny stick forts, moss flags, mushroom steps, and secret kid-built pathways.',
    lore: 'The hill collects pretend games and sometimes turns the best ones into real clues.',
    storyConnections: ['Stanley digs near sleeping portals', 'Eli builds gentle creature tools'],
    creaturePresence: ['snail couriers', 'paper-wing sprites', 'glow beetles'],
    futureChapterHooks: ['A pretend fort door opens for one minute', 'Friend-made flags become a map code'],
  },
  {
    name: 'The Reef of Echoes',
    icon: '🐚',
    mood: 'glowing underwater archive',
    visualCard: 'Coral shelves, pearl doors, ink gardens, and whale-song hallways.',
    lore: 'The reef remembers words spoken near portals and repeats them when someone is ready.',
    storyConnections: ['Rowan’s past promise', 'Octopus archivists request help'],
    creaturePresence: ['reef archivists', 'lantern jellyfish', 'echo whales'],
    futureChapterHooks: ['A memory pearl goes missing', 'Samantha hears her own voice from tomorrow'],
  },
  {
    name: 'Tideway Portals',
    icon: '🌀',
    mood: 'unstable glowing crossings',
    visualCard: 'Water rings hover over sandbars, tree roots, cave floors, and old bathtub drains.',
    lore: 'The portals connect places that need each other, but they wobble when people rush.',
    storyConnections: ['Portal instability thread', 'Lighthouse watcher warnings'],
    creaturePresence: ['tide foxes', 'clockwork barnacles', 'bubblefish'],
    futureChapterHooks: ['A portal opens sideways', 'A route only works when friends hold the map together'],
  },
  {
    name: 'Underwater Ruins',
    icon: '🏛️',
    mood: 'ancient sea puzzle',
    visualCard: 'Steps sink into turquoise dark, with carved shells and octopus-script murals.',
    lore: 'The ruins were a school for young portal engineers before the gates became dangerous.',
    storyConnections: ['Eli repairs a reef gate', 'Lost explorer clues surface'],
    creaturePresence: ['coral librarians', 'moon eels', 'ink sprites'],
    futureChapterHooks: ['A classroom mural changes', 'A gate asks for a kindness password'],
  },
  {
    name: 'Lighthouse',
    icon: '🗼',
    mood: 'storm watch tower',
    visualCard: 'Foggy windows, brass lenses, folded notes, and beams that change color.',
    lore: 'The lighthouse does not warn ships only; it warns portals, kids, and creatures too.',
    storyConnections: ['Lighthouse keeper thread', 'Jake’s signal runner arc'],
    creaturePresence: ['beam birds', 'fog moths', 'porch moths'],
    futureChapterHooks: ['A blue beam points inland', 'The keeper leaves a note with no shadow'],
  },
  {
    name: 'Mountain Crossings',
    icon: '⛰️',
    mood: 'windy outer mystery',
    visualCard: 'Pine paths, wet stones, cloud bridges, and a far-off bell under the fog.',
    lore: 'Some coastal portals climb into mountains where ocean sounds still echo inside rocks.',
    storyConnections: ['Lost explorer route', 'Rowan’s unfinished maps'],
    creaturePresence: ['tide deer', 'map moths', 'moss owls'],
    futureChapterHooks: ['A summit puddle shows the reef', 'A compass points to the wrong moon'],
  },
  {
    name: 'Tree Rings',
    icon: '🌳',
    mood: 'living timeline',
    visualCard: 'Old stumps, glowing rings, bark symbols, and tiny doors under roots.',
    lore: 'The rings remember seasons when portals opened and friendships changed the route.',
    storyConnections: ['Samantha reads patterns', 'Stanley marks safe trails'],
    creaturePresence: ['stone-ring beetles', 'snail couriers', 'paper-wing sprites'],
    futureChapterHooks: ['A ring grows overnight', 'A tree shows Rowan as a kid'],
  },
  {
    name: 'Stone Arches',
    icon: '🪨',
    mood: 'ancient threshold',
    visualCard: 'Grey arches covered in moss, shell carvings, and tiny glowing cracks.',
    lore: 'The arches are older than the town and open only when a story needs a next chapter.',
    storyConnections: ['Portal network history', 'Rowan and the lost explorer'],
    creaturePresence: ['compass gulls', 'moon eels', 'sand sprites'],
    futureChapterHooks: ['An arch asks for a song', 'The wrong arch leads to a friendly test'],
  },
]

export const hollowCoastCreatures = [
  ['Glow crabs', 'Tiny tide-pool guides that blink safe paths in patterns.'],
  ['Lantern jellyfish', 'Soft blue lights that float near reef doors.'],
  ['Moss otters', 'Cozy cave swimmers that trade pebbles for riddles.'],
  ['Echo whales', 'Gentle giants that carry remembered songs through the reef.'],
  ['Clockwork barnacles', 'Clicky little portal timers stuck to old stone.'],
  ['Paper-wing sprites', 'Fort-hill helpers that fold leaves into clue notes.'],
  ['Tide deer', 'Quiet mountain creatures with hooves that sound like waves.'],
  ['Snail couriers', 'Slow, reliable messengers with tiny shell mailboxes.'],
]

export const hollowCoastRealms = [
  ['Surface Coast', 'Coves, hills, lighthouses, homes, and friend-safe exploration routes.'],
  ['Underreef Archive', 'Octopus halls, memory pearls, and coral libraries below the waves.'],
  ['Lantern Below', 'Warm caverns with bridges, cave streams, and gentle mystery lights.'],
  ['Outer Crossings', 'Mountain doors and fog paths where the lost explorer story unfolds.'],
  ['Tideway Between', 'Portal currents that connect worlds when they are cared for properly.'],
]

export const hollowCoastPortalNetwork = [
  ['Blackwater Cove', 'Tideway Portals', 'first hum route'],
  ['Tideway Portals', 'The Reef of Echoes', 'moon-tide crossing'],
  ['Lighthouse', 'Stone Arches', 'signal beam path'],
  ['Tree Rings', 'Mountain Crossings', 'season-memory path'],
  ['Lantern Caverns', 'Underwater Ruins', 'beacon repair route'],
  ['Fairy Fort Hill', 'Blackwater Cove', 'friend-made map route'],
]

export const hollowCoastStoryLines = [
  {
    title: 'Samantha/Jake Thread',
    summary: 'Two friends learn that courage works best when clues and jokes travel together.',
    beats: ['Find the first hum', 'Disagree about rushing', 'Build a shared map code'],
  },
  {
    title: 'Grandpa Rowan Past Thread',
    summary: 'Old field notes reveal a promise, a mistake, and a safer way forward.',
    beats: ['Unsealed map', 'Reef memory', 'Truth at the lighthouse'],
  },
  {
    title: 'Underwater Civilization Thread',
    summary: 'The octopus archivists protect memories and need gentle help stabilizing gates.',
    beats: ['Ink garden clue', 'Moonlit council', 'Memory pearl rescue'],
  },
  {
    title: 'Lost Explorer Thread',
    summary: 'A missing trailblazer left clues that turn the mystery into a hopeful rescue.',
    beats: ['Boot print clue', 'Compass mark', 'Outer crossing signal'],
  },
  {
    title: 'Portal Instability Thread',
    summary: 'The portals wobble when used carelessly and calm down through teamwork.',
    beats: ['Sideways door', 'Beacon test', 'Kindness password'],
  },
  {
    title: 'Lighthouse Watcher Thread',
    summary: 'The keeper’s warnings become invitations once the kids prove they listen.',
    beats: ['Folded note', 'Blue beam', 'Lens guardian reveal'],
  },
]

export const hollowCoastBooks: HollowCoastBook[] = [
  {
    series: 'Hollow Coast Chronicles',
    title: 'Book One: The Lighthouse Under the Tide',
    premise: 'Samantha, Jake, Eli, and Stanley discover that the lighthouse beam points below the sea.',
    chapters: [
      {
        title: 'The Cove That Glowed Back',
        themes: ['curiosity', 'safe exploration', 'friendship'],
        storyPoints: ['Samantha hears a shell hum', 'Stanley finds glowing paw prints'],
        characterIntersections: ['Samantha and Jake make a first clue pact', 'Claire sets safety rules'],
        futureForeshadowing: ['A shell repeats Rowan’s name', 'A blue light blinks from the lighthouse'],
        merchTieIns: ['shell compass charm', 'glow crab sticker'],
        robloxTieIns: ['tide-pool clue hunt', 'safe home-base tutorial'],
        socialContentHooks: ['spot the glowing clue short', 'draw your own cove map prompt'],
      },
      {
        title: 'Lanterns in the Wrong Cave',
        themes: ['patience', 'teamwork', 'bravery'],
        storyPoints: ['Jake finds a bridge of lanterns', 'Eli’s lunchbox alarm starts clicking'],
        characterIntersections: ['Jake slows down for Eli', 'Rowan recognizes an old lantern mark'],
        futureForeshadowing: ['One lantern glows blue instead of gold'],
        merchTieIns: ['lantern pin', 'cave bridge mini poster'],
        robloxTieIns: ['lantern path puzzle', 'co-op bridge crossing'],
        socialContentHooks: ['which lantern would you follow poll', 'cave ambience clip'],
      },
      {
        title: 'The Octopus Door',
        themes: ['trust', 'listening', 'wonder'],
        storyPoints: ['The reef opens with a kindness password', 'The octopus archivists appear'],
        characterIntersections: ['Samantha shares her journal', 'Rowan admits he has been here before'],
        futureForeshadowing: ['A memory pearl shows the lost explorer turning back'],
        merchTieIns: ['reef council cards', 'ink garden sticker sheet'],
        robloxTieIns: ['underreef archive lobby', 'memory pearl collection quest'],
        socialContentHooks: ['create a reef symbol challenge', 'friendly octopus lore drop'],
      },
    ],
  },
  {
    series: 'Hollow Coast Chronicles',
    title: 'Book Two: The Map in the Tree Rings',
    premise: 'The team follows living tree maps from Fairy Fort Hill toward mountain crossings.',
    chapters: [
      {
        title: 'The Fort That Remembered',
        themes: ['imagination', 'friend-made worlds', 'gentle courage'],
        storyPoints: ['A pretend fort becomes a real threshold', 'Stanley digs up a wooden moon'],
        characterIntersections: ['Eli trusts his inventions', 'Claire finds a matching childhood symbol'],
        futureForeshadowing: ['A tree ring shows Rowan as a kid'],
        merchTieIns: ['fort flag sticker pack', 'wooden moon charm'],
        robloxTieIns: ['buildable fairy fort hub', 'friend map badge'],
        socialContentHooks: ['design a fort flag', 'before and after fort sketch'],
      },
      {
        title: 'The Mountain That Sounded Like Waves',
        themes: ['resilience', 'mystery', 'family stories'],
        storyPoints: ['Ocean sounds echo inside mountain stones', 'A compass points to the wrong moon'],
        characterIntersections: ['Jake admits deep-water fear', 'Rowan shares a safer route'],
        futureForeshadowing: ['A lost explorer boot print appears dry'],
        merchTieIns: ['wrong moon compass print', 'tide deer card'],
        robloxTieIns: ['mountain crossing obby', 'compass calibration minigame'],
        socialContentHooks: ['wrong moon theory post', 'mountain portal reveal short'],
      },
    ],
  },
  {
    series: 'Hollow Coast Chronicles',
    title: 'Book Three: The Lost Explorer’s Tide Clock',
    premise: 'A clock made of shells and stars reveals when the missing explorer can be found.',
    chapters: [
      {
        title: 'The Clock That Waited',
        themes: ['hope', 'timing', 'careful choices'],
        storyPoints: ['Eli repairs a tide clock', 'The lighthouse keeper unlocks the lens room'],
        characterIntersections: ['Samantha leads the map reading', 'Jake runs the rescue signal'],
        futureForeshadowing: ['The clock has one blank hour for a future season'],
        merchTieIns: ['tide clock printable', 'signal pin set'],
        robloxTieIns: ['seasonal rescue event', 'portal timing challenge'],
        socialContentHooks: ['countdown clue series', 'choose the rescue route poll'],
      },
    ],
  },
]

export const hollowCoastMerchConcepts = [
  ['Plush concepts', 'Stanley, glow crabs, lantern jellyfish, and tiny tide deer.'],
  ['Explorer journals', 'Map pages, clue tabs, sticker spaces, and parent-approved story prompts.'],
  ['Sticker sheets', 'Portals, shells, lighthouse beams, folded boat notes, and reef symbols.'],
  ['Creature cards', 'Collectible lore drops with kindness traits and habitat clues.'],
  ['Apparel', 'Cozy hoodies, rain jackets, and scout patches with brand-safe symbols.'],
  ['Mugs', 'Claire’s cocoa mug, lighthouse signal mug, and reef archive cup art.'],
]

export const hollowCoastSocialIdeas = [
  ['Short video hooks', 'Short parent-reviewed lore reveals, map flips, creature cards, and safe polls.'],
  ['Collectible lore drops', 'Weekly creature clue with no personal data and no stranger DMs.'],
  ['Friend art prompts', 'Draw a portal shell, design a lantern, or name a gentle reef creature.'],
  ['Update logs', 'Show new cards, maps, and story boards as creative practice.'],
  ['Roblox seasonal events', 'Fog week, lantern festival, reef archive rescue, and tide clock countdown.'],
]

export const hollowCoastRobloxHooks = [
  ['Exploration hub', 'Blackwater Cove as a social-safe lobby with portals unlocked by story badges.'],
  ['Creature collecting', 'Gentle creature cards, habitats, and care quests without real purchases.'],
  ['Roleplay jobs', 'Cartographer, lantern runner, reef archivist, creature helper, and signal keeper.'],
  ['Seasonal mysteries', 'Limited-time clues that unlock safe lore rooms and cosmetic rewards.'],
  ['Friend co-op puzzles', 'Maps, lights, and doors that work better when players help each other.'],
]
