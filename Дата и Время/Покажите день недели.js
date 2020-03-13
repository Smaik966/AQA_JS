//Ссылка на задание  https://learn.javascript.ru/task/get-week-day
/* Условие:
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
*/

function getWeekDay(date) {
    let arrDays = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return arrDays[date.getDay()];
}

console.log(getWeekDay(new Date()));