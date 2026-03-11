ServerEvents.recipes(event => {

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

	function melting(temperature, time, input, output, byproducts) {
		let recipe = {
			type: 'tconstruct:melting',
			ingredient: Ingredient.of(input).toJson(),
			result: Fluid.of(output).toJson(),
			//byproducts: [
			//	{
			//		fluid: 'tconstruct:ichor',
			//		amount: 200
			//	}
			//],
			temperature: temperature,
			time: time
		}
		if (byproducts) {
			recipe.byproducts = byproducts.map(f =>
				Fluid.of(f).toJson()
			) 
		}
		
		event.custom(recipe)
	}

	melting(800, 30, 'refurbished_furniture:light_fridge', Fluid.of('tconstruct:molten_iron', 450), [Fluid.of('tconstruct:molten_copper', 270)])
	melting(800, 30, 'refurbished_furniture:dark_fridge', Fluid.of('tconstruct:molten_iron', 450), [Fluid.of('tconstruct:molten_copper', 270)])
	melting(800, 30, 'refurbished_furniture:light_toaster', Fluid.of('tconstruct:molten_iron', 180))
	melting(800, 30, 'refurbished_furniture:dark_toaster', Fluid.of('tconstruct:molten_iron', 180))
	melting(800, 30, 'refurbished_furniture:light_microwave', Fluid.of('tconstruct:molten_iron', 270), [Fluid.of('tconstruct:molten_glass', 500)])
	melting(800, 30, 'refurbished_furniture:dark_microwave', Fluid.of('tconstruct:molten_iron', 270), [Fluid.of('tconstruct:molten_glass', 500)])
	melting(800, 30, 'refurbished_furniture:light_stove', Fluid.of('tconstruct:molten_iron', 540), [Fluid.of('tconstruct:molten_glass', 500)])
	melting(800, 30, 'refurbished_furniture:dark_stove', Fluid.of('tconstruct:molten_iron', 540), [Fluid.of('tconstruct:molten_glass', 500)])
	melting(800, 30, 'refurbished_furniture:light_range_hood', Fluid.of('tconstruct:molten_iron', 180))
	melting(800, 30, 'refurbished_furniture:dark_range_hood', Fluid.of('tconstruct:molten_iron', 180))
	melting(800, 30, 'refurbished_furniture:light_light_switch', Fluid.of('tconstruct:molten_iron', 90))
	melting(800, 30, 'refurbished_furniture:dark_light_switch', Fluid.of('tconstruct:molten_iron', 90))
	melting(800, 30, 'refurbished_furniture:light_light_switch', Fluid.of('tconstruct:molten_iron', 90))
	melting(800, 30, 'refurbished_furniture:dark_light_switch', Fluid.of('tconstruct:molten_iron', 90))
	melting(800, 30, 'refurbished_furniture:light_ceiling_fan', Fluid.of('tconstruct:molten_iron', 90))
	melting(800, 30, 'refurbished_furniture:dark_ceiling_fan', Fluid.of('tconstruct:molten_iron', 90))

	melting(800, 30, 'refurbished_furniture:frying_pan', Fluid.of('tconstruct:molten_iron', 180))
	melting(800, 30, 'refurbished_furniture:television', Fluid.of('tconstruct:molten_iron', 360), [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_glass', 500)])
	melting(800, 30, 'refurbished_furniture:computer', Fluid.of('tconstruct:molten_iron', 540), [Fluid.of('tconstruct:molten_copper', 180), Fluid.of('tconstruct:molten_glass', 500)])
	melting(800, 30, 'refurbished_furniture:doorbell', Fluid.of('tconstruct:molten_iron', 90), [Fluid.of('tconstruct:molten_gold', 50)])

	colors.forEach(color => {
		melting(800, 30, 'refurbished_furniture:'+color+'_grill', Fluid.of('tconstruct:molten_iron', 360))
	})
})