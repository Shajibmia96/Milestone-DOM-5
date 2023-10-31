function getPreviousTextElement(getByElement){
    const previousElement = document.getElementById(getByElement);
    const previousValueElement = parseFloat(previousElement.innerText)
    return previousValueElement;

}
function setDiscountTextElement(discountID , discountWithAmount){
    const discountResult = document.getElementById(discountID);
    discountResult.innerText = discountWithAmount;
}

document.getElementById("Apply-btn").addEventListener('click' , function(){
    // console.log("Button was clicked")
    const previousPriceElement = getPreviousTextElement('PriceAmount')
    // console.log(previousPrice)
    const discountPriceElement = getPreviousTextElement('discountAmount')
    // console.log(discountPrice)
    const discountElement = 30;
    const discountPrice = (discountElement /100)* previousPriceElement;
    const priceWithDiscount = previousPriceElement-discountPrice
    // console.log(priceWithDiscount)
    const amountWithDiscount =setDiscountTextElement('discountAmount' , priceWithDiscount)
})