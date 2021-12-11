"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _BuyRecord = _interopRequireDefault(require("../models/BuyRecord"));

var _Product = _interopRequireDefault(require("../models/Product"));

var Yup = _interopRequireWildcard(require("yup"));

var _buy_view = _interopRequireDefault(require("../views/buy_view"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  async index(req, res) {
    const {
      user
    } = req.body;
    const buyHistoryRepository = (0, _typeorm.getRepository)(_BuyRecord.default);
    const a = await buyHistoryRepository.find();
    return res.json(a);
  },

  async create(req, res) {
    const {
      user
    } = req.body;
    const products = req.body.products;
    const {
      shipAddress,
      paymentMethod,
      shipmentPrice,
      taxPrice
    } = req.body;
    const buyHistoryRepository = (0, _typeorm.getRepository)(_BuyRecord.default);
    const orderData = {
      user,
      products
    };
    const schema = Yup.object().shape({
      user: Yup.string().required(),
      products: Yup.array(Yup.object().shape({
        product_id: Yup.number().required(),
        amount: Yup.number().required()
      })).required()
    });
    await schema.validate(orderData, {
      abortEarly: false
    });
    const orderProducts = await (0, _typeorm.getManager)().createQueryBuilder(_Product.default, "product").where("product.id IN (:...products)", {
      products: products.map(product => product.product_id)
    }).getMany();
    let saleTotal = 0;
    orderProducts.forEach(product => {
      products.forEach(orderProduct => {
        if (product.id === orderProduct.product_id) {
          saleTotal += product.price * orderProduct.amount;
          return;
        }
      });
    });
    const buyHistory = buyHistoryRepository.create({
      data: Date.now(),
      total: saleTotal,
      status: "PENDING",
      enviado: false,
      shipAddress,
      paymentMethod,
      shipmentPrice,
      user,
      products: orderProducts
    });
    await buyHistoryRepository.save(buyHistory);
    return res.json(_buy_view.default.render(buyHistory));
  }

};
exports.default = _default;