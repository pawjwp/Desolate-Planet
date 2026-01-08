let DEFAULT_PURITY = 2;

let needsPurity = (itemId, nbt) => {
    if (itemId === 'minecraft:water_bucket' || itemId === 'thirst:terracotta_water_bowl') {
        return !nbt || nbt.isEmpty();
    }
    if (itemId === 'minecraft:potion') {
        return nbt && nbt.getString('Potion') === 'minecraft:water' && !nbt.contains('Purity');
    }
    return false;
};

PlayerEvents.inventoryChanged((event) => {
    let itemId = '' + event.item.id;
    
    if (!needsPurity(itemId, event.item.nbt)) return;
    
    event.player.server.scheduleInTicks(1, () => {
        let inventory = event.player.inventory;
        
        for (let slot = 0; slot < inventory.containerSize; slot++) {
            let slotItem = inventory.getItem(slot);
            if ('' + slotItem.id !== itemId || !needsPurity(itemId, slotItem.nbt)) continue;
            
            let newNbt;
            if (itemId === 'minecraft:potion') {
                newNbt = `{Potion:"minecraft:water",Purity:${DEFAULT_PURITY}}`;
            } else {
                newNbt = `{Purity:${DEFAULT_PURITY}}`;
            }
            
            let newItem = Item.of(itemId, newNbt);
            newItem.setCount(slotItem.count);
            inventory.setItem(slot, newItem);
        }
    });
});