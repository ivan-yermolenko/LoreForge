import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { World } from '../../worlds/entities/world.entity';
import { Character } from '../../characters/entities/character.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  name!: string;

  @ManyToMany(() => World, (world) => world.tags)
  worlds!: World[];

  @ManyToMany(() => Character, (character) => character.tags)
  characters!: Character[];
}
