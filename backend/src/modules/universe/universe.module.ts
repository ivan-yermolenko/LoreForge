import { Module } from '@nestjs/common';
import { WorldsService } from './worlds/worlds.service';
import { WorldsController } from './worlds/worlds.controller';
import { UniverseService } from "./universe.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { World } from "./worlds/entities/world.entity";

@Module({
  imports: [TypeOrmModule.forFeature([World])],
  controllers: [WorldsController],
  providers: [WorldsService, UniverseService],
  exports: [UniverseService],
})
export class UniverseModule {}
