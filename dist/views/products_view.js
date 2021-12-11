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
      numReviews: product.reviews ? product.reviews.length : 0,
      rating: product.reviews ? product.reviews.reduce((acc, review) => acc + review.stars, 0) / product.reviews.length : -1,
      images: _images_view.default.renderMany(product.images)
    };
  },

  renderMany(products) {
    return products.map(product => this.render(product));
  }

};
exports.default = _default;