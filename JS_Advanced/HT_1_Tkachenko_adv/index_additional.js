function Box(width, height, depth, material) {
  this.width = width;
  this.height = height;
  this.depth = depth;
  this.material = material;
}
Box.prototype.volume = function() {
  return this.width * this.height * this.depth;
};
Box.prototype.equals = function(obj_2) {
  if (this.material == obj_2.material) {
    return true;
  } else {
    return false;
  }
};
let box_1 = new Box(12, 13, 44, "aluminium");
let box_2 = new Box(25, 19, 24, "aluminium");
let box_3 = new Box(12, 13, 44, "gold");

document.write("volume = " + box_1.volume() + "<br>");
document.write(box_1.equals(box_3));
