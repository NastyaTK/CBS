let manager = {
  name: "ManagerName",
  surname: "ManagerSurname",
  age: 21
};
function createUser(name, surname, age){
  this.name = name;
  this.surname = surname; 
  this.age = age;
}
let secretary = new createUser("SecretaryName", "SecretarySurname", 51);

document.write(Object.values(manager).join(", ") + "<br>" + Object.values(secretary).join(", "));
