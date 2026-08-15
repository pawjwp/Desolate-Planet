ServerEvents.tags('block', event => {
	let magnetic_blocks = [
		'kubejs:metal_crate',
		'varkin_system:metal_table',
		'varkin_system:metal_chair',
		'varkin_system:metal_bench',
		'refurbished_furniture:light_electricity_generator',
		'refurbished_furniture:dark_electricity_generator',
		'refurbished_furniture:light_fridge',
		'refurbished_furniture:dark_fridge',
		'refurbished_furniture:light_toaster',
		'refurbished_furniture:dark_toaster',
		'refurbished_furniture:light_microwave',
		'refurbished_furniture:dark_microwave',
		'refurbished_furniture:light_stove',
		'refurbished_furniture:dark_stove',
		'refurbished_furniture:light_range_hood',
		'refurbished_furniture:dark_range_hood',
		'refurbished_furniture:frying_pan'
	].forEach(block => {
		event.add('alexscaves:ferromagnetic_blocks', block)
	})
})