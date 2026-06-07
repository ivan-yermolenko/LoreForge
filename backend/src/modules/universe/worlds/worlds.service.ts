import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { World } from "./entities/world.entity";
import { Repository } from "typeorm";

@Injectable()
export class WorldsService {
    constructor(
        @InjectRepository(World) private readonly worldRepository: Repository<World>,
    ) {}

    public async findById(id: string): Promise<World | null> {
        return this.worldRepository.findOne({ where: { id } });
    }
}
