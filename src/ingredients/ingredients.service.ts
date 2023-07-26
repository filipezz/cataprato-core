import { Injectable } from '@nestjs/common';
import { IngredientsRepository } from './repositories/ingredients.repository';

@Injectable()
export class IngredientsService {
  constructor(private ingredientsRepository: IngredientsRepository) {}

  async findAll() {
    return 'aueba';
  }
}
