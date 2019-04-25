// Написать функцию с 3 аргументами: количество людей в поездке,
// количество дней (по умолчанию - 7 дней), страна путешествия (Египет, Турция, Болгария);
// В зависимости от страны - вычисляется за один день сумма.
// Пользователь при покупке свыше 10 дней - получает скидку в 10%
// меньше 5 дней -путевку взять нельзя - выдает ошибку.
// Путевку на 0 человек взять нельзя. Результат должен выводиться в тело документа.
// Prompt, confirm -использовать нельзя.
function trip(people, days, country) {
  var price = "100%";
  var countries = ["Egypt", "Turkey", "Bulgaria"];
  var selectedCountry;
  var peopleToGo;
  peopleToGo = people == 0 ? "Error: couldn`t be 0 people" : people;
  if (days == undefined) {
    days = 7;
  } else if (days > 10) {
    price = "90%";
  } else if (days < 5) {
    price = "Error: couldn`t be less then 5 days";
  }
  for (var i = 0; i < countries.length; i++) {
    if (countries[i] == country) {
      selectedCountry = country;
      break;
    } else {
      selectedCountry = "Egypt";
    }
  }
  return (
    "People: " +
    peopleToGo +
    "<br>" +
    "Selected Country: " +
    selectedCountry +
    "<br>" +
    "Price: " +
    price
  );
}

document.write(trip(3, 13, "Turkey"));
