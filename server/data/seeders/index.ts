import { createConnection } from 'typeorm';

import { UsersSeeder } from './users.seeder';
import { RolesSeeder } from './roles.seeder';
import { PermissionsSeeder } from './permissions.seeder';
import { NewspapersSeeder } from './newspapers.seeder';
import { ArticlesSeeder } from './articles.seeder';
import { AnnotationsSeeder } from './annotations.seeder';

createConnection()
  .then(async () => {
    await PermissionsSeeder.execute();
    await RolesSeeder.execute();
    await UsersSeeder.execute();
    await AnnotationsSeeder.execute();
    await NewspapersSeeder.execute();
    await ArticlesSeeder.execute();
  })
  .catch(e => {
    console.error(e);
  });
