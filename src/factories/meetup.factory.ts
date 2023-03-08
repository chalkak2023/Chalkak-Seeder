import { Faker } from "@faker-js/faker";
import { Meetup } from "../entity/meetup.entity";
import { define } from "typeorm-seeding";
import { User } from '../entity/user.entity';

define(Meetup, (faker: Faker, context: {user: User}) => {
  const title = faker.random.word();
  const content = faker.random.word();
  const place = faker.random.word();
  const schedule = new Date(Math.floor(Math.random() * 1000*60*60*24*365) + Date.now());
  const headcount = Math.floor(Math.random() * 9) + 1
  const userId = context.user.id;

  const meetup = new Meetup();
  meetup.title = title;
  meetup.content = content;
  meetup.place = place;
  meetup.schedule = schedule;
  meetup.headcount = headcount;
  meetup.userId = userId;
  return meetup;
});
