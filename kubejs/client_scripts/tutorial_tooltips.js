ItemEvents.tooltip(event => {
    // Misc
    event.addAdvanced("minecraft:oak_sapling", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.oak_tree_drop_chance_crook").green());});
    event.addAdvanced("exdeorum:crook", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.crook_increases_drops").gray());});
    event.addAdvanced("exdeorum:bone_crook", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.crook_increases_drops").gray());});
    event.addAdvanced("thermal:phytogro", (item, advanced, text) => {
        text.remove(1);
        text.add(1, Text.translate("tooltip.desolate_planet.phyto_gro_description").gray());
        text.add(1, Text.translate("tooltip.desolate_planet.phyto_gro_consumption_rate").gray());
    });
    event.addAdvanced("kubejs:paste", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.paste_uses").gray());});
    event.addAdvanced(["minecraft:clay", "minecraft:clay_ball"], (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.clay_crafting").gray());});
    event.addAdvanced("minecraft:netherrack", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.netherrack_crafting").gray());});
    event.addAdvanced("minecraft:netherrack", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.netherrack_automating").gray());});
    event.addAdvanced("minecraft:end_stone", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.end_stone_crafting").gray());});
    event.addAdvanced("minecraft:end_stone", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.end_stone_automating").gray());});
    event.addAdvanced("biggerreactors:blutonium_ingot", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.blutonium_from_cyanite").gray());});
    event.addAdvanced("kubejs:controller_frame", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.controller_frame_duplication").gray()); });
    event.addAdvanced("thermal:device_nullifier", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.nullifier_trashing").gray()); });
    event.addAdvanced("sync:shell_constructor", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.shell_constructor_usage").gray()); });
    event.addAdvanced("tconstruct:dragon_scale", (item, advanced, text) => {
        text.remove(1);
        text.add(1, Text.translate("tooltip.desolate_planet.dragon_scale_warning").gray());
        text.add(2, Text.translate("tooltip.desolate_planet.dragon_scale_crafting").gray());
    });

    // PCBs
    event.addAdvanced("pneumaticcraft:plastic", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.plastic_sources").gray());});
    event.addAdvanced("pneumaticcraft:plastic", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.plastic_refining_instructions", Text.translate("tooltip.desolate_planet.quest_book_under_pressure").white()).gray()); });
    event.addAdvanced("pneumaticcraft:printed_circuit_board", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.pcb_crafting_instructions", Text.translate("tooltip.desolate_planet.quest_book_under_pressure").white()).gray()); });
    event.addAdvanced("kubejs:pcb_segment", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.pcb_segment_instructions", Text.translate("tooltip.desolate_planet.quest_book_under_pressure").white()).gray()); });
    event.addAdvanced("thermal:machine_frame", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.machine_frame_description").gray());});
    event.addAdvanced("thermal:machine_frame", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.machine_frame_crafting_instructions", Text.translate("tooltip.desolate_planet.quest_book_under_pressure").white()).gray()); });

    // ExDeorum
    event.addAdvanced("exdeorum:silk_worm", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.silk_worm_usage").gray());});
    event.addAdvanced("exdeorum:porcelain_crucible", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.crucible_usage").gray());});

    event.addAdvanced("exdeorum:string_mesh", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.string_mesh_description").gray());});
    event.addAdvanced("exdeorum:flint_mesh", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.flint_mesh_description").gray());});
    event.addAdvanced("exdeorum:iron_mesh", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.iron_mesh_description").gray());});
    event.addAdvanced("exdeorum:golden_mesh", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.golden_mesh_description").gray());});
    event.addAdvanced("exdeorum:diamond_mesh", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.diamond_mesh_description").gray());});
    event.addAdvanced("exdeorum:netherite_mesh", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.netherite_mesh_description").gray());});
    [
        "exdeorum:wooden_hammer",
        "exdeorum:stone_hammer",
        "exdeorum:golden_hammer",
        "exdeorum:iron_hammer",
        "exdeorum:diamond_hammer",
        "exdeorum:netherite_hammer"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.hammer_usage").gray());});
    });
    [
        "exdeorum:compressed_wooden_hammer",
        "exdeorum:compressed_stone_hammer",
        "exdeorum:compressed_golden_hammer",
        "exdeorum:compressed_iron_hammer",
        "exdeorum:compressed_diamond_hammer",
        "exdeorum:compressed_netherite_hammer"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.compressed_hammer_usage").gray());});
    });
    event.addAdvanced("exdeorum:mechanical_hammer", (item, advanced, text) => {
        text.add(1, Text.translate("tooltip.desolate_planet.mechanical_hammer_warning", Text.translate("tooltip.desolate_planet.warning_prefix").red()).gray());
    });

    // Seeds

    // From dirt or chest loot
    [
        "farmersdelight:cabbage_seeds",
        "farmersdelight:rice",
        "farmersdelight:tomato_seeds",
        "legumedelight:beans",
        "legumedelight:peanuts",
        "minecraft:beetroot_seeds",
        "minecraft:cocoa_beans",
        "minecraft:melon_seeds",
        "minecraft:pumpkin_seeds",
        "minecraft:wheat_seeds",
        "scarcity:carrot_seeds",
        "scarcity:onion_seeds",
        "scarcity:potato_seeds",
        "scarcity:sweet_berry_seeds"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.seeds_dirt_or_ruins").gray());
        });
    });
    event.addAdvanced("scarcity:carrot_seeds", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_carrots").gray()); });
    event.addAdvanced("scarcity:onion_seeds", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_onions").gray()); });
    event.addAdvanced("scarcity:potato_seeds", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_potatoes").gray()); });
    event.addAdvanced("scarcity:sweet_berry_seeds", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_sweet_berries").gray()); });

    // From dirt
    [
        "exdeorum:grass_seeds",
        "exdeorum:mycelium_spores",
        "scarcity:bamboo_seeds",
        "scarcity:cactus_seeds",
        "scarcity:sugar_cane_seeds"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.seeds_dirt").gray());
        });
    });
    event.addAdvanced("scarcity:bamboo_seeds", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_bamboo").gray()); });
    event.addAdvanced("scarcity:cactus_seeds", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_cactus").gray()); });
    event.addAdvanced("scarcity:sugar_cane_seeds", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_sugar_cane").gray()); });

    // From dirt or podzol
    [
        "scarcity:oak_seed",
        "scarcity:spruce_seed",
        "scarcity:birch_seed",
        "scarcity:rubberwood_seed"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.seeds_dirt_or_podzol").gray());
        });
    });
    event.addAdvanced("scarcity:oak_seed", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_oak").gray()); });
    event.addAdvanced("scarcity:spruce_seed", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_spruce").gray()); });
    event.addAdvanced("scarcity:birch_seed", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_birch").gray()); });
    event.addAdvanced("scarcity:rubberwood_seed", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_rubberwood").gray()); });

    // From podzol
    [
        "scarcity:jungle_seed",
        "scarcity:dark_oak_seed",
        "scarcity:acacia_seed",
        "scarcity:cherry_seed",
        "minecraft:mangrove_propagule"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.seeds_podzol").gray());
        });
    });
    event.addAdvanced("scarcity:jungle_seed", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_jungle").gray()); });
    event.addAdvanced("scarcity:dark_oak_seed", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_dark_oak").gray()); });
    event.addAdvanced("scarcity:acacia_seed", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_acacia").gray()); });
    event.addAdvanced("scarcity:cherry_seed", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.seeds_cherry").gray()); });


    // Sieving blocks
    event.addAdvanced("exdeorum:sieve", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.sieve_usage").gray()); });

    event.addAdvanced("exdeorum:dust", (item, advanced, text) => {
        text.add(1, Text.translate("tooltip.desolate_planet.dust_sources").gray());
        text.add(2, Text.translate("tooltip.desolate_planet.dust_sift_results").gray());
    });
    event.addAdvanced("minecraft:sand", (item, advanced, text) => {
        text.add(1, Text.translate("tooltip.desolate_planet.sand_sources").gray());
        text.add(2, Text.translate("tooltip.desolate_planet.sand_sift_results").gray());
    });
    event.addAdvanced("minecraft:gravel", (item, advanced, text) => {
        text.add(1, Text.translate("tooltip.desolate_planet.gravel_sources").gray());
        text.add(2, Text.translate("tooltip.desolate_planet.gravel_sift_results").gray());
    });
    event.addAdvanced("exdeorum:crushed_deepslate", (item, advanced, text) => {
        text.add(1, Text.translate("tooltip.desolate_planet.crushed_deepslate_sources").gray());
        text.add(2, Text.translate("tooltip.desolate_planet.crushed_deepslate_sift_results").gray());
    });

    event.addAdvanced("minecraft:red_sand", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.red_sand_sift_results").gray());});

    event.addAdvanced("minecraft:dirt", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.dirt_sift_results").gray());});
    event.addAdvanced("minecraft:moss_block", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.moss_sift_results").gray());});
    event.addAdvanced("minecraft:podzol", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.podzol_sift_results").gray());});

    event.addAdvanced("exdeorum:crushed_netherrack", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.crushed_netherrack_sift_results").gray());});
    event.addAdvanced("exdeorum:crushed_blackstone", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.crushed_blackstone_sift_results").gray());});
    event.addAdvanced("minecraft:soul_sand", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.soul_sand_sift_results").gray());});
    event.addAdvanced("exdeorum:crushed_end_stone", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.crushed_end_stone_sift_results").gray());});

    // Sieving drops
    // Very common metals
    event.addAdvanced("exdeorum:iron_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.iron_chunk_sources").gray());});

    // Common metals
    event.addAdvanced("exdeorum:copper_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.common_metal_chunk_sources").gray());});
    event.addAdvanced("exdeorum:gold_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.common_metal_chunk_sources").gray());});

    // Uncommon metals
    event.addAdvanced("exdeorum:tin_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.uncommon_metal_chunk_sources").gray());});
    event.addAdvanced("exdeorum:zinc_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.uncommon_metal_chunk_sources").gray());});
    event.addAdvanced("exdeorum:nickel_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.uncommon_metal_chunk_sources").gray());});

    // Rare metals
    event.addAdvanced("exdeorum:silver_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.rare_metal_chunk_sources").gray());});
    event.addAdvanced("exdeorum:lead_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.rare_metal_chunk_sources").gray());});

    // Very rare metals
    event.addAdvanced("exdeorum:osmium_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.very_rare_chunk_sources").gray());});
    event.addAdvanced("exdeorum:uranium_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.very_rare_chunk_sources").gray());});

    event.addAdvanced("exdeorum:cobalt_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.cobalt_sources_foundry").gray());});
    event.addAdvanced("exdeorum:cobalt_ore_chunk", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.cobalt_sources_sifting").gray());});


    // Common other ores
    event.addAdvanced("minecraft:redstone", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.common_metal_chunk_sources").gray());});

    // Uncommon other ores
    event.addAdvanced("minecraft:coal", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.coal_sources").gray());});
    event.addAdvanced("ae2:certus_quartz_crystal", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.certus_quartz_sources").gray());});
    event.addAdvanced("minecraft:quartz", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.nether_quartz_sources").gray());});

    // Rare other ores
    event.addAdvanced("minecraft:lapis_lazuli", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.very_rare_chunk_sources").gray());});
    event.addAdvanced("minecraft:diamond", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.rare_metal_chunk_sources").gray());});
    event.addAdvanced("minecraft:emerald", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.very_rare_chunk_sources").gray());});

    // Ingots
    [
        "minecraft:ancient_debris",
        "minecraft:netherite_scrap",
        "minecraft:netherite_ingot",
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.netherite_sources").gray());});
    });



    // Crashed Blocks
    [
        "kubejs:crashed_reactor_controller",
        "kubejs:crashed_reactor_frame"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.crashed_reactor_location", Text.translate("tooltip.desolate_planet.nuclear_plant_name").white()).gray());
        });
    });
    [
        "kubejs:crashed_turbine_controller",
        "kubejs:crashed_turbine_wall"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.crashed_turbine_location", Text.translate("tooltip.desolate_planet.nuclear_plant_name").white()).gray());
        });
    });
    [
        'kubejs:crashed_pressure_chamber_wall',
        'kubejs:crashed_refinery',
		'kubejs:crashed_refinery_output'
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.crashed_pneumatic_location", Text.translate("tooltip.desolate_planet.oil_rig_name").white()).gray());
        });
    });

	// AE2
    event.addAdvanced('kubejs:crashed_applied_controller', (item, advanced, text) => {
		text.add(1, Text.translate("tooltip.desolate_planet.controller_location").gray())
		text.add(2, Text.translate("tooltip.desolate_planet.controller_usage").gray())
	});
    event.addAdvanced('kubejs:controller_frame', (item, advanced, text) => {
		text.add(1, Text.translate("tooltip.desolate_planet.controller_frame_location").gray())
	});
    event.addAdvanced('ae2:controller', (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.ae2_controller_disabled").gray());});

    // Tinkers' Construct
    event.addAdvanced("tconstruct:grout", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.grout_disabled").gray());});
    event.addAdvanced("tconstruct:nether_grout", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.nether_grout_disabled").gray());});
    event.addAdvanced("tconstruct:seared_brick", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.seared_brick_sources").gray());});
    event.addAdvanced("tconstruct:scorched_brick", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.scorched_brick_sources").gray());});
    event.addAdvanced("kubejs:crumbling_seared_bricks", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.crumbling_seared_bricks_usage").gray());});
    event.addAdvanced("kubejs:crumbling_scorched_bricks", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.crumbling_scorched_bricks_usage").gray());});
    event.addAdvanced("tconstruct:blazing_blood_bucket", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.blazing_blood_crafting").gold());});

    // Food items
    [
        "minecraft:cookie",
        "minecraft:honey_bottle",
        "minecraft:sugar",
        "create:bar_of_chocolate",
        "create:chocolate_glazed_berries",
        "create:sweet_roll",
        "farmersdelight:apple_cider",
        "farmersdelight:apple_pie_slice",
        "farmersdelight:apple_pie",
        "legumedelight:baked_beans",
        "legumedelight:bean_paste",
        "legumedelight:beans_on_toast",
        "legumedelight:candied_peanuts",
        "legumedelight:peanut_butter_cup",
        "legumedelight:rice_cake",
        "thermal:syrup_bottle",
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.sugar_warning",
                Text.translate("tooltip.desolate_planet.warning_prefix").red(),
                Text.translate("effect.minecraft.weakness").darkGreen(),
                Text.translate("effect.minecraft.hunger").darkGreen()
            ).gray());
            text.add(2, Text.translate("tooltip.desolate_planet.sugar_moderate_effect").gray());
            text.add(3, Text.translate("tooltip.desolate_planet.sugar_low_safe").gray());
        });
    });

    event.addAdvanced('kubejs:zombie_jerky', (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, Text.red([Text.translate("tooltip.desolate_planet.monster_food_mostly").italic(true), Text.translate("tooltip.desolate_planet.monster_food_safe_to_eat")]));
        }
        else {
            text.add(1, Text.translate("tooltip.desolate_planet.zombie_jerky_warning").red().italic());
        }
    });
    event.addAdvanced('kubejs:monster_mash', (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, Text.red([Text.translate("tooltip.desolate_planet.monster_food_mostly").italic(true), Text.translate("tooltip.desolate_planet.monster_food_safe_to_eat")]));
        }
        else {
            text.add(1, Text.translate("tooltip.desolate_planet.monster_mash_warning").red().italic());
        }
    });
    event.addAdvanced('kubejs:bug_broth', (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, Text.red([Text.translate("tooltip.desolate_planet.monster_food_mostly").italic(true), Text.translate("tooltip.desolate_planet.monster_food_safe_to_eat")]));
        }
        else {
            text.add(1, Text.translate("tooltip.desolate_planet.bug_broth_warning").red().italic());
        }
    });
    event.addAdvanced('kubejs:enderios', (item, advanced, text) => {
        text.add(1, Text.translate("tooltip.desolate_planet.enderios_warning").gray());
    });

    // Power generation
    event.addAdvanced("industrialforegoing:pitiful_generator", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.pitiful_generator_description").gray());});
    event.addAdvanced("thermal:dynamo_compression", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.compression_dynamo_description").gray());});
    event.addAdvanced("thermal:dynamo_compression", (item, advanced, text) => { text.add(2, Text.translate("tooltip.desolate_planet.oil_refining_instructions", Text.translate("tooltip.desolate_planet.quest_book_under_pressure").white()).gray()); });

    // Zombie villager warning
    event.addAdvanced('minecraft:golden_apple', (item,advanced,text) => {text.add(1, Text.translate("tooltip.desolate_planet.zombie_villager_disabled").darkRed())})
    event.addAdvanced('minecraft:potion', (item,advanced,text) => {
        if (item.nbt != null) if (item.nbt.Potion == "minecraft:weakness") text.add(1, Text.translate("tooltip.desolate_planet.zombie_villager_disabled").darkRed())
    });
    event.addAdvanced('minecraft:splash_potion', (item,advanced,text) => {
        if (item.nbt != null) if (item.nbt.Potion == "minecraft:weakness") text.add(1, Text.translate("tooltip.desolate_planet.zombie_villager_disabled").darkRed())
    });

    // Insulation items
    // Currently non-functional due to existing tooltip handling
    [
        "kubejs:snow_hat",
        "kubejs:snow_coat",
        "kubejs:snow_pants",
        "kubejs:snow_boots"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.cold_armor_description").gray());
            text.add(2, Text.translate("tooltip.desolate_planet.cold_armor_effect").gray());
        });
    });
    [
        "kubejs:desert_cap",
        "kubejs:desert_tunic",
        "kubejs:desert_pants",
        "kubejs:desert_shoes"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.heat_armor_description").gray());
            text.add(2, Text.translate("tooltip.desolate_planet.heat_armor_effect").gray());
        });
    });
    event.addAdvanced("kubejs:stillsuit", (item, advanced, text) => {
        text.add(1, Text.translate("tooltip.desolate_planet.stillsuit_insulation").gray());
        text.add(2, Text.translate("tooltip.desolate_planet.stillsuit_moisture").gray());
    });

    // Building Gadgets
    event.addAdvanced("buildinggadgets2:gadget_building", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.building_gadget_description").gray()); });
    event.addAdvanced("buildinggadgets2:gadget_exchanging", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.exchanging_gadget_description").gray()); });
    event.addAdvanced("buildinggadgets2:gadget_copy_paste", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.copy_paste_gadget_description").gray()); });
    event.addAdvanced("buildinggadgets2:gadget_cut_paste", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.cut_paste_gadget_description").gray()); });
    event.addAdvanced("buildinggadgets2:gadget_destruction", (item, advanced, text) => { text.add(1, Text.translate("tooltip.desolate_planet.destruction_gadget_description").gray()); });

    event.addAdvanced([
        "buildinggadgets2:gadget_building",
        "buildinggadgets2:gadget_exchanging",
        "buildinggadgets2:gadget_copy_paste",
        "buildinggadgets2:gadget_cut_paste",
        "buildinggadgets2:gadget_destruction"
    ], (item, advanced, text) => {
        text.remove(2);
        if (!event.shift) {
            text.add(2, Text.translate("tooltip.desolate_planet.gadget_config",
                Text.keybind("key.buildinggadgets2.settings_menu").white(),
                Text.translate("tooltip.desolate_planet.key_shift").white()
            ).gray());
        }
    });

    // Disabled tool tooltips
    const tools = [
        "minecraft:wooden_sword",
        "minecraft:wooden_pickaxe",
        "minecraft:wooden_shovel",
        "minecraft:wooden_axe",
        "minecraft:wooden_hoe",
    
        "minecraft:stone_sword",
        "minecraft:stone_pickaxe",
        "minecraft:stone_shovel",
        "minecraft:stone_axe",
        "minecraft:stone_hoe",
    
        "minecraft:iron_sword",
        "minecraft:iron_pickaxe",
        "minecraft:iron_shovel",
        "minecraft:iron_axe",
        "minecraft:iron_hoe",
    
        "minecraft:golden_sword",
        "minecraft:golden_pickaxe",
        "minecraft:golden_shovel",
        "minecraft:golden_axe",
        "minecraft:golden_hoe",
    
        "minecraft:diamond_sword",
        "minecraft:diamond_pickaxe",
        "minecraft:diamond_shovel",
        "minecraft:diamond_axe",
        "minecraft:diamond_hoe",
    
        "minecraft:diamond_helmet",
        "minecraft:diamond_chestplate",
        "minecraft:diamond_leggings",
        "minecraft:diamond_boots",

        "minecraft:netherite_sword",
        "minecraft:netherite_pickaxe",
        "minecraft:netherite_shovel",
        "minecraft:netherite_axe",
        "minecraft:netherite_hoe",
        "minecraft:netherite_helmet",
        "minecraft:netherite_chestplate",
        "minecraft:netherite_leggings",
        "minecraft:netherite_boots",
    
        "minecraft:trident",
        "minecraft:shield",
    
        "ae2:nether_quartz_sword",
        "ae2:nether_quartz_pickaxe",
        "ae2:nether_quartz_shovel",
        "ae2:nether_quartz_axe",
        "ae2:nether_quartz_hoe",
    
        "ae2:certus_quartz_sword",
        "ae2:certus_quartz_pickaxe",
        "ae2:certus_quartz_shovel",
        "ae2:certus_quartz_axe",
        "ae2:certus_quartz_hoe",
    
        "ae2:fluix_sword",
        "ae2:fluix_pickaxe",
        "ae2:fluix_shovel",
        "ae2:fluix_axe",
        "ae2:fluix_hoe"
    ];

    tools.forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.translate("tooltip.desolate_planet.vanilla_tool_disabled").darkRed());
        });
    });

    // Bug warnings:
    [
        "enderio:fluid_conduit",
        "enderio:pressurized_fluid_conduit",
        "enderio:ender_fluid_conduit"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            // Remove from quest info when fixed
            text.add(1, Text.translate("tooltip.desolate_planet.enderio_water_bug_part1", Text.translate("tooltip.desolate_planet.warning_prefix").red(), Text.translate("block.minecraft.water").gray().italic(true)).gray());
            text.add(2, Text.translate("tooltip.desolate_planet.enderio_water_bug_part2", Text.translate("block.minecraft.water").gray().italic(true)).gray());
        });
    });
});