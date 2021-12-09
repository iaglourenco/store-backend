"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Product = _interopRequireDefault(require("../models/Product"));

var _products_view = _interopRequireDefault(require("../views/products_view"));

var Yup = _interopRequireWildcard(require("yup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  async index(req, res) {
    const productsRepository = (0, _typeorm.getRepository)(_Product.default);
    const products = await productsRepository.find();
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
    return res.json(_products_view.default.renderMany(products));
  },

  async show(req, res) {
    const {
      id
    } = req.params;
    const productsRepository = (0, _typeorm.getRepository)(_Product.default);
    const product = await productsRepository.findOneOrFail(id);
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
    return res.json(_products_view.default.render(product));
  },

  async create(req, res) {
    const {
      name,
      user,
      description,
      price,
      category,
      brand,
      stock
    } = req.body;
    const productsRepository = (0, _typeorm.getRepository)(_Product.default);
    const requestImgs = req.files;
    const images = requestImgs.map(img => {
      return {
        path: img.filename
      };
    });
    const data = {
      name,
      description,
      price,
      images,
      brand,
      stock,
      category,
      user
    };
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string().required().max(255),
      price: Yup.number().required(),
      images: Yup.array(Yup.object().shape({
        path: Yup.string().required()
      })).required(),
      brand: Yup.string().required(),
      stock: Yup.number().required(),
      category: Yup.string().required(),
      user: Yup.string().required()
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const product = productsRepository.create(data);
    await productsRepository.save(product);
    return res.status(201).json(_products_view.default.render(product));
  }

};
exports.default = _default;