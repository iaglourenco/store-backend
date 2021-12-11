"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBuyHistoryProductsProducts1639013593177 = void 0;

var _typeorm = require("typeorm");

class createBuyHistoryProductsProducts1639013593177 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "buy_history_products_products",
      columns: [{
        name: "buyHistoryId",
        type: "integer"
      }, {
        name: "productsId",
        type: "integer"
      }],
      foreignKeys: [{
        columnNames: ["buyHistoryId"],
        referencedColumnNames: ["id"],
        referencedTableName: "buy_history",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }, {
        columnNames: ["productsId"],
        referencedColumnNames: ["id"],
        referencedTableName: "products",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }]
    }));
  }

  async down(queryRunner) {}

}

exports.createBuyHistoryProductsProducts1639013593177 = createBuyHistoryProductsProducts1639013593177;