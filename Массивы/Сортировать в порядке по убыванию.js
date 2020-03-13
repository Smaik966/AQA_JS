//Ссылка на задание  https://learn.javascript.ru/task/sort-back
/* Условие:
let arr = [5, 2, 1, -10, 8];

// ... ваш код для сортировки по убыванию

alert( arr ); // 8, 5, 2, 1, -10
*/

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => {
        if (a > b) return -1;
        if (a == b) return 0;
        if (a < b) return 1;
    }
);

console.log(arr); // 8, 5, 2, 1, -10