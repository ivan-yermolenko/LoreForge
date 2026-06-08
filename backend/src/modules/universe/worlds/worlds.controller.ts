import { Controller, Get, HttpStatus, Param, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { WorldsService } from './worlds.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { WorldDto } from './dto/world.dto';
import { plainToInstance } from 'class-transformer';

@ApiTags('worlds')
@Controller('worlds')
export class WorldsController {
  constructor(private readonly worldsService: WorldsService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Отримання світу користувача за ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID ідентифікатор світу',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Світ успішно знайдено.',
    type: WorldDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Світу з таким ID не знайдено.',
  })
  public async findOne(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<WorldDto> {
    const world = await this.worldsService.findById(id);
    if (!world) {
      throw new NotFoundException(`Світ з ID ${id} не знайдено`);
    }
    return plainToInstance(WorldDto, world, { excludeExtraneousValues: true });
  }
}
