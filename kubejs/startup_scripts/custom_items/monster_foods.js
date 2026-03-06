StartupEvents.registry('item', event => {
    event.create('zombie_jerky').food(food => {
        food
            .hunger(2)
            .saturation(1/5) // This value does not directly translate to saturation points gained
            // The real value can be assumed to be:
            // min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
            .effect('minecraft:poison', 20, 1, 0.25)
            .fastToEat() // Like dried kelp
            .meat() // Dogs are willing to eat it
    })

    event.create('monster_mash').food(food => {
        food
            .hunger(3)
            .saturation(3/7)
            .effect('minecraft:poison', 20, 1, 0.1)
            .meat() // Dogs are willing to eat it
    })

    event.create('bug_broth').food(food => {
        food
            .hunger(4)
            .saturation(1/3)
            .effect('minecraft:poison', 20, 1, 0.05)
            .meat() // Dogs are willing to eat it
    })

    event.create('enderios').food(food => {
        food
            .hunger(7)
            .saturation(8/15)
            // 100% of 2 seconds of darkness
            .effect('minecraft:darkness', 40, 0, 1.0)
            // 30% each for enderference, glowing, and invisibility
            .effect('cofh_core:enderference', 600, 0, 0.3)
            .effect('minecraft:glowing', 600, 0, 0.3)
            .effect('minecraft:invisibility', 600, 0, 0.3)
            // 15% each to heal 8 health or get double jump
            .effect('minecraft:instant_health', 1, 2, 0.15)
            .effect('tconstruct:double_jump', 600, 0, 0.15)
    })

    event.create('nutrient_brick').food(food => {
        food
            .hunger(6)
            .saturation(8/13)
    })
});