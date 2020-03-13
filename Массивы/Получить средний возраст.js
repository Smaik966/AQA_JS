//Ссылка на задание  https://learn.javascript.ru/task/average-age
/* Условие:
Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
*/


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(arr) {
    let sumOfAge = 0;

    arr.forEach((element) => sumOfAge += element.age)

    return sumOfAge / arr.length;
}


console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28