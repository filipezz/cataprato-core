import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  auebajr(@Payload() createPokemonDto: CreatePokemonDto) {
    console.log(createPokemonDto);
    return this.pokemonService.findAll();
  }

  @MessagePattern('createPokemon')
  aueba(@Payload() createPokemonDto: CreatePokemonDto) {
    console.log(createPokemonDto);
    return this.pokemonService.findAll();
  }
}
