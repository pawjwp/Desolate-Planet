ItemEvents.tooltip(event => {
    // Misc
    event.addAdvanced("minecraft:oak_sapling", (item, advanced, text) => { text.add(1, Text.green("Oak trees have bonus drop chances when using a crook."));});
    event.addAdvanced("exdeorum:crook", (item, advanced, text) => { text.add(1, Text.gray("Can be used to break leaves to increase sapling drops and get silk worms."));});
    event.addAdvanced("exdeorum:bone_crook", (item, advanced, text) => { text.add(1, Text.gray("Can be used to break leaves to increase sapling drops and get silk worms."));});
    event.addAdvanced("thermal:phytogro", (item, advanced, text) => { text.add(1, Text.gold("Can be used like bone meal."));});
    event.addAdvanced("kubejs:paste", (item, advanced, text) => { text.add(1, Text.gray("Usable as a slimeball substitute in many recipes."));});
    event.addAdvanced("minecraft:netherrack", (item, advanced, text) => { text.add(1, Text.gray("Can be made in small quantities by placing redstone dust in a barrel of lava."));});
    event.addAdvanced("minecraft:netherrack", (item, advanced, text) => { text.add(2, Text.gray("Can be automated with an extruder by casting liquid redstone with lava."));});
    event.addAdvanced("minecraft:end_stone", (item, advanced, text) => { text.add(1, Text.gray("Can be in made small quantities by placing glowstone dust in a barrel of lava."));});
    event.addAdvanced("minecraft:end_stone", (item, advanced, text) => { text.add(2, Text.gray("Can be automated with an extruder by casting liquid ender with lava."));});
    event.addAdvanced("biggerreactors:blutonium_ingot", (item, advanced, text) => { text.add(1, Text.gray("Processed from Cyanite in a Cyanite Reprocessor."));});
    event.addAdvanced("sync:shell_constructor", (item, advanced, text) => { text.add(1, Text.gray("Place next to a power source and right-click to provide a DNA sample.")); });

    // PCBs
    event.addAdvanced("pneumaticcraft:plastic", (item, advanced, text) => { text.add(1, Text.gray("Made by refining oil or melting plastic scraps from cities."));});
    event.addAdvanced("pneumaticcraft:plastic", (item, advanced, text) => { text.add(2, [Text.gray("Follow the quests in "), Text.white("Under Pressure"), Text.gray(" for plastic refining instructions.")]); });
    event.addAdvanced("pneumaticcraft:printed_circuit_board", (item, advanced, text) => { text.add(1, [Text.gray("Follow the quests in "), Text.white("Under Pressure"), Text.gray(" for crafting instructions.")]); });
    event.addAdvanced("kubejs:pcb_segment", (item, advanced, text) => { text.add(1, [Text.gray("Crafted from a PCB, follow the quests in "), Text.white("Under Pressure"), Text.gray(" for PCB crafting instructions.")]); });
    event.addAdvanced("thermal:machine_frame", (item, advanced, text) => { text.add(1, Text.gray("A unified base material for machine crafting across multiple mods."));});
    event.addAdvanced("thermal:machine_frame", (item, advanced, text) => { text.add(2, [Text.gray("Requires a PCB, follow the quests in "), Text.white("Under Pressure"), Text.gray(" for PCB crafting instructions.")]); });

    // ExDeorum
    event.addAdvanced("exdeorum:silk_worm", (item, advanced, text) => { text.add(1, Text.gray("Right-click leaves to infest. Fully infested leaf blocks drop string, more with a crook."));});
    event.addAdvanced("exdeorum:porcelain_crucible", (item, advanced, text) => { text.add(1, Text.gray("Usable as a mini-smeltery. Can melt down ores."));});

    event.addAdvanced("exdeorum:string_mesh", (item, advanced, text) => { text.add(1, Text.gray("The most basic mesh type. Upgrade with flint for better yields."));});
    event.addAdvanced("exdeorum:flint_mesh", (item, advanced, text) => { text.add(1, Text.gray("An upgrade to String Mesh. Provides higher yields and higher tier drops."));});
    event.addAdvanced("exdeorum:iron_mesh", (item, advanced, text) => { text.add(1, Text.gray("An upgrade to Flint Mesh. Provides higher yields and higher tier drops."));});
    event.addAdvanced("exdeorum:golden_mesh", (item, advanced, text) => { text.add(1, Text.gray("An upgrade to Iron Mesh. Provides higher yields and higher tier drops."));});
    event.addAdvanced("exdeorum:diamond_mesh", (item, advanced, text) => { text.add(1, Text.gray("An upgrade to Golden Mesh. Provides higher yields and higher tier drops."));});
    event.addAdvanced("exdeorum:netherite_mesh", (item, advanced, text) => { text.add(1, Text.gray("An upgrade to Diamond Mesh. Provides the highest yields."));});
    [
        "exdeorum:wooden_hammer",
        "exdeorum:stone_hammer",
        "exdeorum:golden_hammer",
        "exdeorum:iron_hammer",
        "exdeorum:diamond_hammer",
        "exdeorum:netherite_hammer"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.gray("Can be used to smash stone into gravel, sand, and then dust."));});
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
            text.add(1, Text.gray("Can be used to smash compressed stone into gravel, sand, and then dust."));});
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
            text.add(1, Text.gray("From sifting dirt or from chests in the ruins"));
        });
    });
    event.addAdvanced("scarcity:carrot_seeds", (item, advanced, text) => { text.add(2, Text.gray("Turns into carrots when planted on farmland")); });
    event.addAdvanced("scarcity:onion_seeds", (item, advanced, text) => { text.add(2, Text.gray("Turns into onions when planted on farmland")); });
    event.addAdvanced("scarcity:potato_seeds", (item, advanced, text) => { text.add(2, Text.gray("Turns into potatoes when planted on farmland")); });
    event.addAdvanced("scarcity:sweet_berry_seeds", (item, advanced, text) => { text.add(2, Text.gray("Turns into sweet berries when planted on farmland")); });

    // From dirt
    [
        "exdeorum:grass_seeds",
        "exdeorum:mycelium_spores",
        "scarcity:bamboo_seeds",
        "scarcity:cactus_seeds",
        "scarcity:sugar_cane_seeds"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.gray("From sifting dirt"));
        });
    });
    event.addAdvanced("scarcity:bamboo_seeds", (item, advanced, text) => { text.add(2, Text.gray("Turns into bamboo when planted on dirt or grass")); });
    event.addAdvanced("scarcity:cactus_seeds", (item, advanced, text) => { text.add(2, Text.gray("Turns into cactus when planted on sand")); });
    event.addAdvanced("scarcity:sugar_cane_seeds", (item, advanced, text) => { text.add(2, Text.gray("Turns into sugar cane when planted on dirt or sand")); });
    
    // From dirt or podzol
    [
        "scarcity:oak_seed",
        "scarcity:spruce_seed",
        "scarcity:birch_seed",
        "scarcity:rubberwood_seed"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.gray("From sifting dirt or podzol"));
        });
    });
    event.addAdvanced("scarcity:oak_seed", (item, advanced, text) => { text.add(2, Text.gray("Turns into an oak sapling when planted on dirt or grass")); });
    event.addAdvanced("scarcity:spruce_seed", (item, advanced, text) => { text.add(2, Text.gray("Turns into a spruce sapling when planted on dirt or grass")); });
    event.addAdvanced("scarcity:birch_seed", (item, advanced, text) => { text.add(2, Text.gray("Turns into a birch sapling when planted on dirt or grass")); });
    event.addAdvanced("scarcity:rubberwood_seed", (item, advanced, text) => { text.add(2, Text.gray("Turns into a rubberwood sapling when planted on dirt or grass")); });

    // From podzol
    [
        "scarcity:jungle_seed",
        "scarcity:dark_oak_seed",
        "scarcity:acacia_seed",
        "scarcity:cherry_seed",
        "minecraft:mangrove_propagule"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.gray("From sifting podzol"));
        });
    });
    event.addAdvanced("scarcity:jungle_seed", (item, advanced, text) => { text.add(2, Text.gray("Turns into a jungle sapling when planted on dirt or grass")); });
    event.addAdvanced("scarcity:dark_oak_seed", (item, advanced, text) => { text.add(2, Text.gray("Turns into a dark oak sapling when planted on dirt or grass")); });
    event.addAdvanced("scarcity:acacia_seed", (item, advanced, text) => { text.add(2, Text.gray("Turns into an acacia sapling when planted on dirt or grass")); });
    event.addAdvanced("scarcity:cherry_seed", (item, advanced, text) => { text.add(2, Text.gray("Turns into a cherry sapling when planted on dirt or grass")); });


    // Sieving blocks
    event.addAdvanced("exdeorum:dust", (item, advanced, text) => {
        text.add(1, Text.gray("Found across the surface or made from crushing sand"));
        text.add(2, Text.gray("Sifts into common ore chunks, plus redstone, bone meal, and pebbles"));
    });
    event.addAdvanced("minecraft:sand", (item, advanced, text) => {
        text.add(1, Text.gray("Found underground or made from crushing gravel"));
        text.add(2, Text.gray("Sifts into uncommon ore chunks, plus quartz and certus quartz"));
    });
    event.addAdvanced("minecraft:gravel", (item, advanced, text) => {
        text.add(1, Text.gray("Found underground or made from crushing cobblestone"));
        text.add(2, Text.gray("Sifts into common, uncommon, and rare ore chunks, plus flint, coal, redstone, and diamonds"));
    });
    event.addAdvanced("exdeorum:crushed_deepslate", (item, advanced, text) => {
        text.add(1, Text.gray("Found deep underground or made from crushing deepslate"));
        text.add(2, Text.gray("Sifts into common, rare, and very rare ore chunks, plus redstone, lapis, and gemstones"));
    });
    
    event.addAdvanced("minecraft:red_sand", (item, advanced, text) => { text.add(1, Text.gray("Sifts into common ore chunks, plus redstone and quartz"));});

    event.addAdvanced("minecraft:dirt", (item, advanced, text) => { text.add(1, Text.gray("Sifts into pebbles and various seeds"));});
    event.addAdvanced("minecraft:moss_block", (item, advanced, text) => { text.add(1, Text.gray("Sifts into various flowers"));});
    event.addAdvanced("minecraft:podzol", (item, advanced, text) => { text.add(1, Text.gray("Sifts into slime and various saplings"));});

    event.addAdvanced("exdeorum:crushed_netherrack", (item, advanced, text) => { text.add(1, Text.gray("Sifts into nether ingredients, with higher chances of crimson/warped items"));});
    event.addAdvanced("exdeorum:crushed_blackstone", (item, advanced, text) => { text.add(1, Text.gray("Sifts into nether ingredients, with higher chances of gold or cobalt"));});
    event.addAdvanced("minecraft:soul_sand", (item, advanced, text) => { text.add(1, Text.gray("Sifts into nether ingredients, with higher chances of quartz"));});
    event.addAdvanced("exdeorum:crushed_end_stone", (item, advanced, text) => { text.add(1, Text.gray("Sifts into end ingredients"));});

    // Sieving drops
    // Very common metals
    event.addAdvanced("exdeorum:iron_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("From sifting dust, sand, gravel, or crushed deepslate"));});

    // Common metals
    event.addAdvanced("exdeorum:copper_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("From sifting dust, gravel, or crushed deepslate"));});
    event.addAdvanced("exdeorum:gold_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("From sifting dust, gravel, or crushed deepslate"));});

    // Uncommon metals
    event.addAdvanced("exdeorum:tin_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("From sifting sand or gravel"));});
    event.addAdvanced("exdeorum:zinc_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("From sifting sand or gravel"));});
    event.addAdvanced("exdeorum:nickel_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("From sifting sand or gravel"));});

    // Rare metals
    event.addAdvanced("exdeorum:silver_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("From sifting gravel or crushed deepslate"));});
    event.addAdvanced("exdeorum:lead_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("From sifting gravel or crushed deepslate"));});

    // Very rare metals
    event.addAdvanced("exdeorum:osmium_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("From sifting crushed deepslate"));});
    event.addAdvanced("exdeorum:uranium_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("From sifting crushed deepslate"));});

    event.addAdvanced("exdeorum:cobalt_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("Cobalt can be found plentifully in the Foundry structure"));});
    event.addAdvanced("exdeorum:cobalt_ore_chunk", (item, advanced, text) => { text.add(1, Text.gray("Also found from sifting nether blocks, especially crushed blackstone"));});


    // Common other ores
    event.addAdvanced("minecraft:redstone", (item, advanced, text) => { text.add(1, Text.gray("From sifting dust, gravel, or crushed deepslate"));});

    // Uncommon other ores
    event.addAdvanced("minecraft:coal", (item, advanced, text) => { text.add(1, Text.gray("From sifting gravel"));});
    event.addAdvanced("ae2:certus_quartz_crystal", (item, advanced, text) => { text.add(1, Text.gray("From sifting sand"));});
    event.addAdvanced("minecraft:quartz", (item, advanced, text) => { text.add(1, Text.gray("From sifting sand or nether blocks"));});

    // Rare other ores
    event.addAdvanced("minecraft:lapis_lazuli", (item, advanced, text) => { text.add(1, Text.gray("From sifting crushed deepslate"));});
    event.addAdvanced("minecraft:diamond", (item, advanced, text) => { text.add(1, Text.gray("From sifting gravel or crushed deepslate"));});
    event.addAdvanced("minecraft:emerald", (item, advanced, text) => { text.add(1, Text.gray("From sifting crushed deepslate"));});

    // Ingots
    [
        "minecraft:ancient_debris",
        "minecraft:netherite_scrap",
        "minecraft:netherite_ingot",
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.gray("Debris and netherite can be found in the Foundry structure"));});
    });
    


    // Crashed Blocks
    [
        "kubejs:crashed_reactor_controller",
        "kubejs:crashed_reactor_frame"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, [Text.gray("Found in the reactor room of a "), Text.white("Nuclear Plant")]);
        });
    });
    [
        "kubejs:crashed_turbine_controller",
        "kubejs:crashed_turbine_wall"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, [Text.gray("Found in the turbine room of a "), Text.white("Nuclear Plant")]);
        });
    });
    [
        'kubejs:crashed_pressure_chamber_wall',
        'kubejs:crashed_refinery',
		'kubejs:crashed_refinery_output'
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, [Text.gray("Found inside of an "), Text.white("Oil Rig")]);
        });
    });

	// AE2
    event.addAdvanced('kubejs:crashed_applied_controller', (item, advanced, text) => {
		text.add(1, Text.gray("Found inside a structure"))
		text.add(2, Text.gray("Make a frame out of it using inscriber to make the controller."))
	});
    event.addAdvanced('kubejs:controller_frame', (item, advanced, text) => {
		text.add(1, Text.gray("Find crashed Controller in a"))
		text.add(2, Text.gray("structure to make this."))
	});
    event.addAdvanced('ae2:controller', (item, advanced, text) => { text.add(1, Text.gray("Crafting recipe disabled. Find crashed Controller in a structure."));});

    // Tinkers' Construct
    event.addAdvanced("tconstruct:grout", (item, advanced, text) => { text.add(1, Text.gray("Crafting recipe disabled. Find crumbling seared bricks in cities."));});
    event.addAdvanced("tconstruct:nether_grout", (item, advanced, text) => { text.add(1, Text.gray("Crafting recipe disabled. Find crumbling scorched bricks the foundry structure."));});
    event.addAdvanced("tconstruct:seared_brick", (item, advanced, text) => { text.add(1, Text.gray("Find crumbling seared bricks in cities."));});
    event.addAdvanced("tconstruct:scorched_brick", (item, advanced, text) => { text.add(1, Text.gray("Find crumbling scorched bricks in the foundry structure."));});
    event.addAdvanced("kubejs:crumbling_seared_bricks", (item, advanced, text) => { text.add(1, Text.gray("Can be crushed into seared bricks with a hammer."));});
    event.addAdvanced("kubejs:crumbling_scorched_bricks", (item, advanced, text) => { text.add(1, Text.gray("Can be crushed into scorched bricks with a hammer."));});
    event.addAdvanced("tconstruct:blazing_blood_bucket", (item, advanced, text) => { text.add(1, Text.gold("Craft by melting down blaze powder (or the blazes themselves)."));});

    // Food items
    event.addAdvanced('kubejs:zombie_jerky', (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, Text.red([Text.of("Mostly").italic(true), Text.of(" safe to eat.")]));
        }
        else {
            text.add(2, Text.red("Has a chance to deal slight damage upon eating.").italic());
        }
    });
    event.addAdvanced('kubejs:monster_mash', (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, Text.red([Text.of("Mostly").italic(true), Text.of(" safe to eat.")]));
        }
        else {
            text.add(2, Text.red("Has a small chance to deal slight damage upon eating.").italic());
        }
    });
    event.addAdvanced('kubejs:bug_broth', (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, Text.red([Text.of("Mostly").italic(true), Text.of(" safe to eat.")]));
        }
        else {
            text.add(2, Text.red("Has a very small chance to deal slight damage upon eating.").italic());
        }
    });

    // Power generation
    event.addAdvanced("industrialforegoing:pitiful_generator", (item, advanced, text) => { text.add(1, Text.gray("A cheap but inefficient power generator."));});
    event.addAdvanced("thermal:dynamo_compression", (item, advanced, text) => { text.add(1, Text.gray("A reliable and efficient power generator."));});
    event.addAdvanced("thermal:dynamo_compression", (item, advanced, text) => { text.add(2, [Text.gray("Follow the quests in "), Text.white("Under Pressure"), Text.gray(" for oil refining instructions.")]); });

    // Zombie villager warning
    event.addAdvanced('minecraft:golden_apple', (item,advanced,text) => {text.add(1, Text.darkRed("Warning: zombie villager conversion is disabled"))})
    event.addAdvanced('minecraft:potion', (item,advanced,text) => {
        if (item.nbt != null) if (item.nbt.Potion == "minecraft:weakness") text.add(1, Text.darkRed("Warning: zombie villager conversion is disabled"))
    });
    event.addAdvanced('minecraft:splash_potion', (item,advanced,text) => {
        if (item.nbt != null) if (item.nbt.Potion == "minecraft:weakness") text.add(1, Text.darkRed("Warning: zombie villager conversion is disabled"))
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
            text.add(1, Text.gray("Warm clothing that provides protection from the freezing cold."));
            text.add(2, Text.gray("Slows how fast you freeze."));
        });
    });
    [
        "kubejs:desert_cap",
        "kubejs:desert_tunic",
        "kubejs:desert_pants",
        "kubejs:desert_shoes"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            text.add(1, Text.gray("Light and breathable clothing that provides protection from the blazing heat."));
            text.add(2, Text.gray("Slows how fast you overheat."));
        });
    });
    event.addAdvanced("kubejs:stillsuit", (item, advanced, text) => {
        text.add(1, Text.gray("Significantly insulates you from extreme temperatures."));
        text.add(2, Text.gray("Recycles moisture to reduce your water use."));
    });

    // Bug warnings:
    
    event.addAdvanced("pneumaticcraft:heat_sink", (item, advanced, text) => {
        // Remove from quest info when fixed
        text.add(1, [Text.red("Warning: "), Text.gray("Due to a bug with PneumaticCraft, your game may crash if you take damage from a heat sink while wearing Tinkers Construct armor.")]);
        text.add(2, Text.gray("We recommend placing your heat sinks in a place where you aren't likely to accidentally run into them."));
    });

    [
        "enderio:fluid_conduit",
        "enderio:pressurized_fluid_conduit",
        "enderio:ender_fluid_conduit"
    ].forEach(tool => {
        event.addAdvanced(tool, (item, advanced, text) => {
            // Remove from quest info when fixed
            text.add(1, [Text.red("Warning: "), Text.gray("Due to a bug with EnderIO and Thirst, most sources of water are unable to be transferred with fluid conduits.")]);
            text.add(2, [Text.gray("Other liquids will work, but we recommend using other modded transfer methods for moving "), Text.gray("water").italic(true), Text.gray(".")]);
        });
    });
});