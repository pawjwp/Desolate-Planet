ServerEvents.recipes(event => {
	const woods = [
		'oak',
		'spruce',
		'birch',
		'jungle',
		'acacia',
		'dark_oak',
		'mangrove',
		'cherry',
		'bamboo',
		'crimson',
		'warped'
	]
	const colors = [
		'white',
		'light_gray',
		'gray',
		'black',
		'brown',
		'red',
		'orange',
		'yellow',
		'lime',
		'green',
		'cyan',
		'light_blue',
		'blue',
		'purple',
		'magenta',
		'pink'
	]
	
	function mekSawing(output, input, extraOutput) {
		let recipe = {
			type: 'mekanism:sawing',
			input: {
			ingredient: Ingredient.of(input).toJson()
			},
			mainOutput: Item.of(output).toJson()
		}
		
		if (extraOutput) {
			recipe.secondaryOutput = Item.of(extraOutput).toJson()
			recipe.secondaryChance = 1
		}
		
		event.custom(recipe)
	}
	
	function woodRecycle(output, input, extraOutput) {
		//hammer(output, input)
		
		if (extraOutput) {
			event.recipes.create.cutting([output, extraOutput], input)
			event.recipes.thermal.sawmill([output, extraOutput], input)
			mekSawing(output, input, extraOutput)
			//event.recipes.mekanism.sawing(output, input, extraOutput)
			return
		}
		event.recipes.create.cutting(output, input)
		event.recipes.thermal.sawmill(output, input)
		mekSawing(output, input)
		//event.recipes.mekanism.sawing(output, input)
	}
	
	woods.forEach(wood => {
		if (wood != 'bamboo'){
			woodRecycle('3x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_chair', 'thermal:sawdust')
			woodRecycle('4x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_table', '2x thermal:sawdust')
			woodRecycle('4x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_desk', '2x thermal:sawdust')
			woodRecycle('6x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_drawer', '3x thermal:sawdust')
			woodRecycle('3x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_light_ceiling_fan', 'thermal:sawdust')
			woodRecycle('3x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_dark_ceiling_fan', 'thermal:sawdust')
			woodRecycle('6x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_storage_cabinet', '3x thermal:sawdust')
			woodRecycle('5x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_kitchen_cabinetry', '2x thermal:sawdust')
			woodRecycle('8x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_kitchen_drawer', '4x thermal:sawdust')
			woodRecycle('6x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_kitchen_sink', '4x create:copper_nugget')
			woodRecycle('8x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_kitchen_storage_cabinet', '4x thermal:sawdust')
			woodRecycle('1x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_cutting_board')
			woodRecycle('1x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_storage_jar', '1x quark:clear_shard')
			woodRecycle('5x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_crate', '2x thermal:sawdust')
			woodRecycle('4x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_mail_box', '3x thermal:sawdust')
			woodRecycle('1x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_lattice_fence')
			woodRecycle('1x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_lattice_fence_gate')
			woodRecycle('4x minecraft:quartz', 'refurbished_furniture:'+wood+'_basin', '2x thermal:sawdust')
			woodRecycle('5x minecraft:quartz', 'refurbished_furniture:'+wood+'_toilet', '2x thermal:sawdust')
			woodRecycle('8x minecraft:quartz', 'refurbished_furniture:'+wood+'_bath', '3x thermal:sawdust')
		}

		woodRecycle('1x minecraft:'+wood+'_planks', 'another_furniture:'+wood+'_chair', '1x thermal:sawdust')
		woodRecycle('1x minecraft:'+wood+'_planks', 'another_furniture:'+wood+'_shelf', '1x thermal:sawdust')
		woodRecycle('1x thermal:sawdust', 'another_furniture:'+wood+'_shutter', '1x thermal:sawdust')
		woodRecycle('1x minecraft:'+wood+'_planks', 'another_furniture:'+wood+'_flower_box', '1x thermal:sawdust')
		woodRecycle('2x thermal:sawdust', 'another_furniture:'+wood+'_bench', '1x thermal:sawdust')
		woodRecycle('3x minecraft:'+wood+'_planks', 'another_furniture:'+wood+'_drawer', '2x thermal:sawdust')
	})

	colors.forEach(color => {
		woodRecycle('2x minecraft:string', 'refurbished_furniture:'+color+'_stool', '1x thermal:sawdust')
		woodRecycle('1x minecraft:'+color+'_wool', 'refurbished_furniture:'+color+'_sofa', '3x thermal:sawdust')
		woodRecycle('2x thermal:sawdust', 'refurbished_furniture:'+color+'_cooler')

		woodRecycle('2x minecraft:string', 'another_furniture:'+color+'_tall_stool', '1x thermal:sawdust')
		woodRecycle('1x minecraft:string', 'another_furniture:'+color+'_stool', '1x thermal:sawdust')
		woodRecycle('1x minecraft:'+color+'_wool', 'another_furniture:'+color+'_sofa', '2x thermal:sawdust')
		woodRecycle('1x minecraft:'+color+'_wool', 'another_furniture:'+color+'_lamp')
		woodRecycle('3x minecraft:string', 'another_furniture:'+color+'_curtain')
	})
})