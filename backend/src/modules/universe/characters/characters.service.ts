import { Injectable } from '@nestjs/common';
import { CharactersRepository } from './characters.repository';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  constructor(private readonly charactersRepository: CharactersRepository) {}

  async findByIds(ids: string[]): Promise<Character[]> {
    return this.charactersRepository.findByIds(ids);
  }

  async findByIdsAndWorldId(ids: string[], worldId: string): Promise<Character[]> {
    return this.charactersRepository.findByIdsAndWorldId(ids, worldId);
  }
}
