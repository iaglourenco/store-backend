"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Product = _interopRequireDefault(require("./Product"));

var _User = _interopRequireDefault(require("./User"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let Review = (_dec = (0, _typeorm.Entity)("reviews"), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)("increment"), _dec3 = Reflect.metadata("design:type", Number), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", Number), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", String), _dec8 = (0, _typeorm.ManyToOne)(() => _User.default, user => user.reviews, {
  cascade: true
}), _dec9 = (0, _typeorm.JoinColumn)({
  name: "user_id"
}), _dec10 = Reflect.metadata("design:type", typeof _User.default === "undefined" ? Object : _User.default), _dec11 = (0, _typeorm.ManyToOne)(() => _Product.default, product => product.reviews, {
  cascade: true
}), _dec12 = (0, _typeorm.JoinColumn)({
  name: "product_id"
}), _dec13 = Reflect.metadata("design:type", typeof _Product.default === "undefined" ? Object : _Product.default), _dec(_class = (_class2 = class Review {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "stars", _descriptor2, this);

    _initializerDefineProperty(this, "opinion", _descriptor3, this);

    _initializerDefineProperty(this, "user", _descriptor4, this);

    _initializerDefineProperty(this, "product", _descriptor5, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "stars", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "opinion", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "user", [_dec8, _dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "product", [_dec11, _dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.default = Review;