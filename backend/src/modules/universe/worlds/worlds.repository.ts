import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { World } from './entities/world.entity';

@Injectable()
export class WorldsRepository extends Repository<World> {
  constructor(private readonly dataSource: DataSource) {
    super(World, dataSource.createEntityManager());
  }

  async findById(id: string): Promise<World | null> {
    return this.findOne({ where: { id } });
  }
}
