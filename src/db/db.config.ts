import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export interface DbConfig {
  host: string;
  port: number;
  name: string;
  username: string;
  password: string;
  type: string;
  synchronize: boolean;
  entities: string[];
}

export default registerAs('dbConfig', (): DbConfig => {
  const { DB_HOST, DB_NAME, DB_PORT, DB_PASSWORD, ENV, DB_TYPE, DB_USERNAME } =
    process.env;
  return {
    host: DB_HOST || 'localhost',
    port: DB_PORT ? parseInt(DB_PORT) : 3306,
    name: DB_NAME || 'nest',
    username: DB_USERNAME || 'root',
    password: DB_PASSWORD || '<PASSWORD>',
    type: DB_TYPE || 'mysql',
    synchronize: ENV === 'dev',
    entities: [],
  };
});
