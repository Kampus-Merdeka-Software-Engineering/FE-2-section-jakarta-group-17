import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const Products = sequelize.define("Products", {
  product_image: DataTypes.STRING,
  title: DataTypes.STRING,
  price: DataTypes.INTEGER,
  AKG: DataTypes.INTEGER,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

export default Products;
