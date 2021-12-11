"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _UsersControllers = _interopRequireDefault(require("./controllers/UsersControllers"));

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("./config/upload"));

var _ProductsController = _interopRequireDefault(require("./controllers/ProductsController"));

var _AuthController = _interopRequireDefault(require("./controllers/AuthController"));

var _authMiddleware = _interopRequireDefault(require("./middlewares/authMiddleware"));

var _ReviewsController = _interopRequireDefault(require("./controllers/ReviewsController"));

var _BuyController = _interopRequireDefault(require("./controllers/BuyController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.default)();
const upload = (0, _multer.default)(_upload.default);
routes.post("/users", upload.array("images"), _UsersControllers.default.create);
routes.get("/users", _authMiddleware.default, _UsersControllers.default.index);
routes.get("/users/:id", _authMiddleware.default, _UsersControllers.default.show);
routes.get("/", (req, res) => {
  res.json({
    message: "TopicoStore API v1"
  });
});
routes.post("/products", upload.array("images"), _ProductsController.default.create);
routes.get("/products", _ProductsController.default.index);
routes.get("/products/:id", _ProductsController.default.show); // Buy products
//

routes.post("/buy", _authMiddleware.default, _BuyController.default.create);
routes.get("/buy", _authMiddleware.default, _BuyController.default.index); // Review a product
// Body: opinion, stars, product

routes.post("/review", _authMiddleware.default, _ReviewsController.default.create);
routes.post("/auth", _AuthController.default.authenticate);
var _default = routes;
exports.default = _default;