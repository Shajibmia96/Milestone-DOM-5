const placesList = document.getElementById("places-list")
const listItem = document.createElement('li')
listItem.innerText = "My biggest dream  go to Europe"
const AddList = placesList.appendChild(listItem);


const mainContainer = document.getElementById('main-container')
 
const section = document.createElement('section')
console.log(section)

const h1 = document.createElement('h1')
h1.innerText = "My most favuorite fruits"
section.appendChild(h1);

  const ul = document.createElement ('ul')
 
  section.appendChild(ul)
   
  const li1 = document.createElement("li")
  li1.innerText  = "Banana"
  const li2 = document.createElement("li")
  li2.innerText  = "Apple"
  const li3 = document.createElement("li")
  li3.innerText  = "Mango"
  const li4 = document.createElement("li")
  li4.innerText  = "Carrot"
  const li5 = document.createElement("li")
  li5.innerText  = "orange"
  ul.appendChild(li1)
  ul.appendChild(li2)
  ul.appendChild(li3)
  ul.appendChild(li4)
  ul.appendChild(li5)

mainContainer.appendChild(section)


const containerDress = document.createElement ("section")
 
   containerDress.innerHTML = `
    <h1> My All favourite dresses</h1>
     <ul>
           <li>T-shirt</li>
           <li>Longi</li>
           <li>pent</li>
           <li>Gamcha</li>
     </ul>  
   `
   mainContainer.appendChild(containerDress);
