var r = parseInt(prompt("Type radius", 3));
var h =parseInt(prompt("Type height", 3));
document.write("r = " + r + "<br>");
document.write("h = " + h + "<br>");
var V = Math.PI*Math.pow(r, 2)*h;
document.write("V = " + V + "<br>");
var S = 2* Math.PI*r*(r+h);
document.write("S = " + S + "<br>");