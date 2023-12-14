import { createArtikel, readArtikel, readArtikelById } from "../services/artikel.js";

export const getArtikelList = async (request, response) => {
  const artikelList = await readArtikel();

  console.log({ artikelList });

  response.status(200).json({
    data: artikelList,
    message: "sukses mengambil data artikel",
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

export const postArtikelId = async (request, response) => {
  const id = request.params.id;

  const artikel = await readArtikelById(id);

  if (artikel === null) {
    return response.status(404).json({
      message: "Data not Found",
    });
  }

  response.json({
    data: artikel,
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */

export const postArtikelItem = async (request, response) => {
  const { Judul, Deskripsi, Isi, Gambar, TglTerbit } = request.body;

  const artikel = await createArtikel(Judul, Deskripsi, Isi, Gambar, TglTerbit);

  response.json(artikel);
};
