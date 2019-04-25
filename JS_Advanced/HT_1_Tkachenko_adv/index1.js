function Cake(taste) {
  this.taste = taste;
  this.fruit = function(_fr) {
    if (_fr == "banana") {
      return "banana cake";
    } else {
      return "dragon fruit cake";
    }
  };
}
Cake.prototype.mass = 150;
Cake.prototype.addCocoa = function() {
  this.cocoa = "cocoa";
};
let cake = new Cake("mellon");
console.log(cake);
document.write(cake.fruit("banana"));
