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
let previewBox = previewContainer.querySelectorAll("preview ");
document.querySelectorAll(".product-container .product").forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});
