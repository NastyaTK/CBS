let divS = document.getElementsByTagName("div");
document.addEventListener("keypress", function(event) {
  switch (event.key) {
    case "r":
      for (let i = 0; i < divS.length; i++) {
        divS[i].style.color = "red";
      }
      break;
    case "g":
      for (let i = 0; i < divS.length; i++) {
        divS[i].style.color = "green";
      }
      break;
    case "b":
      for (let i = 0; i < divS.length; i++) {
        divS[i].style.color = "blue";
      }
      break;
    default:
      for (let i = 0; i < divS.length; i++) {
        divS[i].style.color = "black";
      }
  }
});
