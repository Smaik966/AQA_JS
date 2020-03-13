//Ссылка на задание  https://learn.javascript.ru/task/min
/* Условие:
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min(a, b) {
    if(a - b < 0) return a;
    else return b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));