function makeMeRed(){
    document.body.style.backgroundColor ="red";
}

const makeBlue = document.getElementById("makeMeBlue");
makeBlue.onclick = makesMeBlue;
function makesMeBlue(){
    document.body.style.backgroundColor = "Blue"
}

const makePurple = document.getElementById ("makeMePurple").onclick = function(){
    document.body.style.backgroundColor = "purple"

}
document.getElementById ("count").onclick = function(){
    console.log("X")
}

document.getElementById("make-Green").addEventListener('click',function(){
    document.body.style.backgroundColor = "Green";
})