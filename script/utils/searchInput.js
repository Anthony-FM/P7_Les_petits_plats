import { recipes } from '../../data/recipesData.js';
import { displayRecipesCard, displayIngredientsList, displayAppliancesList, displayUstensilsList, getArrayIngredientsList, getArrayApplianceList, getArrayUstensilList } from '../page/index.js';
import { displayRecipesByTags, tagsArray, funnelArray } from '../utils/tags.js';

// *** Mes Variables ***
const searchInput = document.getElementById("searchRecipes");
const recipesSection = document.querySelector(".recipes-galery");
const ingredientInput = document.querySelector(".list-search_input.primary-hover");
const applianceInput = document.querySelector(".list-search_input.secondary-hover");
const ustensilsInput = document.querySelector(".list-search_input.tertiary-hover");

let ingredientListArea = document.querySelector(".list-search.primary + .list-area");
let applianceListArea = document.querySelector(".list-search.secondary + .list-area");
let ustensilsListArea = document.querySelector(".list-search.tertiary + .list-area");
// *** Mes Variables ***

// Fonction qui efface et regénère les cartes recette 
// et les listes (ingrédients, appareiles et ustensiles)
export function getAllDisplayRecipesItems(recipesArray){
    recipesSection.innerHTML = "";            
    displayRecipesCard(recipesArray);
    ingredientListArea.innerHTML = "";
    displayIngredientsList(recipesArray);
    applianceListArea.innerHTML = "";
    displayAppliancesList(recipesArray);
    ustensilsListArea.innerHTML = "";
    displayUstensilsList(recipesArray);
    
    displayRecipesByTags();
}


// Fonction qui écoute ce que l'utilisateur rentre dans la barre de recherche principale
// et genère les cartes recettes et les listes (ingrédients, appareiles et ustensiles)
// en fonction de la valeur entrée
function searchRecipes(){
    searchInput.addEventListener("input", (e) => {
        let value = e.target.value.toLowerCase();

        if(value.length > 2){     
            if(tagsArray.length === 0){
                // *** Algorithme Boucle for() ***
                let newRecipesArray = [];
                for(let i = 0; i < recipes.length; i++){
                    let includesInName = recipes[i].name.toLowerCase().includes(value);
                    let includesInDescription = recipes[i].description.toLowerCase().includes(value);
                    let includeInIngredient = false;
                    for(let j = 0; j < recipes[i].ingredients.length; j++){
                        if(recipes[i].ingredients[j].ingredient.toLowerCase().includes(value)){
                            includeInIngredient = true;
                        }
                    }
                    if(includesInName || includesInDescription || includeInIngredient){
                        newRecipesArray.push(recipes[i]);
                    }
                }
                if(newRecipesArray.length == 0){  
                    getAllDisplayRecipesItems(newRecipesArray);
                    recipesSection.innerHTML = `<div class="no-recipes">  « Aucune recette ne correspond à votre critère… vous pouvez
                    chercher « tarte aux pommes », « poisson », etc.
                    </div>`;                
                    
                } else {
                    getAllDisplayRecipesItems(newRecipesArray);    
                } 
            } else if(tagsArray.length > 0) {
                console.log(tagsArray)
                // *** Algorithme Boucle for() ***
                let newRecipesArray = [];
                for(let i = 0; i < funnelArray.length; i++){
                    let includesInName = funnelArray[i].name.toLowerCase().includes(value);
                    let includesInDescription = funnelArray[i].description.toLowerCase().includes(value);
                    let includeInIngredient = false;
                    for(let j = 0; j < funnelArray[i].ingredients.length; j++){
                        if(funnelArray[i].ingredients[j].ingredient.toLowerCase().includes(value)){
                            includeInIngredient = true;
                        }
                    }
                    if(includesInName || includesInDescription || includeInIngredient){
                        newRecipesArray.push(funnelArray[i]);
                    }
                }
                if(newRecipesArray.length == 0){  
                    getAllDisplayRecipesItems(newRecipesArray);
                    recipesSection.innerHTML = `<div class="no-recipes">  « Aucune recette ne correspond à votre critère… vous pouvez
                    chercher « tarte aux pommes », « poisson », etc.
                    </div>`;                
                    
                } else {
                    getAllDisplayRecipesItems(newRecipesArray);    
                } 

            }         
        } else {
            if(tagsArray.length === 0){
                getAllDisplayRecipesItems(recipes);
            } else {
                getAllDisplayRecipesItems(funnelArray);
            }
        }
        
    });
}

searchRecipes();

// *** Fonction qui génère une nouvelle liste (Ingrédient, Appareils ou Ustensiles) ***
// *** Grâce à un nouveau tableau ***
function displayIngredientsListByValue(data){
   data.forEach(element => {
        let item = document.createElement( "p" );
        item.className = "list-area_items";
        item.textContent = element;
        ingredientListArea.appendChild(item)        
    }) 
    displayRecipesByTags();
}
function displayAppliancesListByValue(data){
   data.forEach(element => {
        let item = document.createElement( "p" );
        item.className = "list-area_items";
        item.textContent = element;
        applianceListArea.appendChild(item)        
    }) 
    displayRecipesByTags();
}
function displayUstensilsListByValue(data){
   data.forEach(element => {
        let item = document.createElement( "p" );
        item.className = "list-area_items";
        item.textContent = element;
        ustensilsListArea.appendChild(item)        
    }) 
    displayRecipesByTags();
}

// Fonction qui écoute ce que l'utilisateur rentre dans la barre de recherche des ingrédients
// et genère une nouvelle liste 
function searchIngredientInput(){ 
    ingredientInput.addEventListener("input", (e) => {
        let value = e.target.value.toLowerCase();
        
        if(value.length == 0){
            ingredientListArea.innerHTML = "";
            displayIngredientsList(recipes);
            displayRecipesByTags();
            
        } else if(value.length > 0){
            let newRecipesArrayByIngredients = getArrayIngredientsList(recipes); 
            ingredientListArea.innerHTML= "";
            let newArrayIngredientsList = newRecipesArrayByIngredients.filter( el => el.toLowerCase().includes(value))
            displayIngredientsListByValue(newArrayIngredientsList);            
        
        }
        
    })
}
// Fonction qui écoute ce que l'utilisateur rentre dans la barre de recherche des Appareils
// et genère une nouvelle liste 
function searchApplianceInput(){  
    applianceInput.addEventListener("input", (e) => {
        let value = e.target.value
        if(value.length == 0){
            applianceListArea.innerHTML = "";
            displayAppliancesList(recipes);
            displayRecipesByTags();

        } else if(value.length > 0){
            let newRecipesArrayByAppliances = getArrayApplianceList(recipes); 
            applianceListArea.innerHTML= "";
            let newArrayAppliancesList = newRecipesArrayByAppliances.filter( el => el.toLowerCase().includes(value))
            displayAppliancesListByValue(newArrayAppliancesList);
        }
    })
}
// Fonction qui écoute ce que l'utilisateur rentre dans la barre de recherche des Ustensiles
// et genère une nouvelle liste 
function searchUstensilsInput(){
    ustensilsInput.addEventListener("input", (e) => {
        let value = e.target.value

        if(value.length == 0){
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(recipes);
            displayRecipesByTags();
        } else if(value.length > 0){    
            let newRecipesArrayByUstensils = getArrayUstensilList(recipes); 
            ustensilsListArea.innerHTML= "";
            let newArrayUstensilsList = newRecipesArrayByUstensils.filter( el => el.toLowerCase().includes(value))
            displayUstensilsListByValue(newArrayUstensilsList);
        }
    })
}

searchIngredientInput();
searchApplianceInput();
searchUstensilsInput();