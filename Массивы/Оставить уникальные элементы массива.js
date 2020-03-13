//Ссылка на задание  https://learn.javascript.ru/task/array-unique
/* Условие:
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив,
содержащий только уникальные элементы arr.
*/

function unique(arr) {
    let array = arr.slice();

    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        for (let j = 0; j < array.length; j++) {
            if(arr[i] == array[j] && flag == false) array.splice(j,1);
            if(arr[i] == array[j]) flag = false;
        }
    }

    return array;
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O" ,":-O" ,":-O" ,":-O" , "харе", "харе" , ":-O" , "харе", "кришна" , "кришна"
];

console.log( unique(strings) ); // кришна, харе, :-O

console.log(strings);