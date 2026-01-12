ServerEvents.recipes(event => {
    // Removal by ID
    [
        'create:splashing/ice',
        'enderio:iron_gear',
        'industrialforegoing:diamond_gear',
        'industrialforegoing:gold_gear',
        'industrialforegoing:iron_gear',
        'tconstruct:molten_pewter',
        'tconstruct:smeltery/casting/scorched/brick_composite',
        'tconstruct:smeltery/casting/scorched/stone_from_magma',
        'tconstruct:smeltery/casting/seared/brick_composite',
        'tconstruct:smeltery/casting/seared/stone/block_from_seared',
        'tconstruct:smeltery/melting/metal/iron/ore_sparse'
    ].forEach(id => {
        event.remove({ id: id });
    });

    // Removal by input
    event.remove({
        input:
            [
                "#forge:slimeball/blood", // broken recipes, removed because empty tag
                "industrialforegoing:dryrubber",
                "exdeorum:unfired_porcelain_bucket",
                "exdeorum:porcelain_bucket",
                "exdeorum:porcelain_water_bucket",
                "exdeorum:porcelain_lava_bucket",
                "exdeorum:porcelain_milk_bucket",
                "exdeorum:porcelain_witch_water_bucket"
            ]
    });

    // Removal by mod
    event.remove({
        mod:
            [
                "cgm",
                "mob_grinding_utils",
                "simplyjetpacks"
            ]
    });

    // Removal by output
    event.remove({
        output:
            [
                "cookingforblockheads:sink",
                "create:netherite_diving_boots",
                "exdeorum:acacia_crucible",
                "exdeorum:bamboo_crucible",
                "exdeorum:birch_crucible",
                "exdeorum:crimson_crucible",
                "exdeorum:dark_oak_crucible",
                "exdeorum:end_cake",
                "exdeorum:jungle_crucible",
                "exdeorum:oak_crucible",
                "exdeorum:unfired_porcelain_bucket",
                "exdeorum:porcelain_bucket",
                "exdeorum:porcelain_water_bucket",
                "exdeorum:porcelain_lava_bucket",
                "exdeorum:porcelain_milk_bucket",
                "exdeorum:porcelain_witch_water_bucket",
                "exdeorum:spruce_crucible",
                "exdeorum:warped_crucible",
                "industrialforegoing:dryrubber",
                "industrialforegoing:fluid_extractor",
                "industrialforegoing:mycelial_magma",
                "industrialforegoing:latex_processing_unit",
                // "mekanismgenerators:heat_generator",
                "minecraft:composter",
                "tconstruct:grout",
                "tconstruct:nether_grout",
                "torchmaster:megatorch"
            ]
    });

    // Removal by type
    [
        'create:potions',
        'exdeorum:compressed_sieve',
        'exdeorum:water_crucible',
        'tconstruct:casting_table_potion'
    ].forEach(t => {
        event.remove({ type: t });
    });

    // Removal of haunting recipes
    event.remove({
        type: "create:haunting",
        output:
            [
                "minecraft:soul_campfire",
                "minecraft:soul_lantern",
                "minecraft:soul_sand",
                "minecraft:soul_soil",
                "minecraft:soul_torch"
            ]
    });

    // Removal of fire charge recipes for Thermal alloys and glass
    event.remove({
        mod: "thermal",
        type: "minecraft:crafting_shapeless",
        input: "minecraft:fire_charge"
    });

    // Misc removals
    event.remove({ type: "minecraft:crafting_shaped", output: "minecraft:coarse_dirt" });
    event.remove({ type: "tconstruct:casting_table", output: "mekanism:ingot_refined_obsidian" });
    event.remove({ type: "tconstruct:casting_table", output: "minecraft:potion" });

    exdeorum.removeDefaultSieveRecipes(event);
});