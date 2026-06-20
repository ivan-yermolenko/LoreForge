import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { World } from './worlds/entities/world.entity';
import { Character } from './characters/entities/character.entity';
import { Tag } from './tags/entities/tag.entity';

import { UniverseService } from './universe.service';
import { WorldsService } from './worlds/worlds.service';
import { CharactersService } from './characters/characters.service';
import { TagsService } from './tags/tags.service';

import { WorldsRepository } from './worlds/worlds.repository';
import { CharactersRepository } from './characters/characters.repository';
import { TagsRepository } from './tags/tags.repository';

import { WorldsController } from './worlds/worlds.controller';
import { CharactersController } from './characters/characters.controller';
import { TagsController } from './tags/tags.controller';

@Module({
  imports: [TypeOrmModule.forFeature([World, Character, Tag])],
  controllers: [WorldsController, CharactersController, TagsController],
  providers: [
    UniverseService,
    WorldsService,
    CharactersService,
    TagsService,
    WorldsRepository,
    CharactersRepository,
    TagsRepository,
  ],
  exports: [UniverseService],
})
export class UniverseModule {}
