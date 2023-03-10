import { Faker } from "@faker-js/faker";
import { KakaoUser, LocalUser, NaverUser, User } from "../entity/user.entity";
import { define } from "typeorm-seeding";
import * as bcrypt from "bcrypt";

const providers = ["local", "kakao", "naver"];
const entity = {
  local: LocalUser,
  kakao: KakaoUser,
  naver: NaverUser,
};

define(User, (faker: Faker) => {
  const username = faker.internet.userName();
  const isBlock = Math.floor(Math.random() * 10) === 0 ? true : false;
  const provider = providers[Math.floor(Math.random() * 3)];
  const email = provider === 'local' ? faker.internet.email() : null;
  const providerUserId =
    provider !== "local"
      ? String(Math.floor(Math.random() * 10000000000))
      : null;
  const password =
    provider === "local" ? bcrypt.hashSync("qwer1234", 10) : null;

  const user = new entity[provider as keyof typeof entity]() as any;
  user.email = email;
  user.username = username;
  user.password = password;
  user.isBlock = isBlock;
  user.provider = provider;
  user.providerUserId = providerUserId;
  return user;
});
