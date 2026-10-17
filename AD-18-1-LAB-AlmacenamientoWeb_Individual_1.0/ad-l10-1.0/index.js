
const itemsContainer = document.querySelector("#list-items")//Aqui seleccionamos un nodo que contiene el id id=list-items

function addItem(item) { //En esta función estamos agregando Items 
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

function fetchColorsList() {
        
}

function loadColorsFromStorage() {
  
}

fetchColorsList()
loadColorsFromStorage()

  
   //Probar este sigueinte 
 async function fetchColorsList() {
  try{
    const response = await fetch("https://reqres.in/api/unknown");  //Tarea 1
    const result = await response.json();
    console.log(result);

    localStorage.setItem(
      "colors",
      JSON.stringify(result.data)
    ); //tarea 3

    result.data.forEach(item => {addItem(item);     
    }); //tarea 2

    } catch (error) {
    console.error("Error:", error);
  }
}
fetchColorsList();

function loadColorsFromStorage() {

  const colors = localStorage.getItem("colors");

  if (colors) {
   const colorsList = JSON.parse(colors);

    colorsList.forEach(item => {
      addItem(item);
    });

  }

}