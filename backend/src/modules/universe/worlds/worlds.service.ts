import { Injectable } from '@nestjs/common';
import { WorldsRepository } from './worlds.repository';
import { World } from './entities/world.entity';

@Injectable()
export class WorldsService {
  constructor(private readonly worldsRepository: WorldsRepository) {}

  public async findById(id: string): Promise<World | null> {
    return this.worldsRepository.findById(id);
  }
}
