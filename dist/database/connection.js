"use strict";

var _typeorm = require("typeorm");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _typeorm.createConnection)({
  type: "sqlite",
  database: "./database.sqlite",
  migrations: [_path.default.join(__dirname + "/migrations/*")],
  entities: [_path.default.join(__dirname + "/../models/*")],
  cli: {
    migrationsDir: _path.default.join(__dirname + "/migrations")
  }
}).then(async connection => {
  console.log("Connected to database");
}).catch(error => console.log(error));