ServerEvents.recipes(event => {
/*
  event.replaceInput(
    { input: 'minecraft:bucket' }, // Arg 1: the filter
    'minecraft:bucket',            // Arg 2: the item to replace
    '#c:empty_buckets'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
  )

  event.replaceInput(
    { input: 'minecraft:bucket' },
    'minecraft:bucket',
    '#forge:buckets/empty'
  )

  event.replaceInput(
    { input: 'minecraft:water', type: "thermal:insolator" },
    'minecraft:water',
    '#forge:drinkable_water'
  )

*/

  event.replaceInput(
    { input: 'minecraft:dried_kelp', mod: [ "create", "trackwork" ] },
    'minecraft:dried_kelp',
    'thermal:cured_rubber'
  )

  event.replaceInput(
    { input: 'minecraft:dried_kelp_block', mod: [ "create", "trackwork" ] },
    'minecraft:dried_kelp_block',
    'thermal:cured_rubber_block'
  )
});