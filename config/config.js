require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect: 'mysql',
  },
  // and other environments like test and production
};
