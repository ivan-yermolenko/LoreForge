import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsRepository extends Repository<Tag> {
  constructor(private readonly dataSource: DataSource) {
    super(Tag, dataSource.createEntityManager());
  }

  async findByName(name: string): Promise<Tag | null> {
    return this.findOne({ where: { name } });
  }
}
