const ThirstCapabilities = Java.loadClass('dev.ghen.thirst.foundation.common.capability.ModCapabilities')
const CuriosCapabilities = Java.loadClass('com.prunoideae.powerfuljs.capabilities.forge.mods.curios.CapabilitiesCurios')

// Maps fluid IDs to their display color and model predicate value.
// modelValue is used in the item model to distinguish what color texture to load
// barColor is the color of the durability bar and must be an existing color
const FLUID_CONFIG = [
    // Blue
    {
        modelValue: 0.01, barColor: () => Color.BLUE, fluids: [
            'minecraft:water',
            'mekanism:heavy_water'
        ]
    },
    // Orange
    {
        modelValue: 0.02, barColor: () => Color.ORANGE_DYE, fluids: [
            'minecraft:lava',
            'thermal:syrup',
            'thermal:sap',
            'thermal:light_oil',
            'tconstruct:magma',
            'tconstruct:ichor',
            'tconstruct:blazing_blood',
            'pneumaticcraft:diesel',
            'create:tea'
        ]
    },
    // White
    {
        modelValue: 0.03, barColor: () => Color.WHITE, fluids: [
            'minecraft:milk',
            'thermal:latex',
            'tconstruct:venom',
            'tconstruct:powdered_snow',
            'pneumaticcraft:yeast_culture',
            'pneumaticcraft:plastic',
            'pneumaticcraft:ethanol',
            'industrialforegoing:latex',
            'industrialforegoing:ether_gas',
            'biggerreactors:steam',
            'ad_astra:oxygen'
        ]
    },
    // Lime
    {
        modelValue: 0.04, barColor: () => Color.LIME_DYE, fluids: [
            'sophisticatedcore:xp_still',
            'pneumaticcraft:memory_essence',
            'mob_grinding_utils:fluid_xp',
            'industrialforegoing:essence',
            'enderio:xp_juice',
            'cofh_core:experience'
        ]
    },
    // Purple
    {
        modelValue: 0.05, barColor: () => Color.PURPLE_DYE, fluids: [
            'tconstruct:ender_slime',
            'industrialforegoing:sludge',
            'industrialforegoing:biofuel',
            'exdeorum:witch_water'
        ]
    },
    // Brown
    {
        modelValue: 0.06, barColor: () => Color.BROWN_DYE, fluids: [
            'thermal:tree_oil',
            'tconstruct:rabbit_stew',
            'tconstruct:mushroom_stew',
            'tconstruct:meat_soup',
            'tconstruct:liquid_soul',
            'industrialforegoing:sewage',
            'industrialforegoing:meat',
            'create:chocolate'
        ]
    },
    // Yellow
    {
        modelValue: 0.07, barColor: () => Color.GOLD, fluids: [
            'thermal:resin',
            'thermal:refined_fuel',
            'thermal:glowstone',
            'tconstruct:honey',
            'pneumaticcraft:vegetable_oil',
            'pneumaticcraft:lubricant',
            'pneumaticcraft:lpg',
            'pneumaticcraft:gasoline',
            'pneumaticcraft:biodiesel',
            'mekanism:chlorine',
            'mekanism:brine',
            'createaddition:bioethanol',
            'create:honey',
            'cofh_core:honey'
        ]
    },
    // Red
    {
        modelValue: 0.08, barColor: () => Color.RED, fluids: [
            'thermal:redstone',
            'thermal:heavy_oil',
            'tconstruct:beetroot_soup',
            'ad_astra:fuel'
        ]
    },
    // Teal  
    {
        modelValue: 0.09, barColor: () => Color.DARK_AQUA, fluids: [
            'thermal:ender',
            'tconstruct:molten_ender'
        ]
    },
    // Cyan
    {
        modelValue: 0.10, barColor: () => Color.AQUA, fluids: [
            'tconstruct:sky_slime',
            'pneumaticcraft:kerosene',
            'ad_astra:hydrogen',
            'ad_astra:cryo_fuel'
        ]
    },
    // Green
    {
        modelValue: 0.11, barColor: () => Color.GREEN, fluids: [
            'tconstruct:earth_slime',
            'pneumaticcraft:etching_acid',
            'biggerreactors:liquid_uranium'
        ]
    },
    // Pink
    {
        modelValue: 0.12, barColor: () => Color.PINK_DYE, fluids: [
            'industrialforegoing:pink_slime'
        ]
    },
    // Black/Gray (Default)
    {
        modelValue: 0.00, barColor: () => Color.GRAY, fluids: [
            'thermal:crude_oil',
            'thermal:creosote',
            'tconstruct:seared_stone',
            'tconstruct:scorched_stone',
            'pneumaticcraft:oil',
            'biggerreactors:liquid_obsidian',
            'ad_astra:oil'
        ]
    },
]

// Build maps of fluid IDs
const FLUID_LOOKUP = {}
FLUID_CONFIG.forEach(function (entry) {
    entry.fluids.forEach(function (fluidId) { FLUID_LOOKUP[fluidId] = entry })
})

function getFluidBarColor(fluidType) {
    var entry = FLUID_LOOKUP[fluidType]
    return entry ? entry.barColor() : Color.GRAY
}

function getFluidModelValue(fluidType) {
    var entry = FLUID_LOOKUP[fluidType]
    return entry ? entry.modelValue : 0.00
}

const cdKey       = 'kjsCamelPackCD'      // name of cooldown in NBT
const sipSize     = 100                   // liquid drained per sip
const sipThirst   = 5.0 * (sipSize / 250) // base thirst restored per sip, calculated from water bottle restoration amount
const sipQuenched = 8.0 * (sipSize / 250) // base quenchness restored per sip, calculated from water bottle restoration amount

// Registers a camel pack variant.
// config: { id, displayName, thirstMult, quenchMult, hasTank, capacity? }
// hasTank: true  — fluid tank, consumes liquid on sip
// hasTank: false — no tank, provides infinite water-equivalent hydration
function registerCamelPack(event, config) {
    var builder = event.create(config.id)
        .displayName(config.displayName)
        .maxStackSize(1)

    if (config.hasTank) {
        builder.attachCapability(CapabilityBuilder.FLUID.itemStack(config.capacity))
    }

    builder
        .tag('curios:belt')
        .tag('curios:back')
        .attachCapability(
            CuriosCapabilities.CURIOS.itemStack()
                .curioTick(function (stack, slotContext) {
                    // run on server for player
                    var entity = slotContext.entity()
                    if (!entity || entity.level.isClientSide() || !entity.isPlayer()) return
                    var player = entity

                    // cooldown
                    var data = player.persistentData
                    var cd = data.getInt(cdKey)
                    if (cd > 0) {
                        data.putInt(cdKey, cd - 1)
                        return
                    }

                    // thirst cap
                    var thirstCap = player.getCapability(ThirstCapabilities.PLAYER_THIRST, null).orElse(null)
                    if (!thirstCap) return

                    // if tankless, drink separately
                    if (!config.hasTank) {
                        if (thirstCap.getThirst() > 18) return
                        thirstCap.drink(player,
                            Math.floor(sipThirst * config.thirstMult),
                            Math.floor(sipQuenched * config.quenchMult)
                        )
                        data.putInt(cdKey, 20)
                        return
                    }

                    // read fluid NBT
                    if (!stack || !stack.nbt || !stack.nbt.contains('Fluid')) return
                    var fluidTag = stack.nbt.get('Fluid')
                    if (!fluidTag || !fluidTag.contains) return

                    var fluidType = null
                    if (fluidTag.contains('FluidName')) fluidType = fluidTag.getString('FluidName')

                    var amount = fluidTag.contains('Amount') ? fluidTag.getInt('Amount') : 0
                    if (!fluidType || amount <= 0) return

                    // fluids consume remaining amounts even if under the sipSize
                    var drinkAmount = Math.min(sipSize, amount)
                    var sipRatio = drinkAmount / sipSize

                    switch (fluidType) {
                        case 'minecraft:water':
                            // if thirst is greater than 18, do not drink
                            if (thirstCap && thirstCap.getThirst() > 18) break

                            fluidTag.putInt('Amount', amount - drinkAmount)
                            thirstCap.drink(player,
                                Math.floor(sipThirst * config.thirstMult * sipRatio),
                                Math.floor(sipQuenched * config.quenchMult * sipRatio)
                            )

                            // set 20 tick cooldown
                            data.putInt(cdKey, 20)
                            break

                        case 'minecraft:milk':
                            // if thirst is greater than 18, do not drink
                            if (thirstCap && thirstCap.getThirst() > 18) break

                            fluidTag.putInt('Amount', amount - drinkAmount)
                            thirstCap.drink(player,
                                Math.floor(sipThirst * (2/3) * config.thirstMult * sipRatio),
                                Math.floor(sipQuenched * (2/3) * config.quenchMult * sipRatio)
                            )

                            // increase food by 1, saturation by 1
                            var food = player.getFoodData()
                            food.setFoodLevel(Math.min(food.getFoodLevel() + 1, 20))
                            food.setSaturation(Math.min(food.getSaturationLevel() + 1.0, food.getFoodLevel() * 1.0))
                            data.putInt(cdKey, 20)
                            break

                        case 'minecraft:lava':
                            fluidTag.putInt('Amount', amount - sipSize)
                            // deal 2 fire damage, light player on fire for 2 seconds
                            player.attack(player.level.damageSources().onFire(), 2.0)
                            player.setSecondsOnFire(2)
                            data.putInt(cdKey, 20)
                            break

                        default:
                            break
                    }
                })
        )
        // durability bar based on tank amount
        .barWidth(function (stack) {
            var amount = 0
            if (stack && stack.nbt && stack.nbt.contains('Fluid')) {
                amount = stack.nbt.get('Fluid').getInt('Amount')
            }

            if (amount <= 0) return 14 // hide bar if empty
            return Math.round((amount / config.capacity) * 13)
        })
        .barColor(function (stack) {
            // read fluid NBT
            var fluidType = null
            if (stack && stack.nbt && stack.nbt.contains('Fluid')) {
                fluidType = stack.nbt.get('Fluid').getString('FluidName')
            }
            return getFluidBarColor(fluidType)
        })
}

// Registers 'stored' and 'fluid' model predicates for a camel pack item.
function registerCamelPackModelProperties(e, itemId, capacity) {
    e.register(itemId,
        new ResourceLocation('stored'),
        /** @type {Internal.ClampedItemPropertyFunction} */
        (stack) => {
            if (!stack || !stack.nbt || !stack.nbt.contains('Fluid')) return 0
            var fluidTag = stack.nbt.get('Fluid')
            if (!fluidTag || !fluidTag.contains) return 0
            var amount = fluidTag.contains('Amount') ? fluidTag.getInt('Amount') : 0
            return Math.max(0, Math.min(1, amount / capacity))
        }
    )

    e.register(itemId,
        new ResourceLocation('fluid'),
        /** @type {Internal.ClampedItemPropertyFunction} */
        (stack) => {
            if (!stack || !stack.nbt || !stack.nbt.contains('Fluid')) return 0
            var fluidTag = stack.nbt.get('Fluid')
            if (!fluidTag || !fluidTag.contains) return 0
            var fluidType = fluidTag.contains('FluidName') ? fluidTag.getString('FluidName') : null
            if (!fluidType) return 0
            return getFluidModelValue(fluidType)
        }
    )
}


// Register camel pack tiers
const CAMEL_PACK_CONFIGS = [
    { id: 'camel_pack',           displayName: 'Camel Pack',                  capacity: 4000,  thirstMult: 1.0, quenchMult: 1.0,  hasTank: true  },
    { id: 'advanced_camel_pack',  displayName: 'Advanced Camel Pack',         capacity: 20000, thirstMult: 1.0, quenchMult: 1.25, hasTank: true  },
    { id: 'unlimited_camel_pack', displayName: 'Condensentrating Camel Pack',                  thirstMult: 1.5, quenchMult: 1.5,  hasTank: false },
]

StartupEvents.registry('item', (event) => {

    event.create('filter')
        .displayName('Water Filter')
        .maxDamage(16)

    CAMEL_PACK_CONFIGS.forEach(config => registerCamelPack(event, config))

})


ItemEvents.modelProperties((e) => {
    CAMEL_PACK_CONFIGS
        .filter(c => c.hasTank)
        .forEach(c => registerCamelPackModelProperties(e, `kubejs:${c.id}`, c.capacity))
})
