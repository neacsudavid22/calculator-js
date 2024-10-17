let display = document.getElementById("display");
let calculated = true;

function appendToDisplay(input){
    
    let operators = ['-','+','/','*'];
    const lastIndex = display.value.toString().length - 1;
    const lastChar = display.value.toString()[lastIndex];

    if(calculated && !operators.includes(input)){
        clearDisplay()
        calculated = false;
    }
    else calculated = false

    if(operators.includes(input)){
        if(!operators.includes(lastChar) && display.value !== '')
            display.value += input;
    } 
    else display.value += input;

    if(display.value === '' && input==='-')
        display.value += input; 
}

function deleteFromDisplay(){
    const newLength = display.value.toString().length - 1;
    const newValue = display.value.toString().slice(0,newLength);
    display.value = newValue;
}

function clearDisplay(){
    display.value = "";
}

function calculateFromDisplay(){
    display.value = eval(display.value);
    calculated = true;
}