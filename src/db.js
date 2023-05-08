import { Sequelize } from 'sequelize';

import { DATABASE, HOST, PASSWORD, USER } from './config.js';

export const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  logging: false
});


try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}