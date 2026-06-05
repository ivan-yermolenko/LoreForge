import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

export class UserResponseDto {
  @ApiProperty({
    description: 'Унікальний ідентифікатор користувача (UUID)',
    example: 'd3b07384-d113-4959-a5f1-5e84193416bc',
  })
  id!: string;

  @ApiProperty({
    description: 'Адреса електронної пошти',
    example: 'user@example.com',
  })
  email!: string;

  @ApiPropertyOptional({
    description: 'Нікнейм користувача',
    example: 'lore_master',
  })
  nickname!: string | null;

  @ApiPropertyOptional({
    description: "Ім'я користувача",
    example: 'Іван',
  })
  firstName!: string | null;

  @ApiPropertyOptional({
    description: 'Прізвище користувача',
    example: 'Єрмоленко',
  })
  lastName!: string | null;

  @ApiProperty({
    description: 'Статус активності акаунту',
    example: true,
  })
  isActive!: boolean;

  @ApiProperty({
    description: 'Дата створення акаунту',
    example: '2026-06-05T10:21:48.000Z',
  })
  createdAt!: Date;

  @ApiProperty({
    description: 'Дата останнього оновлення акаунту',
    example: '2026-06-05T10:21:48.000Z',
  })
  updatedAt!: Date;

  public static fromEntity(user: User): UserResponseDto {
    const dto = new UserResponseDto();
    const { id, email, nickname, firstName, lastName, isActive, createdAt, updatedAt } = user;
    Object.assign(dto, { id, email, nickname, firstName, lastName, isActive, createdAt, updatedAt });
    return dto;
  }
}
