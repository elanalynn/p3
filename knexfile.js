module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/p3_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
