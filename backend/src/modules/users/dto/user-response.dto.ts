import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserResponseDto {
  @ApiProperty({
    description: 'Унікальний ідентифікатор користувача (UUID)',
    example: 'd3b07384-d113-4959-a5f1-5e84193416bc',
  })
  @Expose()
  id!: string;

  @ApiProperty({
    description: 'Адреса електронної пошти',
    example: 'user@example.com',
  })
  @Expose()
  email!: string;

  @ApiPropertyOptional({
    description: 'Нікнейм користувача',
    example: 'lore_master',
  })
  @Expose()
  nickname!: string | null;

  @ApiPropertyOptional({
    description: "Ім'я користувача",
    example: 'Іван',
  })
  @Expose()
  firstName!: string | null;

  @ApiPropertyOptional({
    description: 'Прізвище користувача',
    example: 'Єрмоленко',
  })
  @Expose()
  lastName!: string | null;

  @ApiProperty({
    description: 'Статус активності акаунту',
    example: true,
  })
  @Expose()
  isActive!: boolean;

  @ApiProperty({
    description: 'Дата створення акаунту',
    example: '2026-06-05T10:21:48.000Z',
  })
  @Expose()
  createdAt!: Date;

  @ApiProperty({
    description: 'Дата останнього оновлення акаунту',
    example: '2026-06-05T10:21:48.000Z',
  })
  @Expose()
  updatedAt!: Date;
}
