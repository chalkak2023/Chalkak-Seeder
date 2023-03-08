import { Faker } from "@faker-js/faker";
import { Photospot } from "../entity/photospot.entity";
import { define } from "typeorm-seeding";
import { Collection } from '../entity/collection.entity';

function getRandomInRange(from:number, to: number) {
  return Math.random() * (to - from) + from;
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

define(Photospot, (faker: Faker, context: {collection: Collection}) => {
  const title = faker.random.word();
  const description = faker.random.word();
  const collectionId = context.collection.id
  const userId = context.collection.userId
  const latitude = getRandomInRange(33,43)
  const longitude = getRandomInRange(124,132)
  const imagePath = 'https://source.unsplash.com/random​'

  const photospot = new Photospot();
  photospot.title = title;
  photospot.description = description;
  photospot.collectionId = collectionId;
  photospot.userId = userId;
  photospot.latitude = latitude;
  photospot.longitude = longitude;
  photospot.imagePath = imagePath;
  return photospot;
});
