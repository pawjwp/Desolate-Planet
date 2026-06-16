ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/hoe', 'kubejs:trash_pile')

    event.add('minecraft:mineable/shovel', 'kubejs:dust_pile')
    event.add('minecraft:mineable/shovel', 'kubejs:trash_pile')

    event.add('minecraft:mineable/pickaxe', 'kubejs:metal_crate')
})