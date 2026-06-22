let display = document.getElementById("display");

function addToDisplay(value) {
    display.value += value;
}

function calculate() {
    let expression = display.value;

    if (expression.includes("+")) {
        let parts = expression.split("+");

        let num1 = Number(parts[0]);
        let num2 = Number(parts[1]);

        display.value = num1 + num2;
    }

    else if (expression.includes("-")) {
        let parts = expression.split("-");

        let num1 = Number(parts[0]);
        let num2 = Number(parts[1]);

        display.value = num1 - num2;
    }

    else if (expression.includes("*")) {
        let parts = expression.split("*");

        let num1 = Number(parts[0]);
        let num2 = Number(parts[1]);

        display.value = num1 * num2;
    }

    else if (expression.includes("/")) {
        let parts = expression.split("/");

        let num1 = Number(parts[0]);
        let num2 = Number(parts[1]);

        if (num2 == 0){
            display.value = `You cannot divide by 0`
        }

        else{
              display.value = num1 / num2;
        }

      
    }
}

function clearDisplay() {
    display.value = "";
}