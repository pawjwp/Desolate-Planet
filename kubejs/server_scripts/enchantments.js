ServerEvents.recipes(event => {
	function enderIOEnchantmentRecipe(cost_multiplier, enchantment, item, count) {
        event.custom({
            type: 'enderio:enchanting',
            cost_multiplier: cost_multiplier,
            enchantment: enchantment,
            input: {
                count: count,
                ingredient: {
                    item: item
                }
            }
        })
    }

    enderIOEnchantmentRecipe(1, 'cgm:quick_hands', 'create:brass_sheet', 4)
    enderIOEnchantmentRecipe(1, 'cgm:trigger_finger', 'quark:gold_button', 2)
    enderIOEnchantmentRecipe(1, 'cgm:lightweight', 'simplyjetpacks:leather_strap', 1)
    enderIOEnchantmentRecipe(1, 'cgm:collateral', 'minecraft:bone', 16)
    enderIOEnchantmentRecipe(1, 'cgm:over_capacity', 'pneumaticcraft:ingot_iron_compressed', 4)
    enderIOEnchantmentRecipe(2, 'cgm:reclaimed', 'pneumaticcraft:printed_circuit_board', 1)
    enderIOEnchantmentRecipe(2, 'cgm:accelerator', 'minecraft:firework_rocket', 12)
    enderIOEnchantmentRecipe(1, 'cgm:puncturing', 'thermal:lead_ingot', 8)
    enderIOEnchantmentRecipe(2, 'cgm:fire_starter', 'minecraft:fire_charge', 24)

    enderIOEnchantmentRecipe(1, 'create:capacity', 'create:fluid_tank', 1)
    enderIOEnchantmentRecipe(1, 'create:potato_recovery', 'minecraft:potato', 16)

    enderIOEnchantmentRecipe(1, 'simplyjetpacks:fuel_efficiency', 'mekanism:ingot_osmium', 16)

    enderIOEnchantmentRecipe(1, 'cofh_core:holding', 'pneumaticcraft:plastic', 16)
});