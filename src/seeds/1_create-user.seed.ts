import { Collection } from "../entity/collection.entity";
import { CollectionKeyword } from "../entity/collection.keyword.entity";
import { Photospot } from "../entity/photospot.entity";
import { User } from "../entity/user.entity";
import { Connection } from "typeorm";
import { Seeder, Factory } from "typeorm-seeding";
import { Meetup } from "../entity/meetup.entity";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const users = await factory(User)().createMany(100);
    for (let user of users) {
      const collections = await factory(Collection)({ user }).createMany(3);
      for (let collection of collections) {
        await factory(CollectionKeyword)({ collection }).createMany(2);
        await factory(Photospot)({ collection }).createMany(5);
      }
      await factory(Meetup)({ user }).createMany(2);
    }
  }
}
