// console.log("hello")

// function addLimit(idName){
//    const idNameElement = document.getElementById(idName);
//    if(idNameElement = "Keyup"){
//       idNameElement = disable;
//    }
// }

let total = 0;
function getSome(data){
  const innerTextElement = (data.parentNode.childNodes[1].innerText);
//   console.log(innerTextElement)
  const li = document.createElement("li");
  li.innerText= innerTextElement;
  const itemText = document.getElementById("itemList");
  itemText.appendChild(li);
  const priceELement =(data.parentNode.childNodes[5].innerText.split(" ")[2])
  // console.log(priceELement)
  total = total + parseFloat(priceELement);
  // console.log(total)
  document.getElementById("total-amount").innerText = total;
  const getDiscount = total/100*25;
  const discount = total - getDiscount;
  document.getElementById("total-discount").innerText = getDiscount;
  document.getElementById("total-price").innerText = discount;
  
}
// var button = document.getElementById('myButton'); // Get the button element

// button.addEventListener('click', function() {
//   // Disable the button
//   button.disabled = true;
// })

function disableButton (buttonId){
  var button = document.getElementById(buttonId)
  button.addEventListener("click" ,function(){
    button.disabled = true;
  })
}

 disableButton("myButton")
 disableButton("myButtons")
 disableButton("myButtonss")

