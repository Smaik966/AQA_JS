//Ссылка на задание  https://learn.javascript.ru/task/is-empty
/* Условие:
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
Должно работать так:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

function isEmpty(obj){
    for(key in obj){
        return false;
    }
    return true;
}

let schedule = {};
console.log(schedule);

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log(schedule);
console.log( isEmpty(schedule) ); // false