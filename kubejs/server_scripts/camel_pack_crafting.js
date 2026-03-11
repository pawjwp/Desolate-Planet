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
    // waterPurifyRecipe(Item.of('thirst:terracotta_water_bowl').weakNBT());


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

    // Advanced camel pack
    event.shaped(
        Item.of('kubejs:advanced_camel_pack', 1),
        [
            'FCF',
            'PBP',
            'FPF'
        ],
        {
            B: 'minecraft:bucket',
            C: '#desolate_planet:fluid_conduits',
            F: 'kubejs:insulated_hydraulic_fabric',
            P: 'kubejs:filtration_pocket'
        }
    ).id('desolate_planet:advanced_camel_pack');

    event.shaped(
        Item.of('kubejs:advanced_camel_pack', 1),
        [
            'FCF',
            'PWP',
            'FFF'
        ],
        {
            C: '#desolate_planet:fluid_conduits',
            F: 'kubejs:insulated_hydraulic_fabric',
            P: 'kubejs:filtration_pocket',
            W: 'kubejs:camel_pack'
        }
    )
    .modifyResult((grid, result) => {
        const camel_pack_input = grid.find(Ingredient.of('kubejs:camel_pack'));
        if (!camel_pack_input) return result;

        const fluid = camel_pack_input.nbt ? camel_pack_input.nbt.Fluid : null;
        if (!fluid || fluid.FluidName !== 'minecraft:water' || !fluid.Amount) return result;

        return Item.of('kubejs:advanced_camel_pack', `{Fluid:{Amount:${fluid.Amount},FluidName:"minecraft:water"}}`).strongNBT();
    })
    .id('desolate_planet:advanced_camel_pack_upgrade');

    // Unlimited camel pack
    event.shaped(
        Item.of('kubejs:unlimited_camel_pack', 1),
        [
            'ARA',
            'SWS',
            'ATA'
        ],
        {
            A: '#mekanism:alloys/atomic',
            R: 'thermal:upgrade_augment_3',
            S: 'ae2:cell_component_256k',
            T: 'mekanism:ultimate_fluid_tank',
            W: 'kubejs:advanced_camel_pack'
        }
    ).id('desolate_planet:unlimited_camel_pack');

    const FluidUtil = Java.loadClass('net.minecraftforge.fluids.FluidUtil');
    const ForgeRegs = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');

    // Filling recipe registration for a specific camel pack
    const camelPackFillRecipe = (itemId, capacity) => (input_item, fluid_id, fill_amount, leftovers) => {
        const inputItemId = (typeof input_item === 'string' ? Item.of(input_item).weakNBT().itemIds[0] : input_item.itemIds[0]).split(':').pop()
        event.recipes.kubejs
            .shapeless(
                Item.of(itemId, `{Fluid:{Amount:${fill_amount},FluidName:"${fluid_id}"}}`),
                [
                    input_item,
                    Item.of(itemId).weakNBT()
                ]
            )
            .replaceIngredient(input_item, leftovers)
            .modifyResult((grid, result) => {
                const camel_pack_input = grid.find(Ingredient.of(itemId));
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
                if (new_amount > capacity) return;

                return Item.of(itemId, `{Fluid:{Amount:${new_amount},FluidName:"${fluid_id}"}}`).strongNBT();
            })
            .id(`kubejs:${itemId.split(':').pop()}_fill/${fluid_id.split(':').pop()}/${inputItemId}`);
    };

    const CAMEL_PACK_TIERS = [
        { itemId: 'kubejs:camel_pack',          capacity: 4000  },
        { itemId: 'kubejs:advanced_camel_pack', capacity: 20000 },
    ]

    const CAMEL_PACK_FILL_RECIPES = [
        { input: 'minecraft:water_bucket',                                            fluidId: 'minecraft:water',             fillAmount: 1000, leftovers: 'minecraft:bucket'       },
        // { input: 'minecraft:lava_bucket',                                             fluidId: 'minecraft:lava',              fillAmount: 1000, leftovers: 'minecraft:bucket'       },
        // { input: 'minecraft:milk_bucket',                                             fluidId: 'minecraft:milk',              fillAmount: 1000, leftovers: 'minecraft:bucket'       },
        // { input: 'create:chocolate_bucket',                                           fluidId: 'create:chocolate',            fillAmount: 1000, leftovers: 'minecraft:bucket'       },
        // { input: 'create:honey_bucket',                                               fluidId: 'create:honey',                fillAmount: 1000, leftovers: 'minecraft:bucket'       },
        // { input: '#desolate_planet:experience_buckets',                               fluidId: 'industrialforegoing:essence', fillAmount: 1000, leftovers: 'minecraft:bucket'       },
        { input: Item.of('minecraft:potion', '{Potion:"minecraft:water"}').weakNBT(), fluidId: 'minecraft:water',             fillAmount: 250,  leftovers: 'minecraft:glass_bottle' },
        // { input: 'minecraft:experience_bottle',                                       fluidId: 'industrialforegoing:essence', fillAmount: 250,  leftovers: 'minecraft:glass_bottle' },
        // { input: 'minecraft:honey_bottle',                                            fluidId: 'create:honey',                fillAmount: 250,  leftovers: 'minecraft:glass_bottle' },
        // { input: 'minecraft:honey_block',                                             fluidId: 'create:honey',                fillAmount: 1000, leftovers: ''                       },
        // { input: 'create:bar_of_chocolate',                                           fluidId: 'create:chocolate',            fillAmount: 250,  leftovers: ''                       },
    ]

    // Register all fill recipes for every tier
    CAMEL_PACK_TIERS.forEach(tier => {
        const itemId = tier.itemId;
        const capacity = tier.capacity;
        const fill = camelPackFillRecipe(itemId, capacity)
        CAMEL_PACK_FILL_RECIPES.forEach(recipe => {
            const input = recipe.input;
            const fluidId = recipe.fluidId;
            const fillAmount = recipe.fillAmount;
            const leftovers = recipe.leftovers;
            fill(input, fluidId, fillAmount, leftovers)
        })
    })
});
