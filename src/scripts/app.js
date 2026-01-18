const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');

function clearDipslay() {
    display.value = ''
}

function addDigit(value) {
    if(display.value !== "ERROR") {
        display.value += value.innerText;
    }
}

function calc() {
    if(display.value) {
        try {
            display.value = math.evaluate(display.value);
        } catch {
            display.value = "ERROR";
        }
    }
}

calculator.addEventListener('click', e => {
    const el = e.target

    if(el.classList.contains('calculator__key--number')) addDigit(el);
    if(el.classList.contains('calculator__key--operator')) addDigit(el);
    if(el.classList.contains('calculator__key--dot')) addDigit(el);
    if(el.classList.contains('calculator__key--clear')) clearDipslay();
    if(el.classList.contains('calculator__key--equal')) calc();
});