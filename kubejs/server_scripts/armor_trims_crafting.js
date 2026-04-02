ServerEvents.recipes(event => {
    const makeTrimRecipe = (trim, material, block) => event.shaped(
        trim,
        [
            'DTD',
            'DCD',
            'DDD'
        ],
        {
            C: block,
            D: 'minecraft:diamond',
            T: material
        }
    )

    makeTrimRecipe('minecraft:sentry_armor_trim_smithing_template', 'minecraft:white_banner', 'minecraft:cobblestone')
    makeTrimRecipe('minecraft:ward_armor_trim_smithing_template', 'minecraft:ec`ho_shard', 'minecraft:cobbled_deepslate')
    makeTrimRecipe('minecraft:wild_armor_trim_smithing_template', 'minecraft:mossy_cobblestone', 'minecraft:mossy_cobblestone')
    makeTrimRecipe('minecraft:vex_armor_trim_smithing_template', 'minecraft:book', 'minecraft:cobblestone')
    makeTrimRecipe('minecraft:coast_armor_trim_smithing_template', 'minecraft:emerald', 'minecraft:cobblestone')
    makeTrimRecipe('minecraft:silence_armor_trim_smithing_template', 'minecraft:sculk_sensor', 'minecraft:cobbled_deepslate')
    makeTrimRecipe('minecraft:snout_armor_trim_smithing_template', 'minecraft:gold_ingot', 'minecraft:blackstone')
    makeTrimRecipe('minecraft:rib_armor_trim_smithing_template', 'minecraft:blaze_rod', 'minecraft:netherrack')
    makeTrimRecipe('minecraft:tide_armor_trim_smithing_template', 'minecraft:prismarine_shard', 'minecraft:prismarine')
    makeTrimRecipe('minecraft:spire_armor_trim_smithing_template', 'minecraft:phantom_membrane', 'minecraft:purpur_block')
    makeTrimRecipe('minecraft:dune_armor_trim_smithing_template', 'minecraft:bone', 'minecraft:sandstone')
    makeTrimRecipe('minecraft:eye_armor_trim_smithing_template', 'minecraft:ender_eye', 'minecraft:end_stone')
    makeTrimRecipe('minecraft:wayfinder_armor_trim_smithing_template', 'minecraft:compass', 'minecraft:terracotta')
    makeTrimRecipe('minecraft:shaper_armor_trim_smithing_template', 'minecraft:quartz', 'minecraft:terracotta')
    makeTrimRecipe('minecraft:raiser_armor_trim_smithing_template', 'minecraft:lapis_lazuli', 'minecraft:terracotta')
    makeTrimRecipe('minecraft:host_armor_trim_smithing_template', 'minecraft:spider_eye', 'minecraft:terracotta')
});
