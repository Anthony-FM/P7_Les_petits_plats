import { recipes } from '/data/recipesData.js';
import { getArrayIngredientsList, getArrayApplianceList, getArrayUstensilList } from '../page/index.js';
import { displayRecipesCard, displayIngredientsList, displayAppliancesList, displayUstensilsList } from '../page/index.js';
import { getArrayByTitle, getArrayByIngredients, getArrayByDescription, getArrayByAppliance, getArrayByUstensils } from '../utils/algorithmes.js';


// ****** Variables ******
// Mes Variables Ingrédients Appareils et Ustensils
let ingredientListArea = document.querySelector(".list-search.primary + .list-area");
let appliancesListArea = document.querySelector(".list-search.secondary + .list-area");
let ustensilsListArea = document.querySelector(".list-search.tertiary + .list-area");

// Mes Tableaux
let tagsArray = [];
let funnelArray = [];


const tagsArea = document.querySelector(".container-tags");

const recipesSection = document.querySelector(".recipes-galery");

// ***** Création des Tags *****

function displayDataIngredientsTags(){    

    let dataTags =  getArrayIngredientsList(recipes);

    dataTags.forEach(element => {        
        let tagsContainer = document.createElement("div");
        
        tagsContainer.classList = "tags-container primary"
        tagsContainer.setAttribute("id",element);
    
        let tag = document.createElement("p");
        tag.textContent = element;
        tag.className = "tags-container_text";
        
        let crossTag = document.createElement("a");
        crossTag.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`
        crossTag.classList = "tags-container_cross";

        tagsContainer.appendChild(tag);
        tagsContainer.appendChild(crossTag);
        
        tagsArea.appendChild(tagsContainer);        
    });
}

function displayDataApliancesTags(){
    let dataTags =  getArrayApplianceList(recipes);

    dataTags.forEach(element => {       
        let tagsContainer = document.createElement("div");
        
        tagsContainer.classList = "tags-container secondary"
        tagsContainer.setAttribute("id", element);
    
        let tag = document.createElement("p");
        tag.textContent = element;
        tag.className = "tags-container_text";
        
        let crossTag = document.createElement("a");
        crossTag.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`
        crossTag.classList = "tags-container_cross";

        tagsContainer.appendChild(tag);
        tagsContainer.appendChild(crossTag);

        tagsArea.appendChild(tagsContainer);        
    });
}

function displayDataUstensilsTags(){    

    let dataTags =  getArrayUstensilList(recipes);

    dataTags.forEach(element => {
        let tagsContainer = document.createElement("div");
        
        tagsContainer.classList = "tags-container tertiary"
        tagsContainer.setAttribute("id", element);
    
        let tag = document.createElement("p");
        tag.textContent = element;
        tag.className = "tags-container_text";
        
        let crossTag = document.createElement("a");
        crossTag.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`
        crossTag.classList = "tags-container_cross";

        tagsContainer.appendChild(tag);
        tagsContainer.appendChild(crossTag);

        tagsArea.appendChild(tagsContainer);        
    });
}

// ****** Génération des Tags ******
displayDataIngredientsTags();
displayDataApliancesTags();
displayDataUstensilsTags();

// Fonction qui crée un tableau selon le mot-clé séléctionné et une base de donnée fournis
function getArray(id, array){
    let newRecipesArrayByIngredient = getArrayByIngredients(id, array); 
    let newRecipesArrayByAppliances = getArrayByAppliance(id, array);
    let newRecipesArrayByUstensils = getArrayByUstensils(id, array);
    let newRecipesArrayByName = getArrayByTitle(id, array);
    let newRecipesArrayByDescription = getArrayByDescription(id, array);

    let newRecipesOfAllArray = [...newRecipesArrayByName,...newRecipesArrayByIngredient,
        ...newRecipesArrayByDescription,...newRecipesArrayByAppliances,...newRecipesArrayByUstensils];

    let newRecipesArray = newRecipesOfAllArray.filter((ele, pos) => newRecipesOfAllArray.indexOf(ele) == pos);

    return newRecipesArray;
}

// Fonction qui génère les recettes selon la base de donnée Recipes par rapport
// à un mot clés préalablement séléctionné
function displayRecipesByIdWithRecipeData(id){ 
    let newRecipesArray = getArray(id, recipes);
    funnelArray = newRecipesArray;
    let newArray = funnelArray;
    
    recipesSection.innerHTML = "";            
    displayRecipesCard(newArray);
    ingredientListArea.innerHTML = "";
    displayIngredientsList(newArray);
    appliancesListArea.innerHTML = "";
    displayAppliancesList(newArray);
    ustensilsListArea.innerHTML = "";
    displayUstensilsList(newArray);
    
    displayrecipesByTags();
    console.log("funnelArray: ",funnelArray);
    
}

// Fonction qui génère les recettes selon la base de donnée restante de => Recipes
//  par rapport à un mot clés préalablement séléctionné
function displayRecipesByIdWithRestData(id){    
    let newRecipesArray = getArray(id, funnelArray);
    console.log("funnelArray: ",funnelArray);
    funnelArray = newRecipesArray;
    console.log("funnelArray", funnelArray)
    let newTagsData = funnelArray.filter((ele, pos) => funnelArray.indexOf(ele) == pos);    
    console.log("new array container: ",newTagsData);
    recipesSection.innerHTML = "";            
    displayRecipesCard(newTagsData);
    ingredientListArea.innerHTML = "";
    displayIngredientsList(newTagsData);
    appliancesListArea.innerHTML = "";
    displayAppliancesList(newTagsData);
    ustensilsListArea.innerHTML = "";
    displayUstensilsList(newTagsData);

    displayrecipesByTags();
    console.log("funnelArray: ", funnelArray)
    
}


function displayrecipesByTags(){      
    let allItemsInListArea = document.querySelectorAll(".list-area_items"); 
    allItemsInListArea.forEach(element => {
        element.addEventListener("click", () => {
            let id = element.textContent;
            let tagById = document.getElementById(id);
            tagById.style.display = "flex"; 
            console.log(tagsArray.length)
            if(tagsArray.length === 0){
                console.log(tagsArray.length)
                displayRecipesByIdWithRecipeData(id);               
                tagsArray.push(id);
                console.log(tagsArray)
            } else if(tagsArray.length > 0){
                console.log(tagsArray.length)
                displayRecipesByIdWithRestData(id);
                tagsArray.push(id);
                console.log(tagsArray)
            }
        })
    })
}

// *** Création de la fonction qui fermera les tags ***

function closeTags(){
    let allCrossItems = document.querySelectorAll(".tags-container_cross");
    allCrossItems.forEach(element => {
        
        element.addEventListener("click", () => {

            let id = element.parentElement.id;

            let indexOfId = tagsArray.indexOf(id);
            if(indexOfId > -1){
                tagsArray.splice(indexOfId, 1);
            }

            let newArrayOfTagsData = [];
            tagsArray.forEach(element => {
                newArrayOfTagsData = getArray(element, recipes)
            })
            console.log(newArrayOfTagsData, tagsArray.length)
            
            element.parentElement.style.display = "none";

            if(tagsArray.length === 0){

                recipesSection.innerHTML = "";            
                displayRecipesCard(recipes);
                ingredientListArea.innerHTML = "";
                displayIngredientsList(recipes);
                appliancesListArea.innerHTML = "";
                displayAppliancesList(recipes);
                ustensilsListArea.innerHTML = "";
                displayUstensilsList(recipes);    
                displayrecipesByTags();   
                console.log(tagsArray)
                
            }else if(tagsArray.length > 0){

                recipesSection.innerHTML = "";            
                displayRecipesCard(newArrayOfTagsData);
                ingredientListArea.innerHTML = "";
                displayIngredientsList(newArrayOfTagsData);
                appliancesListArea.innerHTML = "";
                displayAppliancesList(newArrayOfTagsData);
                ustensilsListArea.innerHTML = "";
                displayUstensilsList(newArrayOfTagsData);    
                displayrecipesByTags();   
                console.log(newArrayOfTagsData)
                
            }
        })
    })
     
}

closeTags();
displayrecipesByTags();