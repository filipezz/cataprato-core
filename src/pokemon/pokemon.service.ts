import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PokemonRepository } from './repositories/pokemon.repository';

@Injectable()
export class PokemonService {
  constructor(private pokemonRepository: PokemonRepository) {}
  async create(createPokemonDto: CreatePokemonDto) {
    await this.pokemonRepository.save(createPokemonDto);
  }

  async findAll() {
    await this.pokemonRepository.find();
  }

  async findOne(id: string) {
    await this.pokemonRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    await this.pokemonRepository.update(
      {
        id,
      },
      {
        ...updatePokemonDto,
      },
    );
  }

  async remove(id: string) {
    await this.pokemonRepository.delete(id);
  }
}
