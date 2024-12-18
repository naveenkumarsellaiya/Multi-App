const display = document.getElementById("numberinput");
const themeButton = document.getElementById("Theme");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value.replace(/x/g, "*"));
    } catch {
        display.value = "Error";
    }
}

