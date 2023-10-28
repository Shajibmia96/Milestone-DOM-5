document.getElementById("deposit").addEventListener('click' , function(){
    // console.log("depo is clicked")
    const depoField = document.getElementById("amount-depo");
    const newDepoValue = parseFloat(depoField.value);
    // console.log(depoValue)
    // console.log(typeof depoValue)
    depoField.value = '';

    // add depo

    const depoTotalElement = document.getElementById('depo-total');
    const depoTotal = parseFloat(depoTotalElement.innerText);
    // console.log(repoTotal)
      depoTotalElement.innerText = newDepoValue + depoTotal;


      //add balance

      const balTotalElement = document.getElementById('balance-total');
      const balTotal = parseFloat(balTotalElement.innerText)
      balTotalElement.innerText = balTotal + newDepoValue
    //   console.log(typeof balTotalElement)

})

// ...........withdraw........

document.getElementById("withdraw").addEventListener('click' ,function(){
   const withdrawField = document.getElementById("amount-withdraw");
   const withdrawValue = parseFloat(withdrawField.value)
//    console.log(withdrawValue)
    withdrawField.value = '';
    
      const withdrawTotalElement = document.getElementById('withdraw-total');
      const withdrawTotal = parseFloat(withdrawTotalElement.innerText)
    //   console.log(withdrawTotal)
      withdrawTotalElement.innerText = withdrawTotal +withdrawValue;

      const balTotalElement = document.getElementById('balance-total');
      const balTotal = parseFloat(balTotalElement.innerText)
      balTotalElement.innerText = balTotal - withdrawValue
})