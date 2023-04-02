let result = document.getElementById('result');

function addToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = '';
}

function deleteNumber() {
  result.value = result.value.slice(0, -1);
}

function calculate(operator) {
let calculation = result.value;
if (calculation) {
if (operator === '%') {
result.value = calculation / 100;
} else if (operator === '=') {
result.value = eval(calculation);
} else {
result.value = calculation + operator;
}
}
}
