//Ссылка на задание  https://learn.javascript.ru/task/format-date-ddmmyy
/* Условие:
Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг
*/

function formatDate(date){
    return ((date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
        + '.' +
        (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
        + '.' + date.getFullYear());
}

console.log(formatDate(new Date()));