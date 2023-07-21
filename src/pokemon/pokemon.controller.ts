import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller()
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @MessagePattern('createPokemon')
  create(@Payload() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @MessagePattern('findAllPokemon')
  findAll() {
    return this.pokemonService.findAll();
  }

  @MessagePattern('findOnePokemon')
  findOne(@Payload() id: string) {
    return this.pokemonService.findOne(id);
  }

  @MessagePattern('updatePokemon')
  update(@Payload() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(updatePokemonDto.id, updatePokemonDto);
  }

  @MessagePattern('removePokemon')
  remove(@Payload() id: string) {
    return this.pokemonService.remove(id);
  }
}
