ServerEvents.recipes(event => {
    event.recipes.industrialforegoing.dissolution_chamber(
        [
            'legumedelight:roasted_peanuts',
            'legumedelight:peanut_butter',
            'legumedelight:roasted_peanuts',
            '#forge:flour',
            '#forge:flour',
            '#forge:crops/carrot',
            'farmersdelight:fruit_salad',
            '#forge:salad_ingredients'
        ],
        Fluid.of('create:chocolate', 500),
        'kubejs:nutrient_brick',
        300
    )
})