const baseApiUrl = window.location.hostname === "localhost" ? "http://localhost:3000" : "https://kind-cyan-hen-cuff.cyclic.app";
const apiRoutes = {
  artikelList: `${baseApiUrl}/products/artikellist`,
};

const loadArtikelList = () => {
  fetch(apiRoutes.artikelList)
    .then((res) => res.json())
    .then((res) => {
      const artikelContainer = document.getElementById("article-list");

      res.data.forEach(({ id, Judul, Deskripsi, Gambar, TglTerbit, Isi }) => {
        artikelContainer.innerHTML += `
        <div class="blog-box" onclick={redirectToDetail(${id})} >
        <div class="blog-img">
          <img src="${baseApiUrl}/${Gambar}" alt="${Gambar}">
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
