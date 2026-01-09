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
				count: 3,
				tag: 'forge:plastic'
			},
			{
				count: 4,
				tag: 'forge:nuggets/iron'
			},
			{
				count: 1,
				tag: 'forge:wool/'+color
			}
			],
			result: 'kubejs:'+color+'_ship_chair',
			show_notification: false
		})
	})

})