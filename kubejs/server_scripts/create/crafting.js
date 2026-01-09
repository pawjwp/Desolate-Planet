ServerEvents.recipes(event => {

	event.remove({ id: 'create:crafting/kinetics/belt_connector' })
	event.shaped('3x create:belt_connector', [
			'RRR',
			'RRR'
		], {
			R: 'thermal:cured_rubber'
		}
	).id('crash_landing:create/crafting/belt_connector')

	event.shaped('create:belt_connector', [
			'RRR',
			'RRR'
		], {
			R: 'thermal:rubber'
		}
	).id('crash_landing:create/crafting/belt_connector_raw')

})
