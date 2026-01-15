// Recipes
ServerEvents.recipes(event => {

    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {
                tag: 'forge:ingots/iron'
            },
            {
                tag: 'minecraft:coals'
            },
            {
                tag: 'minecraft:coals'
            },
            {
                tag: 'minecraft:coals'
            }
        ],
        results: [
            {
                item: 'thermal:steel_ingot',
                count: 1
            }
        ]
    }).id('desolate_planet:mixing/compat/thermal/steel_ingot');

    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {
                tag: 'forge:ingots/copper'
            },
            {
                tag: 'forge:ingots/copper'
            },
            {
                tag: 'forge:ingots/copper'
            },
            {
                tag: 'forge:ingots/tin'
            }
        ],
        results: [
            {
                item: 'thermal:bronze_ingot',
                count: 4
            }
        ]
    }).id('desolate_planet:mixing/compat/thermal/bronze_ingot');

    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {
                tag: 'forge:ingots/iron'
            },
            {
                tag: 'forge:ingots/iron'
            },
            {
                tag: 'forge:ingots/nickel'
            }
        ],
        results: [
            {
                item: 'thermal:invar_ingot',
                count: 3
            }
        ]
    }).id('desolate_planet:mixing/compat/thermal/invar_ingot');

    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {
                tag: 'forge:ingots/copper'
            },
            {
                tag: 'forge:ingots/nickel'
            }
        ],
        results: [
            {
                item: 'thermal:constantan_ingot',
                count: 2
            }
        ]
    }).id('desolate_planet:mixing/compat/thermal/constantan_ingot');

    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {
                tag: 'forge:ingots/copper'
            },
            {
                tag: 'forge:ingots/copper'
            },
            {
                tag: 'forge:ingots/copper'
            },
            {
                tag: 'forge:ingots/silver'
            },
            {
                item: 'minecraft:redstone'
            },
            {
                item: 'minecraft:redstone'
            },
            {
                item: 'minecraft:redstone'
            },
            {
                item: 'minecraft:redstone'
            }
        ],
        results: [
            {
                item: 'thermal:signalum_ingot',
                count: 4
            }
        ]
    }).id('desolate_planet:mixing/compat/thermal/signalum_ingot');

    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {
                tag: 'forge:ingots/tin'
            },
            {
                tag: 'forge:ingots/tin'
            },
            {
                tag: 'forge:ingots/tin'
            },
            {
                tag: 'forge:ingots/silver'
            },
            {
                item: 'minecraft:glowstone_dust'
            },
            {
                item: 'minecraft:glowstone_dust'
            }
        ],
        results: [
            {
                item: 'thermal:lumium_ingot',
                count: 4
            }
        ]
    }).id('desolate_planet:mixing/compat/thermal/lumium_ingot');

    event.custom({
        type: 'create:mixing',
        heatRequirement: 'heated',
        ingredients: [
            {
                tag: 'forge:ingots/lead'
            },
            {
                tag: 'forge:ingots/lead'
            },
            {
                tag: 'forge:ingots/lead'
            },
            {
                tag: 'forge:gems/diamond'
            },
            {
                item: 'minecraft:ender_pearl'
            },
            {
                item: 'minecraft:ender_pearl'
            }
        ],
        results: [
            {
                item: 'thermal:enderium_ingot',
                count: 2
            }
        ]
    }).id('desolate_planet:mixing/compat/thermal/enderium_ingot');
});

