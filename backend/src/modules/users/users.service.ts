import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly SALT_ROUNDS = 10;

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email.toLowerCase() },
    });

    if (existingUser) {
      throw new ConflictException(`Користувач з email ${createUserDto.email} вже існує`);
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, this.SALT_ROUNDS);

    const user = this.userRepository.create({
      ...createUserDto,
      email: createUserDto.email.toLowerCase(),
      password: hashedPassword,
    });

    return this.userRepository.save(user);
  }

  public async findById(id: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email: email.toLowerCase() },
    });
  }

  public async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findById(id);

    if (!user) throw new NotFoundException(`Користувача з ID ${id} не знайдено`);

    if (updateUserDto.email && updateUserDto.email.toLowerCase() !== user.email) {
      const emailConflict = await this.findByEmail(updateUserDto.email);
      if (emailConflict) {
        throw new ConflictException(`Користувач з email ${updateUserDto.email} вже існує`);
      }
      user.email = updateUserDto.email.toLowerCase();
    }

    if (updateUserDto.password) {
      user.password = await bcrypt.hash(updateUserDto.password, this.SALT_ROUNDS);
    }

    if (updateUserDto.nickname !== undefined) {
      user.nickname = updateUserDto.nickname;
    }
    if (updateUserDto.firstName !== undefined) {
      user.firstName = updateUserDto.firstName;
    }
    if (updateUserDto.lastName !== undefined) {
      user.lastName = updateUserDto.lastName;
    }

    return this.userRepository.save(user);
  }
}
