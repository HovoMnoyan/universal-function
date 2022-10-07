"use stricte";

let btns = document.querySelectorAll(".btn"),
    display = document.querySelector(".display"),
    btnOnOff = document.querySelector("#onOff"),
    btnAc = document.querySelector(".btns"),
    btn1 = document.querySelector(".btn1"),
    arr = [];
let sum = 0;
let newArryOne = [];
let newArryTwo = [];
let i = 0;
let str = "";
let boolianShafl = true;
let buttonsBoolian = true;
function multiplication(x, y) {
    return x * y;
}

function subtraction(x, y) {
    return x / y;
}
function distinguiseSymbol(item) {
    item.addEventListener("click", (e) => {
        if (e.target.value !== "+" && e.target.value !== "-" && e.target.value !== "*" && e.target.value !== "/") {
            str += e.target.value;
            arr[i] = str;
            display.innerHTML += e.target.value;
            boolianShafl = true;
        } else if (boolianShafl) {
            str = "";
            arr[i + 1] = e.target.value;
            i += 2;
            display.innerHTML += e.target.value;
            boolianShafl = false;
        }
    });
}
function getMultiplicationSubtraction() {
    for (let i = 0; i < arr.length ; i ++) {
        if (arr[i] === "*" || arr[i] === "/") {
            if(arr[i] === "*") {
                sum =  multiplication(+arr[i - 1], +arr[i + 1]);
                newArryTwo = arr.slice(0, i - 1);
                newArryTwo.push(sum);
                newArryOne = arr.slice(i + 2, );
                arr = newArryTwo.concat(newArryOne);
                i--;
            } else {
                sum = subtraction(arr[i - 1], arr[i + 1]);
                newArryTwo = arr.slice(0, i - 1);
                newArryTwo.push(sum);
                newArryOne = arr.slice(i + 2, );
                arr = newArryTwo.concat(newArryOne);
                i--;
            }
        }             
    }
    return sum;
}
function showInDIspaly() {
    display.innerHTML = finelResualt(arr, sum);
    arr = [];
    arr[0] = display.textContent;
    i = 0;
    boolianShafl = true;
    str = "";
}
function clearDisplay() {
    display.innerHTML = "";
    arr = [];
    i = 0;
    str = "";
}
function onOff() {
        btns.forEach(function(item) {
            item.disabled = buttonsBoolian;
            arr = [];
            sum = 0;
            newArryOne = [];
            newArryTwo = [];
            i = 0;
            str = "";
            boolianShafl = true;
            display.innerHTML = "";
        });

        buttonsBoolian = !buttonsBoolian; 
}
function finelResualt(arr, sum) {
    sum = +arr[0];
    for(let i = 0; i < arr.length - 1 / 2; i += 2) {
        switch(arr[i + 1]) {
            case "+": sum += +arr[i + 2];
            break;
            case "-": sum -= +arr[i + 2];
            break;
        }
    }
    return sum;
}
// onOff();

btns.forEach((item) => {
    distinguiseSymbol(item);
});

btn1.addEventListener('click',() => {
    getMultiplicationSubtraction();
    showInDIspaly();
});
btnAc.addEventListener("click", () => {
    clearDisplay();
});

btnOnOff.addEventListener('click', () => {
    onOff();
});