import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const User = sequelize.define("User", {
  Name: DataTypes.STRING,
  Email: DataTypes.STRING,
  Pesan: DataTypes.INTEGER,
});

export default User;
