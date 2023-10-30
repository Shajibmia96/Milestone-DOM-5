// SetInput value

function getInputValueById(inputValue){
    const inputValueElement =document.getElementById(inputValue)
    const inputElement = parseFloat(inputValueElement.value)
    inputValueElement.value = '';
    return inputElement;
}

//Set previous deposit value

function getDepositValueById(depositValue){
    const depositValueElement = document.getElementById(depositValue)
    const depositElement = parseFloat(depositValueElement.innerText)
    return depositElement;
}

// set total Deposit value;
function setElementValueById(depositValue , newValue){
     const ElementValue =document.getElementById(depositValue);
     ElementValue.innerText = newValue; 
} 