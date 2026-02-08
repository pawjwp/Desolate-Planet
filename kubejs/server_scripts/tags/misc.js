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
        'enderio:ender_fluid_conduit'
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

    Ingredient.of(/^immersive_weathering:.*_leaf_pile$/).itemIds.forEach(id => {
        event.add('immersive_weathering:leaf_piles', id);
    });
});