import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import type { CharacterDetails } from '../interfaces/character-details.interface';

export class CreateCharacterDto {
  @ApiProperty({
    example: 'Джон Сноу',
    description: "Ім'я персонажа",
    maxLength: 100,
  })
  @IsString({ message: "Ім'я повинно бути рядком" })
  @MaxLength(100, { message: "Ім'я не може бути довшим за 100 символів" })
  @IsNotEmpty({ message: "Ім'я не може бути порожнім" })
  public name!: string;

  @ApiProperty({
    example: 'Народився в родині короля півночі...',
    description: 'Біографія персонажа',
  })
  @IsString({ message: 'Біографія повинна бути рядком' })
  @IsNotEmpty({ message: 'Біографія не може бути порожньою' })
  public biography!: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Чи є персонаж NPC',
    default: true,
  })
  @IsOptional()
  @IsBoolean({ message: 'isNpc має бути логічним значенням' })
  public isNpc?: boolean;

  @ApiPropertyOptional({
    description:
      'Деталі персонажа (зовнішність, характер, екіпірування, характеристики)',
    example: {
      appearance: 'Високий, чорнявий',
      personality: 'Мовчазний, хоробрий',
      equipment: ['Меч', 'Шкіряний обладунок'],
      customStats: { strength: 15, agility: 12 },
    },
  })
  @IsOptional()
  @IsObject({ message: "Деталі персонажа мають бути об'єктом" })
  public characterDetails?: CharacterDetails;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'ID світу, до якого належить персонаж',
  })
  @IsUUID('4', { message: 'ID світу має бути валідним UUID v4' })
  @IsNotEmpty({ message: 'ID світу не може бути порожнім' })
  public worldId!: string;
}
