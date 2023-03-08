import { Faker } from "@faker-js/faker";
import { Join } from "../entity/join.entity";
import { define } from "typeorm-seeding";

define(Join, (faker: Faker) => {

  const join = new Join();
  return join;
});
