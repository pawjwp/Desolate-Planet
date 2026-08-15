ServerEvents.tags('block', event => {
    event.add('another_furniture:chairs_tuckable_under', '#refurbished_furniture:tuckable')
    event.add('refurbished_furniture:tuckable', '#another_furniture:tables')
	
    event.add('another_furniture:tables', 'varkin_system:metal_table')
    event.add('another_furniture:table_connectable', 'varkin_system:metal_table')
    event.add('another_furniture:benches', 'varkin_system:metal_bench')
})