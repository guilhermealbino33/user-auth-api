import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import logging from './shared/config/logging';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
});

AppDataSource.initialize()
  .then(() => {
    logging.info('Data Source has been initialized!');
  })
  .catch((err) => {
    logging.error('Error during Data Source initialization', err);
  });
