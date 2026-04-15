ServerEvents.tags('item', event => {
    event.add('forge:storage_blocks/electrum',
        'createaddition:electrum_block'
    )

    event.add('desolate_planet:reactor_terminals',
        'biggerreactors:reactor_terminal',
        'kubejs:crashed_reactor_controller'
    )

    event.add('desolate_planet:experience_buckets',
        'pneumaticcraft:memory_essence_bucket',
        'industrialforegoing:essence_bucket',
        'enderio:xp_juice_bucket',
        'mob_grinding_utils:fluid_xp_bucket'
    )

    event.add('desolate_planet:fluid_conduits',
        'enderio:fluid_conduit',
        'enderio:pressurized_fluid_conduit',
        'enderio:ender_fluid_conduit',
        'mekanism:basic_pressurized_tube',
        'mekanism:advanced_pressurized_tube',
        'mekanism:elite_pressurized_tube',
        'mekanism:ultimate_pressurized_tube',
        'thermal:fluid_duct',
        'thermal:fluid_duct_windowed'
    )

    event.add('desolate_planet:explosives',
        'minecraft:tnt',
        'ae2:tiny_tnt',
        'mekanismadditions:obsidian_tnt',
        'tconstruct:efln_ball',
        'thermal:explosive_grenade'
    )

    event.add('desolate_planet:pcb_templates',
        'pneumaticcraft:pcb_blueprint',
        'pneumaticcraft:unassembled_pcb',
        'pneumaticcraft:printed_circuit_board',
        'pneumaticcraft:failed_pcb',
    )

    event.add('desolate_planet:lootable_crop_seeds',
        '#forge:seeds',
        'scarcity:bamboo_seeds',
        'scarcity:cactus_seeds',
        'scarcity:sugar_cane_seeds',
        'scarcity:sweet_berry_seeds',
        'scarcity:potato_seeds',
        'scarcity:carrot_seeds',
        'scarcity:onion_seeds'
    )

    event.add('desolate_planet:lootable_tree_seeds',
        'scarcity:oak_seed',
        'scarcity:spruce_seed',
        'scarcity:birch_seed',
        'scarcity:jungle_seed',
        'scarcity:acacia_seed',
        'scarcity:dark_oak_seed',
        'scarcity:cherry_seed',
        'scarcity:rubberwood_seed'
    )

    Ingredient.of(/^(cfm|nfm|refurbished_furniture):.*sink.*$/).itemIds.forEach(id => {
        event.add('desolate_planet:sinks', id);
    });

    Ingredient.of(/^immersive_weathering:.*_leaf_pile$/).itemIds.forEach(id => {
        event.add('immersive_weathering:leaf_piles', id);
    });
});

ServerEvents.tags('block', event => {
    Ingredient.of(/^(cfm|nfm|refurbished_furniture):.*sink.*$/).itemIds.forEach(id => {
        event.add('desolate_planet:sinks', id);
    });

    event.add('vs_eureka:assemble_blacklist',
        'exdeorum:crushed_deepslate',
        'exdeorum:dust',
        'minecraft:gravel',
        'minecraft:sand',
    )
});