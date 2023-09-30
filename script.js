const display = document.querySelector('.display');
        let currentInput = '';
let parenthesesCount = 0;
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const buttonText = button.textContent;

                if (buttonText === '=') {
                    try {
                        currentInput = eval(currentInput);
                        display.textContent = currentInput;
                    } catch (error) {
                        display.textContent = 'Error';
                        currentInput = '';
                    }
                } else if (buttonText === 'clear') {
                    currentInput = '';
                    display.textContent = '0';
                } else if (buttonText === 'del') {
                    currentInput = currentInput.slice(0, -1);
                    display.textContent = currentInput;
                } else if (buttonText === '(') {
                    currentInput += buttonText;
                    display.textContent = currentInput;
                    parenthesesCount++;
                } else if (buttonText === ')') {
                    if (parenthesesCount > 0) {
                        currentInput += buttonText;
                        display.textContent = currentInput;
                        parenthesesCount--;
                    }
                } 
                else if (buttonText === '^') {
                    currentInput +="**";
                } 
                else {
                    currentInput += buttonText;
                    display.textContent = currentInput;
                }
            });
        });