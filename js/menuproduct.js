const baseApiUrl = window.location.hostname === "localhost" ? "http://localhost:3000" : "https://erin-awful-snail.cyclic.app";
const apiRoutes = {
  productList: `${baseApiUrl}/products/list`,
};

const loadProductList = () => {
  fetch(apiRoutes.productList)
    .then((res) => res.json())
    .then((res) => {
      const productContainer = document.getElementById("product-list");

      res.data.forEach(({ id, product_image, title, price, AKG }) => {
        productContainer.innerHTML += `
          <div class="product" data-id="${id}">
            <img src="${baseApiUrl}/${product_image}" alt="${product_image}">
            <h3>${title}</h3>
            <p class="price">IDR ${price}</p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
        `;
      });

      showPopup();
    })
    .catch((error) => {
      console.error("Kesalahan Fetch:", error);
    });
};

loadProductList();
