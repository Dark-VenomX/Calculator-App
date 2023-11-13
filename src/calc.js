var display = document.getElementById("display");
var buttons = document.getElementsByClassName("buttons");
var operand1 = 0;
var operand2 = null;
var operator = null;

// Function to handle button clicks
function handleButtonClick(value) {
  if (value == "reset") {
    clearDisplay();
  } else if (
    value == "+" ||
    value == "-" ||
    value == "*" ||
    value == "/" ||
    value == "%"
  ) {
    operator = value;
    operand1 = parseFloat(display.innerText);
    display.innerText = null;
  } else if (value == "=") {
    evaluateExpression();
  } else if (value == "sign") {
    changeSign();
  } else if (value == ".") {
    handleDecimal();
  } else {
    display.innerText += value;
  }
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
  var key = event.key;
  if (key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
    operator = key;
    operand1 = parseFloat(display.innerText);
    display.innerText = null;
  } else if (key === "Enter" || key === "=") {
    evaluateExpression();
  } else if (key === ".") {
    handleDecimal();
  } else if (!isNaN(parseInt(key, 10))) {
    display.innerText += key;
  }
}

// Function to clear the display
function clearDisplay() {
  display.innerText = null;
}

// Function to evaluate the expression
function evaluateExpression() {
  if (operator != null) {
    operand2 = parseFloat(display.innerText);
    try {
      display.innerText = eval(operand1 + " " + operator + " " + operand2);
    } catch (error) {
      display.innerText = "Error";
    }
  } else {
    display.innerText = "Error: No operator selected";
  }
}

// Function to handle the change of sign
function changeSign() {
  display.innerText = eval(parseFloat(display.innerText) * -1);
}

// Function to handle the decimal point
function handleDecimal() {
  if (display.innerText.length && !display.innerText.includes(".")) {
    display.innerText += ".";
  }
}

// Event listeners for button clicks
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    handleButtonClick(value);
  });
}

// Event listeners for keyboard input
document.addEventListener("keypress", handleKeyboardInput);
document.addEventListener("keydown", handleKeyboardInput);
