require("dotenv").config();

module.exports = {
  database: process.env.DATABASE_NAME,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  JWTSecret: process.env.JWT_SECRET,
};
