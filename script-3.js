let chislo1 = 10;
let chislo2 = 0;
let operator = "/";

let result;

switch (operator) {
  case "+":
    result = chislo1 + chislo2;
    break;
  case "-":
    result = chislo1 - chislo2;
    break;
  case "*":
    result = chislo1 * chislo2;
    break;
  case "/":
    if (chislo2 === 0) {
      result = "Помилка: ділення на нуль!";
    } else {
      result = chislo1 / chislo2;
    }
    break;
  default:
    result = "Невідомий оператор.";
}

console.log("Результат:", result);