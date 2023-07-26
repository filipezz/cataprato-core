import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Get()
  auebajr(@Payload() createIngredientDto: CreateIngredientDto) {
    return this.ingredientsService.findAll();
  }

  @MessagePattern('createIngredients')
  aueba(@Payload() createIngredientDto: CreateIngredientDto) {
    return this.ingredientsService.findAll();
  }
}
