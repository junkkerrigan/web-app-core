import Newspaper from '../entities/Newspaper';
import Article from '../entities/Article';
import User from '../entities/User';

import { newspapers } from '../seed-data/newspapers';
import { articles } from '../seed-data/articles';
import { users } from '../seed-data/users';

export class NewspapersSeeder {
  public static async execute() {
    newspapers.forEach(async (data) => {
      const newspaper = Object.assign(new Newspaper(), data);

      const usersEntity = users.map(user => Object.assign(new User(), user));
      newspaper.articles = articles.map(article =>
        Object.assign(new Article(), article)
      );

      newspaper.users = Promise.resolve(usersEntity);
      await newspaper.save();
    });
  }
}
