ServerEvents.recipes(event => {

    // I plan to add a "compressed" modifier eventually but for now, here are some alternate compressed hammer recipes
    event.remove({ id: 'exdeorum:compressed_wooden_hammer' });
    event.shaped('exdeorum:compressed_wooden_hammer', [
        ' # ',
        '#/#',
        '/# '
    ], {
        '#': '#minecraft:logs',
        '/': 'minecraft:stick'
    }).id('desolate_planet:compressed_wooden_hammer');

    event.remove({ id: 'exdeorum:compressed_stone_hammer' });
    event.shaped('exdeorum:compressed_stone_hammer', [
        ' # ',
        ' /#',
        '/  '
    ], {
        '#': 'exdeorum:compressed_cobblestone',
        '/': 'minecraft:stick'
    }).id('desolate_planet:compressed_stone_hammer');

    event.remove({ id: 'exdeorum:compressed_iron_hammer' });
    event.shaped('exdeorum:compressed_iron_hammer', [
        ' # ',
        ' /#',
        '/  '
    ], {
        '#': '#forge:storage_blocks/iron',
        '/': 'minecraft:stick'
    }).id('desolate_planet:compressed_iron_hammer');

    event.remove({ id: 'exdeorum:compressed_golden_hammer' });
    event.shaped('exdeorum:compressed_golden_hammer', [
        ' # ',
        ' /#',
        '/  '
    ], {
        '#': '#forge:storage_blocks/gold',
        '/': 'minecraft:stick'
    }).id('desolate_planet:compressed_golden_hammer');

    event.remove({ id: 'exdeorum:compressed_diamond_hammer' });
    event.shaped('exdeorum:compressed_diamond_hammer', [
        ' # ',
        ' /#',
        '/  '
    ], {
        '#': '#forge:storage_blocks/diamond',
        '/': 'minecraft:stick'
    }).id('desolate_planet:compressed_diamond_hammer');

    event.remove({ id: 'exdeorum:compressed_netherite_hammer' });
});