import { Expose } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { CharacterDetails } from '../interfaces/character-details.interface';

export class CharacterDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Унікальний ідентифікатор персонажа' })
  @Expose()
  id!: string;

  @ApiProperty({ example: 'Джон Сноу', description: 'Ім\'я персонажа' })
  @Expose()
  name!: string;

  @ApiProperty({ example: 'Народився в родині короля півночі...', description: 'Біографія персонажа' })
  @Expose()
  biography!: string;

  @ApiProperty({ example: true, description: 'Чи є персонаж NPC', default: true })
  @Expose()
  isNpc!: boolean;

  @ApiPropertyOptional({
    description: 'Деталі персонажа (зовнішність, характер, екіпірування, характеристики)',
    example: {
      appearance: 'Високий, чорнявий',
      personality: 'Мовчазний, хоробрий',
      equipment: ['Меч', 'Шкіряний обладунок'],
      customStats: { strength: 15, agility: 12 }
    }
  })
  @Expose()
  characterDetails?: CharacterDetails;

  @ApiProperty({ example: '2026-06-08T09:20:04Z', description: 'Дата створення' })
  @Expose()
  createdAt!: Date;

  @ApiProperty({ example: '2026-06-08T09:20:04Z', description: 'Дата оновлення' })
  @Expose()
  updatedAt!: Date;
}
