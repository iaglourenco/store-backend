"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authMiddleware;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function authMiddleware(req, res, next) {
  const {
    authorization
  } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const usersRepository = (0, _typeorm.getRepository)(_User.default);
  const token = authorization.replace("Bearer ", "").trim();

  try {
    const data = _jsonwebtoken.default.verify(token, process.env.APP_SECRET);

    const user = await usersRepository.findOne({
      where: {
        id: data.id
      }
    });

    if (!user) {
      return res.sendStatus(401);
    }

    if (Date.now() >= data.exp * 1000) {
      return res.sendStatus(401);
    }

    req.body.user = data.id;
    return next();
  } catch {
    return res.sendStatus(401);
  }
}