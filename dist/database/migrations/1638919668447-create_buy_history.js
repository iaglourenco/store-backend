"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBuyHistory1638919668447 = void 0;

var _typeorm = require("typeorm");

class createBuyHistory1638919668447 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "buy_history",
      columns: [{
        name: "id",
        type: "integer",
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment"
      }, {
        name: "data",
        type: "timestamp"
      }, {
        name: "total",
        type: "decimal"
      }, {
        name: "status",
        type: "varchar"
      }, {
        name: "enviado",
        type: "boolean"
      }, {
        name: "user_id",
        type: "uuid"
      }],
      foreignKeys: [{
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("buy_history");
  }

}

exports.createBuyHistory1638919668447 = createBuyHistory1638919668447;