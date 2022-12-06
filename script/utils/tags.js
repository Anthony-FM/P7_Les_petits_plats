import { recipes } from '../../data/recipesData.js';
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

// Les zones des Recettes et des Tags
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

// Fonction qui efface et regénère les cartes recette 
// et les listes (ingrédients, appareiles et ustensiles)
function getAllDisplayRecipes(recipesArray){
    recipesSection.innerHTML = "";            
    displayRecipesCard(recipesArray);
    ingredientListArea.innerHTML = "";
    displayIngredientsList(recipesArray);
    appliancesListArea.innerHTML = "";
    displayAppliancesList(recipesArray);
    ustensilsListArea.innerHTML = "";
    displayUstensilsList(recipesArray);
    
    displayRecipesByTags();
}

// Fonction qui crée un tableau selon le mot-clé séléctionné et une base de donnée fournis
function getArray(id, array){
    id = id.toLowerCase();
    let newRecipesOfAllArray = [...getArrayByIngredients(id, array),...getArrayByAppliance(id, array),
        ...getArrayByUstensils(id, array),...getArrayByTitle(id, array),...getArrayByDescription(id, array)];

    let newRecipesArray = [...new Set(newRecipesOfAllArray)];

    return newRecipesArray;
}

// Fonction qui génère les recettes selon la base de donnée Recipes par rapport
// à un mot clés préalablement séléctionné
function displayRecipesByIdWithRecipeData(id){ 
    let newRecipesArray = getArray(id, recipes);
    funnelArray = [...newRecipesArray];
    let newArray = funnelArray;
    
    getAllDisplayRecipes(newArray);
    
}

// Fonction qui génère les recettes selon la base de donnée restante de => Recipes
//  par rapport à un mot clés préalablement séléctionné
function displayRecipesByIdWithRestData(id){    
    let newRecipesArray = getArray(id, funnelArray);
    funnelArray = [...newRecipesArray];
    let newTagsData = [...new Set(funnelArray)];  

    getAllDisplayRecipes(newTagsData);
    
}

// Fonction qui écoute tous les mot-clés de chaque liste
// applique une fonction selon si le tableau tagsArray possède une valeur ou non
// puis affiche le tags selectionné 
export function displayRecipesByTags(){      
    let allItemsInListArea = document.querySelectorAll(".list-area_items"); 

    allItemsInListArea.forEach(element => {

        element.addEventListener("click", () => {

            let id = element.textContent;
            let tagById = document.getElementById(id);
            tagById.style.display = "flex";

            if(tagsArray.length === 0){
                displayRecipesByIdWithRecipeData(id);               
                tagsArray.push(id);
                let newTagsArray = [...new Set(tagsArray)];
                tagsArray = newTagsArray;

            } else if(tagsArray.length > 0){
                displayRecipesByIdWithRestData(id);
                tagsArray.push(id);
                let newTagsArray = [...new Set(tagsArray)];
                tagsArray = newTagsArray;
            }
        })
    })
}

function deleteWordInTagsArray(word){
    let indexOfId = tagsArray.indexOf(word);
    if(indexOfId > -1){
        // Suppression du mot-clé grâce à son index et splice()
        tagsArray.splice(indexOfId, 1);
    }
}

// *** Création de la fonction qui fermera les tags ***

function closeTags(){
    let allCrossItems = document.querySelectorAll(".tags-container_cross");
    allCrossItems.forEach(element => {
        
        element.addEventListener("click", () => {

            // Récupération de l'id de l'élement parent 
            let id = element.parentElement.id;
            // Recherche de l'id dans le tableau tagsArray
            deleteWordInTagsArray(id);            

            let newArrayOfTagsData = [];
            tagsArray.forEach(element => {
                newArrayOfTagsData = getArray(element, recipes)
            })
            console.log(newArrayOfTagsData)
            
            element.parentElement.style.display = "none";

            if(tagsArray.length === 0){

                getAllDisplayRecipes(recipes); 
                
            }else if(tagsArray.length > 0){

                getAllDisplayRecipes(newArrayOfTagsData);
                
            }
        })
    })
     
}

closeTags();
displayRecipesByTags();