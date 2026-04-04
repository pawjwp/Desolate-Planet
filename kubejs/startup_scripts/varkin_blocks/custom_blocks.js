let organicWasteLayer
let mineralWasteLayer
let mechanicalScrapsLayer
let moonTrashLayer

StartupEvents.registry('block', event => {
    moonTrashLayer = event.createCustom('varkin_system:verdix_trash_pile', () => new $LayerBlock($Properties.copy(Blocks.GLASS)
        .sound($SoundType.SUSPICIOUS_GRAVEL)
        .destroyTime(0.1)
    ))
    organicWasteLayer = event.createCustom('varkin_system:organic_waste', () => new $LayerBlock($Properties.copy(Blocks.GLASS)
        .sound($SoundType.MUD)
        .destroyTime(0.1)
    ))
    mineralWasteLayer = event.createCustom('varkin_system:mineral_waste', () => new $LayerBlock($Properties.copy(Blocks.GLASS)
        .sound($SoundType.GRAVEL)
        .destroyTime(0.1)
    ))
    mechanicalScrapsLayer = event.createCustom('varkin_system:mechanical_scraps', () => new $LayerBlock($Properties.copy(Blocks.GLASS)
        .sound($SoundType.SUSPICIOUS_GRAVEL)
        .destroyTime(0.1)
    ))
})

StartupEvents.registry('item', event => {
    event.createCustom('varkin_system:verdix_trash_pile', () => new $BlockItem(moonTrashLayer.get(), new $IProperties()))
    event.createCustom('varkin_system:organic_waste', () => new $BlockItem(organicWasteLayer.get(), new $IProperties()))
    event.createCustom('varkin_system:mineral_waste', () => new $BlockItem(mineralWasteLayer.get(), new $IProperties()))
    event.createCustom('varkin_system:mechanical_scraps', () => new $BlockItem(mechanicalScrapsLayer.get(), new $IProperties()))
})
