let a = 2;
let b = 3;

if(a == b){
    console.log("Эти числа равны");
}else{
    console.log("Эти числа не равны");
}

(a != b) ? console.log("Эти числа не равны") : console.log("Эти числа равны");

switch (a) {
    case 1:
        console.log("a = 1");
        break;

    case 2:
        console.log("a = 2");
        break;

    default :
        console.log("Нет такого числа");
        break;
}