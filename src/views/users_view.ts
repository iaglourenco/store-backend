import User from "../models/User";
import buy_view from "./buy_view";

export default {
  render(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdProducts: user.products,
      history: user.buyRecords,
      reviews: user.reviews,
      isAdmin: user.isAdmin,
    };
  },

  renderMany(users: User[]) {
    return users.map((user) => this.render(user));
  },
};
