ServerEvents.tags('block', event => {
	function tagBlock(block) {
		event.add('desolate_planet:mineable/crushing_hammer', block)	
	}
	
    tagBlock('#minecraft:mineable/pickaxe')
    tagBlock('minecraft:gravel')
    tagBlock('minecraft:sand')
    tagBlock('minecraft:red_sand')
    
	// WOW
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
	
	woods.forEach(wood => {
		if (wood != 'bamboo'){
			tagBlock('refurbished_furniture:'+wood+'_chair')
			tagBlock('refurbished_furniture:'+wood+'_table')
			tagBlock('refurbished_furniture:'+wood+'_desk')
			tagBlock('refurbished_furniture:'+wood+'_drawer')
			tagBlock('refurbished_furniture:'+wood+'_light_ceiling_fan')
			tagBlock('refurbished_furniture:'+wood+'_dark_ceiling_fan')
			tagBlock('refurbished_furniture:'+wood+'_storage_cabinet')
			tagBlock('refurbished_furniture:'+wood+'_kitchen_cabinetry')
			tagBlock('refurbished_furniture:'+wood+'_kitchen_drawer')
			tagBlock('refurbished_furniture:'+wood+'_kitchen_sink')
			tagBlock('refurbished_furniture:'+wood+'_kitchen_storage_cabinet')
			tagBlock('refurbished_furniture:'+wood+'_cutting_board')
			tagBlock('refurbished_furniture:'+wood+'_storage_jar')
			tagBlock('refurbished_furniture:'+wood+'_crate')
			tagBlock('refurbished_furniture:'+wood+'_mail_box')
			tagBlock('refurbished_furniture:'+wood+'_lattice_fence')
			tagBlock('refurbished_furniture:'+wood+'_lattice_fence_gate')
			tagBlock('refurbished_furniture:'+wood+'_basin')
			tagBlock('refurbished_furniture:'+wood+'_toilet')
			tagBlock('refurbished_furniture:'+wood+'_bath')
		}

		tagBlock('another_furniture:'+wood+'_chair')
		tagBlock('another_furniture:'+wood+'_shelf')
		tagBlock('another_furniture:'+wood+'_shutter')
		tagBlock('another_furniture:'+wood+'_flower_box')
		tagBlock('another_furniture:'+wood+'_bench')
		tagBlock('another_furniture:'+wood+'_drawer')
	})

	tagBlock('refurbished_furniture:light_fridge')
	tagBlock('refurbished_furniture:dark_fridge')
	tagBlock('refurbished_furniture:light_toaster')
	tagBlock('refurbished_furniture:dark_toaster')
	tagBlock('refurbished_furniture:light_microwave')
	tagBlock('refurbished_furniture:dark_microwave')
	tagBlock('refurbished_furniture:light_stove')
	tagBlock('refurbished_furniture:dark_stove')
	tagBlock('refurbished_furniture:light_range_hood')
	tagBlock('refurbished_furniture:dark_range_hood')
	tagBlock('refurbished_furniture:light_light_switch')
	tagBlock('refurbished_furniture:dark_light_switch')
	tagBlock('refurbished_furniture:light_light_switch')
	tagBlock('refurbished_furniture:dark_light_switch')
	tagBlock('refurbished_furniture:light_ceiling_fan')
	tagBlock('refurbished_furniture:dark_ceiling_fan')

	tagBlock('refurbished_furniture:frying_pan')
	tagBlock('refurbished_furniture:television')
	tagBlock('refurbished_furniture:computer')
	tagBlock('refurbished_furniture:doorbell')

	colors.forEach(color => {
		tagBlock('refurbished_furniture:'+color+'_grill')
	})
})