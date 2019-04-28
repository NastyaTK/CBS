function Human(name, age, job, child) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.child = function() {
    if (child == 0) {
      return "don`t have children";
    } else if (child <= 2 && child > 0) {
      return "small family";
    } else {
      return "big family";
    }
  };
}
Human.prototype.city = "Kiev";
Human.prototype.goToWork = function(time) {
  if (time >= 9 && time <= 18) {
    return "working time";
  } else {
    return "time to chill";
  }
};

let Anna = new Human("Anna", 25, "chef", 3);

document.write(Anna.child() + "<br>");
document.write(Anna.goToWork(new Date().getHours()));
