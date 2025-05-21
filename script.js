let age = 14;
console.log("Age:", age);


let name = "Seva";
console.log("Name:", name);


let isStudent = true; 
console.log("Is student:", isStudent);


let myString = "Світ належить тим, хто в нього вірить.";
console.log("Quote:", myString);


let myNumber = 25; 
myNumber = myNumber + 10;
console.log("Updated myNumber:", myNumber);

let myNull = null;
console.log("myNull:", myNull);


let userName = prompt("Введіть своє ім’я");
alert("Ваше ім’я: " + userName);
console.log("Тип userName:", typeof userName);


let userAnswer = confirm("Ви дійсно хочете покинути сторінку?");
console.log("Користувач натиснув:", userAnswer ? "ОК" : "Скасувати");


alert("Увага! Дія може бути небезпечною.");
let continueAction = confirm("Ви впевнені, що хочете продовжити?");
console.log("Користувач вирішив:", continueAction ? "Продовжити" : "Скасувати дію");