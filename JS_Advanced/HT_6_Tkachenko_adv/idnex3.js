let saleBtn = document.getElementById("sale");
saleBtn.addEventListener("mouseover", function() {
  saleBtn.style.top = Math.random() * 300 + "px";
  saleBtn.style.left = Math.random() * 300 + "px";
});
