import * as dotenv from "dotenv";
import { KakaoUser, LocalUser, NaverUser, User } from "./src/entity/user.entity";
import { Admin } from "./src/entity/admin.entity";
import { Collection } from "./src/entity/collection.entity";
import { CollectionKeyword } from "./src/entity/collection.keyword.entity";
import { Faq } from "./src/entity/faq.entity";
import { Join } from "./src/entity/join.entity";
import { Meetup } from "./src/entity/meetup.entity";
import { Photospot } from "./src/entity/photospot.entity";

dotenv.config();
const config = {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [
    Admin,
    Collection,
    CollectionKeyword,
    Faq,
    Join,
    Meetup,
    Photospot,
    User,
    LocalUser,
    NaverUser,
    KakaoUser
  ],
  synchronize: false,
  migrations: [__dirname + "/src/migrations/*ts"],
  seeds: ["src/seeds/**/*{.ts,.js}"],
  factories: ["src/factories/**/*{.ts,.js}"],
  cli: { migrationsDir: "src/migrations" },
  autoLoadEntities: true,
  charset: "utf8mb4",
  logging: true,
  keepConnectionAlive: true,
};

export = config;
