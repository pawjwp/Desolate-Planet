JEIEvents.hideItems(event => {
    [
        'exdeorum:bone_crook',
        'exdeorum:netherite_hammer',
        'exdeorum:compressed_netherite_hammer'

    ].forEach(itemId => {
        event.hide(itemId);
    });
});