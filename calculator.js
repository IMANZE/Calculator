const resultField = document.getElementById("resultField");
let previousResult = "0";
let selectedOperation = null;

const numberButtons = document.getElementsByClassName("button-number");
const operationButtons = document.getElementsByClassName("button-operation");
const resetButton = document.getElementById("button-reset");
const evaluationButton = document.getElementById("button-evaluate");

for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", handleNumberButtonClick);
}

for (const operationButton of operationButtons) {
  operationButton.addEventListener("click", handleOperationButtonClick);
}

resetButton.addEventListener("click", handleResetButtonClick);

evaluationButton.addEventListener("click", handleEvaluateButtonClick);

function handleNumberButtonClick(event) {
  const selectedNumber = event.target.innerText;

  if (resultField.value === "0") {
    if (selectedNumber === "0") {
      return;
    }

    resultField.value = selectedNumber;
  } else {
    resultField.value = resultField.value.concat(selectedNumber);
  }
}

function handleResetButtonClick() {
  resultField.value = "0";
  previousResult = "0";
  selectedOperation = null;
}

function handleOperationButtonClick(event) {
  if (selectedOperation !== null && resultField.value !== "0") {
    return;
  }

  selectedOperation = event.target.innerText;
  previousResult = resultField.value;
  resultField.value = "0";
}

function handleEvaluateButtonClick() {
  if (selectedOperation === null) {
    return;
  }

  const firstOperand = Number.parseFloat(previousResult);
  const secondOperand = Number.parseFloat(resultField.value);

  switch (selectedOperation) {
    case "+":
      resultField.value = firstOperand + secondOperand;
      break;
    case "-":
      resultField.value = firstOperand - secondOperand;
      break;
    case "*":
      resultField.value = firstOperand * secondOperand;
      break;
    case "/":
      resultField.value = firstOperand / secondOperand;
      break;
    default:
      throw "Unknown operation";
  }

  selectedOperation = null;
  previousResult = "0";
}
