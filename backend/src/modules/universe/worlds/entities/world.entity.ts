import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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
    loreDetails?: {
        atmosphere?: string;
        scale?: string;
        magicSystem?: string;
        geography?: string;
        factions?: string[];
    }

    @CreateDateColumn({ type: 'timestamp' })
    createdAt!: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt!: Date;

    // @ManyToMany(() => Tag, (tag) => tag.worlds)
    // tags: Tag[];
    //
    // // Персонажі, які живуть у цьому світі (One-to-Many) [cite: 105, 134]
    // @OneToMany(() => Character, (character) => character.world)
    // characters: Character[];
}
