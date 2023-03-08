import { Faker } from "@faker-js/faker";
import { Join } from "../entity/join.entity";
import { define } from "typeorm-seeding";
import { User } from "../entity/user.entity";

define(Join, (faker: Faker) => {

  const join = new Join();
  return join;
});
