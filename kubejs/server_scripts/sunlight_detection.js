// const BlockPos = Java.loadClass('net.minecraft.core.BlockPos');
const CompoundTag = Java.loadClass('net.minecraft.nbt.CompoundTag');
const Temperature = Java.loadClass('com.momosoftworks.coldsweat.api.util.Temperature');
const Placement = Java.loadClass('com.momosoftworks.coldsweat.api.util.placement.Placement');
const Matcher = Java.loadClass('com.momosoftworks.coldsweat.api.util.placement.Matcher');
const Order = Java.loadClass('com.momosoftworks.coldsweat.api.util.placement.Order');
const TempModifierRegistry = Java.loadClass('com.momosoftworks.coldsweat.api.registry.TempModifierRegistry');
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');


// Run every 5 ticks (4 times per second)
const TICK_INTERVAL = 5;

const THIRST_DRAIN_BASE = 0.0; // baseline thirst drain per second (4 exhaustion per thirst point)
const THIRST_DRAIN_MAX = 0.32; // peak thirst drain per second (4 exhaustion per thirst point)

PlayerEvents.tick(event => {
    // RUN AT GIVEN INTERVAL

    const player = event.player;
    if (player.age % TICK_INTERVAL !== 0) return;



    // FIX MISSING WORLD MODIFIERS

    // If cold_sweat:biomes modifier is missing, add all world modifiers back
    // This bug appears to have been fixed in the latest versions, but
    // since it is nearly impossible to test, I am leaving this in place

    const worldModifiers = Temperature.getModifiers(player, coldsweat.getTrait('world'));
    let hasBiomes = false;
    for (let i = 0; i < worldModifiers.size(); i++) {
        var key = TempModifierRegistry.getKey(worldModifiers.get(i));
        if (key.equals(new ResourceLocation('cold_sweat:biomes'))) {
            hasBiomes = true;
            break;
        }
    }
    if (!hasBiomes) {
        var modifiersToRestore = [
            'cold_sweat:biomes',
            'cold_sweat:shade',
            'cold_sweat:elevation',
            'cold_sweat:cave_biomes',
            'cold_sweat:blocks',
            'cold_sweat:entities',
            'ad_astra:oxygen',
            'cold_sweat:inventory_items',
        ];
        modifiersToRestore.forEach(id => {
            const modifier = coldsweat.createModifier(id);
            if (modifier !== null) {
                Temperature.replaceOrAddModifier(player, modifier, coldsweat.getTrait('world'), Matcher.SAME_CLASS);
            }
        });
    }



    // SHADE MODIFIER

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
    } else if (!inSun && dimensionHasSky) {
        // add the temp modifier back when in shade
        var modifier = coldsweat.createModifier('cold_sweat:simple');
        var nbtTag = new CompoundTag();
        // in Minecraft Units, divided by 45 to get 3 degrees F (divide by 25 to get C)
        nbtTag.putDouble('Temperature', -(3 / 45));
        nbtTag.putString('Operation', 'add');
        nbtTag.putString('desolate_planet', 'shade');
        modifier.setNBT(nbtTag);
        modifier.markDirty();
        Temperature.replaceOrAddModifier(player, modifier, coldsweat.getTrait('world'), Matcher.SAME_CLASS);
    }


/*
    // PASSIVE THIRST DRAIN

    var thirstCap = player.getCapability(ThirstCapabilities.
    PLAYER_THIRST, null).orElse(null);
    if (thirstCap) {
        // body temp is 0-100 scale
        var bodyTemp = coldsweat.getTemperature(player, 'body');
        var ratePerSec;

        // if temperature isn't a number >= 1, use default rate
        if (!isFinite(bodyTemp) || bodyTemp < 1) {
            ratePerSec = THIRST_DRAIN_BASE;
        }
        // scale THIRST_DRAIN_MAX by body temperature and add THIRST_DRAIN_BASE
        else {
            ratePerSec = THIRST_DRAIN_BASE + (bodyTemp * (THIRST_DRAIN_MAX - THIRST_DRAIN_BASE))/100;
        }

        thirstCap.addExhaustion(player, ratePerSec * (TICK_INTERVAL / 20));
    }
*/
});