ServerEvents.recipes(event => {

	[
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
	].forEach((color, index) => {
		event.custom({
			type: 'refurbished_furniture:workbench_constructing',
			materials: [
				{
					count: 4,
					item: 'varkin_system:white_plasteel_block'
				},
				{
					count: 2,
					tag: 'forge:wool/' + color
				}
			],
			result: 'kubejs:' + color + '_ship_chair',
			show_notification: false
		}).id('desolate_planet:' + color + '_ship_chair_workbench_constructing')
	})

})