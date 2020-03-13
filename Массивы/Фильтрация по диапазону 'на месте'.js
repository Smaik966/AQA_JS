//Ссылка на задание  https://learn.javascript.ru/task/filter-range-in-place
/* Условие:
Напишите функцию filterRangeInPlace(arr, a, b),
которая принимает массив arr и удаляет из него все значения кроме тех,
которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.
*/

function filterRangeInPlace(arr, a, b) {

   /* arr = arr.splice(function (element, index) {
        if(element >= a && element <= b) return (index, 1);
    });*/

    arr.forEach(function (element, index) {
        if(element < a || element > b) arr.splice(index,1);
    });
}


let arr = [5, 3, 8, 1];


filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1]