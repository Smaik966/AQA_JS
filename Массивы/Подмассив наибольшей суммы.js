//Ссылка на задание  https://learn.javascript.ru/task/maximal-subarray
/* Условие:
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»
*/

let arr = [];

function f(arr, int) {
    if(int > arr.length || int <= 0 ) return;

    let max = arr[0];

    for (let i = 0; i < arr.length; i++){
        if(arr[i] > max) max = arr[i];
    }

}

function getMaxSubSum(arr) {
    while(){

    }
}