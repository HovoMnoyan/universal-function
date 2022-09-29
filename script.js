"use stricte";
function genericFun (a,b,c) {
switch (c) {
    case "+":return a + b;
     
     case "*": return a * b;
     
     case "/": return a / b;
     
     case "-": return a - b;
     default: return"invalid argument";
}

}
console.log(genericFun(2,3,'*'));

