ServerEvents.recipes(event => {
    event.remove({ id: 'ae2:network/blocks/controller' })
    
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            middle: {
                item: 'thermal:steel_block'
            },
            top: {
                item: 'kubejs:crashed_applied_controller'
            }
        },
            mode: 'inscribe',
            result: {
            item: 'kubejs:controller_frame'
        }
    }).id('desolate_planet:inscriber/controller_frame')
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            middle: {
                item: 'thermal:steel_block'
            },
            top: {
                item: 'ae2:controller'
            }
        },
            mode: 'inscribe',
            result: {
            item: 'kubejs:controller_frame'
        }
    }).id('desolate_planet:inscriber/controller_frame_from_new')
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            middle: {
                item: 'thermal:steel_block'
            },
            top: {
                item: 'kubejs:controller_frame'
            }
        },
            mode: 'inscribe',
            result: {
            item: 'kubejs:controller_frame'
        }
    }).id('desolate_planet:inscriber/controller_frame_duplicate')
    
    event.shaped(
        Item.of('ae2:controller'),
        [
            'SLS',
            'FCF',
            'SES'
        ],
        {
            C: 'kubejs:crashed_applied_controller',
            F: 'ae2:fluix_crystal',
            L: 'ae2:logic_processor',
            E: 'ae2:engineering_processor',
            S: '#ae2:smooth_sky_stone_blocks'
        }
    ).id('desolate_planet:crafting/controller')
    event.shaped(
        Item.of('ae2:controller'),
        [
            'SLS',
            'FCF',
            'SES'
        ],
        {
            C: 'kubejs:controller_frame',
            F: 'ae2:fluix_crystal',
            L: 'ae2:logic_processor',
            E: 'ae2:engineering_processor',
            S: '#ae2:smooth_sky_stone_blocks'
        }
    ).id('desolate_planet:crafting/controller_from_frame')
    
    
    event.recipes.create.crushing(
        [
            '2x ae2:sky_dust',
            Item.of('ae2:sky_dust').withChance(0.5),
            Item.of('ae2:logic_processor').withChance(0.25),
            Item.of('ae2:engineering_processor').withChance(0.25),
            Item.of('ae2:fluix_crystal').withChance(0.5)
        ],
        'kubejs:crashed_applied_controller'
    ).id('desolate_planet:crushing/crashed_applied_controller')
    event.recipes.create.crushing(
        [
            '2x minecraft:iron_ingot',
            Item.of('minecraft:iron_ingot').withChance(0.5),
            Item.of('ae2:engineering_processor').withChance(0.25),
            Item.of('ae2:fluix_crystal').withChance(0.5)
        ],
        'kubejs:crashed_me_drive'
    ).id('desolate_planet:crushing/crashed_me_drive')
    event.recipes.create.crushing(
        [
            '2x minecraft:iron_ingot',
            Item.of('minecraft:iron_ingot').withChance(0.5),
            Item.of('ae2:annihilation_core').withChance(0.25),
            Item.of('ae2:formation_core').withChance(0.25)
        ],
        'kubejs:crashed_me_interface'
    ).id('desolate_planet:crushing/crashed_me_interface')
    event.recipes.create.crushing(
        [
            '2x minecraft:iron_ingot',
            Item.of('minecraft:iron_ingot').withChance(0.5),
            Item.of('ae2:calculation_processor').withChance(0.25),
            Item.of('ae2:calculation_processor').withChance(0.25),
            Item.of('ae2:logic_processor').withChance(0.25)
        ],
        'kubejs:crashed_crafting_unit'
    ).id('desolate_planet:crushing/crashed_crafting_unit')
});