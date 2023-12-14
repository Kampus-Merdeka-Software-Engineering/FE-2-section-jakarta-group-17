import { Artikel } from "../models/index.js";

export const readArtikelById = async (ArtikelId) => {
  return await Artikel.findOne({
    where: { id: ArtikelId },
  });
};

export const readArtikel = async () => {
  return await Artikel.findAll();
};

export const createArtikel = async (Judul, Deskripsi, Isi, Gambar, TglTerbit) => {
  return await Artikel.create({
    Judul,
    Deskripsi,
    Isi,
    Gambar,
    TglTerbit,
  });
};
