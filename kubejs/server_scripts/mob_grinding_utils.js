ServerEvents.recipes(event => {

    // Fan
    event.remove({ id: 'mob_grinding_utils:recipe_fan' })
    event.shaped(
        Item.of('mob_grinding_utils:fan'),
        [
            'SRS',
            'IFI',
            'SRS'
        ],
        {
            F: 'create:propeller',
            I: '#forge:storage_blocks/iron',
            R: 'thermal:redstone_servo',
            S: 'minecraft:stone'
        }
    ).id('desolate_planet:mob_grinding_utils/fan')

    // Saw
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
    ).id('desolate_planet:mob_grinding_utils/saw')

    // Spikes
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
            B: '#forge:storage_blocks/compressed_iron'
        }
    ).id('desolate_planet:mob_grinding_utils/spikes')

    // Absorption Hopper
    event.remove({ id: 'mob_grinding_utils:recipe_absorbtion_hopper' })
    event.shaped(
        Item.of('mob_grinding_utils:absorption_hopper'),
        [
            'EOE',
            'OHO'
        ],
        {
            E: 'minecraft:ender_eye',
            O: '#forge:obsidian',
            H: 'minecraft:hopper'
        }
    ).id('desolate_planet:mob_grinding_utils/absorption_hopper')

    // Tank
    event.remove({ id: 'mob_grinding_utils:recipe_tank' })
    event.shaped(
        Item.of('mob_grinding_utils:tank'),
        [
            'CCC',
            'BGB',
            'CCC'
        ],
        {
            B: 'minecraft:iron_bars',
            C: '#forge:ingots/compressed_iron',
            G: 'minecraft:glass'
        }
    ).id('desolate_planet:mob_grinding_utils/tank')

    // XP Drain Singularity Tank
    event.remove({ id: 'mob_grinding_utils:recipe_tank_sink' })
    event.shaped(
        Item.of('mob_grinding_utils:tank_sink'),
        [
            'B',
            'H',
            'T'
        ],
        {
            B: 'minecraft:iron_bars',
            H: 'minecraft:hopper',
            T: 'mob_grinding_utils:tank'
        }
    ).id('desolate_planet:mob_grinding_utils/tank_sink')

    // Jumbo Tank
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
    ).id('desolate_planet:mob_grinding_utils/jumbo_tank_pn')

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
    ).id('desolate_planet:mob_grinding_utils/jumbo_tank_mek')

    // Conveyor
    event.remove({ id: 'mob_grinding_utils:recipe_entity_conveyor' })
    event.shaped(
        Item.of('mob_grinding_utils:entity_conveyor', 4),
        [
            ' P ',
            'BIB',
            'IPI'
        ],
        {
            B: 'create:belt_connector',
            I: '#forge:ingots/iron',
            P: '#forge:plastic',
        }
    ).id('desolate_planet:mob_grinding_utils/entity_conveyor')

    // Entity Spawner
    event.remove({ id: 'mob_grinding_utils:recipe_entity_spawner' })
    event.shaped(
        Item.of('mob_grinding_utils:entity_spawner'),
        [
            'EEE',
            'XRX',
            'ISI'
        ],
        {
            E: 'minecraft:ender_eye',
            I: '#forge:storage_blocks/iron',
            R: 'thermal:machine_frame',
            S: 'pneumaticcraft:empty_spawner',
            X: 'mob_grinding_utils:solid_xp_block'
        }
    ).id('desolate_planet:mob_grinding_utils/entity_spawner')

    // Ender Inhibitor
    event.remove({ id: 'mob_grinding_utils:recipe_ender_inhibitor' })
    event.shaped(
        Item.of('mob_grinding_utils:ender_inhibitor_on'),
        [
            'IEI',
            'EHE',
            'IEI'
        ],
        {
            E: 'minecraft:ender_eye',
            H: 'tconstruct:enderman_head',
            I: '#forge:ingots/iron'
        }
    ).id('desolate_planet:mob_grinding_utils/ender_inhibitor')

    // Tinted Glass
    event.remove({ id: 'mob_grinding_utils:recipe_tintedglass' })
    event.shaped(
        Item.of('mob_grinding_utils:tinted_glass', 8),
        [
            'CGC',
            'GCG',
            'CGC'
        ],
        {
            C: '#forge:ingots/refined_obsidian',
            G: '#forge:glass'
        }
    ).id('desolate_planet:mob_grinding_utils/tinted_glass')



    // Upgrades
    event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_height' })
    event.shaped(
        Item.of('mob_grinding_utils:fan_upgrade_height'),
        [
            'IFI',
            ' R ',
            'IFI'
        ],
        {
            F: 'create:propeller',
            I: '#forge:ingots/compressed_iron',
            R: 'thermal:redstone_servo'
        }
    ).id('desolate_planet:mob_grinding_utils/fan_upgrade_height')
    
    event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_width' })
    event.shaped(
        Item.of('mob_grinding_utils:fan_upgrade_width'),
        [
            'I I',
            'FRF',
            'I I'
        ],
        {
            F: 'create:propeller',
            I: '#forge:ingots/compressed_iron',
            R: 'thermal:redstone_servo'
        }
    ).id('desolate_planet:mob_grinding_utils/fan_upgrade_width')
    
    event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_speed' })
    event.shaped(
        Item.of('mob_grinding_utils:fan_upgrade_speed'),
        [
            'IFI',
            'FRF',
            'IFI'
        ],
        {
            F: 'create:propeller',
            I: '#forge:ingots/compressed_iron',
            R: 'thermal:redstone_servo'
        }
    ).id('desolate_planet:mob_grinding_utils/fan_upgrade_speed')
    
    event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_fire' })
    event.shaped(
        Item.of('mob_grinding_utils:saw_upgrade_fire'),
        [
            'IBI',
            'XRX',
            'IBI'
        ],
        {
            B: 'tconstruct:blazing_bone',
            I: '#forge:ingots/gold',
            R: 'thermal:redstone_servo',
            X: 'minecraft:blaze_rod',
        }
    ).id('desolate_planet:mob_grinding_utils/saw_upgrade_fire')
    
    event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_smite' })
    event.shaped(
        Item.of('mob_grinding_utils:saw_upgrade_smite'),
        [
            'IBI',
            'XRX',
            'IBI'
        ],
        {
            B: '#forge:wither_bones',
            I: '#forge:ingots/silver',
            R: 'thermal:redstone_servo',
            X: 'minecraft:glistering_melon_slice'
        }
    ).id('desolate_planet:mob_grinding_utils/saw_upgrade_smite')
    
    event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_arthropod' })
    event.shaped(
        Item.of('mob_grinding_utils:saw_upgrade_arthropod'),
        [
            'IBI',
            'XRX',
            'IBI'
        ],
        {
            B: 'tconstruct:venombone',
            I: '#forge:ingots/nickel',
            R: 'thermal:redstone_servo',
            X: 'minecraft:fermented_spider_eye'
        }
    ).id('desolate_planet:mob_grinding_utils/saw_upgrade_arthropod')
    
    event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_beheading' })
    event.shaped(
        Item.of('mob_grinding_utils:saw_upgrade_beheading'),
        [
            'IBI',
            'XRX',
            'IBI'
        ],
        {
            B: '#forge:storage_blocks/lapis',
            I: '#forge:ingots/enderium',
            R: 'thermal:redstone_servo',
            X: 'mekanismadditions:obsidian_tnt'
        }
    ).id('desolate_planet:mob_grinding_utils/saw_upgrade_beheading')
    
    event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_looting' })
    event.shaped(
        Item.of('mob_grinding_utils:saw_upgrade_looting'),
        [
            'IBI',
            'XRX',
            'IBI'
        ],
        {
            B: '#forge:storage_blocks/lapis',
            I: '#forge:ingots/electrum',
            R: 'thermal:redstone_servo',
            X: 'minecraft:golden_apple'
        }
    ).id('desolate_planet:mob_grinding_utils/saw_upgrade_looting')
    
    event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_sharpness' })
    event.shaped(
        Item.of('mob_grinding_utils:saw_upgrade_sharpness'),
        [
            'IBI',
            'XRX',
            'IBI'
        ],
        {
            B: 'tconstruct:necronium_bone',
            I: '#forge:ingots/invar',
            R: 'thermal:redstone_servo',
            X: 'mekanismadditions:obsidian_tnt'
        }
    ).id('desolate_planet:mob_grinding_utils/saw_upgrade_sharpness')
    
    event.remove({ id: 'mob_grinding_utils:recipe_absorbtion_upgrade' })
    event.shaped(
        Item.of('mob_grinding_utils:absorption_upgrade'),
        [
            'IBI',
            'XRX',
            'IBI'
        ],
        {
            B: 'minecraft:ender_eye',
            I: '#forge:ingots/refined_obsidian',
            R: 'thermal:redstone_servo',
            X: 'minecraft:ender_pearl'
        }
    ).id('desolate_planet:mob_grinding_utils/absorption_upgrade')
    
    event.remove({ id: 'mob_grinding_utils:recipe_xpsolidifier_upgrade' })
    event.shaped(
        Item.of('mob_grinding_utils:xp_solidifier_upgrade'),
        [
            'IBI',
            'XRX',
            'IBI'
        ],
        {
            B: 'minecraft:sugar',
            I: '#forge:ingots/lumium',
            R: 'thermal:redstone_servo',
            X: '#desolate_planet:experience_buckets'
        }
    ).id('desolate_planet:mob_grinding_utils/xp_solidifier_upgrade')
    
    event.remove({ id: 'mob_grinding_utils:recipe_spawner_upgrade_height' })
    event.shaped(
        Item.of('mob_grinding_utils:spawner_upgrade_height'),
        [
            'IXI',
            'BRB',
            'IXI'
        ],
        {
            B: 'minecraft:sugar',
            I: '#forge:ingots/signalum',
            R: 'thermal:redstone_servo',
            X: '#desolate_planet:experience_buckets'
        }
    ).id('desolate_planet:mob_grinding_utils/spawner_upgrade_height')
    
    event.remove({ id: 'mob_grinding_utils:recipe_spawner_upgrade_width' })
    event.shaped(
        Item.of('mob_grinding_utils:spawner_upgrade_width'),
        [
            'IBI',
            'XRX',
            'IBI'
        ],
        {
            B: 'minecraft:sugar',
            I: '#forge:ingots/signalum',
            R: 'thermal:redstone_servo',
            X: '#desolate_planet:experience_buckets'
        }
    ).id('desolate_planet:mob_grinding_utils/spawner_upgrade_width')
})