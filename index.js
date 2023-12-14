import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";
import productRoutes from "./routes/productsRoutes.js";
import { startSequelize } from "./utils/startSequelize.js";

import "./models/index.js";

const app = express();
const port = 3000;

startSequelize();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use(cors());

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
