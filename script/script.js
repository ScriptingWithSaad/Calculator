
        const display = document.querySelector('input[name="display"]');
        const operators = ['+', '-', '*', '/', '.'];

        function clearDisplay() {
            display.value = '';
        }

        function deleteLastChar() {
            display.value = display.value.toString().slice(0, -1);
        }

        function addNumber(num) {
            display.value += num;
        }

        function addOperator(operator) {
            // Get the last character of the current display value
            const lastChar = display.value.slice(-1);
            
            // Only add operator if:
            // 1. The display is not empty AND
            // 2. The last character is not an operator
            if (display.value !== '' && !operators.includes(lastChar)) {
                display.value += operator;
            }
        }

        function addDecimal() {
            const lastNumber = display.value.split(/[\+\-\*\/]/).pop();
            // Only add decimal if the last number doesn't already have one
            if (!lastNumber.includes('.')) {
                display.value += '.';
            }
        }

        function calculate() {
            try {
                // Check if the last character is an operator
                const lastChar = display.value.slice(-1);
                if (operators.includes(lastChar)) {
                    display.value = 'Error';
                    return;
                }
                
                // Calculate and round to 4 decimal places to avoid floating point issues
                const result = eval(display.value);
                display.value = Math.round(result * 10000) / 10000;
            } catch (error) {
                display.value = 'Error';
            }
        }
    