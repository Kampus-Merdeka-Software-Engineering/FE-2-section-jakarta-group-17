import { Products } from "../models/index.js";

export const readProductsById = async (ProductsId) => {
  return await Products.findOne({
    where: { id: ProductsId },
  });
};

export const readProducts = async () => {
  return await Products.findAll();
};

export const createProduct = async (product_image, title, price, AKG) => {
  return await Products.create({
    product_image,
    title,
    price,
    AKG,
  });
};
