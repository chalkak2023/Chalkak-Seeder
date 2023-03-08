import { Faker } from "@faker-js/faker";
import { Faq } from "../entity/faq.entity";
import { define } from "typeorm-seeding";

define(Faq, (faker: Faker) => {
  const title = faker.random.word();
  const content = faker.random.word();

  const faq = new Faq();
  faq.title = title;
  faq.content = content;
  return faq;
});
