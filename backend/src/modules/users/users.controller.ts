import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpStatus,
  ParseUUIDPipe,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @ApiOperation({ summary: 'Реєстрація нового користувача' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Користувача успішно створено.',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Некоректні вхідні дані.',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Користувач з таким email вже існує.',
  })
  public async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserResponseDto> {
    const user = await this.usersService.create(createUserDto);
    return UserResponseDto.fromEntity(user);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Отримання профілю користувача за ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID ідентифікатор користувача',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Користувача успішно знайдено.',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Користувача з таким ID не знайдено.',
  })
  public async findOne(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ): Promise<UserResponseDto> {
    const user = await this.usersService.findById(id);
    if (!user) {
      throw new NotFoundException(`Користувача з ID ${id} не знайдено`);
    }
    return UserResponseDto.fromEntity(user);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Оновлення профілю користувача за ID' })
  @ApiParam({
    name: 'id',
    description: 'UUID ідентифікатор користувача',
    type: String,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Профіль успішно оновлено.',
    type: UserResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Некоректні вхідні дані.',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Користувача не знайдено.',
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'Новий email вже зайнятий іншим користувачем.',
  })
  public async update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    const user = await this.usersService.update(id, updateUserDto);
    return UserResponseDto.fromEntity(user);
  }
}
