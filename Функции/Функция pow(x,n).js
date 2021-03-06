//Ссылка на задание  https://learn.javascript.ru/task/pow
/* Условие:
Напишите функцию pow(x,n), которая возвращает x в степени n.
Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.
*/

function pow(x, n) {
    if (n < 1) return "Поддерживаются только натуральные числа";
    else {
        let a = 1;
        for (let i = 0; i < n; i++) {
            a *= x;
        }
        return a;
    };
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100));
console.log(pow(3, -3));