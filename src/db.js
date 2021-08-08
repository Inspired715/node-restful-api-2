const mysql = require("mysql");
const flex = require('../database/flex')
const fixed = require('../database/fixed')
require("dotenv").config();

var connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD
});

flex(connection);
fixed(connection);

module.exports = connection;