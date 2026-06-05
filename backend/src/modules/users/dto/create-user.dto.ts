import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Унікальна адреса електронної пошти користувача',
    example: 'user@example.com',
  })
  @IsEmail({}, { message: 'Некоректний формат адреси електронної пошти' })
  @IsNotEmpty({ message: 'Email не може бути порожнім' })
  email!: string;

  @ApiProperty({
    description: 'Пароль користувача (мінімум 6 символів)',
    example: 'securePassword123',
    minLength: 6,
  })
  @IsString({ message: 'Пароль повинен бути рядком' })
  @MinLength(6, { message: 'Пароль повинен містити щонайменше 6 символів' })
  @IsNotEmpty({ message: 'Пароль не може бути порожнім' })
  password!: string;

  @ApiPropertyOptional({
    description: 'Нікнейм користувача',
    example: 'lore_master',
  })
  @IsOptional()
  @IsString({ message: 'Нікнейм повинен бути рядком' })
  nickname?: string;

  @ApiPropertyOptional({
    description: "Ім'я користувача",
    example: 'Іван',
  })
  @IsOptional()
  @IsString({ message: "Ім'я повинно бути рядком" })
  firstName?: string;

  @ApiPropertyOptional({
    description: 'Прізвище користувача',
    example: 'Єрмоленко',
  })
  @IsOptional()
  @IsString({ message: 'Прізвище повинно бути рядком' })
  lastName?: string;
}
