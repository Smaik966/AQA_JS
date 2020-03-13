function divide(a, b) {
   if (b == 0) throw "На ноль делить нельзя";
   return a / b;
}

try{
    divide(1, 0);
}catch (e) {
    console.log(e);
}