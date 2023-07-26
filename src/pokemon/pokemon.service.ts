import { Injectable } from '@nestjs/common';
import { PokemonRepository } from './repositories/pokemon.repository';

@Injectable()
export class PokemonService {
  constructor(private pokemonRepository: PokemonRepository) {}

  async findAll() {
    return 'aueba';
  }
}
