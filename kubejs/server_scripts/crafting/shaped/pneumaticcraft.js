ServerEvents.recipes(event => {
    event.shaped('pneumaticcraft:pcb_blueprint', [
        'D',
        'P',
        'I'
    ],
    {
        D: '#forge:dyes/blue',
        I: '#forge:ingots/compressed_iron',
        P: '#desolate_planet:pcb_templates'
    })
    .keepIngredient('#desolate_planet:pcb_templates')
    .id('desolate_planet:pneumaticcraft/pcb_blueprint');

    event.shaped('pneumaticcraft:assembly_program_drill', [
        ' # ',
        'PXP',
        'PIP'
    ],
    {
        '#': 'pneumaticcraft:printed_circuit_board',
        I: '#forge:ingots/compressed_iron',
        P: '#forge:plastic',
        X: '#forge:gems/diamond'
    }).id('desolate_planet:pneumaticcraft/assembly_program_drill');

    event.shaped('pneumaticcraft:assembly_program_laser', [
        ' # ',
        'PXP',
        'PIP'
    ],
    {
        '#': 'pneumaticcraft:printed_circuit_board',
        I: '#forge:ingots/compressed_iron',
        P: '#forge:plastic',
        X: '#forge:storage_blocks/redstone'
    }).id('desolate_planet:pneumaticcraft/assembly_program_laser');
});
