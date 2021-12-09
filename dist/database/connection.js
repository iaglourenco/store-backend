"use strict";

var _typeorm = require("typeorm");

(0, _typeorm.createConnection)({
  type: "sqlite",
  database: "./src/database/database.sqlite",
  migrations: [
    "./src/database/migrations/*.ts",
    "./dist/database/migrations/*.js",
  ],
  entities: ["./src/models/*.ts", "./dist/models/*.js"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
});
