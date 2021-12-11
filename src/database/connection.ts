import { createConnection } from "typeorm";
import path from "path";

createConnection({
  type: "sqlite",
  database: path.join(__dirname + "/database.sqlite"),
  migrations: [path.join(__dirname + "/migrations/*")],
  entities: [path.join(__dirname + "/../models/*")],
  cli: {
    migrationsDir: path.join(__dirname + "/migrations"),
  },
})
  .then(async (connection) => {
    console.log("Connected to database");
  })
  .catch((error) => console.log(error));
