//Ссылка на задание  https://learn.javascript.ru/task/sign
/* Условие:
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.
*/

let prmt = prompt("Введите число:");

if (prmt > 0) {
    alert("1");
}else if (prmt < 0) {
    alert("-1");
}else if (prmt == 0) {
    alert("0");
}