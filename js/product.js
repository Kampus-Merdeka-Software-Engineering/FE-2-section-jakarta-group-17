const baseApiUrl = window.location.hostname === "localhost" ? "http://localhost:3000" : "PATH_URL_API_RAILWAY";
const apiRoutes = {
  productList: `${baseApiUrl}/products/list`,
};

const loadProductList = () => {
  fetch(apiRoutes.productList)
    .then((res) => res.json())
    .then((res) => {
      // Display only the first three items
      const slicedData = res.data.slice(0, 3);

      slicedData.forEach(({ product_image, title, price, AKG }) => {
        document.getElementById("product-list").innerHTML += `
                <div class="menu-card">
                <img src="${baseUrl}/${product_image}" alt="${product_image}" />
                <h3 class="menu-card-title">${title}</h3>
                  <p class="menu-card-price">IDR ${price}</p>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                  <a class="btn" id="">${AKG}cal</a>
                </div>
              `;
      });
    });
};
loadProductList();
