"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _images_view = _interopRequireDefault(require("./images_view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  render(product) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
      reviews: product.reviews,
      images: _images_view.default.renderMany(product.images)
    };
  },

  renderMany(products) {
    return products.map(product => this.render(product));
  }

};
exports.default = _default;