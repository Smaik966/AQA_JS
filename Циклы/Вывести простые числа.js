//Ссылка на задание  https://learn.javascript.ru/task/list-primes
/* Условие:
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
Напишите код, который выводит все простые числа из интервала от 2 до n.
Для n = 10 результат должен быть 2,3,5,7.
}
*/

let q = 2;
let n = 20;

loop: for(let i = q; i <= n; i++){
    for(let j = q; j < i; j++){
        if(i % j == 0) continue loop;
    }
    console.log(i);
}