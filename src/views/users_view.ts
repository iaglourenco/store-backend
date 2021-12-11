import User from "../models/User";
import buy_view from "./buy_view";
import products_view from "./products_view";

export default {
  render(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdProducts: products_view.renderMany(user.products),
      history: buy_view.renderMany(user.buyRecords),
      reviews: user.reviews,
      isAdmin: user.isAdmin,
    };
  },

  renderMany(users: User[]) {
    return users.map((user) => this.render(user));
  },
};
