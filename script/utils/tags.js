import { recipes } from '/data/recipesData.js';
import { getArrayIngredientsList, getArrayApplianceList, getArrayUstensilList } from '/script/page/index.js';
import { displayRecipesCard, displayIngredientsList, displayAppliancesList, displayUstensilsList } from '/script/page/index.js';
import { getArrayByTitle, getArrayByIngredients, getArrayByDescription, getArrayByAppliance, getArrayByUstensils } from '/script/utils/algorithmes.js';

let ingredientListArea = document.querySelector(".list-search.primary + .list-area");
let appliancesListArea = document.querySelector(".list-search.secondary + .list-area");
let ustensilsListArea = document.querySelector(".list-search.tertiary + .list-area");
let allItemsInListArea = document.querySelectorAll(".list-area_items");
let allCrossItems = document.querySelectorAll(".tags-container_cross");
let allTagsContainer = document.querySelectorAll(".tags-container");

const tagsArea = document.querySelector(".container-tags");

const recipesSection = document.querySelector(".recipes-galery");


// *** Création des Tags ***

export function displayDataIngredientsTags(){    

    let dataTags =  getArrayIngredientsList(recipes);

    dataTags.forEach(element => {
        // console.log(element.replaceAll(' ', '_'))
        
        let tagsContainer = document.createElement("div");
        
        tagsContainer.classList = "tags-container primary"
        tagsContainer.setAttribute("id",element);
    
        let tag = document.createElement("p");
        tag.textContent = element;
        tag.className = "tags-container_text";
        
        let crossTag = document.createElement("a");
        crossTag.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        crossTag.classList = "tags-container_cross";
        // crossTag.setAttribute("onclick", closeTags(element));

        tagsContainer.appendChild(tag);
        tagsContainer.appendChild(crossTag);
        
        tagsArea.appendChild(tagsContainer);        
    });
}

export function displayDataApliancesTags(){
    let dataTags =  getArrayApplianceList(recipes);

    dataTags.forEach(element => {
       
        let tagsContainer = document.createElement("div");
        
        tagsContainer.classList = "tags-container secondary"
        tagsContainer.setAttribute("id", element);
    
        let tag = document.createElement("p");
        tag.textContent = element;
        tag.className = "tags-container_text";
        
        let crossTag = document.createElement("a");
        crossTag.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        crossTag.classList = "tags-container_cross";
        // crossTag.setAttribute("onclick", closeTags(element));

        tagsContainer.appendChild(tag);
        tagsContainer.appendChild(crossTag);

        tagsArea.appendChild(tagsContainer);        
    });
}

export function displayDataUstensilsTags(){    

    let dataTags =  getArrayUstensilList(recipes);

    dataTags.forEach(element => {
        
        // console.log(element)
        let tagsContainer = document.createElement("div");
        
        tagsContainer.classList = "tags-container tertiary"
        tagsContainer.setAttribute("id", element);
    
        let tag = document.createElement("p");
        tag.textContent = element;
        tag.className = "tags-container_text";
        
        let crossTag = document.createElement("a");
        crossTag.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        crossTag.classList = "tags-container_cross";
        // crossTag.setAttribute("onclick",closeTags(element));

        tagsContainer.appendChild(tag);
        tagsContainer.appendChild(crossTag);

        tagsArea.appendChild(tagsContainer);        
    });
}

displayDataIngredientsTags();
displayDataApliancesTags();
displayDataUstensilsTags();

function getArray(id){
    let newRecipesArrayByIngredient = getArrayByIngredients(id); 
    let newRecipesArrayByAppliances = getArrayByAppliance(id);
    let newRecipesArrayByUstensils = getArrayByUstensils(id);
    let newRecipesArrayByName = getArrayByTitle(id);
    let newRecipesArrayByDescription = getArrayByDescription(id);

    let newRecipesOfAllArray = [...newRecipesArrayByName,...newRecipesArrayByIngredient,
        ...newRecipesArrayByDescription,...newRecipesArrayByAppliances,...newRecipesArrayByUstensils];

    let newRecipesArray = newRecipesOfAllArray.filter((ele, pos) => newRecipesOfAllArray.indexOf(ele) == pos);

    return newRecipesArray;
}

function displayrecipesByTags(){       
    allItemsInListArea.forEach(element => {
        element.addEventListener("click", () => {
            console.log(element);
            let tagById = document.getElementById(element.textContent);
            tagById.style.display = "flex";
            displayRecipesById(element.textContent);
        })
    })
}
displayrecipesByTags();

function displayRecipesById(id){    
    let array = [];
    let newRecipesArray = getArray(id);
    array.push(newRecipesArray);
    array.forEach(element => {

        recipesSection.innerHTML = "";            
        displayRecipesCard(element);
        ingredientListArea.innerHTML = "";
        displayIngredientsList(element);
        appliancesListArea.innerHTML = "";
        displayAppliancesList(element);
        ustensilsListArea.innerHTML = "";
        displayUstensilsList(element);
    })
}

// *** Création de la fonction qui fermera les tags ***

function closeTags(){
    let allCrossItems = document.querySelectorAll(".tags-container_cross");
    allCrossItems.forEach(element => {
        
        element.addEventListener("click", () => {

            element.parentElement.style.display = "none";
            recipesSection.innerHTML = "";            
            displayRecipesCard(recipes);
            ingredientListArea.innerHTML = "";
            displayIngredientsList(recipes);
            appliancesListArea.innerHTML = "";
            displayAppliancesList(recipes);
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(recipes);               
        })
    })
     
}

closeTags();