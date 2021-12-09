"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  render(user) {
    return {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email
    };
  },

  renderMany(users) {
    return users.map(user => this.render(user));
  }

};
exports.default = _default;