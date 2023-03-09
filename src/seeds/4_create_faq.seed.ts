import { Connection } from "typeorm";
import { Seeder, Factory } from "typeorm-seeding";
import { Faq } from "../entity/faq.entity";

export default class CreateFAQ implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Faq)().createMany(100);
  }
}
