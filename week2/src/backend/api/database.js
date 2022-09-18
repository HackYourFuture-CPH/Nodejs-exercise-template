// Contents of database.js
//@ts-ignore
const knex = require("knex")({
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST || "127.0.0.1",
      port: process.env.DB_PORT || 33061,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "bharath143",
      database: process.env.DB_NAME || "hyf_node_week1",
    },
  })
  
  module.exports = knex