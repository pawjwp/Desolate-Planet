let whiteShipChair
let lightGrayShipChair
let grayShipChair
let blackShipChair

let brownShipChair
let redShipChair
let orangeShipChair
let yellowShipChair

let limeShipChair
let greenShipChair
let cyanShipChair
let lightBlueShipChair

let blueShipChair
let purpleShipChair
let magentaShipChair
let pinkShipChair

StartupEvents.registry('block', event => {

    whiteShipChair = event.createCustom('white_ship_chair', () => new $SofaBlock($DyeColor.WHITE, $Properties.copy(Blocks.IRON_BLOCK)))
    lightGrayShipChair = event.createCustom('light_gray_ship_chair', () => new $SofaBlock($DyeColor.LIGHT_GRAY, $Properties.copy(Blocks.IRON_BLOCK)))
    grayShipChair = event.createCustom('gray_ship_chair', () => new $SofaBlock($DyeColor.GRAY, $Properties.copy(Blocks.IRON_BLOCK)))
    blackShipChair = event.createCustom('black_ship_chair', () => new $SofaBlock($DyeColor.BLACK, $Properties.copy(Blocks.IRON_BLOCK)))

    brownShipChair = event.createCustom('brown_ship_chair', () => new $SofaBlock($DyeColor.BROWN, $Properties.copy(Blocks.IRON_BLOCK)))
    redShipChair = event.createCustom('red_ship_chair', () => new $SofaBlock($DyeColor.RED, $Properties.copy(Blocks.IRON_BLOCK)))
    orangeShipChair = event.createCustom('orange_ship_chair', () => new $SofaBlock($DyeColor.ORANGE, $Properties.copy(Blocks.IRON_BLOCK)))
    yellowShipChair = event.createCustom('yellow_ship_chair', () => new $SofaBlock($DyeColor.YELLOW, $Properties.copy(Blocks.IRON_BLOCK)))

    limeShipChair = event.createCustom('lime_ship_chair', () => new $SofaBlock($DyeColor.LIME, $Properties.copy(Blocks.IRON_BLOCK)))
    greenShipChair = event.createCustom('green_ship_chair', () => new $SofaBlock($DyeColor.GREEN, $Properties.copy(Blocks.IRON_BLOCK)))
    cyanShipChair = event.createCustom('cyan_ship_chair', () => new $SofaBlock($DyeColor.CYAN, $Properties.copy(Blocks.IRON_BLOCK)))
    lightBlueShipChair = event.createCustom('light_blue_ship_chair', () => new $SofaBlock($DyeColor.LIGHT_BLUE, $Properties.copy(Blocks.IRON_BLOCK)))

    blueShipChair = event.createCustom('blue_ship_chair', () => new $SofaBlock($DyeColor.BLUE, $Properties.copy(Blocks.IRON_BLOCK)))
    purpleShipChair = event.createCustom('purple_ship_chair', () => new $SofaBlock($DyeColor.PURPLE, $Properties.copy(Blocks.IRON_BLOCK)))
    magentaShipChair = event.createCustom('magenta_ship_chair', () => new $SofaBlock($DyeColor.MAGENTA, $Properties.copy(Blocks.IRON_BLOCK)))
    pinkShipChair = event.createCustom('pink_ship_chair', () => new $SofaBlock($DyeColor.PINK, $Properties.copy(Blocks.IRON_BLOCK)))

})

StartupEvents.registry('item', event => {

    event.createCustom('white_ship_chair', () => new $BlockItem(whiteShipChair.get(), new $IProperties()))
    event.createCustom('light_gray_ship_chair', () => new $BlockItem(lightGrayShipChair.get(), new $IProperties()))
    event.createCustom('gray_ship_chair', () => new $BlockItem(grayShipChair.get(), new $IProperties()))
    event.createCustom('black_ship_chair', () => new $BlockItem(blackShipChair.get(), new $IProperties()))

    event.createCustom('brown_ship_chair',() => new $BlockItem(brownShipChair.get(), new $IProperties()))
    event.createCustom('red_ship_chair',() => new $BlockItem(redShipChair.get(), new $IProperties()))
    event.createCustom('orange_ship_chair',() => new $BlockItem(orangeShipChair.get(), new $IProperties()))
    event.createCustom('yellow_ship_chair',() => new $BlockItem(yellowShipChair.get(), new $IProperties()))

    event.createCustom('lime_ship_chair',() => new $BlockItem(limeShipChair.get(), new $IProperties()))
    event.createCustom('green_ship_chair',() => new $BlockItem(greenShipChair.get(), new $IProperties()))
    event.createCustom('cyan_ship_chair',() => new $BlockItem(cyanShipChair.get(), new $IProperties()))
    event.createCustom('light_blue_ship_chair',() => new $BlockItem(lightBlueShipChair.get(), new $IProperties()))

    event.createCustom('blue_ship_chair',() => new $BlockItem(blueShipChair.get(), new $IProperties()))
    event.createCustom('purple_ship_chair',() => new $BlockItem(purpleShipChair.get(), new $IProperties()))
    event.createCustom('magenta_ship_chair',() => new $BlockItem(magentaShipChair.get(), new $IProperties()))
    event.createCustom('pink_ship_chair',() => new $BlockItem(pinkShipChair.get(), new $IProperties()))

})