import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class TagDto {
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Унікальний ідентифікатор тегу' })
  @Expose()
  id!: string;

  @ApiProperty({ example: 'Fantasy', description: 'Назва тегу' })
  @Expose()
  name!: string;
}
