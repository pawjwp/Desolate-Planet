ServerEvents.recipes(event => {

	event.remove({ id: 'create:crushing/netherrack' })
	event.recipes.create.crushing('exdeorum:crushed_netherrack', 'minecraft:netherrack').processingTime(250).id('desolate_planet:create/crushing/netherrack')
	event.recipes.create.crushing(['create:cinder_flour', Item.of('create:cinder_flour').withChance(0.5)], 'exdeorum:crushed_netherrack').processingTime(10).id('desolate_planet:create/crushing/crushed_netherrack')

	event.recipes.create.crushing('exdeorum:dust', '#forge:sand').processingTime(250).id('desolate_planet:create/crushing/sand')

	event.recipes.create.crushing('exdeorum:crushed_blackstone', 'minecraft:blackstone').processingTime(350).id('desolate_planet:create/crushing/blackstone')

	event.recipes.create.crushing('exdeorum:crushed_deepslate', '#forge:deepslate').processingTime(350).id('desolate_planet:create/crushing/deepslate')

	event.recipes.create.crushing('exdeorum:crushed_end_stone', '#forge:end_stones').processingTime(250).id('desolate_planet:create/crushing/end_stone')

	event.recipes.create.crushing(['3x thermal:sawdust', Item.of('thermal:sawdust').withChance(0.5)], '#minecraft:logs').processingTime(200).id('desolate_planet:create/crushing/logs_to_sawdust')

})
