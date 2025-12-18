ServerEvents.tags('item', event => {
	[
		'exdeorum:crooks',
		'forge:tools',
		'minecraft:tools',
		'tconstruct:modifiable',
		'tconstruct:modifiable/aoe',
		'tconstruct:modifiable/bonus_slots',
		'tconstruct:modifiable/durability',
		'tconstruct:modifiable/harvest',
		'tconstruct:modifiable/harvest/primary',
		'tconstruct:modifiable/held',
		'tconstruct:modifiable/interactable',
		'tconstruct:modifiable/interactable/charge',
		'tconstruct:modifiable/interactable/right',
		'tconstruct:modifiable/melee',
		'tconstruct:modifiable/melee/weapon',
		'tconstruct:modifiable/multipart',
		'tconstruct:modifiable/small',
		'tleveling:tinker_mining',
		'tleveling:tinker_tools'
	].forEach(tag => {
		event.add(tag, 'kubejs:crook')
	});
})