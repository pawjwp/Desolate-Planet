function registerCamelPackTooltip(e, itemId, capacity, description, hasTank) {
	if (hasTank === undefined) hasTank = true

	e.addAdvanced(itemId, function (item, advanced, text) {

		if (!hasTank) {
			text.add(1, Text.gray(description))
			return
		}

		var fluidType = null
		var amount = 0

		if (item && item.nbt && item.nbt.contains('Fluid')) {
			var fluid = item.nbt.get('Fluid')
			fluidType = fluid.getString('FluidName')
			amount = fluid.getInt('Amount')
		}

		if (!fluidType) {
			text.add(1, Text.white('Empty'))
			text.add(2, Text.gray(description))
			return
		}

		text.add(1, Text.white('Fluid: ' + String(fluidType.substring(fluidType.indexOf(':') + 1)).replace(/_/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase() })))
		text.add(2, Text.white('Amount: ' + amount + ' / ' + capacity + ' mB'))
		text.add(3, Text.gray(description))
	})
}

ItemEvents.tooltip(function (e) {
	registerCamelPackTooltip(e, 'kubejs:camel_pack',          4000,  'A wearable tank for keeping you hydrated.')
	registerCamelPackTooltip(e, 'kubejs:advanced_camel_pack', 20000, 'A wearable tank for keeping you hydrated.')
})
