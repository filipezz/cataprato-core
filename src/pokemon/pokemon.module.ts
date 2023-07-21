import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { PokemonRepository } from './repositories/pokemon.repository';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService, PokemonRepository],
})
export class PokemonModule {}
