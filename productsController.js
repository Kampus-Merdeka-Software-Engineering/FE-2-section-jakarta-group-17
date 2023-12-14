import { createProduct, readProducts, readProductsById } from "../services/products.js";

export const getProductsList = async (request, response) => {
  const productsList = await readProducts();

  console.log({ productsList });

  response.status(200).json({
    data: productsList,
    message: "sukses mengambil data",
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

export const postProductsId = async (request, response) => {
  const id = request.params.id;

  const product = await readProductsById(id);

  if (product === null) {
    return response.status(404).json({
      message: "Data not Found",
    });
  }

  response.json({
    data: product,
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

export const postProductItem = async (request, response) => {
  const { product_image, title, price, AKG } = request.body;

  const product = await createProduct(product_image, title, price, AKG);

  response.json(product);
};
