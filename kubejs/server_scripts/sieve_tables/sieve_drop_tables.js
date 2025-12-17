ServerEvents.recipes(event => {

    const mesh_types = [
        'exdeorum:string_mesh',
        'exdeorum:flint_mesh',
        'exdeorum:iron_mesh',
        'exdeorum:golden_mesh',
        'exdeorum:diamond_mesh',
        'exdeorum:netherite_mesh'
    ];

    const addRecipe = (sieve_type, input_item, mesh_type, output_item, roll_count, drop_chance) => {
        if (drop_chance <= 0) return;                     // skip empty drop chances

        // If drop chance is over 100%, split into multiple rolls of a lesser drop chance
        const divisor = Math.ceil(drop_chance / 100);   // Determine divisor by rounding up to the nearest 100%
        const adjusted_rolls = roll_count * divisor;            // Multiply rolls by divisor
        const adjusted_chance = (drop_chance / divisor) / 100;  // Divide chance by divisor

        event.custom({
            type: sieve_type,
            ingredient: { item: input_item },
            mesh: mesh_type,
            result: output_item,
            result_amount: {
                type: 'minecraft:binomial',
                n: adjusted_rolls,
                p: adjusted_chance
            }
        });
    };

    const registerSieveTable = (sieve_input, sieve_input_compressed, drop_chances_table) => {
        drop_chances_table
            .trim()
            .split(/\r?\n/)                              // split into rows
            .forEach(row => {
                if (!row.trim()) return;                  // skip blank lines

                // Split by commas or tabs and trip whitespace
                const cols = row.split(/[,\t]/).map(s => s.trim()).filter(Boolean);

                const outputItem = cols.shift();          // first column is the output item
                cols.forEach((chanceStr, i) => {
                    const drop_chance = parseFloat(chanceStr);
                    const mesh_type = mesh_types[i];

                    addRecipe('exdeorum:sieve', sieve_input, mesh_type, outputItem, 1, drop_chance);

                    if (sieve_input_compressed) {
                        addRecipe('exdeorum:compressed_sieve', sieve_input_compressed, mesh_type, outputItem, 9, drop_chance);
                    }
                });
            });
    };

    registerSieveTable(
        'exdeorum:crushed_deepslate',
        'exdeorum:compressed_crushed_deepslate',
        `
            exdeorum:iron_ore_chunk	7.5	30	36	42	48	54
            exdeorum:gold_ore_chunk	4.5	18	21.6	25.2	28.8	32.4
            exdeorum:tuff_pebble	18	21.6	25.2	28.8	32.4	36
            exdeorum:osmium_ore_chunk	3	12	14.4	16.8	19.2	21.6
            exdeorum:granite_pebble	10	12	14	16	18	20
            exdeorum:diorite_pebble	10	12	14	16	18	20
            exdeorum:andesite_pebble	10	12	14	16	18	20
            exdeorum:zinc_ore_chunk	0	2.5	10	12	14	16
            minecraft:redstone	2	8	9.6	11.2	12.8	14.4
            exdeorum:lead_ore_chunk	0	2.3	9	10.8	12.6	14.4
            minecraft:lapis_lazuli	1.9	7.5	9	10.5	12	13.5
            exdeorum:silver_ore_chunk	0	1.9	7.5	9	10.5	12
            exdeorum:copper_ore_chunk	1.3	5	6	7	8	9
            exdeorum:tin_ore_chunk	1.3	5	6	7	8	9
            minecraft:amethyst_shard	0	1	4	4.8	5.6	6.4
            exdeorum:nickel_ore_chunk	0	0.9	3.5	4.2	4.9	5.6
            minecraft:coal	2.5	3	3.5	4	4.5	5
            minecraft:diamond	0	0.8	3	3.6	4.2	4.8
            ae2:certus_quartz_crystal	0.6	2.5	3	3.5	4	4.5
            thermal:apatite	0.6	2.5	3	3.5	4	4.5
            thermal:cinnabar	0.5	2	2.4	2.8	3.2	3.6
            exdeorum:uranium_ore_chunk	0	0	0	0.8	3	3.6
            exdeorum:calcite_pebble	2	2.4	2.8	3.2	3.6	4
            ae2:charged_certus_quartz_crystal	0	0.1	0.5	0.6	0.7	0.8
        `
    );

    registerSieveTable(
        'minecraft:gravel',
        'exdeorum:compressed_gravel',
        `
            exdeorum:iron_ore_chunk	7.5	30	36	42	48	54
            minecraft:coal	20	24	28	32	36	40
            minecraft:flint	18	21.6	25.2	28.8	32.4	36
            exdeorum:copper_ore_chunk	5	20	24	28	32	36
            exdeorum:osmium_ore_chunk	4	16	19.2	22.4	25.6	28.8
            exdeorum:deepslate_pebble	10	12	14	16	18	20
            exdeorum:stone_pebble	7	8.4	9.8	11.2	12.6	14
            exdeorum:zinc_ore_chunk	0	2	8	9.6	11.2	12.8
            exdeorum:tin_ore_chunk	1.7	6.7	8	9.3	10.7	12
            exdeorum:nickel_ore_chunk	0	1.5	6	7.2	8.4	9.6
            exdeorum:gold_ore_chunk	1.4	5.5	6.6	7.7	8.8	9.9
            minecraft:redstone	1.3	5	6	7	8	9
            minecraft:lapis_lazuli	1.1	4.5	5.4	6.3	7.2	8.1
            exdeorum:lead_ore_chunk	0	0.9	3.5	4.2	4.9	5.6
            exdeorum:silver_ore_chunk	0	0.8	3	3.6	4.2	4.8
            ae2:certus_quartz_crystal	0.6	2.5	3	3.5	4	4.5
            minecraft:emerald	0	0.5	2	2.4	2.8	3.2
            minecraft:diamond	0	0.4	1.5	1.8	2.1	2.4
            exdeorum:uranium_ore_chunk	0	0	0	0.4	1.5	1.8
            minecraft:amethyst_shard	0	0.3	1	1.2	1.4	1.6
        `
    );

    registerSieveTable(
        'minecraft:sand',
        'exdeorum:compressed_sand',
        `
            exdeorum:iron_ore_chunk	6.3	25	30	35	40	45
            exdeorum:osmium_ore_chunk	3	12	14.4	16.8	19.2	21.6
            exdeorum:copper_ore_chunk	2.5	10	12	14	16	18
            exdeorum:calcite_pebble	8	9.6	11.2	12.8	14.4	16
            ae2:certus_quartz_crystal	2	8	9.6	11.2	12.8	14.4
            exdeorum:gold_ore_chunk	1.4	5.5	6.6	7.7	8.8	9.9
            exdeorum:zinc_ore_chunk	0	1.5	6	7.2	8.4	9.6
            exdeorum:tin_ore_chunk	1.3	5	6	7	8	9
            exdeorum:nickel_ore_chunk	0	1	4	4.8	5.6	6.4
            exdeorum:lead_ore_chunk	0	0.8	3	3.6	4.2	4.8
            ae2:charged_certus_quartz_crystal	0	0.8	3	3.6	4.2	4.8
            thermal:sulfur	2	2.4	2.8	3.2	3.6	4
            thermal:niter	2	2.4	2.8	3.2	3.6	4
            exdeorum:silver_ore_chunk	0	0.5	2	2.4	2.8	3.2
            minecraft:redstone	0.5	2	2.4	2.8	3.2	3.6
            minecraft:lapis_lazuli	0.4	1.5	1.8	2.1	2.4	2.7
            exdeorum:uranium_ore_chunk	0	0	0	0.3	1	1.2
            minecraft:diamond	0	0.1	0.5	0.6	0.7	0.8
        `
    );

    registerSieveTable(
        'minecraft:red_sand',
        'exdeorum:compressed_red_sand',
        `
            exdeorum:iron_ore_chunk	6.3	25	30	35	40	45
            exdeorum:gold_ore_chunk	6.3	25	30	35	40	45
            exdeorum:copper_ore_chunk	5	20	24	28	32	36
            minecraft:redstone	3	12	14.4	16.8	19.2	21.6
            exdeorum:osmium_ore_chunk	1.5	6	7.2	8.4	9.6	10.8
            ae2:certus_quartz_crystal	1	4	4.8	5.6	6.4	7.2
            exdeorum:zinc_ore_chunk	0	0.8	3	3.6	4.2	4.8
            exdeorum:tin_ore_chunk	0.6	2.5	3	3.5	4	4.5
            exdeorum:nickel_ore_chunk	0	0.5	2	2.4	2.8	3.2
            exdeorum:lead_ore_chunk	0	0.4	1.5	1.8	2.1	2.4
            ae2:charged_certus_quartz_crystal	0	0.4	1.5	1.8	2.1	2.4
            thermal:sulfur	1	1.2	1.4	1.6	1.8	2
            thermal:niter	1	1.2	1.4	1.6	1.8	2
            exdeorum:silver_ore_chunk	0	0.3	1	1.2	1.4	1.6
            exdeorum:uranium_ore_chunk	0	0	0	0.1	0.5	0.6
        `
    );

    registerSieveTable(
        'exdeorum:dust',
        'exdeorum:compressed_dust',
        `
            minecraft:bone_meal	18	21.6	25.2	28.8	32.4	36
            exdeorum:stone_pebble	15	18	21	24	27	30
            exdeorum:iron_ore_chunk	3.8	15	18	21	24	27
            mekanism:salt	12	14.4	16.8	19.2	21.6	24
            minecraft:redstone	3	12	14.4	16.8	19.2	21.6
            minecraft:gunpowder	2.3	9	10.8	12.6	14.4	16.2
            exdeorum:copper_ore_chunk	1.8	7	8.4	9.8	11.2	12.6
            ae2:certus_quartz_dust	1.8	7	8.4	9.8	11.2	12.6
            exdeorum:osmium_ore_chunk	1	4	4.8	5.6	6.4	7.2
            exdeorum:zinc_ore_chunk	0	1	4	4.8	5.6	6.4
            minecraft:glowstone_dust	0.9	3.5	4.2	4.9	5.6	6.3
            exdeorum:tin_ore_chunk	0.8	3	3.6	4.2	4.8	5.4
            exdeorum:nickel_ore_chunk	0	0.8	3	3.6	4.2	4.8
            minecraft:blaze_powder	0.6	2.5	3	3.5	4	4.5
            exdeorum:gold_ore_chunk	0.5	2	2.4	2.8	3.2	3.6
            exdeorum:lead_ore_chunk	0	0.4	1.5	1.8	2.1	2.4
            exdeorum:silver_ore_chunk	0	0.4	1.5	1.8	2.1	2.4
            ae2:sky_dust	0	0	0	0.4	1.5	1.8
            thermal:sulfur	0.5	0.6	0.7	0.8	0.9	1
            thermal:niter	0.5	0.6	0.7	0.8	0.9	1
            minecraft:diamond	0	0.1	0.5	0.6	0.7	0.8
            exdeorum:uranium_ore_chunk	0	0	0	0.1	0.5	0.6
        `
    );

    registerSieveTable(
        'minecraft:dirt',
        'exdeorum:compressed_dirt',
        `
            exdeorum:stone_pebble	180	216	252	288	324	360
            exdeorum:grass_seeds	8	9.6	11.2	12.8	14.4	16
            minecraft:wheat_seeds	5	6	7	8	9	10
            farmersdelight:rice	5	6	7	8	9	10
            legumedelight:beans	4	4.8	5.6	6.4	7.2	8
            legumedelight:peanuts	4	4.8	5.6	6.4	7.2	8
            minecraft:sugar_cane	4	4.8	5.6	6.4	7.2	8
            minecraft:oak_sapling	3	3.6	4.2	4.8	5.4	6
            minecraft:potato	2.5	3	3.5	4	4.5	5
            farmersdelight:tomato_seeds	2	2.4	2.8	3.2	3.6	4
            thermal:rubberwood_sapling	2	2.4	2.8	3.2	3.6	4
            minecraft:carrot	1.5	1.8	2.1	2.4	2.7	3
            farmersdelight:onion	1.5	1.8	2.1	2.4	2.7	3
            exdeorum:mycelium_spores	0.3	1	1.2	1.4	1.6	1.8
            minecraft:bamboo	1	1.2	1.4	1.6	1.8	2
            minecraft:beetroot_seeds	1	1.2	1.4	1.6	1.8	2
            minecraft:birch_sapling	1	1.2	1.4	1.6	1.8	2
            minecraft:cactus	1	1.2	1.4	1.6	1.8	2
            minecraft:melon_seeds	1	1.2	1.4	1.6	1.8	2
            minecraft:spruce_sapling	1	1.2	1.4	1.6	1.8	2
            minecraft:sweet_berries	1	1.2	1.4	1.6	1.8	2
            farmersdelight:cabbage_seeds	1	1.2	1.4	1.6	1.8	2
            minecraft:dark_oak_sapling	0.5	0.6	0.7	0.8	0.9	1
            minecraft:acacia_sapling	0.3	0.3	0.4	0.4	0.5	0.5
            minecraft:jungle_sapling	0.3	0.3	0.4	0.4	0.5	0.5
        `
        /*
            Potential additions:
                culturaldelights:cucumber_seeds	1	1.2	1.4	1.6	1.8	2
                culturaldelights:corn_kernels	1	1.2	1.4	1.6	1.8	2
                culturaldelights:eggplant_seeds	1	1.2	1.4	1.6	1.8	2
                culturaldelights:avocado_pit	1	1.2	1.4	1.6	1.8	2
                vegandelight:soybean	1	1.2	1.4	1.6	1.8	2
        */
    );

    registerSieveTable(
        'minecraft:moss_block',
        null,
        `
            minecraft:dandelion	5	6	7	8	9	10
            minecraft:poppy	5	6	7	8	9	10
            minecraft:cornflower	4	4.8	5.6	6.4	7.2	8
            minecraft:rose_bush	0.8	3	3.6	4.2	4.8	5.4
            minecraft:sunflower	0.8	3	3.6	4.2	4.8	5.4
            minecraft:lilac	0.5	2	2.4	2.8	3.2	3.6
            minecraft:peony	0.5	2	2.4	2.8	3.2	3.6
            minecraft:allium	0.3	1	1.2	1.4	1.6	1.8
            minecraft:azure_bluet	0.3	1	1.2	1.4	1.6	1.8
            minecraft:blue_orchid	0.3	1	1.2	1.4	1.6	1.8
            minecraft:lily_of_the_valley	0.3	1	1.2	1.4	1.6	1.8
            minecraft:orange_tulip	0.3	1	1.2	1.4	1.6	1.8
            minecraft:oxeye_daisy	0.3	1	1.2	1.4	1.6	1.8
            minecraft:pink_tulip	0.3	1	1.2	1.4	1.6	1.8
            minecraft:red_tulip	0.3	1	1.2	1.4	1.6	1.8
            minecraft:white_tulip	0.3	1	1.2	1.4	1.6	1.8
            minecraft:azalea	0	0.3	1	1.2	1.4	1.6
            minecraft:flowering_azalea	0	0.3	1	1.2	1.4	1.6
        `
    );

    registerSieveTable(
        'minecraft:podzol',
        null,
        `
            minecraft:spruce_sapling	5	20	24	28	32	36
            minecraft:slime_ball	5	20	24	28	32	36
            tconstruct:sky_slime_ball	2.5	10	12	14	16	18
            minecraft:oak_sapling	2	8	9.6	11.2	12.8	14.4
            minecraft:dark_oak_sapling	1.3	5	6	7	8	9
            tconstruct:earth_slime_sapling	0	1.3	5	6	7	8
            minecraft:jungle_sapling	0.8	3	3.6	4.2	4.8	5.4
            tconstruct:earth_slime_grass_seeds	0.8	3	3.6	4.2	4.8	5.4
            tconstruct:sky_slime_sapling	0	0.8	3	3.6	4.2	4.8
            minecraft:birch_sapling	0.5	2	2.4	2.8	3.2	3.6
            minecraft:acacia_sapling	0.5	2	2.4	2.8	3.2	3.6
            minecraft:cherry_sapling	0.5	2	2.4	2.8	3.2	3.6
            minecraft:mangrove_propagule	0	0.5	2	2.4	2.8	3.2
            exdeorum:grass_seeds	0.3	1	1.2	1.4	1.6	1.8
            tconstruct:sky_slime_grass_seeds	0.3	1	1.2	1.4	1.6	1.8
        `
    );

    registerSieveTable(
        'exdeorum:crushed_netherrack',
        'exdeorum:compressed_crushed_netherrack',
        `
            minecraft:gold_nugget	20	24	28	32	36	40
            minecraft:quartz	16	19.2	22.4	25.6	28.8	32
            exdeorum:blackstone_pebble	15	18	21	24	27	30
            minecraft:glowstone_dust	3.5	14	16.8	19.6	22.4	25.2
            minecraft:magma_cream	12	14.4	16.8	19.2	21.6	24
            minecraft:blaze_powder	2.5	10	12	14	16	18
            exdeorum:cobalt_ore_chunk	0	2	8	9.6	11.2	12.8
            exdeorum:basalt_pebble	7.5	9	10.5	12	13.5	15
            minecraft:gunpowder	1.1	4.5	5.4	6.3	7.2	8.1
            exdeorum:warped_nylium_spores	4	4.8	5.6	6.4	7.2	8
            exdeorum:crimson_nylium_spores	4	4.8	5.6	6.4	7.2	8
            tconstruct:ichor_slime_ball	3	3.6	4.2	4.8	5.4	6
            minecraft:nether_wart	0.8	3	3.6	4.2	4.8	5.4
            tconstruct:blood_slime_sapling	1	1.2	1.4	1.6	1.8	2
            tconstruct:blood_slime_grass_seeds	1	1.2	1.4	1.6	1.8	2
            minecraft:netherite_scrap	0	0	0	0.3	1	1.2
            minecraft:ghast_tear	0	0	0.1	0.5	0.6	0.7
        `
    );

    registerSieveTable(
        'exdeorum:crushed_blackstone',
        'exdeorum:compressed_crushed_blackstone',
        `
            minecraft:gold_nugget	30	36	42	48	54	60
            exdeorum:basalt_pebble	15	18	21	24	27	30
            minecraft:magma_cream	10	12	14	16	18	20
            minecraft:gunpowder	1.9	7.5	9	10.5	12	13.5
            minecraft:quartz	4	4.8	5.6	6.4	7.2	8
            exdeorum:cobalt_ore_chunk	0	1	4	4.8	5.6	6.4
            minecraft:blaze_powder	0.8	3	3.6	4.2	4.8	5.4
            minecraft:netherite_scrap	0	0	0	0.8	3	3.6
        `
    );

    registerSieveTable(
        'minecraft:soul_sand',
        'exdeorum:compressed_soul_sand',
        `
            minecraft:quartz	30	36	42	48	54	60
            minecraft:gunpowder	3.8	15	18	21	24	27
            minecraft:nether_wart	3	12	14.4	16.8	19.2	21.6
            minecraft:gold_nugget	10	12	14	16	18	20
            minecraft:bone	10	12	14	16	18	20
            minecraft:glowstone_dust	1.5	6	7.2	8.4	9.6	10.8
            exdeorum:basalt_pebble	4	4.8	5.6	6.4	7.2	8
            exdeorum:cobalt_ore_chunk	0	1	4	4.8	5.6	6.4
            exdeorum:blackstone_pebble	4	4.8	5.6	6.4	7.2	8
            minecraft:ghast_tear	0	0	0.8	3	3.6	4.2
            minecraft:magma_cream	2.5	3	3.5	4	4.5	5
            minecraft:netherite_scrap	0	0	0	0.1	0.5	0.6
        `
    );

    registerSieveTable(
        'exdeorum:crushed_end_stone',
        'exdeorum:compressed_crushed_end_stone',
        `
            minecraft:chorus_fruit	4	4.8	5.6	6.4	7.2	8
            minecraft:ender_pearl	0.8	3	3.6	4.2	4.8	5.4
            tconstruct:ender_slime_sapling	2	2.4	2.8	3.2	3.6	4
            tconstruct:ender_slime_ball	2	2.4	2.8	3.2	3.6	4
            tconstruct:ender_slime_grass_seeds	1	1.2	1.4	1.6	1.8	2
            minecraft:ender_eye	0	0.3	1	1.2	1.4	1.6
            minecraft:chorus_flower	0.3	1	1.2	1.4	1.6	1.8
        `
    );
});
