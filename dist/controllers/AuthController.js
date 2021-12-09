"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../models/User"));

var Yup = _interopRequireWildcard(require("yup"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  async authenticate(req, res) {
    const usersRepository = (0, _typeorm.getRepository)(_User.default);
    const data = {
      email: req.body.email,
      password: req.body.password
    };
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6)
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const user = await usersRepository.findOne({
      where: {
        email: data.email
      }
    });

    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = await _bcryptjs.default.compare(data.password, user.password);

    if (!isValidPassword) {
      return res.sendStatus(401);
    }

    const token = _jsonwebtoken.default.sign({
      id: user.id
    }, process.env.APP_SECRET, {
      expiresIn: "1d"
    });

    delete data.password;
    return res.status(200).json({
      data,
      token
    });
  }

};
exports.default = _default;