import { Expose, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { LoreDetails } from '../interfaces/lore-details.interface';
import { TagDto } from '../../tags/dto/tag.dto';
import { CharacterDto } from '../../characters/dto/character.dto';

export class WorldDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Унікальний ідентифікатор світу' })
  @Expose()
  id!: string;

  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID власника світу (користувача)' })
  @Expose()
  ownerId!: string;

  @ApiProperty({ example: 'Середзем\'я', description: 'Назва світу' })
  @Expose()
  title!: string;

  @ApiProperty({ example: 'Дивовижний світ магії та пригод...', description: 'Опис світу' })
  @Expose()
  description!: string;

  @ApiPropertyOptional({
    description: 'Деталі лору світу (атмосфера, масштаб, система магії, географія, фракції)',
    example: {
      atmosphere: 'Темне фентезі',
      scale: 'Глобальний',
      magicSystem: 'Рунічна магія',
      geography: 'Гори, ліси, пустелі',
      factions: ['Братство Сталі', 'Вартові Світанку']
    }
  })
  @Expose()
  loreDetails?: LoreDetails;

  @ApiProperty({ example: '2026-06-08T09:20:04Z', description: 'Дата створення' })
  @Expose()
  createdAt!: Date;

  @ApiProperty({ example: '2026-06-08T09:20:04Z', description: 'Дата оновлення' })
  @Expose()
  updatedAt!: Date;

  @ApiPropertyOptional({ type: () => [TagDto], description: 'Теги світу' })
  @Expose()
  @Type(() => TagDto)
  tags?: TagDto[];

  @ApiPropertyOptional({ type: () => [CharacterDto], description: 'Персонажі цього світу' })
  @Expose()
  @Type(() => CharacterDto)
  characters?: CharacterDto[];
}
