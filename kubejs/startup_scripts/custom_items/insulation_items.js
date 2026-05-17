StartupEvents.registry('item', function (event) {
    event.create('leather_insulation')
        .maxStackSize(1)
        .tag('curios:insulation')
        
    event.create('wool_insulation')
        .maxStackSize(1)
        .tag('curios:insulation')
})