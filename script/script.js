"use stricte";

let btns = document.querySelectorAll("button"),
    valueInputOne = document.querySelector("#value_number_one"),
    valueInputTwo = document.querySelector("#value_number_two");

function getResult(x, y, mathSymbol) {
    switch (mathSymbol) {
        case "+": return x + y;
        case "*": return x * y;
        case "/": return x / y;
        case "-": return x - y;
        default: return "invalid argument";
    }
}

btns.forEach(function (item) {
    item.addEventListener("click", (e) => {
        alert(getResult (valueInputOne.value,valueInputTwo.value,e.target.value));
  });
});  