import { Faker } from "@faker-js/faker";
import { Photospot } from "../entity/photospot.entity";
import { define } from "typeorm-seeding";
import { Collection } from '../entity/collection.entity';

function getRandomInRange(from:number, to: number) {
  return Number((Math.random() * (to - from) + from).toFixed(3));
  // .toFixed() returns string, so ' * 1' is a trick to convert to number
}
//37.5776087830657, 126.976896737645
define(Photospot, (faker: Faker, context: {collection: Collection}) => {
  const title = faker.random.word();
  const description = faker.random.word();
  const collectionId = context.collection.id
  const userId = context.collection.userId
  const latitude = getRandomInRange(37560,37590) / 1000
  const longitude = getRandomInRange(126970,126990) / 1000
  const imagePath = 'https://images.unsplash.com/photo-1677577441903-a4825471384d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3ODI1NTU1MQ&ixlib=rb-4.0.3&q=80&w=1080​'

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
