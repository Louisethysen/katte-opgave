"use strict";

const btnElement = document.getElementById ("btn");

const dataElement = document.querySelector (".katte-data");


btnElement.addEventListener ("click", () => {
    const url = "../json/cats.json"; 

    fetch(url)
    .then(res => res.json())
    .then(json => {
        json.forEach( val => {

            //opretter et div element, gemt i variablen katteContainer
            const katteContainer = document.createElement("div");

            //tilføj en attribut til vores katteContainer - en class
            katteContainer.classList.add("katte-container");

            const katteItem = document.createElement ("div");

            //tilføj en attribut til vores katteItem
            katteItem.classList.add("katte-item");

            // tilføjer img tag 
    
            const katteImage = document.createElement("img");

                  //tilføj en attribut til vores katteImage

                katteImage.classList.add("katte-image");

                //sætter værdien src på ens billede

                katteImage.src = `../img/${val.image}`;

                //sætter et alt tag på vores billede 

                katteImage.alt = `${val.breed} ${val.name}`;

            //tilføjer en ul (unordered list)

            const katteInfo = document.createElement("ul");

            //tager fat om ens ul, for at vi kan lave en li inde i den og tilføjer bil info til list items 

            katteInfo.innerHTML = 
            `
            <li> Navn: ${val.name}</li>
            <li> Vægt: ${val.weight}</li>
            <li> Race: ${val.breed} </li>
            `;


            // sætter elementerne under / indeni hinanden (gør dem til forældre / børn af hinanden )
            //nedenunder kan man se at carImage ligger inden i carItem og det samme gør carInfo
            //carItem ligger under Carcontainer 
            //og det hele kommer under sectionen fra vores html outputElement

            katteItem.appendChild(katteImage);
            katteItem.appendChild(katteInfo);

            katteContainer.appendChild(katteItem);

            dataElement.appendChild(katteContainer);

        });
    })


})

