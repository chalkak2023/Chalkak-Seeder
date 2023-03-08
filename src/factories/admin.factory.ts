import { Faker } from "@faker-js/faker";
import { Admin } from "../entity/admin.entity";
import { define } from "typeorm-seeding";
import * as bcrypt from 'bcrypt';

define(Admin, (faker: Faker) => {
  const account = faker.internet.email();
  const password = bcrypt.hashSync("qwer1234", 10);
  const responsibility = faker.internet.userName();

  const admin = new Admin();
  admin.account = account;
  admin.password = password;
  admin.responsibility = responsibility;
  return admin;
});
