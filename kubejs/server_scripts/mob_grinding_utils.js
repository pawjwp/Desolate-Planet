ServerEvents.recipes(event => {
    event.remove({ id: 'mob_grinding_utils:recipe_fan' })
    event.shaped(
        Item.of('mob_grinding_utils:fan'),
        [
            'F',
            'M',
            'S'
        ],
        {
            F: 'create:propeller',
            M: '#forge:storage_blocks/iron',
            S: 'thermal:redstone_servo'
        }
    ).id('crash_landing:mob_grinding_utils/fan')

    event.remove({ id: 'mob_grinding_utils:recipe_tank_sink' })
    event.shaped(
        Item.of('mob_grinding_utils:tank_sink'),
        [
            'B',
            'T'
        ],
        {
            B: 'minecraft:iron_bars',
            T: 'mob_grinding_utils:tank'
        }
    ).id('crash_landing:mob_grinding_utils/tank_sink')

    event.remove({ id: 'mob_grinding_utils:recipe_jumbotank' })
    event.shaped(
        Item.of('mob_grinding_utils:jumbo_tank'),
        [
            'ATA',
            ' C ',
            'ATA'
        ],
        {
            A: 'mekanism:alloy_atomic',
            T: 'pneumaticcraft:huge_tank',
            C: 'pneumaticcraft:printed_circuit_board'
        }
    ).id('crash_landing:mob_grinding_utils/jumbo_tank')
    event.shaped(
        Item.of('mob_grinding_utils:jumbo_tank'),
        [
            'ATA',
            'TCT',
            'ATA'
        ],
        {
            A: 'mekanism:alloy_atomic',
            T: 'mekanism:ultimate_fluid_tank',
            C: 'pneumaticcraft:printed_circuit_board'
        }
    ).id('crash_landing:mob_grinding_utils/jumbo_tank_mek')

    event.remove({ id: 'mob_grinding_utils:recipe_spikes' })
    event.shaped(
        Item.of('mob_grinding_utils:spikes'),
        [
            ' N ',
            'NIN',
            'IBI'
        ],
        {
            N: '#forge:nuggets/iron',
            I: '#forge:ingots/iron',
            B: '#forge:storage_blocks/iron'
        }
    ).id('crash_landing:mob_grinding_utils/spikes')

    event.remove({ id: 'mob_grinding_utils:recipe_saw' })
    event.shaped(
        Item.of('mob_grinding_utils:saw'),
        [
            ' D ',
            'DGD',
            'SMS'
        ],
        {
            D: '#forge:gems/diamond',
            G: '#forge:gears/iron',
            S: 'thermal:saw_blade',
            M: '#desolate_planet:machine_frame'
        }
    ).id('crash_landing:mob_grinding_utils/saw')
})