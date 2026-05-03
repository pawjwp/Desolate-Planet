// Registers /exportfood - logs nutrition + saturationModifier of every food item to console

const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');

ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event;

  event.register(
    Commands.literal('exportfood')
      .requires(source => source.hasPermission(2))
      .executes(ctx => {
        const entries = [];

        BuiltInRegistries.ITEM.forEach(item => {
          const stack = item.getDefaultInstance();
          const food = item.getFoodProperties(stack, null);
          if (!food) return;

          const id = BuiltInRegistries.ITEM.getKey(item).toString();
          entries.push({
            id: id,
            name: stack.getHoverName().getString(),
            nutrition: food.getNutrition(),
            saturationModifier: food.getSaturationModifier(),
            saturationGained: food.getNutrition() * food.getSaturationModifier() * 2.0,
            canAlwaysEat: food.canAlwaysEat(),
            fastFood: food.isFastFood(),
            meat: food.isMeat()
          });
        });

        entries.sort((a, b) => a.id.localeCompare(b.id));

        console.log(`FOOD EXPORT (${entries.length} items)`);
        entries.forEach(e => {
          console.log(`${e.id}  name="${e.name}"  nutrition=${e.nutrition}  satMod=${e.saturationModifier}  satGained=${e.saturationGained}  canAlwaysEat=${e.canAlwaysEat}  fastFood=${e.fastFood}  meat=${e.meat}`);
        });
        console.log('END FOOD EXPORT');

        ctx.getSource().sendSuccess(Text.green(`Logged ${entries.length} food items to console`), false);
        return 1;
      })
  );
});
