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
  item.addEventListener("click", function () {
    // let prevProductsCount = +cartToEl.textContent;
    // cartToEl.textContent = prevProductsCount + 1;
    cartToEl.textContent = +cartToEl.textContent + 1;
  })
);

let likedBtns = document.querySelectorAll(".img-3");
// console.log(likedBtns);

likedBtns.forEach((item) => {
  item.addEventListener("click", function () {
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }
    item.classList.toggle("liked");
  });
});

let moreDetailsBtns = document.querySelectorAll(".details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", function () {
    // modal.style.display = "block";
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
  if (e.target === document.querySelector(".form-more-details h3")) {
    let h3 = document.querySelector(".form-more-details h3");
    h3.style.backgroundColor = "green";
  }
});

$(".slide-class").slick({
  dots: true,
});

// Counter funk style

let decrementBtns = document.querySelectorAll(".decrement-btn")[0];
let incrementBtns = document.querySelectorAll(".increment-btn")[0];
let inputFields = document.querySelectorAll(".product-quantity input")[0];

// incrementBtns.disabled

console.log(inputFields.value);

let currentCount = +inputFields.value;
toggleButtonState(currentCount);

function toggleButtonState(count) {
  if (count <= 1) {
    decrementBtns.disabled = true;
  } else {
    decrementBtns.disabled = false;
  }
}

// function toggleButtonState1(count) {
//   if (count >= 10) {
//     decrementBtns.disabled = true;
//   } else {
//     decrementBtns.disabled = false;
//   }
// }

incrementBtns.addEventListener("click", function () {
  let currentCount = +inputFields.value;
  let nextCount = currentCount + 1;
  inputFields.value = nextCount;

  toggleButtonState(nextCount);
  // toggleButtonState1(nextCount);
});

decrementBtns.addEventListener("click", function () {
  let currentCount = +inputFields.value;
  let nextCount = currentCount - 1;
  inputFields.value = nextCount;

  toggleButtonState(nextCount);
});
