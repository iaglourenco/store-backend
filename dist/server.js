"use strict";

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

require("./database/connection");

var _routes = _interopRequireDefault(require("./routes"));

var _path = _interopRequireDefault(require("path"));

var _handler = _interopRequireDefault(require("./errors/handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

require("dotenv").config();

app.use(_express.default.json());
app.use(_routes.default);
app.use("/uploads", _express.default.static(_path.default.join(__dirname, "..", "uploads")));
app.use(_handler.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});