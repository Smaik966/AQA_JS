//Ссылка на задание  https://learn.javascript.ru/task/get-seconds-to-tomorrow
/* Условие:
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

function getSecondsToTomorrow() {
    let date = new Date();
    let secToTomorrow = (24 - date.getHours()) * 3600 - date.getMinutes() * 60 - date.getSeconds();
    return secToTomorrow;
}

console.log(getSecondsToTomorrow());