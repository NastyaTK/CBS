function Human(name, age) {
  this.name = name;
  this.age = age;
}
let people = [];
for (let i = 0; i < 10; i++) {
  people.push(
    new Human(
      "name_" + i,
      parseInt(Math.random() * 15) + parseInt(Math.random() * 20)
    )
  );
}
function sortPeople(array) {
  array.sort(function(a, b) {
    return a.age - b.age;
  });
}
sortPeople(people);
for (let i = 0; i < people.length; i++) {
  document.write(
    "name: " + people[i].name + ", age: " + people[i].age + "<br>"
  );
}
