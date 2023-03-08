import { Collection } from "../entity/collection.entity";
import { CollectionKeyword } from "../entity/collection.keyword.entity";
import { Photospot } from "../entity/photospot.entity";
import { User } from "../entity/user.entity";
import { Connection } from "typeorm";
import { Seeder, Factory } from "typeorm-seeding";
import { Meetup } from "../entity/meetup.entity";
import { Join } from '../entity/join.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const users = await factory(User)().createMany(100);
    for (let user of users) {
      const collections = await factory(Collection)().createMany(3, {userId: user.id});
      for (let collection of collections) {
        await factory(CollectionKeyword)().createMany(2, {collectionId: collection.id, userId: user.id});
        await factory(Photospot)().createMany(5, {collectionId: collection.id, userId: user.id});
      }
      const meetups = await factory(Meetup)().createMany(2, {userId: user.id});
      for (let meetup of meetups) {
        await factory(Join)().create({userId: user.id, meetupId: meetup.id})
      }
    }
  }
}
