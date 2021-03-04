console.log("initial page load...");
var teamDiv = document.querySelector("#my-team");
var requestURL = "https://pokeapi.co/api/v2/pokemon/";


async function getPokemon(element, id) {
    const response = await fetch( requestURL + id );
    var myData = await response.json();
    console.log(myData);
    var entry = `<h1>${myData.name}</h1>
                 <img src="${myData.sprites.front_shiny}" class="larger" alt="${myData.name}">`;
    element.parentNode.innerHTML = entry; 
}