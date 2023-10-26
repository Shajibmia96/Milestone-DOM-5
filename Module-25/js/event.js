// function makeMeRed(){
//     document.body.style.backgroundColor ="red";
// }

// const makeBlue = document.getElementById("makeMeBlue");
// makeBlue.onclick = makesMeBlue;
// function makesMeBlue(){
//     document.body.style.backgroundColor = "Blue"
// }

// const makePurple = document.getElementById ("makeMePurple").onclick = function(){
//     document.body.style.backgroundColor = "purple"

// }
// document.getElementById ("count").onclick = function(){
//     console.log("X")
// }

// document.getElementById("make-Green").addEventListener('click',function(){
//     document.body.style.backgroundColor = "Green";
// })





// console.log('My name is Shajib')

// const parent = document.querySelector('.parent');
// const children =parent.children[1].children[3] ;
// console.log(children)

// const parent = document.querySelector('.parent');
// const children = parent.querySelectorAll(".item")
// console.log(children)

// const children = document.querySelector('.item');
// const parent  = children.parentElement;
// console.log(parent);

// const children = document.querySelector('.item');
// const gp = children.closest(".parent")
// console.log(gp)


// Baba and chacha

// const baba = document.getElementById("name")
// const chacha = baba.nextElementSibling
// console.log(chacha);


const h1 = document.createElement('h1');
h1.innerText = "Now i am living in Japan"
console.log(h1)
const container = document.querySelector(".parent");
container.appendChild(h1)
const li = document.createElement('li')
li.innerText = "Japan in tokyo"
container.appendChild(li)
const div = document.createElement ("div");
// div.classList.add("div-list")

div.setAttribute( 'id', 'new-id')
div.setAttribute( 'title', 'new-title')
// let h1  = document.getElementById("name")
// container.insertBefore(div , h1);

div.innerHTML = `
 <h1>Now iam know about<h1/>
 <h3>How create a html tag<h3/>
 <li>HTML</li>
 <li>CSS</li>
 <li>SCSS</li>
 <li>Tailwind</li>
 <li>Javascript</li>

`;
container.appendChild(div)
document.getElementById("ul-list").remove();
