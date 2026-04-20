BlockEvents.modification(event => {

    event.modify('sync:shell_constructor', block => {
        block.explosionResistance = 100;
    });
    event.modify('sync:shell_storage', block => {
        block.explosionResistance = 100;
    });
});