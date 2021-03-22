import application from './server';

application.listen(3000, '0.0.0.0', () =>
  console.log('Servidor rodando na porta: 3000')
);
