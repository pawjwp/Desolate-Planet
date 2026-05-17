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
			text.add(1, Text.translate("item.kubejs.camel_pack.empty").white())
			text.add(2, Text.gray(description))
			return
		}

		text.add(1, Text.translate("item.kubejs.camel_pack.fluid", String(fluidType.substring(fluidType.indexOf(':') + 1)).replace(/_/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase() })).white())
		text.add(2, Text.translate("item.kubejs.camel_pack.amount", String(amount), String(capacity)).white())
		text.add(3, Text.gray(description))
	})
}

ItemEvents.tooltip(function (e) {
	registerCamelPackTooltip(e, 'kubejs:camel_pack',           4000,  Text.translate("item.kubejs.camel_pack.description"))
	registerCamelPackTooltip(e, 'kubejs:advanced_camel_pack',  20000, Text.translate("item.kubejs.advanced_camel_pack.description"))
	registerCamelPackTooltip(e, 'kubejs:unlimited_camel_pack', 0,     Text.translate("item.kubejs.unlimited_camel_pack.description"), false)
})
