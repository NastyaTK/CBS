let pizzaForm = document.getElementById("pizza");
let submitBtn = document.getElementById("submit");
let userinfoValidate = document.getElementById("validation-user");
let priceElement = document.getElementById("price");
let calc = document.getElementById("calc");
let phonePattern = /[0-9]{10}/;
let name;
let phone;
let address;
console.dir(pizzaForm);
for (let i = 0; i < pizzaForm.length; i++) {
  switch (pizzaForm[i].name) {
    case "name":
      name = pizzaForm[i];
    case "phone":
      phone = pizzaForm[i];
    case "address":
      address = pizzaForm[i];
  }
}
submitBtn.addEventListener("click", function(event) {
  if (name.value == "" || phone.value == "" || address.value == "") {
    userinfoValidate.style.display = "block";
    event.preventDefault();
  } else {
    userinfoValidate.style.display = "flex";
  }
  if (!phonePattern.test(phone.value)) {
    phone.classList = "red";
    event.preventDefault();
  } else {
    phone.classList = "";
  }
});
// submitBtn.addEventListener("click", function(event) {

// });
calc.addEventListener("click", function(event) {
  let price = 0;
  for (let i = 0; i < pizzaForm.length; i++) {
    if (
      (pizzaForm[i].type == "checkbox" && pizzaForm[i].checked) ||
      (pizzaForm[i].type == "radio" && pizzaForm[i].checked)
    ) {
      price += +pizzaForm[i].value;
    }
  }
  priceElement.innerHTML = "total = " + price;
  event.preventDefault();
});
