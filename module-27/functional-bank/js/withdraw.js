// document.getElementById('withdraw-button').addEventListener('click' , function(){
//     const withdrawField = document.getElementById('withdrawField');
//     const withdrawValue = parseFloat(withdrawField.value);
//     withdrawField.value = '';

//     if(isNaN(withdrawValue) ){
//         alert("Please input valid amount")
//         return;
//     }
//     else if(withdrawValue> 10000){
//        alert("You withdraw is to Hight")
//        return;
//     }

//     // step-2

//     const withdrawTotalElement = document.getElementById('total-withdraw');
//     const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

 

//     // step-4
    

//     const totalBalanceElement = document.getElementById('total-balance')
//     const previousTotalBalance = parseFloat(totalBalanceElement.innerText);

//     const totalBalance = previousTotalBalance - withdrawValue;
//       if(withdrawValue > previousTotalBalance){
//            alert("Amount not pound")
//            return;
//       }
//          //  step-3

//     const withdrawTotal = previousWithdrawTotal + withdrawValue;
//     withdrawTotalElement.innerText = withdrawTotal;
//     // step-5
//     totalBalanceElement.innerText = totalBalance;
// })
 

// functional section

document.getElementById("withdraw-button").addEventListener('click' , function(){
    //  find out withdraw
    const getWithdrawFieldElement = getInputValueById('withdrawField');
    // console.log(getWithdrawFieldElement)

    const getTotalElement = getDepositValueById("total-withdraw");
    // console.log(getTotalElement)
    const getNewTotal = getWithdrawFieldElement + getTotalElement;
    setElementValueById('total-withdraw',getNewTotal);
    const getPreviousTotal = getDepositValueById('total-balance');

    const getCurrentValue = getPreviousTotal - getWithdrawFieldElement;
    setElementValueById('total-balance' , getCurrentValue);
    

})