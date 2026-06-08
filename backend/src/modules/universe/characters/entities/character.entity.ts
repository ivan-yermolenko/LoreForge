import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';
import { World } from '../../worlds/entities/world.entity';
import { Tag } from '../../tags/entities/tag.entity';
import type { CharacterDetails } from '../interfaces/character-details.interface';

@Entity('characters')
export class Character {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 100 })
  name!: string;

  @Column({ type: 'text' })
  biography!: string;

  @Column({ type: 'boolean', default: true })
  isNpc!: boolean;

  @Column({ type: 'jsonb', nullable: true })
  characterDetails?: CharacterDetails;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @ManyToOne(() => World, (world) => world.characters, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'worldId' })
  world!: World;

  @ManyToMany(() => Tag, (tag) => tag.characters)
  @JoinTable({ name: 'character_tags' })
  tags!: Tag[];
}
