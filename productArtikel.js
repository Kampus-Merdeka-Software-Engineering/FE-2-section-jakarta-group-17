import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const Artikel = sequelize.define("Artikel", {
  Judul: DataTypes.STRING,
  Deskripsi: DataTypes.TEXT,
  Isi: DataTypes.TEXT,
  Gambar: DataTypes.STRING,
  TglTerbit: DataTypes.DATE,
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
});

export default Artikel;
