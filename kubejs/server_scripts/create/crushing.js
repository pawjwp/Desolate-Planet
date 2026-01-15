ServerEvents.recipes(event => {

	event.remove({ id: 'create:crushing/netherrack' })
	event.recipes.create.crushing('exdeorum:crushed_netherrack', 'minecraft:netherrack').processingTime(200).id('desolate_planet:create/crushing/netherrack')
	event.recipes.create.crushing(['create:cinder_flour', Item.of('create:cinder_flour').withChance(0.5)], 'exdeorum:crushed_netherrack').processingTime(80).id('desolate_planet:create/crushing/crushed_netherrack')

	event.recipes.create.crushing(['3x thermal:sawdust', Item.of('thermal:sawdust').withChance(0.5)], '#minecraft:logs').processingTime(200).id('desolate_planet:create/crushing/logs_to_sawdust')

	event.recipes.create.crushing('exdeorum:dust', '#forge:sand').processingTime(200).id('desolate_planet:create/crushing/sand')
	event.recipes.create.crushing('exdeorum:crushed_deepslate', '#forge:deepslate').processingTime(300).id('desolate_planet:create/crushing/deepslate')

	event.recipes.create.crushing('exdeorum:crushed_blackstone', 'minecraft:blackstone').processingTime(300).id('desolate_planet:create/crushing/blackstone')
	event.recipes.create.crushing('exdeorum:crushed_end_stone', '#forge:end_stones').processingTime(300).id('desolate_planet:create/crushing/end_stone')

	// compressed blocks
	event.recipes.create.crushing('9x minecraft:gravel', 'exdeorum:compressed_cobblestone').processingTime(400).id('desolate_planet:create/crushing/compressed_cobblestone')
	event.recipes.create.crushing('9x minecraft:gravel', 'exdeorum:compressed_diorite').processingTime(400).id('desolate_planet:create/crushing/compressed_diorite')
	event.recipes.create.crushing('9x minecraft:gravel', 'exdeorum:compressed_granite').processingTime(400).id('desolate_planet:create/crushing/compressed_granite')
	event.recipes.create.crushing('9x minecraft:gravel', 'exdeorum:compressed_andesite').processingTime(400).id('desolate_planet:create/crushing/compressed_andesite')

	event.recipes.create.crushing('9x minecraft:sand', 'exdeorum:compressed_gravel').processingTime(400).id('desolate_planet:create/crushing/compressed_gravel')
	event.recipes.create.crushing('9x exdeorum:dust', '#exdeorum:compressed/sands').processingTime(400).id('desolate_planet:create/crushing/compressed_sand')

	event.recipes.create.crushing('9x exdeorum:crushed_deepslate', 'exdeorum:compressed_deepslate').processingTime(400).id('desolate_planet:create/crushing/compressed_deepslate')
	event.recipes.create.crushing('9x exdeorum:crushed_deepslate', 'exdeorum:compressed_cobbled_deepslate').processingTime(400).id('desolate_planet:create/crushing/compressed_cobbled_deepslate')
	
	event.recipes.create.crushing('9x exdeorum:crushed_netherrack', 'exdeorum:compressed_netherrack').processingTime(400).id('desolate_planet:create/crushing/compressed_netherrack')
	event.recipes.create.crushing('9x exdeorum:crushed_blackstone', 'exdeorum:compressed_blackstone').processingTime(400).id('desolate_planet:create/crushing/compressed_blackstone')
	event.recipes.create.crushing('9x exdeorum:crushed_end_stone', 'exdeorum:compressed_end_stone').processingTime(400).id('desolate_planet:create/crushing/compressed_end_stone')
	

})
