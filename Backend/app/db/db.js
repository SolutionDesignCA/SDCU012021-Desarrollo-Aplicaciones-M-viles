const { Sequelize } = require("sequelize");

const env = require("../../env.js");

const db = new Sequelize(env.database, env.db_username, env.db_password, {
  host: env.db_host,
  // port: env.db_port,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
