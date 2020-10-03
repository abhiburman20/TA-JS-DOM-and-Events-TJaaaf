let display = document.querySelector(".display");
let grid = document.querySelector(".grid");

function pushValue(value) {
    if (value.target.classList.contains("item8")) {
        display.textContent = eval(display.textContent);
    }
    else if (value.target.classList.contains("buttons")) {
        display.textContent += value.target.textContent;
    }
    else {
        display.textContent = "";
    }
}
grid.addEventListener("click",pushValue);
