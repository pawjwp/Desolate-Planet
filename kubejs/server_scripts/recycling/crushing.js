ServerEvents.recipes(event => {
	event.recipes.create.crushing(['4x minecraft:iron_ingot', Item.of('minecraft:iron_ingot', 2).withChance(0.5)], 'cgm:pistol')
	event.recipes.create.crushing(['6x minecraft:iron_ingot', Item.of('minecraft:iron_ingot', 3).withChance(0.5)], 'cgm:shotgun')
	event.recipes.create.crushing(['6x minecraft:iron_ingot', Item.of('minecraft:iron_ingot', 3).withChance(0.5)], 'cgm:rifle')

	event.recipes.create.crushing(['5x thermal:steel_ingot', Item.of('thermal:steel_ingot', 3).withChance(0.5)], 'cgm:machine_pistol')
	event.recipes.create.crushing(['7x thermal:steel_ingot', Item.of('thermal:steel_ingot', 4).withChance(0.5)], 'cgm:assault_rifle')
	event.recipes.create.crushing(['9x thermal:steel_ingot', Item.of('thermal:steel_ingot', 5).withChance(0.5)], 'cgm:heavy_rifle')

	event.recipes.create.crushing(['8x thermal:steel_ingot', Item.of('thermal:steel_ingot', 4).withChance(0.5)], 'cgm:grenade_launcher')
	event.recipes.create.crushing(['11x thermal:steel_ingot', Item.of('thermal:steel_ingot', 6).withChance(0.5)], 'cgm:bazooka')
	event.recipes.create.crushing(['19x thermal:steel_ingot', Item.of('thermal:steel_ingot', 10).withChance(0.5)], 'cgm:mini_gun')
})