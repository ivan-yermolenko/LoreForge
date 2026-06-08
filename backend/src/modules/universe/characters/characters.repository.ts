import { Injectable } from '@nestjs/common';
import { DataSource, Repository, In } from 'typeorm';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersRepository extends Repository<Character> {
  constructor(private readonly dataSource: DataSource) {
    super(Character, dataSource.createEntityManager());
  }

  async findByIds(ids: string[]): Promise<Character[]> {
    return this.findBy({
      id: In(ids),
    });
  }

  async findByIdsAndWorldId(ids: string[], worldId: string): Promise<Character[]> {
    return this.find({
      where: {
        id: In(ids),
        world: { id: worldId }
      }
    });
  }
}
