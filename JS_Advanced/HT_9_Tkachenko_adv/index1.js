let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let context2 = canvas.getContext("2d");

context.beginPath();
context.moveTo(20, 20);
context.lineTo(150, 150);
context.lineWidth = 10;
context.strokeStyle = "green";
context.stroke();

context2.beginPath();
context2.moveTo(50, 70);
context2.lineTo(200, 90);
context2.lineWidth = 5;
context2.strokeStyle = "blue";
context2.stroke();
