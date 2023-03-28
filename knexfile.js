const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE
      },
      migrations: {
        directory: './src/database/migrations'
      },
      seeds: {
        directory: './src/database/seeds'
      }
    }
  };
