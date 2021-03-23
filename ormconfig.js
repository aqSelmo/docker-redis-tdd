const { join } = require('path');

if (process.env.NODE_ENV === 'test') {
  module.exports = {
    type: 'sqlite',
    database: 'src/database/sqlite/database.sqlite',
    migrations: ['src/database/migrations/*.ts'],
    entities: ['src/database/entities/*.entity.ts'],
    logging: false,
    synchronize: false,
    migrationsRun: true,
    cli: {
      migrationsDir: [join('..', 'src', 'database', 'migrations')],
      entitiesDir: ['src/database/entities/*.entity.ts'],
    },
  };
} else {
  module.exports = {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'PC1112131415',
    database: 'redisdb',
    reconnectTries: 3,
    entities: ['src/database/entities/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts'],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
  };
}
