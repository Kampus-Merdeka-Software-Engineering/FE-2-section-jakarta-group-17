//Toogle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika humberger menu di klik (DOM)
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav (EVENT LISTENER)
const humberger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// klik product lalu keluar preview product
let previewContainer = document.querySelector(".product-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

const showPopup = () => {
  const products = document.querySelectorAll(".product-container .product");
  const productimage = document.querySelector("#product-image");
  const productTitle = document.querySelector("#product-title");
  const productprice = document.querySelector("#product-price");
  const productAKG = document.querySelector("#product-AKG");
  const previewContainer = document.querySelector(".product-preview");
  const previewBox = previewContainer.querySelectorAll(".preview");
  const backButton = document.querySelector(".back");

  products.forEach((product) => {
    product.addEventListener("click", function () {
      let productId = this.getAttribute("data-id");

      // fetch detail from product
      fetch(`https://erin-awful-snail.cyclic.app/products/detail/${productId}`)
        .then((res) => res.json())
        .then((res) => {
          let detail = res.data;

          // productimage.setAttribute("src", detail.product_image);
          productTitle.innerHTML = detail.title;
          productprice.innerHTML = detail.price;
          productAKG.innerHTML = detail.AKG;

          previewContainer.style.display = "flex";
          let name = product.getAttribute("data-name");
          previewBox.forEach((preview) => {
            let target = preview.getAttribute("data-target");
            if (name == target) {
              preview.classList.add("active");
            }
          });
        });
    });
  });

  // Add event listener for the "Back" button
  backButton.addEventListener("click", function () {
    // Hide the popup when the "Back" button is clicked
    previewContainer.style.display = "none";
    // Remove the "active" class from all preview boxes
    previewBox.forEach((preview) => {
      preview.classList.remove("active");
    });
  });
};

// Call the function to set up the event listeners
showPopup();
