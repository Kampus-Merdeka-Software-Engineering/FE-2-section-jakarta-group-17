import { Sequelize } from "sequelize";

const MYSQL_URL = process.env.MYSQL_URL;
const sequelize = new Sequelize(MYSQL_URL, {
  dialect: "mysql",
});

export default sequelize;
