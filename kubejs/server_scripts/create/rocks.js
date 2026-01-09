ServerEvents.recipes(event => {

	event.custom({
		type: 'tconstruct:casting_basin',
		cast: {
			item: 'minecraft:prismarine'
		},
		cast_consumed: true,
		cooling_time: 38,
		fluid: {
			amount: 250,
			fluid: 'minecraft:water'
		},
		result: {
			item: 'create:asurine'
		}
	})

	event.custom({
		type: 'tconstruct:casting_basin',
		cast: {
			item: 'minecraft:mossy_cobblestone'
		},
		cast_consumed: true,
		cooling_time: 38,
		fluid: {
			amount: 250,
			fluid: 'tconstruct:earth_slime'
		},
		result: {
			item: 'create:veridium'
		}
	})

	event.custom({
		type: 'tconstruct:casting_basin',
		cast: {
			item: 'minecraft:tuff'
		},
		cast_consumed: true,
		cooling_time: 38,
		fluid: {
			amount: 100,
			fluid: 'thermal:redstone'
		},
		result: {
			item: 'create:crimsite'
		}
	})

	event.custom({
		type: 'tconstruct:casting_basin',
		cast: {
			item: 'minecraft:dripstone_block'
		},
		cast_consumed: true,
		cooling_time: 38,
		fluid: {
			amount: 250,
			tag: 'forge:honey'
		},
		result: {
			item: 'create:ochrum'
		}
	})

})
