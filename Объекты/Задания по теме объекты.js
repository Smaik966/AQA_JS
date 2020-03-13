//1. Создать объект, добавить к нему свойство
let obj = {
    property: null
};

//2. Изменить свойство объекта
obj.property = true;


//3. Сделать свойство объекта фунецией сложения двух чисел
obj.property = function (a, b) {
    return a + b;
}

console.log(obj.property(1,3));