import Product from "../models/Product";
import imagesView from "./images_view";

export default {
  render(product: Product) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      brand: product.brand,
      stock: product.stock,
      numReviews: product.reviews ? product.reviews.length : 0,
      rating: product.reviews
        ? product.reviews.reduce((acc, review) => acc + review.stars, 0) /
          product.reviews.length
        : -1,
      images: imagesView.renderMany(product.images),
    };
  },

  renderMany(products: Product[]) {
    return products.map((product) => this.render(product));
  },
};
