//Ссылка на задание  https://learn.javascript.ru/task/shuffle
/* Условие:
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
Например:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
Все последовательности элементов должны иметь одинаковую вероятность.
Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2],
или [3,1,2] и т.д., с равной вероятностью каждого случая.
*/

function shuffle(arr) {
    arr.sort((a, b) => {
        if (a > b) return Math.random() - Math.random();
        if (a == b) return Math.random() - Math.random();
        if (a < b) return Math.random() - Math.random();
    });
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);

shuffle(arr);
console.log(arr);