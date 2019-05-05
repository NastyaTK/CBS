let appleBtn = document.getElementById("add-apple");
let bananaBtn = document.getElementById("add-banana");
let orangeBtn = document.getElementById("add-orange");
let calcBtn = document.getElementById("calculate-total");
let clearBtn = document.getElementById("clear-cart");
let products = [];
let prices = [];
let totalSum = 0;
console.dir(window);
bananaBtn.addEventListener("click", function() {
  products.push("banana");
  prices.push(22);
});
appleBtn.addEventListener("click", function() {
  products.push("apple");
  prices.push(10);
});
orangeBtn.addEventListener("click", function() {
  products.push("orange");
  prices.push(31);
});
function calculateTotalSum() {
  totalSum = 0;
  if (!prices || !products) {
    prices = [];
    products = [];
  } else {
    window.localStorage.setItem("prices", JSON.stringify(prices));
    window.localStorage.setItem("products", JSON.stringify(products));
    for (let i = 0; i < prices.length; i++) {
      totalSum += prices[i];
    }
  }
  window.localStorage.setItem("totalSum", totalSum);
  document.getElementById("total-price").innerHTML = "total sum = " + totalSum;
}
calcBtn.addEventListener("click", function() {
  totalSum = 0;
  if (
    products.length == 0 &&
    JSON.stringify(window.localStorage.getItem("products")) == null
  ) {
    calculateTotalSum();
  } else if (products.length == 0) {
    products = JSON.parse(window.localStorage.getItem("products"));
    prices = JSON.parse(window.localStorage.getItem("prices"));
    totalSum = +window.localStorage.getItem("totalSum");
  }
  calculateTotalSum();
});

clearBtn.addEventListener("click", function() {
  totalSum = 0;
  window.localStorage.clear();
  products = [];
  prices = [];
  document.getElementById("total-price").innerHTML = "total sum = " + totalSum;
});
