"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authMiddleware;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authMiddleware(req, res, next) {
  const {
    authorization
  } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const token = authorization.replace("Bearer ", "").trim();

  try {
    const data = _jsonwebtoken.default.verify(token, process.env.APP_SECRET);

    if (Date.now() >= data.exp * 1000) {
      return res.sendStatus(401);
    }

    req.body.user = data.id;
    return next();
  } catch {
    return res.sendStatus(401);
  }
}