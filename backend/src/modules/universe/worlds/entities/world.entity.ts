import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, ManyToMany, OneToMany, JoinTable } from "typeorm";
import { Tag } from "../../tags/entities/tag.entity";
import { Character } from "../../characters/entities/character.entity";
import type { LoreDetails } from "../interfaces/lore-details.interface";


@Entity('worlds')
export class World {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: "uuid" })
    ownerId!: string;

    @Column({ length: 100 })
    title!: string;

    @Column({ type: "text" })
    description!: string;

    @Column({ type: "jsonb", nullable: true })
    loreDetails?: LoreDetails;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt!: Date;

    @ManyToMany(() => Tag, (tag) => tag.worlds)
    @JoinTable({ name: 'world_tags' })
    tags!: Tag[];

    // @OneToMany(() => Character, (character) => character.world)
    // characters!: Character[];
}
