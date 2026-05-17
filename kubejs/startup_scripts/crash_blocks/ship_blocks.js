StartupEvents.registry("block", (event) => {
  event.create("light_plasteel_block")
    .mapColor("snow")
    .soundType("metal")
    .hardness(1.8)
    .resistance(6.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tag("desolate_planet:plasteel_block")
    .tag("forge:storage_blocks/plasteel")
    .textureAll('kubejs:block/light_plasteel_block')

  event.create("dark_plasteel_block")
    .mapColor("color_black")
    .soundType("metal")
    .hardness(1.8)
    .resistance(6.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .tag("desolate_planet:plasteel_block")
    .tag("forge:storage_blocks/plasteel")
    .textureAll('kubejs:block/dark_plasteel_block')

  event.create("blazing_block")
    .mapColor("color_orange")
    .soundType("moss")
    .hardness(1.8)
    .resistance(1.0)
    .requiresTool(false)
    .tagBlock("mineable/pickaxe")
    .tag("forge:storage_blocks/blaze_rod")
    .model('kubejs:block/blazing_block')

  event.create("ostrum_door_block")
    .mapColor("color_purple")
    .soundType("metal")
    .hardness(5.0)
    .resistance(6.0)
    .requiresTool(true)
    .tagBlock("mineable/pickaxe")
    .defaultCutout()
    .property(BlockProperties.FACING)
    .placementState(event => event.set(BlockProperties.FACING, event.clickedFace))
    .model("kubejs:block/ostrum_door_block")
    .blockstateJson = {
    "variants": {
      "facing=north": {
        "model": "kubejs:block/ostrum_door_block",
        "x": 90
      },
      "facing=east": {
        "model": "kubejs:block/ostrum_door_block",
        "x": 90,
        "y": 90
      },
      "facing=south": {
        "model": "kubejs:block/ostrum_door_block",
        "x": 90,
        "y": 180
      },
      "facing=west": {
        "model": "kubejs:block/ostrum_door_block",
        "x": 90,
        "y": 270
      },
      "facing=up": {
        "model": "kubejs:block/ostrum_door_block"
      },
      "facing=down": {
        "model": "kubejs:block/ostrum_door_block",
        "x": 180
      }
    }
  }
})