let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log("1:", fahrenheit);


let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("2:", hoursInMonth, minutesInMonth);


let health = 100;
let energy = 80;
health -= 20;
energy -= 30;
console.log("3:", health, energy);


let totalPrice = 500;
let discount = 0.1;
let discountedPrice = totalPrice * (1 - discount);
console.log("4:", discountedPrice);


const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log("5:", roundedDown);


const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log("6:", parsedFloat);


const intString = "123";
let parsedInt = parseInt(intString);
console.log("7:", parsedInt);


let number = 64;
let sqrtNumber = Math.sqrt(number);
console.log("8:", sqrtNumber);


const integer = 42;
const numberString = "256";
let convertedInt = parseInt(numberString);
let convertedString = integer.toString();
console.log("9:", convertedInt, convertedString);