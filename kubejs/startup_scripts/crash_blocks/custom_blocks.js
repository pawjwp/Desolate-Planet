let dustLayer
let trashLayer
let metalCrate
//let whiteShipChair

StartupEvents.registry('block', event => {
    dustLayer = event.createCustom('dust_pile', () => new $LayerBlock($Properties.copy(Blocks.SAND)))
    trashLayer = event.createCustom('trash_pile', () => new $LayerBlock($Properties.copy(Blocks.GLASS)
        .sound($SoundType.SUSPICIOUS_GRAVEL)
        .destroyTime(0.1)
    ))
    metalCrate = event.createCustom('metal_crate', () => new $BarrelBlock($Properties.copy(Blocks.IRON_BLOCK)))
})

StartupEvents.registry('item', event => {
    event.createCustom('dust_pile', () => new $BlockItem(dustLayer.get(), new $IProperties()))
    event.createCustom('trash_pile', () => new $BlockItem(trashLayer.get(), new $IProperties()))
    event.createCustom('metal_crate', () => new $BlockItem(metalCrate.get(), new $IProperties()))
})
