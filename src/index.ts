import application from './server';
import connection from './database';
import redis from 'redis';

connection.connectToDatabase().then(() => {
  const client = redis.createClient({
    host: 'redis',
    port: 6379,
    password: process.env.REDIS_PASSWORD,
  });

  client.set(
    'key',
    JSON.stringify([
      {
        name: 'guilherme',
        birthday: '25/01/2001',
      },
      {
        name: 'nogueira',
        birthday: '25/01/2001',
      },
      {
        name: 'kevin',
        birthday: '25/01/2001',
      },
    ])
  );

  client.get('key', (_, reply) => console.log(JSON.parse(reply)));

  application.listen(3000, '0.0.0.0', () =>
    console.log('Servidor rodando na porta: 3000')
  );
});
