import { recipes } from '../../data/recipesData.js';
import { displayRecipesCard, displayIngredientsList, displayAppliancesList, displayUstensilsList } from '../page/index.js';
import { getArrayByTitle, getArrayByIngredients, getArrayByDescription, getArrayByAppliance, getArrayByUstensils } from '../utils/algorithmes.js';
import { displayRecipesByTags, displayRecipesByIdWithRestData } from '../utils/tags.js';

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

// Fonction qui efface et regénère 
// les listes (ingrédients, appareiles et ustensiles)
function getAllObjectDisplayItems(recipesArray){
    
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
            let newRecipesArray = getArrayByTitle(value, recipes) || getArrayByIngredients(value, recipes)
            || getArrayByDescription(value, recipes);
            
            if(newRecipesArray.length == 0){  
                getAllDisplayRecipesItems(newRecipesArray);
                recipesSection.innerHTML = `<div class="no-recipes">  « Aucune recette ne correspond à votre critère… vous pouvez
                chercher « tarte aux pommes », « poisson », etc.
                </div>`;                
                
            } else {
                getAllDisplayRecipesItems(newRecipesArray);    
            }        
        } else {
            getAllDisplayRecipesItems(recipes);
        }
        
    });
}

searchRecipes();

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
            let newRecipesArrayByIngredients = getArrayByIngredients(value, recipes); 
            // On tri les tableaux pour qu'il n'y ai pas de doublon
            let newRecipesArray = [...new Set(newRecipesArrayByIngredients)];
        
            getAllObjectDisplayItems(newRecipesArray);
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
            let newRecipesArrayByAppliances = getArrayByAppliance(value, recipes); 
            // On tri les tableaux pour qu'il n'y ai pas de doublon
            let newRecipesArray = [...new Set(newRecipesArrayByAppliances)];
    
            getAllObjectDisplayItems(newRecipesArray);
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
            let newRecipesArrayByUstensils = getArrayByUstensils(value, recipes); 
            // On tri les tableaux pour qu'il n'y ai pas de doublon            
            let newRecipesArray = [...new Set(newRecipesArrayByUstensils)];
    
            getAllObjectDisplayItems(newRecipesArray);
        }
    })
}

searchIngredientInput();
searchApplianceInput();
searchUstensilsInput();