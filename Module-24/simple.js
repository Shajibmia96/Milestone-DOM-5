// console.log("Hello , Iam Shajib Sarkar");
// console.dir('Bangladesh is a small country');
const liCollection = document.getElementsByTagName('li')
// console.log(liCollection);
for( const li of liCollection){
    // console.log(li.innerText)
}
const allh1 = document.getElementsByTagName('h1');
for(h1 of allh1){
    // console.log(h1.innerText)
}


const getPersonTitle = document.getElementById('person-title').innerText ="My most favourite  person"
// console.log(getPersonTitle)
const getPlacesTitle = document.getElementById('places-title').innerText ="My most favourite  places in the world"
// console.log(getPlacesTitle)

const getFruitTitle = document.getElementsByClassName('fruit-title')
 const changeTitle = getFruitTitle.innerText = "My favourite fruit  name below"
//  console.log(changeTitle)

const importance = document.getElementsByClassName('importances-list');
for (importan of importance){
    // console.log(importan.innerText)
}

const fruitCollection = document.querySelectorAll('.fruit-collection li') 
// console.log(fruitCollection)
   for(collection of fruitCollection){
    //    console.log(collection.innerText)
   }

   const places = document.querySelector('.places-container li')
//    console.log(places.innerText)

   document.getElementById("person-title").style.color = "red"
   document.getElementById("person-title").style.textAlign = "center"
   document.getElementById("person-title").style.fontSize = '100px'
 const title =   document.getElementById("places-title").style.backgroundColor = "orange"
  title.classLIst
  


  const div = document.getElementById('my-details')
  const text = div.innerHTML;
//   console.log(text);

