import { EntityRepository, Repository } from 'typeorm';
import { Pokemon } from '../entities/pokemon.entity';

@EntityRepository()
export class PokemonRepository extends Repository<Pokemon> {
  // Add custom query methods here if needed
}
