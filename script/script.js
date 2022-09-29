"use stricte";
let arr = [];
let btn = document.querySelector(".btn"),
    valueInput = document.querySelector(".value"); //input two numbers and a symbol
function getResult(x, y, mathSymbol) {
    switch (mathSymbol) {
        case "+": return x + y;
        case "*": return x * y;
        case "/": return x / y;
        case "-": return x - y;
        default: return "invalid argument";
    }
}

  btn.addEventListener("click", function () {
        for (let i = 0; i < valueInput.value.length; i++) {
            arr.push(valueInput.value[i]);
       }
        if (arr.length === 3) {
            setTimeout(alert(getResult (+arr[0],+arr[1],arr[2])), 500);
      }
      arr = [];
  });
  
  
  