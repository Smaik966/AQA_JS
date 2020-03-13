let str1 = "Строка";
let str2 = "Строки";

if(str1 == str2){
    console.log("Эти строки равны");
}else{
    console.log("Эти строки не равны");
}

(str1 == str1) ? console.log("Эти строки равны") : console.log("Эти строки не равны");

switch (str1) {
    case "Строка":
        console.log("Строка");
        break;

    case "Строки":
        console.log("Строки");
        break;

    default :
        console.log("Нет такой строки");
        break;
}