"use stricte";
function getResult(x, y, mathSymbol) {
    switch (mathSymbol) {
        case "+": return x + y;
        case "*": return x * y;
        case "/": return x / y;
        case "-": return x - y;
        default: return "invalid argument";
    }
}