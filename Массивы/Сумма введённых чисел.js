//Ссылка на задание  https://learn.javascript.ru/task/create-array
/* Условие:
Напишите функцию sumInput(), которая:
Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput(){
    let arr = [];
    let prmt;
    let sumOfArrElem = 0;

    while (true){
        prmt = prompt("Введите число:");
        if(Number(prmt) || prmt == '0'){
            arr.push(+prmt);
        }else break;
    }

    arr.forEach(function (element) {
        sumOfArrElem += element;
    });

    return sumOfArrElem;
}

alert( sumInput() );