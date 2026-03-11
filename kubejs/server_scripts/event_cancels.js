BlockEvents.rightClicked(event => {
    const { player, block, item } = event;

    // Deny right-clicking water with a bowl or terracotta bowl
    if (block.id === 'minecraft:water') {
        if (item.id === 'minecraft:bowl' || item.id === 'thirst:terracotta_bowl') {
            event.cancel();
            return;
        }
    }

    // Deny right-clicking any block tagged as a sink
    if (block.hasTag('desolate_planet:sinks')) {
        event.cancel();
    }
});