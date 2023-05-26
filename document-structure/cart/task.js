const prod = document.querySelectorAll(".product");
const bProdQuan = document.querySelectorAll(".product__quantity-control");
const bProdAdd = document.querySelectorAll(".product__add");
const cartProds = document.querySelector(".cart__products");
const cartTitle = document.querySelector(".cart__title");

bProdQuan.forEach((buttonQ) => {
  buttonQ.addEventListener("click", (e) => {
    const numbPr = e.target.parentElement.querySelector(
      ".product__quantity-value"
    );
    if (e.target.className.includes("inc")) {
      numbPr.textContent++;
    } else {
      numbPr.textContent > 1 ? numbPr.textContent-- : (numbPr.textContent = 0);
    }
  });
});

bProdAdd.forEach((buttonA) => {
  buttonA.addEventListener("click", (e) => {
    const prod = e.target.closest(".product");
    addProd(prod);
  });
});

function addProd(prod) {
  const prodNumb = prod.querySelector(".product__quantity-value").textContent;
  const prodImg = prod.querySelector(".product__image").getAttribute("src");
  const prodId = prod.getAttribute("data-id");
  // console.log(prodNumb, prodImg, prodId);

  const prodInCart = cartProds.querySelector(`[data-id="${prodId}"]`);
  if (!prodInCart) {
    let cartProdCont = document.createElement("div");
    cartProdCont.classList.add("cart__product");
    cartProdCont.dataset.id = prodId;
    let cartProdImg = document.createElement("img");
    cartProdImg.classList.add("cart__product-image");
    cartProdImg.src = prodImg;
    let cartProdNumb = document.createElement("div");
    cartProdNumb.classList.add("cart__product-count");
    cartProdNumb.textContent = prodNumb;
    let cartProdDel = document.createElement("button");

    cartProdDel.classList.add("product__remove");
    cartProdDel.innerText = "x";
    cartProdDel.setAttribute("style", "display: block");

    cartProdCont.appendChild(cartProdImg);
    cartProdCont.appendChild(cartProdNumb);
    cartProdCont.appendChild(cartProdDel);
    cartProds.appendChild(cartProdCont);
    hideCart();
  } else {
    // console.log(prodInCart);
    const count = prodInCart.querySelector(".cart__product-count");
    count.innerText = Number(count.innerText) + Number(prodNumb);
  }
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("product__remove")) {
    e.target.closest(".cart__product").remove();
    hideCart();
  }
});

hideCart();

function hideCart() {
  const prodInCart = cartProds.querySelectorAll(".cart__product");
  if (prodInCart.length == 0) {
    cartTitle.setAttribute("style", "display: none");
  } else {
    cartTitle.setAttribute("style", "display: flex");
  }
}
