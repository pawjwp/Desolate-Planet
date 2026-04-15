// Seared tags
ServerEvents.tags('item', event => { event.add('desolate_planet:crumbling_seared_bricks', 'kubejs:crumbling_seared_bricks') })
ServerEvents.tags('block', event => { event.add('desolate_planet:crumbling_seared_bricks', 'kubejs:crumbling_seared_bricks') })

// Scorched tags
ServerEvents.tags('item', event => { event.add('desolate_planet:crumbling_scorched_bricks', 'kubejs:crumbling_scorched_bricks') })
ServerEvents.tags('block', event => { event.add('desolate_planet:crumbling_scorched_bricks', 'kubejs:crumbling_scorched_bricks') })


ServerEvents.recipes(event => {
    // Seared recipes
    event.custom({
        type: 'exdeorum:hammer',
        ingredient: [
            {
                tag: 'desolate_planet:crumbling_seared_bricks'
            }
        ],
        result: 'tconstruct:seared_brick',
        result_amount: {
            type: 'minecraft:uniform',
            max: 4.0,
            min: 1.0
        },
    }).id('desolate_planet:crumbling_seared_bricks_hammer');


    event.custom({
        type: 'thermal:pulverizer',
        ingredient: {
            tag: 'desolate_planet:crumbling_seared_bricks'
        },
        result: [
            {
                item: 'tconstruct:seared_brick',
                count: 1
            },
            {
                item: 'tconstruct:seared_brick',
                chance: 0.5
            },
            {
                item: 'tconstruct:seared_brick',
                chance: 0.5
            },
            {
                item: 'tconstruct:seared_brick',
                chance: 0.5
            }
        ],
        energy: 1000
    }).id('desolate_planet:crumbling_seared_bricks_pulverizer');


    event.custom({
        type: 'create:milling',
        ingredients: [
            {
                tag: 'desolate_planet:crumbling_seared_bricks'
            }
        ],
        processingTime: 250,
        results: [
            {
                'count': 1,
                item: 'tconstruct:seared_brick'
            },
            {
                'chance': 0.5,
                item: 'tconstruct:seared_brick'
            },
            {
                'chance': 0.5,
                item: 'tconstruct:seared_brick'
            },
            {
                'chance': 0.5,
                item: 'tconstruct:seared_brick'
            }
        ]
    }).id('desolate_planet:crumbling_seared_bricks_milling');

    event.custom({
        type: 'tconstruct:melting',
        ingredient: {
            tag: 'desolate_planet:crumbling_seared_bricks'
        },
        result: {
            amount: 750,
            fluid: 'tconstruct:seared_stone'
        },
        temperature: 600,
        time: 100
    }).id('desolate_planet:crumbling_seared_bricks_melting');


    // Scorched recipes
    event.custom({
        type: 'exdeorum:hammer',
        ingredient: [
            {
                tag: 'desolate_planet:crumbling_scorched_bricks'
            }
        ],
        result: 'tconstruct:scorched_brick',
        result_amount: {
            type: 'minecraft:uniform',
            max: 4.0,
            min: 1.0
        },
    }).id('desolate_planet:crumbling_scorched_bricks_hammer');


    event.custom({
        type: 'thermal:pulverizer',
        ingredient: {
            tag: 'desolate_planet:crumbling_scorched_bricks'
        },
        result: [
            {
                item: 'tconstruct:scorched_brick',
                count: 1
            },
            {
                item: 'tconstruct:scorched_brick',
                chance: 0.5
            },
            {
                item: 'tconstruct:scorched_brick',
                chance: 0.5
            },
            {
                item: 'tconstruct:scorched_brick',
                chance: 0.5
            }
        ],
        energy: 1000
    }).id('desolate_planet:crumbling_scorched_bricks_pulverizer');


    event.custom({
        type: 'create:milling',
        ingredients: [
            {
                tag: 'desolate_planet:crumbling_scorched_bricks'
            }
        ],
        processingTime: 250,
        results: [
            {
                'count': 1,
                item: 'tconstruct:scorched_brick'
            },
            {
                'chance': 0.5,
                item: 'tconstruct:scorched_brick'
            },
            {
                'chance': 0.5,
                item: 'tconstruct:scorched_brick'
            },
            {
                'chance': 0.5,
                item: 'tconstruct:scorched_brick'
            }
        ]
    }).id('desolate_planet:crumbling_scorched_bricks_milling');

    event.custom({
        type: 'tconstruct:melting',
        ingredient: {
            tag: 'desolate_planet:crumbling_scorched_bricks'
        },
        result: {
            amount: 750,
            fluid: 'tconstruct:scorched_stone'
        },
        temperature: 600,
        time: 100
    }).id('desolate_planet:crumbling_scorched_bricks_melting');
})