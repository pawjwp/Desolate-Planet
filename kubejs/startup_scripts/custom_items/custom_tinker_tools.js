const $ItemProperties = Java.loadClass("net.minecraft.world.item.Item$Properties");
const $ModifiableItem = Java.loadClass("slimeknights.tconstruct.library.tools.item.ModifiableItem");
const $ToolDefinition = Java.loadClass("slimeknights.tconstruct.library.tools.definition.ToolDefinition");
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");

StartupEvents.registry("item", (event) => {
  event.createCustom(
    "kubejs:crook",
    () => new $ModifiableItem(new $ItemProperties().stacksTo(1), $ToolDefinition.create("kubejs:crook"))
  );
});

ItemEvents.modelProperties((event) => {
  event.register(
    "kubejs:crook",
    new ResourceLocation("tconstruct:broken"),
    /** @type {Internal.BooleanItemPropertyFunction} */
    (stack) => {
      if (!stack || !stack.nbt) return 0;
      const isBroken = stack.nbt.contains("tic_broken") && stack.nbt.getBoolean("tic_broken");
      return isBroken ? 1 : 0;
    }
  );
});
