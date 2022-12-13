import { recipes } from '../../data/recipesData.js';
import { getArrayIngredientsList, getArrayApplianceList, getArrayUstensilList } from '../page/index.js';
import { getAllDisplayRecipesItems } from '../utils/searchInput.js';

// ****** Variables ******

// Mes Tableaux
let tagsArray = [];
let funnelArray = [];

// Les zones des Tags
const tagsArea = document.querySelector(".container-tags");

// ***** Création des Tags *****
// Création des tags selon la liste des ingrédients 
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
// Création des tags selon la liste des d'appareils 
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
// Création des tags selon la liste des ustensiles
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
    id = id.toLowerCase();

    // *** Algorithme Boucle for() ***
    let newRecipesArray = [];
    for(let i = 0; i < array.length; i++){
        let includesInName = array[i].name.toLowerCase().includes(id);
        let includesInDescription = array[i].description.toLowerCase().includes(id);
        let includesInAppliance = array[i].appliance.toLowerCase().includes(id);
        let includeInIngredient = false;
        for(let j = 0; j < array[i].ingredients.length; j++){
            if(array[i].ingredients[j].ingredient.toLowerCase().includes(id)){
                includeInIngredient = true;
            }
        }
        let includeInUstensil = false;
        for(let j = 0; j < array[i].ustensils.length; j++){
            if(array[i].ustensils[j].toLowerCase().includes(id)){
                includeInUstensil = true;
            }
        }
        
        if(includesInName || includesInDescription || includesInAppliance || includeInIngredient || includeInUstensil){
            newRecipesArray.push(array[i]);
        }
    } 

    return newRecipesArray;
}

// Fonction qui génère les recettes selon la base de donnée Recipes par rapport
// à un mot clés préalablement séléctionné
export function displayRecipesByIdWithRecipeData(id){ 
    let newRecipesArray = getArray(id, recipes);
    funnelArray = [...newRecipesArray];
    let newArray = funnelArray;
    
    getAllDisplayRecipesItems(newArray);
    
}

// Fonction qui génère les recettes selon la base de donnée restante de => Recipes
//  par rapport à un mot clés préalablement séléctionné
export function displayRecipesByIdWithRestData(id){    
    let newRecipesArray = getArray(id, funnelArray);
    funnelArray = [...newRecipesArray];
    let newTagsData = [...new Set(funnelArray)];  

    getAllDisplayRecipesItems(newTagsData);
    
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
// Fonction qui supprime un mot-clé du tableau tagsArray
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
            let keyWord = element.parentElement.id;
            // Suppression du mot-clé dans le tableau tagsArray
            deleteWordInTagsArray(keyWord);            

            let newArrayOfTagsData = [];
            tagsArray.forEach(element => {
                newArrayOfTagsData = getArray(element, recipes)
            })
            console.log(newArrayOfTagsData)
            
            element.parentElement.style.display = "none";

            if(tagsArray.length === 0){

                getAllDisplayRecipesItems(recipes); 
                
            }else if(tagsArray.length > 0){

                getAllDisplayRecipesItems(newArrayOfTagsData);
                
            }
        })
    })
     
}

closeTags();
displayRecipesByTags();