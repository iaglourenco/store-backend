"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createImages1637636825172 = void 0;

var _typeorm = require("typeorm");

class createImages1637636825172 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "images",
      columns: [{
        name: "id",
        type: "integer",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment"
      }, {
        name: "product_id",
        type: "integer"
      }, {
        name: "path",
        type: "varchar"
      }],
      foreignKeys: [{
        name: "ProductImages",
        columnNames: ["product_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "products",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }]
    }));
  }

  async down(queryRunner) {
    queryRunner.dropTable("images");
  }

}

exports.createImages1637636825172 = createImages1637636825172;