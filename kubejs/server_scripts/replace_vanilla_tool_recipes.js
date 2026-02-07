ServerEvents.recipes(event => {
    // Crooks
    event.remove({ id: 'exdeorum:crook' })
    event.recipes.kubejs
    .shaped(
        // Shown in JEI
        Item.of('exdeorum:crook', "{Damage:0,display:{Lore:['{\"text\":\"Converts into a Tinkers tool\"}']}}"),
        [
            '// ',
            ' / ',
            ' / '
        ],
        {
            '/': 'minecraft:stick'
        }
    )
    .modifyResult((grid, result) => {
        // Given to player
        return Item.of('kubejs:crook', '{tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:wood"]}')
    })
    .id('desolate_planet:tinkering/crook_replacement');

    event.remove({ id: 'exdeorum:bone_crook' })
    event.recipes.kubejs
    .shaped(
        // Shown in JEI
        Item.of('exdeorum:bone_crook', "{Damage:0,display:{Lore:['{\"text\":\"Converts into a Tinkers tool\"}']}}"),
        [
            '// ',
            ' / ',
            ' / '
        ],
        {
            '/': 'minecraft:bone'
        }
    )
    .modifyResult((grid, result) => {
        // Given to player
        return Item.of('kubejs:crook', '{tic_materials:["tconstruct:bone","tconstruct:bone","tconstruct:bone"]}')
    })
    .id('desolate_planet:tinkering/bone_crook_replacement');

    // Hammers

    event.remove({ id: 'exdeorum:wooden_hammer' })
    event.recipes.kubejs
    .shaped(
        // Shown in JEI
        Item.of('exdeorum:wooden_hammer', "{Damage:0,display:{Lore:['{\"text\":\"Converts into a Tinkers tool\"}']}}"),
        [
            ' # ',
            ' /#',
            '/  '
        ],
        {
            '#': '#minecraft:logs',
            '/': 'minecraft:stick'
        }
    )
    .modifyResult((grid, result) => {
        // Given to player
        return Item.of('kubejs:crushing_hammer', '{tic_materials:["tconstruct:wood","tconstruct:wood","tconstruct:wood"]}')
    })
    .id('desolate_planet:tinkering/wooden_hammer_replacement');
    
    event.remove({ id: 'exdeorum:stone_hammer' })
    event.recipes.kubejs
    .shaped(
        // Shown in JEI
        Item.of('exdeorum:stone_hammer', "{Damage:0,display:{Lore:['{\"text\":\"Converts into a Tinkers tool\"}']}}"),
        [
            '  #',
            ' / ',
            '/  '
        ],
        {
            '#': '#exdeorum:compressed/cobblestone',
            '/': 'minecraft:stick'
        }
    )
    .modifyResult((grid, result) => {
        // Given to player
        return Item.of('kubejs:crushing_hammer', '{tic_materials:["tconstruct:rock","tconstruct:wood","tconstruct:wood"]}')
    })
    .id('desolate_planet:tinkering/stone_hammer_replacement');

    event.remove({ id: 'exdeorum:golden_hammer' })
    event.recipes.kubejs
    .shaped(
        // Shown in JEI
        Item.of('exdeorum:golden_hammer', "{Damage:0,display:{Lore:['{\"text\":\"Converts into a Tinkers tool\"}']}}"),
        [
            '  #',
            ' / ',
            '/  '
        ],
        {
            '#': 'minecraft:gold_block',
            '/': 'minecraft:stick'
        }
    )
    .modifyResult((grid, result) => {
        // Given to player
        return Item.of('kubejs:crushing_hammer', '{tic_materials:["tconstruct:electrum","tconstruct:wood","tconstruct:wood"]}')
    })
    .id('desolate_planet:tinkering/golden_hammer_replacement');
    
    event.remove({ id: 'exdeorum:iron_hammer' })
    event.recipes.kubejs
    .shaped(
        // Shown in JEI
        Item.of('exdeorum:iron_hammer', "{Damage:0,display:{Lore:['{\"text\":\"Converts into a Tinkers tool\"}']}}"),
        [
            '  #',
            ' / ',
            '/  '
        ],
        {
            '#': 'minecraft:iron_block',
            '/': 'minecraft:stick'
        }
    )
    .modifyResult((grid, result) => {
        // Given to player
        return Item.of('kubejs:crushing_hammer', '{tic_materials:["tconstruct:iron","tconstruct:wood","tconstruct:wood"]}')
    })
    .id('desolate_planet:tinkering/iron_hammer_replacement');

    event.remove({ id: 'exdeorum:diamond_hammer' })
    event.recipes.kubejs
    .shaped(
        // Shown in JEI
        Item.of('exdeorum:diamond_hammer', "{Damage:0,display:{Lore:['{\"text\":\"Converts into a Tinkers tool\"}']}}"),
        [
            ' $#',
            ' /$',
            '/  '
        ],
        {
            '$': 'minecraft:diamond',
            '#': 'minecraft:iron_block',
            '/': 'minecraft:stick'
        }
    )
    .modifyResult((grid, result) => {
        // Given to player
        return Item.of('kubejs:crushing_hammer', '{tic_materials:["tconstruct:iron","tconstruct:wood","tconstruct:wood"],tic_upgrades:[{level:1,name:"tconstruct:diamond"}]}')
    })
    .id('desolate_planet:tinkering/diamond_hammer_replacement');

    event.remove({ id: 'exdeorum:netherite_hammer' })
});