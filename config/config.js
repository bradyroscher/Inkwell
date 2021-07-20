require('dotenv').config()
module.exports = {
  development: {
    database: 'inkwell_db_development',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    database: 'inkwell_db_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
