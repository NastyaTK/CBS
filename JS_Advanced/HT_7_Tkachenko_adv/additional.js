let userForm = document.getElementById("registrationForm");
let formValidate = document.getElementById("form-validate");
let pswd = document.getElementById("pswd");
let confirmPswd = document.getElementById("pswd-confirm");
let pswdValidate = document.getElementById("pswd-confirm-validate");
let email = document.getElementById("email");
let emailPattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
let emailValidate = document.getElementById("email-validate");
userForm.addEventListener("focusout", function() {
  for (let i = 0; i < this.length; i++) {
    if (this[i].value == "") {
      formValidate.style.display = "flex";
      break;
    } else {
      formValidate.style.display = "none";
    }
  }
});
confirmPswd.addEventListener("input", function() {
  if (this.value != pswd.value) {
    pswdValidate.style.display = "flex";
  } else {
    pswdValidate.style.display = "none";
  }
});

email.addEventListener("input", function() {
  if (!emailPattern.test(this.value)) {
    emailValidate.style.display = "flex";
  } else {
    emailValidate.style.display = "none";
  }
});
