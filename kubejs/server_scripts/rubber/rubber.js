ServerEvents.recipes(event => {
    // Smelting recipe: Rubberwood log to rubber
    event.smelting('thermal:rubber', 'thermal:rubberwood_log').xp(0.1);

    // Blasting recipe: Rubberwood log to rubber
    event.blasting('thermal:rubber', 'thermal:rubberwood_log').xp(0.1);

});
