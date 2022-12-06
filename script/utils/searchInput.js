import { recipes } from '../../data/recipesData.js';
import { displayRecipesCard, displayIngredientsList, displayAppliancesList, displayUstensilsList } from '../page/index.js';
import { getArrayByTitle, getArrayByIngredients, getArrayByDescription, getArrayByAppliance, getArrayByUstensils } from '../utils/algorithmes.js';
import { displayRecipesByTags } from '../utils/tags.js';

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

function searchRecipes(){
    searchInput.addEventListener("input", (e) => {
        let value = e.target.value.toLowerCase();

        if(value.length > 2){                
            let newRecipesArray = getArrayByTitle(value, recipes) || getArrayByIngredients(value, recipes)
            || getArrayByDescription(value, recipes);
            
            if(newRecipesArray.length == 0){
                           
                recipesSection.innerHTML = "";            
                recipesSection.innerHTML = `<div class="no-recipes">  « Aucune recette ne correspond à votre critère… vous pouvez
                chercher « tarte aux pommes », « poisson », etc.
                </div>`;
                ingredientListArea.innerHTML = "";
                displayIngredientsList(newRecipesArray);
                applianceListArea.innerHTML = "";
                displayAppliancesList(newRecipesArray);
                ustensilsListArea.innerHTML = "";
                displayUstensilsList(newRecipesArray);
                displayRecipesByTags();
                
            } else {
                recipesSection.innerHTML = "";            
                displayRecipesCard(newRecipesArray);
                ingredientListArea.innerHTML = "";
                displayIngredientsList(newRecipesArray);
                applianceListArea.innerHTML = "";
                displayAppliancesList(newRecipesArray);
                ustensilsListArea.innerHTML = "";
                displayUstensilsList(newRecipesArray);
                displayRecipesByTags();
    
            }        
        } else {
            recipesSection.innerHTML = "";            
            displayRecipesCard(recipes);
            ingredientListArea.innerHTML = "";
            displayIngredientsList(recipes);
            applianceListArea.innerHTML = "";
            displayAppliancesList(recipes);
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(recipes);
            displayRecipesByTags();
        }
        
    });
}

searchRecipes();

function searchIngredientInput(){ 
    ingredientInput.addEventListener("input", (e) => {
        let value = e.target.value.toLowerCase();
        
        if(value.length == 0){
            ingredientListArea.innerHTML = "";
            displayIngredientsList(recipes);
            displayRecipesByTags();

        } else if(value.length > 0){    
            let newRecipesArrayByIngredients = getArrayByIngredients(value, recipes); 
            // On tri les tableaux pour qu'il n'y ai pas de doublon
            let newRecipesArray = [...new Set(newRecipesArrayByIngredients)];

            ingredientListArea.innerHTML = "" ;
            displayIngredientsList(newRecipesArray);
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(newRecipesArray);
            applianceListArea.innerHTML = "";
            displayAppliancesList(newRecipesArray);
            displayRecipesByTags();
        }
        
    })
}

function searchApplianceInput(){  
    applianceInput.addEventListener("input", (e) => {
        let value = e.target.value
        if(value.length == 0){
            applianceListArea.innerHTML = "";
            displayAppliancesList(recipes);
            displayRecipesByTags();

        } else if(value.length > 0){
            let newRecipesArrayByAppliances = getArrayByAppliance(value, recipes); 
            // On tri les tableaux pour qu'il n'y ai pas de doublon
            let newRecipesArray = [...new Set(newRecipesArrayByAppliances)];
    
            applianceListArea.innerHTML = "";
            displayAppliancesList(newRecipesArray);
            ingredientListArea.innerHTML = "" ;
            displayIngredientsList(newRecipesArray);
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(newRecipesArray);
            displayRecipesByTags();
        }
    })
}
function searchUstensilsInput(){
    ustensilsInput.addEventListener("input", (e) => {
        let value = e.target.value

        if(value.length == 0){
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(recipes);
            displayRecipesByTags();
        } else if(value.length > 0){    
            let newRecipesArrayByUstensils = getArrayByUstensils(value, recipes); 
            // On tri les tableaux pour qu'il n'y ai pas de doublon            
            let newRecipesArray = [...new Set(newRecipesArrayByUstensils)];
    
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(newRecipesArray);
            applianceListArea.innerHTML = "";
            displayAppliancesList(newRecipesArray);
            ingredientListArea.innerHTML = "" ;
            displayIngredientsList(newRecipesArray);
            displayRecipesByTags();
        }
    })
}

searchIngredientInput();
searchApplianceInput();
searchUstensilsInput();