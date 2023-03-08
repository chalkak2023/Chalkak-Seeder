import { User } from "../entity/user.entity";
import { Connection } from "typeorm";
import { Seeder, Factory } from "typeorm-seeding";
import { Meetup } from "../entity/meetup.entity";
import { Join } from '../entity/join.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const users = await connection.getRepository(User).find({where: {isBlock: false}});
    const meetups: Meetup[] = await connection.getRepository(Meetup).find();
    for (let meetup of meetups) {
      const participate = [meetup.userId];
      const max = Math.floor(Math.random() * meetup.headcount) + 1
      for (let people = 1; people < max; people++) {
        let index: number;
        do {
          index = Math.floor(Math.random() * users.length)
        } while (!users[index]?.id || participate.includes(users[index].id))
        participate.push(users[index].id);
        await factory(Join)().create({meetupId: meetup.id, userId: users[index].id});
      }
    }
  }
}
