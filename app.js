function calculate() {

    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;

    if (operation == "+") {
        return number1 + number2;
    }

    if (operation == "-") {
        return number1 - number2;
    }

    if (operation == "*") {
        return number1 * number2;
    }

    if (operation == "/") {
        if (number2 == 0) {
            return "Cannot divide by zero";
        }

        return number1 / number2;
    }
}


document.querySelector("button").addEventListener("click", function() {
    handleSubmit();
});


function handleSubmit() {
    document.querySelector(".box").innerHTML = calculate();
}