import { Module } from '@nestjs/common';
import { IngredientModule } from './ingredients/ingredients.module';
import { AppController } from './app.controller';

@Module({
  imports: [IngredientModule],
  controllers: [AppController],
})
export class AppModule {}
