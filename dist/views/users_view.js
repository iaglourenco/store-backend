"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _buy_view = _interopRequireDefault(require("./buy_view"));

var _products_view = _interopRequireDefault(require("./products_view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  render(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdProducts: _products_view.default.renderMany(user.products),
      history: _buy_view.default.renderMany(user.buyRecords),
      reviews: user.reviews,
      isAdmin: user.isAdmin
    };
  },

  renderMany(users) {
    return users.map(user => this.render(user));
  }

};
exports.default = _default;