// document.getElementById("deposit-button").addEventListener('click' ,function(){
//     // console.log("Button is clicked")
//     const depositItemElement = document.getElementById("depositField");
//     const depositValue = parseFloat(depositItemElement.value);
//     depositItemElement.value = "";
//     if(isNaN(depositValue) ){
//         alert("Please input valid amount")
//         return;
//     }
//     else if(depositValue > 10000){
//        alert("You deposit is to Hight")
//        return;
//     }
    
//     // console.log(depositValue)
//     // Deposite total section
//     const depositTotalElement = document.getElementById("total-deposit");
//     const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    
//     // Calculation total
//     const depositTotal = depositValue +previousDepositTotal;
//     depositTotalElement.innerText = depositTotal

//     //  step-4
//     const totalBalanceElement = document.getElementById('total-balance')
//     const previousTotalBalance = parseFloat(totalBalanceElement.innerText);

//     const totalBalance = depositValue + previousTotalBalance;
//     totalBalanceElement.innerText = totalBalance;


// })


// Functional section
   


document.getElementById("deposit-button").addEventListener('click' , function(){
    // console.log("HI....")
    const depositValue = getInputValueById('depositField')
    // console.log(depositValue)
    const previousDeposit = getDepositValueById('total-deposit')
    // console.log(previousDeposit)

    const newTotalDeposit = depositValue + previousDeposit
    setElementValueById("total-deposit" , newTotalDeposit)
    
    // Set total balance
    const previousBalance =getDepositValueById('total-balance')
     const newTotalBalance = previousBalance + depositValue;
      setElementValueById("total-balance" , newTotalBalance)
})


