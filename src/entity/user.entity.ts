import {
  ChildEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  TableInheritance,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { Collection } from "./collection.entity";
import { CollectionKeyword } from "./collection.keyword.entity";
import { Join } from "./join.entity";
import { Meetup } from "./meetup.entity";
import { Photospot } from "./photospot.entity";

@Entity({ schema: "chalkak", name: "user" })
@TableInheritance({ column: { type: "varchar", name: "provider" } })
@Unique("provider_userid_unique", ["provider", "providerUserId"])
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { unique: true, nullable: true })
  email: string;

  @Column("varchar", { unique: true })
  username: string;

  @Column("bool", { default: false })
  isBlock: boolean;

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

@ChildEntity("local")
export class LocalUser extends User {
  @Column("varchar", { select: false })
  password: string;
}

@ChildEntity("naver")
export class NaverUser extends User {}

@ChildEntity("kakao")
export class KakaoUser extends User {}
