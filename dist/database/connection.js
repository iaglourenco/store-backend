"use strict";

var _typeorm = require("typeorm");

(0, _typeorm.createConnection)({
  type: "sqlite",
  database: "./database/database.sqlite",
  migrations: ["./database/migrations/*.js"],
  entities: ["./models/*.js"],
  cli: {
    migrationsDir: "./database/migrations",
  },
});
