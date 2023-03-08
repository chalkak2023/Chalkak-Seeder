import { Faker } from "@faker-js/faker";
import { Collection } from "../entity/collection.entity";
import { define } from "typeorm-seeding";
import { User } from '../entity/user.entity';

define(Collection, (faker: Faker, context: {user: User}) => {
  const title = faker.random.word();
  const description = faker.random.word();
  const userId = context.user.id

  const collection = new Collection();
  collection.title = title;
  collection.description = description;
  collection.userId = userId;
  return collection;
});
