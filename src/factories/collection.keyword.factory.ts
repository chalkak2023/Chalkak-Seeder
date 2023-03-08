import { Faker } from "@faker-js/faker";
import { CollectionKeyword } from "../entity/collection.keyword.entity";
import { define } from "typeorm-seeding";
import { Collection } from '../entity/collection.entity';

define(CollectionKeyword, (faker: Faker, context: {collection: Collection}) => {
  const keyword = faker.random.word();
  const collectionId = context.collection.id
  const userId = context.collection.userId;

  const collectionkeyword = new CollectionKeyword();
  collectionkeyword.keyword = keyword;
  collectionkeyword.collectionId = collectionId;
  collectionkeyword.userId = userId;
  
  return collectionkeyword;
});
