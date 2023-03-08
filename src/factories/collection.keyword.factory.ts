import { Faker } from "@faker-js/faker";
import { CollectionKeyword } from "../entity/collection.keyword.entity";
import { define } from "typeorm-seeding";
import { Collection } from '../entity/collection.entity';

define(CollectionKeyword, (faker: Faker) => {
  const keyword = faker.random.word();

  const collectionkeyword = new CollectionKeyword();
  collectionkeyword.keyword = keyword;
  
  return collectionkeyword;
});
