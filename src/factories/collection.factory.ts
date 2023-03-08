import { Faker } from "@faker-js/faker";
import { Collection } from "../entity/collection.entity";
import { define } from "typeorm-seeding";
import { User } from '../entity/user.entity';

define(Collection, (faker: Faker) => {
  const title = faker.random.word();
  const description = faker.random.word();

  const collection = new Collection();
  collection.title = title;
  collection.description = description;
  return collection;
});
