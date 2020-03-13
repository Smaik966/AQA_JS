//Ссылка на задание  https://learn.javascript.ru/task/format-date-relative
/* Условие:
Напишите функцию formatDate(date), форматирующую date по следующему принципу:
Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm".
А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
*/

function formatDate(date) {
    let diffOfDate = new Date() - date;

    if(diffOfDate <= 1000) return "прямо сейчас";
    else if(diffOfDate < 60 * 1000) return diffOfDate / 1000 + " сек. назад";
    else if(diffOfDate < 60 * 60 * 1000) return diffOfDate / (60 * 1000) + " мин. назад"
    else{
        return ((date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
            + '.' +
            (date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
            + '.' + date.getFullYear()
            + ' ' +
            (date.getHours() < 10 ? '0' + date.getHours() : date.getHours())
            + ':' +
            (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()));
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // "вчерашняя дата"