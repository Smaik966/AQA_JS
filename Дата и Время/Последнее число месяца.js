//Ссылка на задание  https://learn.javascript.ru/task/last-day-of-month
/* Условие:
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/

function getLastDayOfMonth(year, month) {
    let data = new Date(year , month + 1, 0);

    return data.getDate();
}

console.log(getLastDayOfMonth(2012, 1));