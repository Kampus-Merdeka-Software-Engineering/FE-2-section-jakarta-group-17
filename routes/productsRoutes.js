import express from "express";
import { getProductsList, postProductItem, postProductsId } from "../controllers/productsController.js";
import { getArtikelList, postArtikelItem, postArtikelId } from "../controllers/artikelControler.js";

const router = express.Router();

router.get("/list", getProductsList);

router.get("/detail/:id", postProductsId);

router.post("/create", postProductItem);

router.get("/artikellist", getArtikelList);

router.get("/:id", postArtikelId);

router.post("/artikelcreate", postArtikelItem);

export default router;
