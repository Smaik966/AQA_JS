//Ссылка на задание  https://learn.javascript.ru/task/get-seconds-today
/* Условие:
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToday() {
    let date = new Date();
    let secToday = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return secToday;
}

console.log(getSecondsToday());