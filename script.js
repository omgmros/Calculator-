let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousValue = '';

function appendNumber(num) {
    currentInput += num;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    
    if (previousValue === '') {
        previousValue = currentInput;
        currentInput = '';
        operator = op;
    } else {
        calculate();
        operator = op;
    }
}

function calculate() {
    if (operator === '' || currentInput === '' || previousValue === '') return;
    
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current !== 0 ? prev / current : 'Error';
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = '';
    previousValue = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    previousValue = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput || '0';
}