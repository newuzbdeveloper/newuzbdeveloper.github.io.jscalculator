const numberButtons = document.querySelectorAll('[data-numbers]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equallButton = document.querySelector('[data-equall]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
let currentOuput = document.querySelector('[data-current-output]');
let prevOutput = document.querySelector('[data-previous-output]');

document.addEventListener('click', function(event){
    for(let i = 0; i < numberButtons.length; i++){
        if(event.target === numberButtons[i]){
            if(numberButtons[i].innerText === '.' && (currentOuput.innerText).includes('.'))return;
            currentOuput.innerText = (currentOuput.innerText).toLocaleString() + (numberButtons[i].innerText).toLocaleString(); 
        }
    }
    
    for(let i = 0; i < operationButtons.length; i++){
        if(event.target.innerText === operationButtons[i].innerText){
            if(currentOuput.innerText === '')return;
            prevOutput.innerText = `${currentOuput.innerText} ${operationButtons[i].innerText}`
            currentOuput.innerText = ''
        }
    }

    if(event.target === equallButton){
        const prev = parseFloat(prevOutput.innerText)
        const current = parseFloat(currentOuput.innerText)
        let result;
        if(isNaN(prev) || isNaN(current))return;
        switch(prevOutput.innerText.slice(-1)){
            case '+':
                result = prev + current;
                currentOuput.innerText = result;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '÷':
                result = prev  / current;
                break;
            default:
                return;
            }
        
            prevOutput.innerText = '';
            currentOuput.innerText = result;
    }

    if(event.target === deleteButton){
        prevOutput.innerText = '';
        currentOuput.innerText = currentOuput.innerText.slice(0, -1);
    }

    if(event.target === allClearButton){
        prevOutput.innerText = '';
        currentOuput.innerText = '';
        operationButtons.innerText = undefined;
        
    }

})

