let firstOperand = 0;
let secondOperand = 0;

function display(event) {
  event.preventDefault();
  const target = event.target;
  const value = target.innerText.trim();
  const screen = document.getElementById("screen");

  if (value === "+" || value === "-" || value === "*" || value === "/") {
    firstOperand = parseFloat(screen.innerText);
  }

  if (screen.innerText === "0") screen.innerText = "";
  screen.innerText = screen.innerText + value;
}

function clearEquation(event) {
  event.preventDefault();
  const screen = document.getElementById("screen");
  screen.innerText = "0";
}

function calculate(event) {
  event.preventDefault();
  const value = document.getElementById("screen").innerText;
  let operator = "";
  for (let i = 0; i < value.length; i++) {
    const ch = value[i];
    if (ch === "+" || ch === "-" || ch === "*" || ch === "/") {
      operator = ch;
      secondOperand = parseFloat(value.slice(i + 1));
    }
  }
  switch (operator) {
    case "+":
      document.getElementById("screen").innerText =
        firstOperand + secondOperand;
      firstOperand = 0;
      secondOperand = 0;
      break;
    case "-":
      document.getElementById("screen").innerText =
        firstOperand - secondOperand;
      firstOperand = 0;
      secondOperand = 0;
      break;
    case "*":
      document.getElementById("screen").innerText =
        firstOperand * secondOperand;
      firstOperand = 0;
      secondOperand = 0;
      break;
    case "/":
      document.getElementById("screen").innerText =
        firstOperand / secondOperand;
      firstOperand = 0;
      secondOperand = 0;
      break;
  }
}
