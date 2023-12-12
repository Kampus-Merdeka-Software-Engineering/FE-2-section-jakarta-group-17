// const baseUrl = "http://localhost:3000";
// const apiRoutes = {
//   artikelId: (id) => `${baseApiUrl}/products/${id}`,
// };

const loadArtikelDetail = async () => {
  const query = window.location.search;
  const urlSearchParams = new URLSearchParams(query);

  const id = urlSearchParams.get("id");

  console.log({ id });

  const rawResponse = await fetch(`http://localhost:3000/products/${id}`);
  const response = await rawResponse.json();

  // document.getElementById("artikel-title").innerText = response.data.Judul;
  // document.getElementById("artikel-deskripsi").innerText = response.data.Deskripsi;
  // document.getElementById("artikel-gambar").setAttribute("src", response.data.gambar);
  // document.getElementById("artikel-isi").innerText = response.data.Isi;

  console.log({ response });
};

loadArtikelDetail();
