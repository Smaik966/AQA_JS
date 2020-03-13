//Ссылка на задание  https://learn.javascript.ru/task/promise-settimeout
/* Условие:
Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
Пример использования:

delay(1000)
  .then(() => alert("Hello!"))
Такая функция полезна для использования в других промис-цепочках.
*/

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms)
    });
}

delay(1000)
    .then(() => console.log("Hello!"));