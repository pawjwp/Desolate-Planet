ServerEvents.recipes(event => {
    // Removed because they already exist in other ways
    [
        'minecraft:cake',
        'farmersdelight:cooking/salt',
        'farmersdelight:mixing/dough_from_eggs',
        'farmersdelight:mixing/wheat_dough_from_eggs',
        // 'culturaldelights:cooking/raw_pasta'
    ].forEach(id => {
        event.remove({ id: id });
    });



    // Specific recipe changes

    // Blaze cake base
    event.remove({ id: 'create:compacting/blaze_cake_base' });
    event.recipes.create.compacting(
        'create:blaze_cake_base',
        ['#forge:dough', 'minecraft:sugar', 'create:cinder_flour']
    ).id('desolate_planet:blaze_cake_base_from_dough');

    // Pumpkin soup
    event.remove({ id: 'farmersdelight:cooking/pumpkin_soup' });
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
            {
                "item": "farmersdelight:pumpkin_slice"
            },
            {
                "item": "farmersdelight:pumpkin_slice"
            },
            {
                "tag": "forge:crops/potato"
            },
            {
                "tag": "forge:crops/onion"
            },
            {
                "tag": "forge:salad_ingredients"
            }
        ],
        "recipe_book_tab": "meals",
        "result": {
            "item": "farmersdelight:pumpkin_soup"
        }
    }).id('desolate_planet:pumpkin_soup_from_vegetables');

    // Hot cocoa
    event.remove({ id: 'farmersdelight:cooking/hot_cocoa' });
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
            Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT(),
            {
                "item": "minecraft:sugar"
            },
            {
                "item": "minecraft:cocoa_beans"
            },
            {
                "item": "minecraft:cocoa_beans"
            }
        ],
        "recipe_book_tab": "drinks",
        "result": {
            "item": "farmersdelight:hot_cocoa"
        }
    }).id('desolate_planet:hot_cocoa_from_water');
    event.custom({
        "type": "farmersdelight:cooking",
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
            {
                "tag": "forge:milk"
            },
            {
                "item": "minecraft:sugar"
            },
            {
                "item": "minecraft:cocoa_beans"
            },
            {
                "item": "minecraft:cocoa_beans"
            }
        ],
        "recipe_book_tab": "drinks",
        "result": {
            "item": "farmersdelight:hot_cocoa"
        }
    }).id('desolate_planet:hot_cocoa_from_milk');

    // Pie crust
    event.remove({ id: 'farmersdelight:pie_crust' });
    event.shaped(
        Item.of('farmersdelight:pie_crust', 1),
        [
            'SMS',
            'www'
        ],
        {
            M: '#forge:milk',
            S: 'minecraft:sugar',
            w: 'minecraft:wheat'
        }
    ).id('desolate_planet:pie_crust_from_milk');
    event.shaped(
        Item.of('farmersdelight:pie_crust', 1),
        [
            'SBS',
            'www'
        ],
        {

            B: Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT(),
            S: 'minecraft:sugar',
            w: 'minecraft:wheat'
        }
    ).id('desolate_planet:pie_crust_from_water');

    // Add sugar to cookies
    event.remove({ output: 'minecraft:cookie' });
    event.shapeless(
        Item.of('minecraft:cookie', 8), [
        'minecraft:cocoa_beans',
        '#forge:dough_bases',
        '#forge:dough_bases',
        'minecraft:sugar'
    ]
    ).id('desolate_planet:cookie_with_sugar');

    event.remove({ output: 'farmersdelight:sweet_berry_cookie' });
    event.shapeless(
        Item.of('farmersdelight:sweet_berry_cookie', 8), [
        'minecraft:sweet_berries',
        '#forge:dough_bases',
        '#forge:dough_bases',
        'minecraft:sugar'
    ]
    ).id('desolate_planet:sweet_berry_cookie_with_sugar');

    event.remove({ output: 'farmersdelight:honey_cookie' });
    event.shapeless(
        Item.of('farmersdelight:honey_cookie', 8), [
        'minecraft:honey_bottle',
        '#forge:dough_bases',
        '#forge:dough_bases',
        'minecraft:sugar'
    ]
    ).id('desolate_planet:honey_cookie_with_sugar');

    event.remove({ output: 'legumedelight:peanut_butter_cookie' });
    event.shapeless(
        Item.of('legumedelight:peanut_butter_cookie', 8), [
        '#forge:peanut_butter',
        '#forge:dough_bases',
        '#forge:dough_bases',
        'minecraft:sugar'
    ]
    ).id('desolate_planet:peanut_butter_cookie_with_sugar');




    // Straw-related items

    // Rope
    event.shaped(
        Item.of('farmersdelight:rope', 3),
        [
            'SS',
            'SS',
            'SS'
        ],
        {
            S: '#forge:string'
        }
    ).id('desolate_planet:rope_from_string');

    // Canvas
    event.shaped(
        Item.of('farmersdelight:canvas', 1),
        [
            'PS',
            'SP'
        ],
        {
            P: 'minecraft:paper',
            S: '#forge:string'
        }
    ).id('desolate_planet:canvas_from_paper_string');

    // Compost changes
    event.remove({ output: 'farmersdelight:organic_compost' });
    event.shapeless(
        Item.of('farmersdelight:organic_compost'), [
        'minecraft:dirt',
        'minecraft:rotten_flesh',
        'minecraft:rotten_flesh',
        'minecraft:bone_meal',
        'minecraft:bone_meal',
        'minecraft:bone_meal',
        ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw'],
        ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw'],
        ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw']
    ]
    ).id('desolate_planet:organic_compost_from_rotten_flesh');
    event.shapeless(
        Item.of('farmersdelight:organic_compost'), [
        'minecraft:dirt',
        '#forge:vegetables',
        '#forge:vegetables',
        'minecraft:bone_meal',
        'minecraft:bone_meal',
        'minecraft:bone_meal',
        ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw'],
        ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw'],
        ['minecraft:wheat', 'farmersdelight:rice_panicle', 'farmersdelight:straw']
    ]
    ).id('desolate_planet:organic_compost_from_vegetables');
});

ServerEvents.tags('block', event => {
    // Ensures crops can be grown by watering can
    event.add('exdeorum:watering_can_tickable',
        '#minecraft:maintains_farmland'
    )
});

ServerEvents.tags('item', event => {
    //Tweaks to make certain foods more nutritional
    event.add('diet:grains',
        'farmersdelight:bacon_sandwich',
        'farmersdelight:hamburger',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:vegetable_noodles',
        'kubejs:enderios',
        'kubejs:nutrient_brick',
        'legumedelight:bean_burger',
        'legumedelight:bean_burrito',
        'legumedelight:beans_and_rice',
        'legumedelight:pasta_with_mutton_chop',
        'legumedelight:pasta_with_tomato_sauce',
        'legumedelight:trail_mix',
    )
    event.add('diet:proteins',
        'exdeorum:silk_worm',
        'farmersdelight:bacon_sandwich',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:barbecue_stick',
        'farmersdelight:chicken_soup',
        'farmersdelight:fish_stew',
        'farmersdelight:hamburger',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:squid_ink_pasta',
        'kubejs:bug_broth',
        'kubejs:enderios',
        'kubejs:nutrient_brick',
        'legumedelight:baked_beans',
        'legumedelight:bean_burger',
        'legumedelight:bean_burrito',
        'legumedelight:beans_and_rice',
        'legumedelight:chili',
        'legumedelight:pasta_with_mutton_chop',
        'legumedelight:peanut_bar',
        'legumedelight:trail_mix',
    )
    event.add('diet:vegetables',
        'farmersdelight:bacon_sandwich',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:barbecue_stick',
        'farmersdelight:chicken_soup',
        'farmersdelight:fish_stew',
        'farmersdelight:hamburger',
        'farmersdelight:mixed_salad',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:ratatouille',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:vegetable_noodles',
        'kubejs:bug_broth',
        'kubejs:enderios',
        'kubejs:nutrient_brick',
        'legumedelight:baked_beans',
        'legumedelight:bean_burger',
        'legumedelight:bean_burrito',
        'legumedelight:beans_and_rice',
        'legumedelight:chili',
        'legumedelight:pasta_with_mutton_chop',
        'legumedelight:pasta_with_tomato_sauce',
    )
    event.add('diet:fruits',
        'farmersdelight:tomato',
        'kubejs:enderios',
        'kubejs:nutrient_brick',
        'legumedelight:chili',
    )
    event.add('diet:sugars',
        'farmersdelight:hot_cocoa',
        'farmersdelight:melon_juice',
        'legumedelight:baked_beans',
    )



    // AStages removal tags

    // Animal products

    // Removed until player unlocks chickens
    event.add('desolate_planet:egg_sourced',
        'minecraft:cake',
        'createaddition:cake_base_baked',
        'createaddition:cake_base',
        'createaddition:chocolate_cake',
        'createaddition:honey_cake',
        'exdeorum:end_cake',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:egg_sandwich',
        'farmersdelight:fried_egg',
        'farmersdelight:fried_rice',
        'farmersdelight:glow_berry_custard',
        'farmersdelight:noodle_soup',
        'farmersdelight:roast_chicken_block',
        'farmersdelight:roast_chicken',
        'legumedelight:mooncake',
        'legumedelight:pad_thai',
        'minecraft:pumpkin_pie',
        'tconstruct:earth_cake',
        'tconstruct:ender_cake',
        'tconstruct:ichor_cake',
        'tconstruct:magma_cake',
        'tconstruct:sky_cake'
    )

    // Removed until player unlocks cows
    event.add('desolate_planet:milk_sourced',
        'minecraft:cake',
        'farmersdelight:cake_slice',
        'farmersdelight:chocolate_pie_slice',
        'farmersdelight:chocolate_pie',
        'farmersdelight:glow_berry_custard',
        'farmersdelight:milk_bottle',
        'farmersdelight:shepherds_pie_block',
        'farmersdelight:shepherds_pie',
        'farmersdelight:stuffed_potato',
        'farmersdelight:sweet_berry_cheesecake_slice',
        'farmersdelight:sweet_berry_cheesecake',
        'refurbished_furniture:cheese_sandwich',
        'refurbished_furniture:cheese_toastie',
        'refurbished_furniture:cheese',
        'tconstruct:cheese_block',
        'tconstruct:cheese_ingot',
    )

    // Removed until player unlocks bees
    event.add('desolate_planet:honey_sourced',
        'create:honeyed_apple',
        'farmersdelight:honey_cookie',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:honey_glazed_ham'
    )



    // Meats

    // Removed until player unlocks cows
    event.add('desolate_planet:beef_sourced',
        '#forge:cooked_beef',
        '#forge:raw_beef',
        'farmersdelight:beef_stew',
        'farmersdelight:hamburger',
        'farmersdelight:pasta_with_meatballs',
        'farmersdelight:steak_and_potatoes',
        'farmersdelight:stuffed_potato',
    )

    // Removed until player unlocks chickens
    event.add('desolate_planet:chicken_sourced',
        '#forge:cooked_chicken',
        '#forge:raw_chicken',
        'farmersdelight:chicken_sandwich',
        'farmersdelight:chicken_soup',
        'farmersdelight:roast_chicken',
        'farmersdelight:roast_chicken_block',
    )

    // Removed until player unlocks sheep
    event.add('desolate_planet:mutton_sourced',
        '#forge:cooked_mutton',
        '#forge:raw_mutton',
        'farmersdelight:mutton_chops',
        'farmersdelight:mutton_wrap',
        'farmersdelight:pasta_with_mutton_chop',
        'farmersdelight:roasted_mutton_chops_block',
        'farmersdelight:roasted_mutton_chops',
        'farmersdelight:shepherds_pie',
        'farmersdelight:shepherds_pie_block',
    )

    // Removed until player unlocks pigs
    event.add('desolate_planet:pork_sourced',
        '#forge:cooked_pork',
        '#forge:raw_pork',
        'farmersdelight:bacon_and_eggs',
        'farmersdelight:bacon_sandwich',
        'farmersdelight:ham',
        'farmersdelight:honey_glazed_ham_block',
        'farmersdelight:honey_glazed_ham',
        'farmersdelight:smoked_ham',
    )

    // Removed until player unlocks rabbits
    event.add('desolate_planet:rabbit_sourced',
        'minecraft:cooked_rabbit',
        'minecraft:raw_rabbit',
        'minecraft:rabbit_stew',
    )

    // Removed until player unlocks any spawn egg
    event.add('desolate_planet:any_animal_sourced',
        'farmersdelight:barbecue_stick',
        'farmersdelight:dog_food',
        'farmersdelight:horse_feed'
    )

    // Removed because fish don't exist in the desert
    event.add('desolate_planet:fish_sourced',
        '#forge:cooked_fishes',
        '#forge:raw_fishes',
        'farmersdelight:baked_cod_stew',
        'farmersdelight:cod_roll',
        'farmersdelight:fish_stew',
        'farmersdelight:squid_ink_pasta',
        'farmersdelight:rice_roll_medley_block',
        'farmersdelight:rice_roll_medley',
        'farmersdelight:salmon_roll',
        'farmersdelight:grilled_salmon',
    )



    // Environmental

    // Removed because kelp doesn't exist in the desert
    event.add('desolate_planet:kelp_sourced',
        'farmersdelight:kelp_roll_slice',
        'farmersdelight:kelp_roll',
        'farmersdelight:noodle_soup',
        'farmersdelight:rice_roll_medley_block',
        'legumedelight:pad_thai'
    )
});

/*  All options:
    .setRenderItemName(false)           // defaults to false
    .setHideTooltip(true)               // defaults to true
    .setCanPickedUp(false)              // defaults to false
    .setCanBeEquipped(false)            // defaults to false
    .setCanBeStoredInInventory(false)   // defaults to false
    .setCanAttack(false)                // defaults to false
    .setHideInJEI(true)                 // defaults to true
    .setCanBePlaced(false)              // defaults to false
    .setCanItemBeLeftClicked(false)     // defaults to false
    .setCanItemBeRightClicked(false)    // defaults to false
    .setCanInteractWithBlock(true)      // defaults to true
    .setCanBeStoredInContainers(false)  // defaults to false
*/

AStages.addRestrictionForTag('desolate_planet:egg_sourced', 'eggs', 'desolate_planet:egg_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:milk_sourced', 'milk', 'desolate_planet:milk_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:honey_sourced', 'honey', 'desolate_planet:honey_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:beef_sourced', 'beef', 'desolate_planet:beef_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:chicken_sourced', 'chicken', 'desolate_planet:chicken_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:mutton_sourced', 'mutton', 'desolate_planet:mutton_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:pork_sourced', 'pork', 'desolate_planet:pork_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:rabbit_sourced', 'rabbit', 'desolate_planet:rabbit_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:any_animal_sourced', 'any_animal', 'desolate_planet:any_animal_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:fish_sourced', 'fish', 'desolate_planet:fish_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)

AStages.addRestrictionForTag('desolate_planet:kelp_sourced', 'kelp', 'desolate_planet:kelp_sourced')
    // hides from JEI but is not restricted in any other way
    .setRenderItemName(true)
    .setHideTooltip(false)
    .setCanPickedUp(true)
    .setCanBeEquipped(true)
    .setCanBeStoredInInventory(true)
    .setCanAttack(true)
    .setCanBePlaced(true)
    .setCanItemBeLeftClicked(true)
    .setCanItemBeRightClicked(true)
    .setCanBeStoredInContainers(true)



PlayerEvents.inventoryChanged(event => {

    if (!AStages.playerHasStage('eggs', event.player)) {
        [
            'minecraft:chicken_spawn_egg',
            'minecraft:egg',
            'farmersdelight:fried_egg',
        ].forEach(item => {
            if (event.player.inventory.contains(item)) AStages.addStageToPlayer('eggs', event.player);
        });
    }

    if (!AStages.playerHasStage('milk', event.player)) {
        [
            'minecraft:cow_spawn_egg',
            'minecraft:milk_bucket',
            'ad_astra:cheese_block',
            'ad_astra:cheese',
            'ad_astra:moon_cheese_ore',
            'exdeorum:porcelain_milk_bucket',
            'farmersdelight:milk_bottle',
            'tconstruct:cheese_block',
            'tconstruct:cheese_ingot'
        ].forEach(item => {
            if (event.player.inventory.contains(item)) AStages.addStageToPlayer('milk', event.player);
        });
    }

    if (!AStages.playerHasStage('honey', event.player)) {
        [
            'minecraft:bee_nest',
            'minecraft:bee_spawn_egg',
            'minecraft:beehive',
            'minecraft:honey_block',
            'minecraft:honey_bottle',
            'minecraft:honeycomb_block',
            'minecraft:honeycomb',
            'tconstruct:honey_bucket'
        ].forEach(item => {
            if (event.player.inventory.contains(item)) AStages.addStageToPlayer('honey', event.player);
        });
    }

    if (!AStages.playerHasStage('beef', event.player)) {
        [
            'minecraft:beef',
            'minecraft:cooked_beef',
            'minecraft:cow_spawn_egg',
            'farmersdelight:beef_patty',
            'farmersdelight:minced_beef',
        ].forEach(item => {
            if (event.player.inventory.contains(item)) AStages.addStageToPlayer('beef', event.player);
        });
    }

    if (!AStages.playerHasStage('chicken', event.player)) {
        [
            'minecraft:chicken_spawn_egg',
            'minecraft:chicken',
            'minecraft:cooked_chicken',
            'farmersdelight:chicken_cuts',
            'farmersdelight:cooked_chicken_cuts',
        ].forEach(item => {
            if (event.player.inventory.contains(item)) AStages.addStageToPlayer('chicken', event.player);
        });
    }

    if (!AStages.playerHasStage('mutton', event.player)) {
        [
            'minecraft:cooked_mutton',
            'minecraft:mutton',
            'minecraft:sheep_spawn_egg',
            'farmersdelight:cooked_mutton_chops',
            'farmersdelight:mutton_chops',
        ].forEach(item => {
            if (event.player.inventory.contains(item)) AStages.addStageToPlayer('mutton', event.player);
        });
    }

    if (!AStages.playerHasStage('pork', event.player)) {
        [
            'minecraft:cooked_porkchop',
            'minecraft:pig_spawn_egg',
            'minecraft:porkchop',
            'farmersdelight:bacon',
            'farmersdelight:cooked_bacon',
        ].forEach(item => {
            if (event.player.inventory.contains(item)) AStages.addStageToPlayer('pork', event.player);
        });
    }

    if (!AStages.playerHasStage('rabbit', event.player)) {
        [
            'minecraft:cooked_rabbit',
            'minecraft:rabbit_spawn_egg',
            'minecraft:rabbit',
        ].forEach(item => {
            if (event.player.inventory.contains(item)) AStages.addStageToPlayer('rabbit', event.player);
        });
    }

    if (!AStages.playerHasStage('fish', event.player)) {
        [
            'minecraft:cod_spawn_egg',
            'minecraft:cod',
            'minecraft:cooked_cod',
            'farmersdelight:cod_slice',
            'farmersdelight:cooked_cod_slice',

            'minecraft:cooked_salmon',
            'minecraft:salmon_spawn_egg',
            'minecraft:salmon',

            'minecraft:tropical_fish_spawn_egg',
            'minecraft:tropical_fish',
            'farmersdelight:cooked_salmon_slice',
            'farmersdelight:salmon_slice',

            'minecraft:pufferfish_spawn_egg'
        ].forEach(item => {
            if (event.player.inventory.contains(item)) AStages.addStageToPlayer('fish', event.player);
        });
    }

    if (!AStages.playerHasStage('kelp', event.player)) {
        [
            'minecraft:dried_kelp_block',
            'minecraft:dried_kelp',
            'minecraft:kelp'
        ].forEach(item => {
            if (event.player.inventory.contains(item)) AStages.addStageToPlayer('kelp', event.player);
        });
    }

});
