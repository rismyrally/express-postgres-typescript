require('dotenv').config();

const { PORT, DATABASE, DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD } = process.env;

module.exports = {
  port: PORT,
  db: {
    name: DATABASE,
    host: DATABASE_HOST,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    dialect: 'postgres',
  },
};
