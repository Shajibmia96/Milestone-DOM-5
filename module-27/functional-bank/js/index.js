document.getElementById("deposit-button").addEventListener('click' ,function(){
    // console.log("Button is clicked")
    const depositItemElement = document.getElementById("depositField");
    const depositValue = parseFloat(depositItemElement.value);
    depositItemElement.value = "";
    // console.log(depositValue)
    // Deposite total section
    const depositTotalElement = document.getElementById("total-deposit");
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    // Calculation total
    const depositTotal = depositValue +previousDepositTotal;
    depositTotalElement.innerText = depositTotal

})