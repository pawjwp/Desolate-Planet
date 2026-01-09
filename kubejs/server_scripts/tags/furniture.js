ServerEvents.tags('block', event => {
    event.add('another_furniture:chairs_tuckable_under', '#refurbished_furniture:tuckable')
    event.add('refurbished_furniture:tuckable', '#another_furniture:tables')
})