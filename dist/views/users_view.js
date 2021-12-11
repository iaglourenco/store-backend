"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  render(user) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdProducts: user.products,
      history: user.buyRecords,
      reviews: user.reviews,
      isAdmin: user.isAdmin
    };
  },

  renderMany(users) {
    return users.map(user => this.render(user));
  }

};
exports.default = _default;