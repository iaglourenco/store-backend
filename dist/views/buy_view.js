"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  render(buyRecord) {
    return {
      id: buyRecord.id,
      enviado: buyRecord.enviado,
      status: buyRecord.status,
      total: buyRecord.total,
      products: buyRecord.products.map(product => {
        return {
          name: product.name,
          price: product.price,
          category: product.category
        };
      })
    };
  },

  renderMany(buyRecords) {
    return buyRecords.map(buyRecord => this.render(buyRecord));
  }

};
exports.default = _default;