"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReviews1638919654700 = void 0;

var _typeorm = require("typeorm");

class createReviews1638919654700 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "reviews",
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
        name: "user_id",
        type: "uuid"
      }, {
        name: "stars",
        type: "integer"
      }, {
        name: "opinion",
        type: "varchar",
        isNullable: true
      }],
      foreignKeys: [{
        columnNames: ["product_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "products",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }, {
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("reviews");
  }

}

exports.createReviews1638919654700 = createReviews1638919654700;