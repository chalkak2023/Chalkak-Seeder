import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { Collection } from "./collection.entity";
import { CollectionKeyword } from "./collection.keyword.entity";
import { Join } from "./join.entity";
import { Meetup } from "./meetup.entity";
import { Photospot } from "./photospot.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { unique: true, nullable: true })
  email: string;

  @Column("varchar", { unique: true })
  username: string;

  @Column("varchar", { nullable: true, select: false })
  password: string | null;
  
  @Column("bool", { default: false })
  isBlock: boolean;

  @Column("varchar")
  provider: string;

  @Column("varchar", { nullable: true })
  providerUserId: string | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;

  @OneToMany((type) => Collection, (collection) => collection.user)
  collections: Collection[];

  @OneToMany(
    (type) => CollectionKeyword,
    (collection_keyword) => collection_keyword.user
  )
  collection_keywords: Collection[];

  @OneToMany((type) => Photospot, (photospot) => photospot.user)
  photospots: Photospot[];

  @OneToMany((type) => Meetup, (meetup) => meetup.user)
  meetups: Meetup[];

  @OneToMany((type) => Join, (join) => join.user)
  joins: Join[];
}
