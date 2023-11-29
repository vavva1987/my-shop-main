let cartToEl = document.querySelector(".cart-2");
let addToCartBtns = document.querySelectorAll(".add-to-cart");

console.log(cartToEl);
console.log(addToCartBtns);

// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEvenListener("click", function () {
//     console.log("clicked");
//   });
// }

addToCartBtns.forEach((item) =>
  item.addEvenListener("click", function () {
    // let prevProductsCount = +cartToEl.textContent;
    // cartToEl.textContent = prevProductsCount + 1;
    cartToEl.textContent = +cartToEl.textContent + 1;
  })
);
