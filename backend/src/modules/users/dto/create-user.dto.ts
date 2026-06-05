import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Унікальна адреса електронної пошти користувача',
    example: 'user@example.com',
    maxLength: 255,
  })
  @IsEmail({}, { message: 'Некоректний формат адреси електронної пошти' })
  @MaxLength(255, { message: 'Email не може бути довшим за 255 символів' })
  @IsNotEmpty({ message: 'Email не може бути порожнім' })
  public email!: string;

  @ApiProperty({
    description: 'Пароль користувача (мінімум 6 символів)',
    example: 'securePassword123',
    minLength: 6,
    maxLength: 128,
  })
  @IsString({ message: 'Пароль повинен бути рядком' })
  @MinLength(6, { message: 'Пароль повинен містити щонайменше 6 символів' })
  @MaxLength(128, { message: 'Пароль не може бути довшим за 128 символів' })
  @IsNotEmpty({ message: 'Пароль не може бути порожнім' })
  public password!: string;

  @ApiPropertyOptional({
    description: 'Нікнейм користувача',
    example: 'lore_master',
    maxLength: 100,
  })
  @IsOptional()
  @IsString({ message: 'Нікнейм повинен бути рядком' })
  @MaxLength(100, { message: 'Нікнейм не може бути довшим за 100 символів' })
  public nickname?: string;

  @ApiPropertyOptional({
    description: "Ім'я користувача",
    example: 'Іван',
    maxLength: 100,
  })
  @IsOptional()
  @IsString({ message: "Ім'я повинно бути рядком" })
  @MaxLength(100, { message: "Ім'я не може бути довшим за 100 символів" })
  public firstName?: string;

  @ApiPropertyOptional({
    description: 'Прізвище користувача',
    example: 'Єрмоленко',
    maxLength: 100,
  })
  @IsOptional()
  @IsString({ message: 'Прізвище повинно бути рядком' })
  @MaxLength(100, { message: 'Прізвище не може бути довшим за 100 символів' })
  public lastName?: string;
}
