"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProducts1637634701844 = void 0;

var _typeorm = require("typeorm");

class createProducts1637634701844 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "products",
      columns: [{
        name: "id",
        type: "integer",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment"
      }, {
        name: "user_id",
        type: "uuid"
      }, {
        name: "brand",
        type: "varchar",
        isNullable: false
      }, {
        name: "stock",
        type: "integer",
        isNullable: true
      }, {
        name: "category",
        type: "varchar"
      }, {
        name: "name",
        type: "varchar",
        isNullable: false
      }, {
        name: "description",
        type: "varchar",
        isNullable: false
      }, {
        name: "price",
        type: "integer",
        isNullable: false
      }],
      foreignKeys: [{
        name: "ProductUser",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("products");
  }

}

exports.createProducts1637634701844 = createProducts1637634701844;