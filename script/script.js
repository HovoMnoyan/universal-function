"use stricte";

let btns = document.querySelectorAll(".btn"),
    display = document.querySelector(".display"),
    btnOnOff = document.querySelector("#btns"),
    btnAc = document.querySelector(".btns"),
    btn1 = document.querySelector(".btn1"),
    arr = [];

    btns.forEach((item) => {
        item.addEventListener("click", (e) => {
            display.innerHTML += e.target.value;
            for (let i = 0; i < display.textContent.length; i++) {
            if (display.textContent[i] === "+" || display.textContent[i] === "-" || display.textContent[i] === "*" || display.textContent[i] === "/" ) {
            arr[0] = display.textContent.substring(0, i);
            arr[1] = display.textContent.substring(i + 1, display.textContent.length );
            arr[2] = display.textContent.substring(i, i + 1);

    }
}
});
    });

    btnAc.addEventListener("click", () => {
        display.innerHTML = "";
        arr = [];
    });
    
    btnAc.addEventListener('click', () => {

    });

function getResult(x, y, mathSymbol) {
    switch (mathSymbol) {
        case "+": return x + y;
        case "*": return x * y;
        case "/": return x / y;
        case "-": return x - y;
        default: return "invalid argument";
    }
}

btn1.addEventListener('click',() => {
    display.innerHTML += ` = ${ getResult(+arr[0], +arr[1], arr[2])}`;
});
