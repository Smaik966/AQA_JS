//Ссылка на задание  https://learn.javascript.ru/task/camelcase
/* Условие:
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/

function camelize(str) {
    let arr = [];

    arr = str.split('-');
    arr = arr.map(function (element, index) {
        if(index > 0 && element != '') return element[0].toUpperCase() + element.slice(1);
        else return element;
    });

    return arr.join('');
}

console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );