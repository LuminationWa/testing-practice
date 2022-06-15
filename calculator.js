const calculator = (() => {
    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function divide(a, b) {
        return a / b;
    }
    function multiply(a, b) {
        return a * b;
    }
    return {sum,
    subtract,
    divide,
    multiply
    };
  })();
module.exports = calculator;