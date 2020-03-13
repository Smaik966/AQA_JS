//Ссылка на задание  https://learn.javascript.ru/task/check-standard
/* Условие:
Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
*/

let prmt = prompt("Какое «официальное» название JavaScript?");

if(prmt == "ECMAScript"){
    alert("Верно!");
}else {
    alert("Не знаете? ECMAScript!");
}