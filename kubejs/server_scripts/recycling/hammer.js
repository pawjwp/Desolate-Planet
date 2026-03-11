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

	function hammer(output, input) {
		event.custom({
			type: 'exdeorum:hammer',
			ingredient: [
				Ingredient.of(input).toJson()
			],
			result: Item.of(output).id,
			result_amount: Item.of(output).count
		})
	}

	woods.forEach(wood => {
		if (wood != 'bamboo'){
			hammer('3x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_chair')
			hammer('4x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_table')
			hammer('4x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_desk')
			hammer('6x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_drawer')
			hammer('3x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_light_ceiling_fan')
			hammer('3x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_dark_ceiling_fan')
			hammer('6x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_storage_cabinet')
			hammer('5x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_kitchen_cabinetry')
			hammer('8x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_kitchen_drawer')
			hammer('6x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_kitchen_sink')
			hammer('8x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_kitchen_storage_cabinet')
			hammer('1x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_cutting_board')
			hammer('1x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_storage_jar')
			hammer('5x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_crate')
			hammer('4x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_mail_box')
			hammer('1x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_lattice_fence')
			hammer('1x minecraft:'+wood+'_planks', 'refurbished_furniture:'+wood+'_lattice_fence_gate')
			hammer('4x minecraft:quartz', 'refurbished_furniture:'+wood+'_basin', '2x thermal:sawdust')
			hammer('5x minecraft:quartz', 'refurbished_furniture:'+wood+'_toilet', '2x thermal:sawdust')
			hammer('8x minecraft:quartz', 'refurbished_furniture:'+wood+'_bath', '3x thermal:sawdust')
		}

		hammer('1x minecraft:'+wood+'_planks', 'another_furniture:'+wood+'_chair', '1x thermal:sawdust')
		hammer('1x minecraft:'+wood+'_planks', 'another_furniture:'+wood+'_shelf', '1x thermal:sawdust')
		hammer('1x thermal:sawdust', 'another_furniture:'+wood+'_shutter', '1x thermal:sawdust')
		hammer('1x minecraft:'+wood+'_planks', 'another_furniture:'+wood+'_flower_box', '1x thermal:sawdust')
		hammer('2x thermal:sawdust', 'another_furniture:'+wood+'_bench', '1x thermal:sawdust')
		hammer('3x minecraft:'+wood+'_planks', 'another_furniture:'+wood+'_drawer', '2x thermal:sawdust')
	})

	hammer('5x minecraft:iron_ingot', 'refurbished_furniture:light_fridge')
	hammer('5x minecraft:iron_ingot', 'refurbished_furniture:dark_fridge')
	hammer('2x minecraft:iron_ingot', 'refurbished_furniture:light_toaster')
	hammer('2x minecraft:iron_ingot', 'refurbished_furniture:dark_toaster')
	hammer('3x minecraft:iron_ingot', 'refurbished_furniture:light_microwave')
	hammer('3x minecraft:iron_ingot', 'refurbished_furniture:dark_microwave')
	hammer('6x minecraft:iron_ingot', 'refurbished_furniture:light_stove')
	hammer('6x minecraft:iron_ingot', 'refurbished_furniture:dark_stove')
	hammer('2x minecraft:iron_ingot', 'refurbished_furniture:light_range_hood')
	hammer('2x minecraft:iron_ingot', 'refurbished_furniture:dark_range_hood')
	hammer('1x minecraft:iron_ingot', 'refurbished_furniture:light_light_switch')
	hammer('1x minecraft:iron_ingot', 'refurbished_furniture:dark_light_switch')
	hammer('1x minecraft:iron_ingot', 'refurbished_furniture:light_light_switch')
	hammer('1x minecraft:iron_ingot', 'refurbished_furniture:dark_light_switch')
	hammer('1x minecraft:iron_ingot', 'refurbished_furniture:light_ceiling_fan')
	hammer('1x minecraft:iron_ingot', 'refurbished_furniture:dark_ceiling_fan')

	hammer('2x minecraft:iron_ingot', 'refurbished_furniture:frying_pan')
	hammer('4x minecraft:iron_ingot', 'refurbished_furniture:television')
	hammer('6x minecraft:iron_ingot', 'refurbished_furniture:computer')
	hammer('1x minecraft:iron_ingot', 'refurbished_furniture:doorbell')

	colors.forEach(color => {
		hammer('4x minecraft:iron_ingot', 'refurbished_furniture:' + color + '_grill')
	})

})