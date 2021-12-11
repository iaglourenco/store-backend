"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUsers1637593646398 = void 0;

var _typeorm = require("typeorm");

class createUsers1637593646398 {
  async up(queryRunner) {
    //Realiza as alterações no banco de dados
    //Criar tabela, criar novo campo, deletar campo, etc
    await queryRunner.createTable(new _typeorm.Table({
      name: "users",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true,
        isUnique: true,
        isGenerated: true,
        generationStrategy: "uuid",
        default: "uuid_generate_v4()"
      }, {
        name: "email",
        type: "varchar",
        isNullable: false,
        isUnique: true
      }, {
        name: "password",
        type: "varchar",
        isNullable: false
      }, {
        name: "name",
        type: "varchar"
      }, {
        name: "isAdmin",
        type: "boolean"
      }, {
        name: "image",
        type: "varchar",
        isNullable: true
      }]
    }));
  }

  async down(queryRunner) {
    //Desfaz as alterações no banco de dados
    //Desfazer o que foi feito no método up
    await queryRunner.dropTable("users");
  }

}

exports.createUsers1637593646398 = createUsers1637593646398;