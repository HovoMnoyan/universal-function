"use stricte";
function getResult (x, y ,mathSimbol) {
    switch(mathSimbol) {
        case "+": return x + y;
        case "*": return x * y;
        case "/": return x / y;
        case "-": return x - y;
        default: return "invalid argument";
    }
}


