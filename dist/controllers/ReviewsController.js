"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _reviews_view = _interopRequireDefault(require("../views/reviews_view"));

var Yup = _interopRequireWildcard(require("yup"));

var _Review = _interopRequireDefault(require("../models/Review"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  async index(req, res) {
    const reviewsRepository = (0, _typeorm.getRepository)(_Review.default);
    const reviews = await reviewsRepository.find();
    return res.json(_reviews_view.default.renderMany(reviews));
  },

  async show(req, res) {
    const {
      id
    } = req.params;
    const reviewsRepository = (0, _typeorm.getRepository)(_Review.default);
    const review = await reviewsRepository.findOneOrFail(id);
    return res.json(_reviews_view.default.render(review));
  },

  async create(req, res) {
    const {
      opinion,
      stars,
      user,
      product
    } = req.body;
    const reviewsRepository = (0, _typeorm.getRepository)(_Review.default);
    const data = {
      opinion,
      stars,
      user,
      product
    };
    const schema = Yup.object().shape({
      opinion: Yup.string().required().max(255),
      stars: Yup.number().required().min(1).max(5),
      user: Yup.string().required().length(36),
      product: Yup.number().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const review = reviewsRepository.create(data);
    await reviewsRepository.save(review);
    return res.status(201).json(_reviews_view.default.render(review));
  }

};
exports.default = _default;