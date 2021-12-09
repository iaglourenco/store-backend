import { createConnection } from "typeorm";

createConnection({
  type: "sqlite",
  database: "./database/database.sqlite",
  migrations: ["./database/migrations/*.ts", "./database/migrations/*.js"],
  entities: ["./models/*.ts", "./models/*.js"],
  cli: {
    migrationsDir: "./database/migrations",
  },
});
