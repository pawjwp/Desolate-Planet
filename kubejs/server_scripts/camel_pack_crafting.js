ServerEvents.recipes(event => {
    // Filter recipes
    event.shaped(
        Item.of('kubejs:filter', 1),
        [
            'PGP',
            'PCP',
            ' P '
        ],
        {
            C: 'minecraft:charcoal',
            G: '#forge:gravel',
            P: 'minecraft:paper'
        }
    ).id('desolate_planet:filter');

    const waterPurifyRecipe = (input_item) => {
        const input_id = input_item.itemIds[0];

        event.recipes.kubejs
            .shapeless(
                Item.of(input_id, input_id === 'minecraft:potion' ? '{Potion:"minecraft:water",Purity:3}' : '{Purity:3}'),
                [
                    'kubejs:filter',
                    input_item
                ]
            )
            .damageIngredient(Ingredient.of('kubejs:filter'), 1)
            .replaceIngredient(input_item, 'minecraft:air')
            .modifyResult((grid, result) => {
                const container_input = grid.find(Ingredient.of(input_id));
                const filter_input = grid.find(Ingredient.of('kubejs:filter'));
                if (!container_input || !filter_input) return;

                // Get NBT of input container
                const inputNBT = container_input.nbt || new CompoundTag();
                // If potion data is present, ensure it is the same as the inserted fluid
                if (inputNBT.Potion && inputNBT.Potion !== 'minecraft:water') return;

                let current_purity = 2;
                if (inputNBT && inputNBT.Purity !== undefined) {
                    current_purity = inputNBT.Purity;
                }

                // Reject if purity is not between 0 and 2 (3 is valid but does not need further purification)
                if (current_purity < 0 || current_purity >= 3) return;
                
                const container_output = Item.of(input_id, container_input.nbt ? container_input.nbt.copy() : new CompoundTag());
                container_output.nbt.putInt('Purity', Math.min(current_purity + 1, 3));
                return container_output;
            })
            .id(`kubejs:filter_purification/${input_id.split(':').pop()}`);
    };

    // Recipe definitions
    waterPurifyRecipe(Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT());
    waterPurifyRecipe(Item.of('minecraft:water_bucket').weakNBT());
    waterPurifyRecipe(Item.of('thirst:terracotta_water_bowl').weakNBT());


    event.recipes.kubejs
        .shapeless(
            Item.of('minecraft:potion', 4, '{Potion:"minecraft:water"}'),
            [
                Item.of('minecraft:water_bucket').weakNBT(),
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle',
                'minecraft:glass_bottle'
            ]
        )
        .modifyResult((grid, result) => {
            const bucket = grid.find(Ingredient.of('minecraft:water_bucket'));
            if (!bucket) return;
            const nbtTag = bucket.nbt || new CompoundTag();
            const purity = nbtTag.Purity !== undefined ? nbtTag.Purity : 2;
            return Item.of('minecraft:potion', 4, `{Potion:"minecraft:water",Purity:${purity}}`).strongNBT();
        })
        .id('kubejs:water_bucket_to_bottles');



    // Camel pack
    event.shaped(
        Item.of('kubejs:camel_pack', 1),
        [
            'SLS',
            'LFL',
            'LBL'
        ],
        {
            B: 'minecraft:bucket',
            F: 'kubejs:filter',
            L: '#forge:leather',
            S: '#forge:string'
        }
    ).id('desolate_planet:camel_pack');

    const FluidUtil = Java.loadClass('net.minecraftforge.fluids.FluidUtil');
    const ForgeRegs = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');

    const camelPackFillRecipe = (input_item, fluid_id, fill_amount, leftovers) => {
        event.recipes.kubejs
            .shapeless(
                Item.of('kubejs:camel_pack', `{Fluid:{Amount:${fill_amount},FluidName:"${fluid_id}"}}`),
                [
                    input_item,
                    Item.of('kubejs:camel_pack').weakNBT()
                ]
            )
            .replaceIngredient(input_item, leftovers)
            .modifyResult((grid, result) => {
                const camel_pack_input = grid.find(Ingredient.of('kubejs:camel_pack'));
                const fluid_container_input = grid.find(input_item);
                if (!camel_pack_input || !fluid_container_input) return;

                // If fluid ID is not set, attempt to read it from the input container
                if (!fluid_id) {
                    const fluid_contained = FluidUtil.getFluidContained(fluid_container_input);
                    if (!fluid_contained.isPresent()) return;

                    fluid_id = ForgeRegs.FLUIDS.getKey(fluid_contained.get().getFluid()).toString();
                }

                // Get NBT of input container
                const nbtTag = fluid_container_input.nbt || new CompoundTag();
                // If purity is present, ensure it is 2 or above
                if (nbtTag.contains('Purity') && nbtTag.Purity < 2) return;
                // If potion data is present, ensure it is the same as the inserted fluid
                if (nbtTag.Potion && nbtTag.Potion !== fluid_id) return;

                // Read current camel pack fluid state
                const current_camel_pack_fluid = camel_pack_input.nbt?.Fluid?.FluidName || null;
                const current_camel_pack_amount = camel_pack_input.nbt?.Fluid?.Amount || 0;

                // Ensure the camel pack does not contain a different fluid
                if (current_camel_pack_fluid !== fluid_id && current_camel_pack_amount > 0) return;

                const new_amount = current_camel_pack_amount + fill_amount;
                if (new_amount > 4000) return;

                return Item.of('kubejs:camel_pack', `{Fluid:{Amount:${new_amount},FluidName:"${fluid_id}"}}`).strongNBT();
            })
            .id(`kubejs:camel_pack_fill${fluid_id ? '/' + fluid_id.split(':').pop() : ''}/${(typeof input_item === 'string' ? Item.of(input_item).weakNBT().itemIds[0] : input_item.itemIds[0]).split(':').pop()}`);
    };

    // Recipe definitions
    camelPackFillRecipe('minecraft:water_bucket', 'minecraft:water', 1000, 'minecraft:bucket');
    // camelPackFillRecipe('minecraft:lava_bucket', 'minecraft:lava', 1000, 'minecraft:bucket');
    // camelPackFillRecipe('minecraft:milk_bucket', 'minecraft:milk', 1000, 'minecraft:bucket');
    // camelPackFillRecipe('create:chocolate_bucket', 'create:chocolate', 1000, 'minecraft:bucket');
    // camelPackFillRecipe('create:honey_bucket', 'create:honey', 1000, 'minecraft:bucket');
    // camelPackFillRecipe('#desolate_planet:experience_buckets', 'industrialforegoing:essence', 1000, 'minecraft:bucket');

    camelPackFillRecipe(Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT(), 'minecraft:water', 250, 'minecraft:glass_bottle');

    // camelPackFillRecipe('minecraft:experience_bottle', 'industrialforegoing:essence', 250, 'minecraft:glass_bottle');
    // camelPackFillRecipe('minecraft:honey_bottle', 'create:honey', 250, 'minecraft:glass_bottle');
    // camelPackFillRecipe('minecraft:honey_block', 'create:honey', 1000, '');
    // camelPackFillRecipe('create:bar_of_chocolate', 'create:chocolate', 250, '');
});