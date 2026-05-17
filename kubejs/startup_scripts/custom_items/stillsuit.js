// const ThirstCapabilities = Java.loadClass('dev.ghen.thirst.foundation.common.capability.ModCapabilities')
// const CuriosCapabilities = Java.loadClass('com.prunoideae.powerfuljs.capabilities.forge.mods.curios.CapabilitiesCurios')

StartupEvents.registry('item', function (event) {
    event.create('insulated_hydraulic_fabric')

    event.create('filtration_pocket')

    event.create('stillsuit')
        .maxStackSize(1)
        .tag('curios:insulation')
        .attachCapability(
            CuriosCapabilities.CURIOS.itemStack()
                .curioTick(function (stack, slotContext) {
                    // run on server for player
                    var entity = slotContext.entity()
                    if (!entity || entity.level.isClientSide() || !entity.isPlayer()) return
                    var player = entity

                    // thirst cap
                    var thirstCap = player.getCapability(ThirstCapabilities.PLAYER_THIRST, null).orElse(null)
                    if (!thirstCap) return

                    // get persistent player data
                    var playerData = player.persistentData

                    // factor to modify thirst exhaustion rate by
                    var thirstMultiplier = 0.5

                    // Get previous exhaustion value
                    var lastExhaustion = playerData.contains('ThirstAccumulatorLastExhaustion')
                        ? playerData.getFloat('ThirstAccumulatorLastExhaustion')
                        : thirstCap.getExhaustion()
                    // Get current exhaustion value
                    var currentExhaustionLevel = thirstCap.getExhaustion()

                    // Change in exhaustion this tick
                    var delta = currentExhaustionLevel - lastExhaustion

                    // If delta is positive, set exhaustion to scaled value
                    if (delta > 0) {
                        var scaled = lastExhaustion + (delta * thirstMultiplier)
                        thirstCap.setExhaustion(scaled)
                        currentExhaustionLevel = scaled
                    }

                    // Set last exhaustion value to current exhaustion for next tick
                    playerData.putFloat('ThirstAccumulatorLastExhaustion', currentExhaustionLevel)
                })
        )
})

/*
ItemEvents.armorTierRegistry(event => {
    event.add('stillsuit', tier => {
        tier.durabilityMultiplier = 15 // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [2, 5, 6, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD]
        tier.enchantmentValue = 10
        tier.equipSound = 'minecraft:item.armor.equip_generic'
        tier.repairIngredient = 'thermal:cured_rubber'
        tier.toughness = 1.0
        tier.knockbackResistance = 0.0
    })
});
StartupEvents.registry("item", (event) => {
    event
        .create("stillsuit_helmet", "helmet")
        .tier("stillsuit")
    event
        .create("stillsuit_chestplate", "chestplate")
        .tier("stillsuit")
    event
        .create("stillsuit_leggings", "leggings")
        .tier("stillsuit")
    event
        .create("stillsuit_boots", "boots")
        .tier("stillsuit")
});*/