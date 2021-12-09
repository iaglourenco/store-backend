"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  render(review) {
    return {
      id: review.id,
      opinion: review.opinion,
      productId: review.product,
      stars: review.stars,
      userId: review.user
    };
  },

  renderMany(reviews) {
    return reviews.map(review => this.render(review));
  }

};
exports.default = _default;