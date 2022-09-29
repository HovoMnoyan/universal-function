"use stricte";
function genericFun (x,y,simble) {
    switch (simble) {
        case "+": return x + y;
        case "*": return x * y;
        case "/": return x / y;
        case "-": return x - y;
        default: return "invalid argument";
    }

}


