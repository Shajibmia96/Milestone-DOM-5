const sections = document.querySelectorAll("section")
for(const section of sections){
    section.style.border = "5px solid steelBlue"
    section.style.marginBottom = "5px"
    section.style.paddingLeft = "10px"
    section.style.borderRadius = "15px"
    section.style.backgroundColor = "LightGray"
}

const placesContainer = document.getElementById("places-container")
// placesContainer.style.backgroundColor= "yellow"
placesContainer.classList.add('text-center',"larges-text" )
placesContainer.classList.remove('text-center')