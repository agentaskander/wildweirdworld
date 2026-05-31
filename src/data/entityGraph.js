const worldConfigs = [
  {
    world: 'Frog Camp',
    game: 'Frog Camp',
    gamePath: '/frog-camp',
    groups: {
      Character: [
        ['Scoutmaster Hopsworth', 'A patient frog camp leader who teaches badges, canoe safety, night sounds, and brave first steps.'],
        ['Lily Pad Lou', 'A cheerful pond guide who knows every lily shortcut and helps campers find calm places.'],
        ['Mudfoot Max', 'A messy but loyal camper who turns every muddy trail into a funny discovery.'],
        ['Tadpole Timmy', 'A tiny beginner camper learning badges, friendship, and how to ask good questions.'],
        ['Captain Croaker', 'A dramatic canoe captain who runs races and tells heroic pond stories.'],
        ['Willow Warts', 'A wise marsh storyteller who remembers old camp legends and gentle creature rules.'],
      ],
      Badge: [
        ['Bug Catching Badge', 'A beginner badge for spotting bugs carefully, observing details, and returning creatures safely.'],
        ['Night Croak Badge', 'A nighttime badge for listening to frog songs, lantern trails, and marsh echoes.'],
        ['Pond Explorer Badge', 'A map badge for learning safe pond routes, docks, reeds, and lily crossings.'],
        ['Campfire Story Badge', 'A creativity badge for telling cozy spooky stories without making the camp feel unsafe.'],
        ['Dragonfly Spotter Badge', 'A creature badge for watching Silver Dragonflies and sketching wing patterns.'],
        ['Water Safety Badge', 'A practical badge for canoe rules, buddy checks, and careful dock behavior.'],
      ],
      Location: [
        ['Moonpond Lake', 'The central glowing lake where canoe races, moon reflections, and pond lessons begin.'],
        ['Whisper Reed Marsh', 'A soft reed maze where campers hear wind clues and meet shy marsh creatures.'],
        ['Croaker Ridge', 'A bumpy overlook where frog calls echo across the whole camp at sunset.'],
        ['Firefly Grove', 'A warm grove of blinking lights, story circles, and gentle night walks.'],
        ['Tadpole Creek', 'A shallow creek where young campers practice spotting minnows and safe stepping stones.'],
        ['Old Turtle Dock', 'A creaky dock watched by Moss Turtles and used for fishing derby check-ins.'],
      ],
      Creature: [
        ['Silver Dragonfly', 'A rare bright-winged insect that appears during careful pond exploration.'],
        ['Moon Newt', 'A tiny glowing amphibian that leaves soft tracks near Moonpond Lake.'],
        ['Lantern Frog', 'A friendly frog creature that helps campers find paths after dusk.'],
        ['Moss Turtle', 'A slow dock guardian with mossy shell patterns and patient wisdom.'],
        ['Bubble Minnow', 'A playful fish that makes bubble trails through Tadpole Creek.'],
        ['Glimmer Cricket', 'A musical insect that chirps near badge challenge clues.'],
      ],
      Activity: [
        ['Canoe Races', 'Friendly water races built around rhythm, steering, and teamwork.'],
        ['Creature Hunts', 'Observation quests where campers find, sketch, and safely release creatures.'],
        ['Night Expeditions', 'Lantern walks through Firefly Grove and Whisper Reed Marsh.'],
        ['Campfire Stories', 'Creative story nights for legends, jokes, and cozy mysteries.'],
        ['Fishing Derby', 'A gentle dock activity focused on patience, counting, and pond care.'],
        ['Badge Challenges', 'Small skill quests that turn camp learning into collectible progress.'],
      ],
    },
  },
  {
    world: 'Spider Cafe',
    game: 'Spider Cafe',
    gamePath: '/spider-cafe',
    groups: {
      Character: [
        ['Madame Webella', 'The elegant spider cafe founder who welcomes every odd customer with warm manners.'],
        ['Beanie Spinner', 'A young spider barista who experiments with foam art and tiny hats.'],
        ['Latte Legs', 'A fast server who can carry many cups while remembering every customer story.'],
        ['Mocha Silk', 'A calm decorator who turns silk strands into cozy cafe corners.'],
        ['Professor Cobweb', 'A bookish recipe researcher who studies old drinks and cafe legends.'],
        ['Cappuccino Fang', 'A dramatic but harmless taste tester with strong opinions about sprinkles.'],
      ],
      Item: [
        ['Eight-Leg Espresso', 'A tiny strong cafe drink served in eight-sip tasting cups.'],
        ['Cobweb Cappuccino', 'A foamy drink with harmless web art shaped like moons and leaves.'],
        ['Moon Moth Mocha', 'A soft chocolate drink inspired by nighttime moth visitors.'],
        ['Silken Hot Chocolate', 'A warm cocoa cup with smooth silk-swirl decoration.'],
        ['Firefly Tea', 'A glowing herbal tea served during patio music nights.'],
        ['Cricket Crumble Cake', 'A crunchy dessert slice for brave cafe snack collectors.'],
      ],
      Location: [
        ['Main Cafe', 'The central counter room where orders, friendships, and daily quests begin.'],
        ['The Silk Balcony', 'An upstairs seating nook with soft threads, tiny plants, and quiet views.'],
        ['Moonlight Patio', 'An outdoor evening stage for music, tea, and firefly visitors.'],
        ['The Roasting Room', 'A warm back room where beans, cocoa, and magical aromas are prepared.'],
        ['Cobweb Library', 'A shelf-lined reading room where recipes and customer stories are archived.'],
        ['Spider Alley', 'A narrow lane behind the cafe filled with delivery doors and rain puddles.'],
      ],
      Creature: [
        ['Traveling Beetles', 'Rolling beetle tourists who bring road stories and odd souvenir requests.'],
        ['Night Moths', 'Soft-winged evening customers who love Moon Moth Mocha and patio lamps.'],
        ['Firefly Musicians', 'Tiny performers who light the Moonlight Patio during music society nights.'],
        ['Forest Rabbits', 'Gentle regulars who order warm drinks after garden walks.'],
        ['Storytelling Owls', 'Wise visitors who trade quiet tales for Cobweb Library snacks.'],
        ['Merchant Mice', 'Small suppliers who deliver crumbs, cocoa, buttons, and cafe decorations.'],
      ],
      Organization: [
        ['Barista Guild', 'A friendly group that trains servers, recipe makers, and drink decorators.'],
        ['Spider Bakers Union', 'A cozy kitchen organization for pastry experiments and fair recipe sharing.'],
        ['Moonlight Music Society', 'A patio performance group of fireflies, moths, and cafe regulars.'],
      ],
    },
  },
  {
    world: 'Trashopolis',
    game: 'Dumpster Raccoon Tycoon',
    gamePath: '/dumpster-raccoon-tycoon',
    groups: {
      Character: [
        ['King Binford', 'The crowned raccoon founder of Trashopolis and loud defender of shiny treasure.'],
        ['Lady Dumpsterly', 'A fashionable raccoon planner who designs palaces from safe recycled scraps.'],
        ['Scrapjack', 'A cheerful builder who turns broken parts into useful tycoon upgrades.'],
        ['Professor Rust', 'A strange inventor who studies old machines and impossible toaster rockets.'],
        ['Turbo Tail', 'A shopping cart racer who maps shortcuts through every neighborhood.'],
        ['Captain Cans', 'A brave route leader who organizes treasure runs and guild competitions.'],
      ],
      Location: [
        ['Tin Can Terrace', 'A clanky neighborhood of stacked cans, lookout balconies, and starter dens.'],
        ['Bottlecap Boulevard', 'The shiny main street where raccoons trade caps, stickers, and jokes.'],
        ['Cardboard Heights', 'A tall box district with ramps, tunnels, and rooftop hideouts.'],
        ['Junkyard Junction', 'The busy crossing where treasure runs, auctions, and cart paths meet.'],
        ['Rust Rail District', 'An old track area for cart races, scrap deliveries, and rusty inventions.'],
        ['Compost Commons', 'A garden-side neighborhood where raccoons learn sorting, cleanup, and teamwork.'],
      ],
      Item: [
        ['Bronze Dumpster', 'A starter dumpster class for early tycoon upgrades and simple treasure pulls.'],
        ['Silver Dumpster', 'A brighter dumpster class with more storage, better decorations, and rarer finds.'],
        ['Golden Dumpster', 'A premium-looking in-world dumpster class for legendary reveal moments.'],
        ['Royal Dumpster', 'A fancy palace dumpster class decorated with crowns, flags, and shiny trim.'],
        ['Legendary Dumpster', 'The rarest dumpster class, used for big cartoon discovery moments.'],
        ['Golden Banana Peel', 'A rare shiny find treated like a silly Trashopolis treasure.'],
        ['Vintage Comic Book', 'A collectible story item with dramatic raccoon hero panels.'],
        ['Rocket Toaster', 'A strange invention item that suggests speed boosts and workshop jokes.'],
        ['Disco Vacuum', 'A dance-party item that turns cleanup into a glowing music event.'],
        ['Pirate Lunchbox', 'A treasure-map item filled with snack clues and cardboard sea lore.'],
        ['Moon Cheese Wheel', 'A glowing rare find that belongs in the Order of the Golden Lid legends.'],
      ],
      Organization: [
        ['Guild of Scavengers', 'A route-running organization for fair treasure hunts and safe collection quests.'],
        ['Raccoon Merchants League', 'A trading group that organizes shops, swaps, and silly item displays.'],
        ['Order of the Golden Lid', 'A lore-heavy faction that protects the oldest shiny dumpster legends.'],
      ],
      Activity: [
        ['Treasure Runs', 'Timed exploration loops through neighborhoods to find safe silly collectibles.'],
        ['Dumpster Upgrades', 'Tycoon progression activities for decorating, expanding, and improving bases.'],
        ['Trade Missions', 'Delivery quests between raccoon groups, shops, and neighborhood characters.'],
        ['Scrap Auctions', 'Cartoon bidding events for strange items without real money or private systems.'],
        ['Guild Competitions', 'Friendly group challenges for route planning, cleanup, and collection goals.'],
      ],
      Faction: [
        ['Lid Loyalists', 'A playful faction that believes every great raccoon needs a signature lid hat.'],
        ['Cart Racers', 'A vehicle-loving faction focused on safe shopping cart routes and funny wipeouts.'],
      ],
      Vehicle: [
        ['Turbo Shopping Cart', 'A rattly race vehicle used by Turbo Tail for quick treasure routes.'],
        ['Can-Cruiser Wagon', 'A team vehicle for hauling sorted finds across Trashopolis.'],
      ],
    },
  },
]

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const flattenedByWorld = worldConfigs.map((config) => {
  const entries = Object.entries(config.groups).flatMap(([type, items]) =>
    items.map(([name, description]) => ({
      id: slugify(`${config.world}-${name}`),
      name,
      slug: slugify(name),
      type,
      description,
      world: config.world,
      game: config.game,
      gamePath: config.gamePath,
    })),
  )

  return { ...config, entries }
})

export const entityGraph = flattenedByWorld.flatMap((config) =>
  config.entries.map((entity) => {
    const byType = (type) => config.entries.filter((item) => item.type === type && item.id !== entity.id)
    const relatedCharacters = byType('Character').slice(0, 3).map((item) => item.slug)
    const relatedLocations = byType('Location').slice(0, 3).map((item) => item.slug)
    const relatedItems = config.entries
      .filter((item) => ['Item', 'Badge', 'Vehicle'].includes(item.type) && item.id !== entity.id)
      .slice(0, 3)
      .map((item) => item.slug)
    const relatedEntities = config.entries
      .filter((item) => item.id !== entity.id)
      .slice(0, 8)
      .map((item) => item.slug)

    return {
      ...entity,
      relatedEntities,
      relatedLocations,
      relatedCharacters,
      relatedItems,
      relatedStories: ['/blog/how-game-stories-are-created', '/blog/designing-funny-game-worlds'],
      relatedGames: [entity.gamePath, '/games'],
      relatedWorlds: ['/worlds'],
    }
  }),
)

export const entityTypes = [
  'Character',
  'Creature',
  'Location',
  'Item',
  'Organization',
  'Activity',
  'Badge',
  'Vehicle',
  'Faction',
]

export const entityWorlds = flattenedByWorld.map((config) => ({
  name: config.world,
  game: config.game,
  gamePath: config.gamePath,
  characterCount: config.entries.filter((entity) => entity.type === 'Character').length,
  locationCount: config.entries.filter((entity) => entity.type === 'Location').length,
  itemCount: config.entries.filter((entity) => ['Item', 'Badge', 'Vehicle'].includes(entity.type)).length,
  creatureCount: config.entries.filter((entity) => entity.type === 'Creature').length,
  organizationCount: config.entries.filter((entity) => entity.type === 'Organization').length,
  activityCount: config.entries.filter((entity) => entity.type === 'Activity').length,
}))

export function getEntityBySlug(slug) {
  return entityGraph.find((entity) => entity.slug === slug)
}

export function getEntitiesByWorld(world) {
  return entityGraph.filter((entity) => entity.world === world)
}

export function getEntitiesByType(type) {
  return entityGraph.filter((entity) => entity.type === type)
}

export function getRelatedEntities(slugs) {
  return slugs.map((slug) => getEntityBySlug(slug)).filter(Boolean)
}
