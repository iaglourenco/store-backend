"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _typeorm = require("typeorm");

var _User = _interopRequireDefault(require("../models/User"));

var _users_view = _interopRequireDefault(require("../views/users_view"));

var Yup = _interopRequireWildcard(require("yup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  async index(req, res) {
    const usersRepository = (0, _typeorm.getRepository)(_User.default);
    const users = await usersRepository.find({
      relations: ["reviews"]
    });
    return res.status(200).json(_users_view.default.renderMany(users));
  },

  async show(req, res) {
    const {
      id
    } = req.params;
    const usersRepository = (0, _typeorm.getRepository)(_User.default);
    const user = await usersRepository.findOneOrFail(id, {
      relations: ["reviews"]
    });
    return res.status(200).json(_users_view.default.render(user));
  },

  async create(req, res) {
    const {
      name,
      email,
      password
    } = req.body;
    const usersRepository = (0, _typeorm.getRepository)(_User.default);
    const data = {
      name,
      email,
      password,
      isAdmin: false
    };
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6)
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const user = usersRepository.create(data);
    await usersRepository.save(user);
    return res.status(201).json(_users_view.default.render(user));
  },

  async remove(req, res) {
    const {
      id
    } = req.params;
    const usersRepository = (0, _typeorm.getRepository)(_User.default);
    const user = await usersRepository.findOneOrFail(id);
    await usersRepository.remove(user);

    _express.response.status(200).json(user);
  }

};
exports.default = _default;