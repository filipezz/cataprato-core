import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'pokedex-postgres-1',
  port: 5432,
  username: 'pokedex',
  password: 'pokedex',
  database: 'pokedex',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
