const baseUrl = "http://localhost:3000";
const apiRoutes = {
  artikelList: `${baseUrl}/products/artikellist`,
};

const loadArtikelList = () => {
  fetch(apiRoutes.artikelList)
    .then((res) => res.json())
    .then((res) => {
      const artikelContainer = document.getElementById("article-list");

      res.data.forEach(({ Judul, Deskripsi, Gambar, TglTerbit, Isi }) => {
        artikelContainer.innerHTML += `
        <div class="blog-box">
        <div class="blog-img">
          <img src="${baseUrl}/${Gambar}" alt="${Gambar}">
        </div>
        <!-- text -->
        <div class="blog-text">
          <span>${TglTerbit}</span>
          <a href="article-content.html" class="blog-title"><h3>${Judul}</h3></a>
          <p>${Deskripsi}</p>
          <a href="article-content.html">Read More</a>
        </div>
      </div>
        `;
      });
    })
    .catch((error) => {
      console.error("Kesalahan Fetch:", error);
    });
};

loadArtikelList();
