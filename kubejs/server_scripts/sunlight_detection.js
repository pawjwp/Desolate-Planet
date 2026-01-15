// const BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
const CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag');
const Temperature = Java.loadClass('com.momosoftworks.coldsweat.api.util.Temperature');
const Placement = Java.loadClass('com.momosoftworks.coldsweat.api.util.placement.Placement');
const Matcher = Java.loadClass('com.momosoftworks.coldsweat.api.util.placement.Matcher');
const Order = Java.loadClass('com.momosoftworks.coldsweat.api.util.placement.Order');
const TempModifierRegistry = Java.loadClass('com.momosoftworks.coldsweat.api.registry.TempModifierRegistry');
// const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');

PlayerEvents.tick(event => {
    const player = event.player;
    if (player.age % 5 !== 0) return;

    const level = player.level;
    const dimensionHasSky = level.dimensionType().hasSkyLight();
    const posAbove = new BlockPos(player.blockX, player.blockY + 1, player.blockZ);
    const inSun = level.canSeeSkyFromBelowWater(posAbove) && level.isDay() && !level.isRainingAt(posAbove);

    // remove modifiers if player is in sun or N/A
    if (inSun || !dimensionHasSky) {
        Temperature.removeModifiers(
            player, coldsweat.getTrait('world'), 99, Order.FIRST,
            (modifier) => {
                if (!TempModifierRegistry
                    .getKey(modifier)
                    .equals(new ResourceLocation('cold_sweat:simple'))
                ) return false;
                return modifier.getNBT().getString('desolate_planet') === 'shade';
            }
        );
        return;
    }
    // add the temp modifier back when in shade
    if (!inSun && dimensionHasSky) {
        var modifier = coldsweat.createModifier('cold_sweat:simple');
        var nbtTag = new CompoundTag();
        nbtTag.putDouble('Temperature', -(3 / 45));
        nbtTag.putString('Operation', 'add');
        nbtTag.putString('desolate_planet', 'shade');
        modifier.setNBT(nbtTag);
        modifier.markDirty();
        Temperature.replaceOrAddModifier(player, modifier, coldsweat.getTrait('world'), Matcher.SAME_CLASS);
    }
});