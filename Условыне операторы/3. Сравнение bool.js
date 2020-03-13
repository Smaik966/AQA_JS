let bool1 = true;
let bool2 = false;

if(bool1 > bool2){
    console.log("true");
}else{
    console.log("false");
}

(bool1 < bool2) ? console.log("true") : console.log("false");

switch (bool1) {
    case false:
        console.log("false");
        break;

    case true:
        console.log("true");
        break;
}