ServerEvents.recipes(event => {
    event.recipes.thermal.press('create:brass_sheet', '#forge:ingots/brass')
    event.recipes.thermal.press('create:cardboard', 'create:pulp')

    event.recipes.thermal.press('createdeco:andesite_sheet', 'create:andesite_alloy')
    event.recipes.thermal.press('createdeco:zinc_sheet', '#forge:ingots/zinc')
    event.recipes.thermal.press('createdeco:industrial_iron_sheet', 'createdeco:industrial_iron_ingot')
})