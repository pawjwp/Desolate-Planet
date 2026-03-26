ServerEvents.recipes(event => {
    event.remove({ id: 'cgm:pistol' })
    event.remove({ id: 'cgm:shotgun' })
    event.remove({ id: 'cgm:rifle' })
    event.remove({ id: 'cgm:machine_pistol' })
    event.remove({ id: 'cgm:assault_rifle' })
    event.remove({ id: 'cgm:heavy_rifle' })
    event.remove({ id: 'cgm:grenade_launcher' })
    event.remove({ id: 'cgm:bazooka' })
    event.remove({ id: 'cgm:mini_gun' })

    event.remove({ id: 'cgm:basic_bullet' })
    event.remove({ id: 'cgm:shell' })
    event.remove({ id: 'cgm:advanced_bullet' })
    event.remove({ id: 'cgm:missile' })

    event.remove({ id: 'cgm:grenade' })
    event.remove({ id: 'cgm:stun_grenade' })

    event.remove({ id: 'cgm:short_scope' })
    event.remove({ id: 'cgm:medium_scope' })
    event.remove({ id: 'cgm:long_scope' })
    event.remove({ id: 'cgm:silencer' })
	
	//Bullets
	event.custom({
		type: 'cgm:workbench',
		materials: [
			{
				count: 2,
				tag: 'forge:ingots/brass'
			},
			{
				count: 4,
				tag: 'forge:gunpowder'
			},
			{
				count: 2,
				tag: 'forge:nuggets/lead'
			}
		],
		result: {
			count: 16,
			item: 'cgm:basic_bullet'
		}
	})
	event.custom({
		type: 'cgm:workbench',
		materials: [
			{
				count: 2,
				tag: 'forge:ingots/brass'
			},
			{
				count: 4,
				tag: 'forge:gunpowder'
			},
			{
				count: 4,
				tag: 'forge:nuggets/lead'
			}
		],
		result: {
			count: 8,
			item: 'cgm:shell'
		}
	})
	event.custom({
		type: 'cgm:workbench',
		materials: [
			{
				count: 7,
				tag: 'forge:ingots/brass'
			},
			{
				count: 6,
				tag: 'forge:gunpowder'
			},
			{
				count: 2,
				tag: 'forge:nuggets/steel'
			}
		],
		result: {
			count: 8,
			item: 'cgm:advanced_bullet'
		}
	})
	event.custom({
		type: 'cgm:workbench',
		materials: [
			{
				count: 2,
				tag: 'forge:ingots/compressed_iron'
			},
			{
				count: 1,
				item: 'pneumaticcraft:drill_pipe'
			},
			{
				count: 5,
				tag: 'forge:gunpowder'
			}
		],
		result: {
			count: 1,
			item: 'cgm:missile'
		}
	})
	
	//Grenades
	event.custom({
		type: 'cgm:workbench',
		materials: [
			{
				count: 1,
				tag: 'forge:ingots/compressed_iron'
			},
			{
				count: 5,
				tag: 'forge:gunpowder'
			},
			{
				count: 9,
				tag: 'forge:nuggets/lead'
			}
		],
		result: {
			count: 1,
			item: 'cgm:grenade'
		}
	})
	event.custom({
		type: 'cgm:workbench',
		materials: [
			{
				count: 1,
				tag: 'forge:ingots/compressed_iron'
			},
			{
				count: 3,
				tag: 'forge:gunpowder'
			},
			{
				count: 2,
				tag: 'forge:dusts/glowstone'
			}
		],
		result: {
			count: 1,
			item: 'cgm:stun_grenade'
		}
	})
	
	// Attachments
	event.custom({
		type: 'cgm:workbench',
		materials: [
			{
				count: 2,
				tag: 'forge:ingots/compressed_iron'
			},
			{
				count: 1,
				tag: 'forge:glass/colorless'
			}
		],
		result: {
			count: 1,
			item: 'cgm:short_scope'
		}
	})
	event.custom({
		type: 'cgm:workbench',
		materials: [
			{
				count: 4,
				tag: 'forge:ingots/compressed_iron'
			},
			{
				count: 2,
				tag: 'forge:glass/colorless'
			}
		],
		result: {
			count: 1,
			item: 'cgm:medium_scope'
		}
	})
	event.custom({
		type: 'cgm:workbench',
		materials: [
			{
				count: 6,
				tag: 'forge:ingots/compressed_iron'
			},
			{
				count: 4,
				tag: 'forge:glass/colorless'
			}
		],
		result: {
			count: 1,
			item: 'cgm:long_scope'
		}
	})
	event.custom({
		type: 'cgm:workbench',
		materials: [
			{
				count: 4,
				tag: 'forge:ingots/compressed_iron'
			},
			{
				count: 8,
				tag: 'forge:nuggets/steel'
			}
		],
		result: {
			count: 1,
			item: 'cgm:silencer'
		}
	})
})