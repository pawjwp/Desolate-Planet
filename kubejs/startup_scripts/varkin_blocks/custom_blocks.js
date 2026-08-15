let organicWasteLayer
let mineralWasteLayer
let mechanicalScrapsLayer
let moonTrashLayer

let metalTable
let metalChair
let metalBench

StartupEvents.registry('block', event => {
    moonTrashLayer = event.createCustom('varkin_system:perdix_trash_pile', () => new $LayerBlock($Properties.copy(Blocks.GLASS)
        .sound($SoundType.SUSPICIOUS_GRAVEL)
        .destroyTime(0.1)
    ))
	.displayName('Trash Pile')
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
	
	metalTable = event.createCustom('varkin_system:metal_table', () => new $TableBlock($Properties.copy(Blocks.IRON_BLOCK)))
	metalBench = event.createCustom('varkin_system:metal_bench', () => new $BenchBlock($Properties.copy(Blocks.IRON_BLOCK)))
	metalChair = event.createCustom('varkin_system:metal_chair', () => new $ChairBlock($WoodType.OAK, $Properties.copy(Blocks.IRON_BLOCK)))
})

StartupEvents.registry('item', event => {
    event.createCustom('varkin_system:perdix_trash_pile', () => new $BlockItem(moonTrashLayer.get(), new $IProperties()))
    event.createCustom('varkin_system:organic_waste', () => new $BlockItem(organicWasteLayer.get(), new $IProperties()))
    event.createCustom('varkin_system:mineral_waste', () => new $BlockItem(mineralWasteLayer.get(), new $IProperties()))
    event.createCustom('varkin_system:mechanical_scraps', () => new $BlockItem(mechanicalScrapsLayer.get(), new $IProperties()))

    event.createCustom('varkin_system:metal_table', () => new $BlockItem(metalTable.get(), new $IProperties()))
    event.createCustom('varkin_system:metal_chair', () => new $BlockItem(metalChair.get(), new $IProperties()))
    event.createCustom('varkin_system:metal_bench', () => new $BlockItem(metalBench.get(), new $IProperties()))
})
