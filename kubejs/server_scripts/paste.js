// Tags
ServerEvents.tags('item', event => {
    event.add('forge:adhesive', 'kubejs:paste')
    event.add('forge:adhesive', '#forge:slimeballs')

    event.add('forge:paste', 'kubejs:paste')
    event.add('forge:glue', 'kubejs:paste')

    event.add('forge:dough_bases', '#forge:flour')
    event.add('forge:dough_bases', '#forge:grain/wheat')
})

// Recipes
ServerEvents.recipes(event => {

    event.remove({ id: 'minecraft:sticky_piston' });

    [
        'create:crafting/kinetics/super_glue',
        'create:crafting/kinetics/sticker',
        'create:crafting/kinetics/sticky_mechanical_piston',
        'create:crafting/logistics/package_frogport',
        'createaddition:crafting/large_connector_electrum',
        'createaddition:crafting/large_connector_gold',
        'createaddition:crafting/small_connector_copper',
        'pneumaticcraft:pressure_chamber/capacitor', // not working, using datapack instead
        'sophisticatedstorage:packing_tape',
        'tconstruct:common/slime/sticky_piston',
        'tconstruct:tables/book_substitute'
    ].forEach(recipeid => {
        event.replaceInput({ id: recipeid }, '#forge:slimeballs', '#forge:adhesive');
    });



    event.remove({ output: '#forge:dough' });
    event.remove({ id: 'farmersdelight:wheat_dough_from_water' });
    event.remove({ id: 'create:crafting/appliances/slime_ball' });

    // Dough from water bottle and bases
    event.shapeless(
        Item.of('create:dough', 3), [
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT(),
        '#forge:dough_bases',
        '#forge:dough_bases'
    ]
    ).id('desolate_planet:dough_base_shapeless')
    .replaceIngredient('minecraft:potion', 'minecraft:glass_bottle');

    // Paste from water bottles and base
    event.shapeless(
        Item.of('kubejs:paste', 3), [
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT(),
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT(),
        '#forge:dough_bases',
    ]
    ).id('desolate_planet:paste_base_shapeless')
    .replaceIngredient('minecraft:potion', 'minecraft:glass_bottle');

    // Paste from dough and water bottle
    event.shapeless(
        Item.of('kubejs:paste', 2), [
        '#forge:dough',
        Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT()
    ]
    ).id('desolate_planet:paste_from_dough_shapeless')
    .replaceIngredient('minecraft:potion', 'minecraft:glass_bottle');

    // Dough from paste and base
    event.shapeless(
        Item.of('create:dough', 2), [
        '#forge:paste',
        '#forge:dough_bases'
    ]
    ).id('desolate_planet:dough_from_paste_shapeless');


    
    // Dough from bases and pneumaticcraft water tanks
    event.shapeless(
        Item.of('create:dough', 12), [
        {"type": "pneumaticcraft:fluid", "amount": 1000, "fluid": "minecraft:water"},
        '#forge:dough_bases',
        '#forge:dough_bases',
        '#forge:dough_bases',
        '#forge:dough_bases',
        '#forge:dough_bases',
        '#forge:dough_bases',
        '#forge:dough_bases',
        '#forge:dough_bases'
    ]
    ).id('desolate_planet:dough_base_shapeless_tank');

    // Paste from base and pneumaticcraft water tanks
    event.shapeless(
        Item.of('kubejs:paste', 6), [
        {"type": "pneumaticcraft:fluid", "amount": 1000, "fluid": "minecraft:water"},
        '#forge:dough_bases',
        '#forge:dough_bases'
    ]
    ).id('desolate_planet:paste_base_shapeless_tank');

    // Paste from dough and pneumaticcraft water tanks
    event.shapeless(
        Item.of('kubejs:paste', 8), [
        {"type": "pneumaticcraft:fluid", "amount": 1000, "fluid": "minecraft:water"},
        '#forge:dough',
        '#forge:dough',
        '#forge:dough',
        '#forge:dough'
    ]
    ).id('desolate_planet:paste_from_dough_shapeless_tank');

    event.custom({
        type: 'create:splashing',
        ingredients: [
            {
                tag: 'forge:flour/wheat'
            }
        ],
        results: [
            {
                item: 'create:dough'
            }
        ]
    }).id('desolate_planet:dough_splashing');

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: 'forge:flour/wheat'
            },
            {
                tag: 'forge:flour/wheat'
            },
            {
                amount: 1000,
                fluid: 'minecraft:water',
                nbt: {}
            }
        ],
        results: [
            {
                item: 'create:dough',
                count: 3
            }
        ]
    }).id('desolate_planet:dough_base_mixing');

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: 'forge:flour/wheat'
            },
            {
                amount: 2000,
                fluid: 'minecraft:water',
                nbt: {}
            }
        ],
        results: [
            {
                item: 'kubejs:paste',
                count: 3
            }
        ]
    }).id('desolate_planet:paste_base_mixing');

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                tag: 'forge:dough'
            },
            {
                amount: 1000,
                fluid: 'minecraft:water',
                nbt: {}
            }
        ],
        results: [
            {
                item: 'kubejs:paste',
                count: 2
            }
        ]
    }).id('desolate_planet:paste_from_dough_mixing');
});
