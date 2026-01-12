
ServerEvents.recipes(event => {
    event.recipes.thermal.centrifuge([
        Item.of('minecraft:stick').withChance(0.5),
        Item.of('mekanism:bio_fuel').withChance(0.1),
        Fluid.of('minecraft:water', 50, {Purity: 2})
    ], '#minecraft:saplings').energy(1000)

    event.recipes.thermal.centrifuge([
        Item.of('minecraft:stick').withChance(0.1),
        Item.of('mekanism:bio_fuel').withChance(0.1),
        Fluid.of('minecraft:water', 25, {Purity: 2})
    ], '#minecraft:leaves').energy(1000)

    event.recipes.thermal.centrifuge([
        Item.of('minecraft:stick').withChance(0.1),
        Item.of('mekanism:bio_fuel').withChance(0.1),
        Fluid.of('minecraft:water', 10, {Purity: 2})
    ], '#immersive_weathering:leaf_piles').energy(1000)

    event.recipes.thermal.centrifuge([
        Item.of('mekanism:bio_fuel').withChance(0.25),
        Fluid.of('minecraft:water', 50, {Purity: 2})
    ], '#forge:crops').energy(1000)

    event.recipes.thermal.centrifuge([
        Item.of('mekanism:bio_fuel').withChance(0.25),
        Fluid.of('minecraft:water', 100, {Purity: 2})
    ], '#forge:fruits').energy(1000)

    event.recipes.thermal.centrifuge([
        Item.of('mekanism:bio_fuel').withChance(0.25),
        Fluid.of('minecraft:water', 125, {Purity: 2})
    ], 'minecraft:cactus').energy(2000)

    event.recipes.thermal.centrifuge([
        Item.of('immersive_weathering:sand_layer_block').withChance(0.75),
        Fluid.of('minecraft:water', 250, {Purity: 0})
    ], 'minecraft:dirt').energy(2000)
})