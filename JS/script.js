let inputDisplay = document.getElementById('user-input');
let outputDisplay = document.getElementById('result');
let inputButtons = Array.from(document.getElementsByClassName('button'));

inputButtons.map ((button) => {
    button.addEventListener('click', (e) => {
        switch(e.target.value) {
            case 'C':
                if(inputDisplay.innerText) {
                    inputDisplay.innerText = inputDisplay.innerText.slice(0,-1);
                }
                break;
            case 'AC':
                inputDisplay.innerText = '';
                outputDisplay.innerText = '';
                break;
            case '=':
                outputDisplay.innerText = eval(inputDisplay.innerText);
                break; 
            default:
                inputDisplay.innerText += e.target.value;
        }
    });
});
