import { recipes } from '../../data/recipesData.js';
import { displayRecipesCard, displayIngredientsList, displayAppliancesList, displayUstensilsList } from '../page/index.js';
import { getArrayByTitle, getArrayByIngredients, getArrayByDescription, getArrayByAppliance, getArrayByUstensils } from '../utils/algorithmes.js';
import { displayrecipesByTags } from '../utils/tags.js';

function searchRecipes(){
    const searchInput = document.getElementById("searchRecipes");
    const recipesSection = document.querySelector(".recipes-galery");
    let ingredientListArea = document.querySelector(".list-search.primary + .list-area");
    let appliancesListArea = document.querySelector(".list-search.secondary + .list-area");
    let ustensilsListArea = document.querySelector(".list-search.tertiary + .list-area");

    searchInput.addEventListener("input", (e) => {
        let value = e.target.value

        if(value.length > 0){

            let valueUpperCase = e.target.value[0].toUpperCase()+e.target.value.slice(1);
            let valueLowerCase = e.target.value[0].toLowerCase()+e.target.value.slice(1);
    
            let newRecipesArrayByName = getArrayByTitle(value, recipes);
            let newRecipesArrayByNameUpperCase = getArrayByTitle(valueUpperCase, recipes);
            let newRecipesArrayByNameLowerCase = getArrayByTitle(valueLowerCase, recipes);
            let newRecipesArrayByIngredient = getArrayByIngredients(value, recipes); 
            let newRecipesArrayByIngredientUpperCase = getArrayByIngredients(valueUpperCase, recipes); 
            let newRecipesArrayByIngredientLowerCase = getArrayByIngredients(valueLowerCase, recipes); 
            let newRecipesArrayByDescription = getArrayByDescription(value, recipes);
            let newRecipesArrayByDescriptionUpperCase = getArrayByDescription(valueUpperCase, recipes);
            let newRecipesArrayByDescriptionLowerCase = getArrayByDescription(valueLowerCase, recipes);
                
            // Concaténation des tableaux
            let newRecipesOfAllArray = [...newRecipesArrayByName,...newRecipesArrayByIngredient,...newRecipesArrayByDescription,
            ...newRecipesArrayByNameUpperCase,...newRecipesArrayByIngredientUpperCase,...newRecipesArrayByDescriptionUpperCase,
            ...newRecipesArrayByNameLowerCase,...newRecipesArrayByIngredientLowerCase,...newRecipesArrayByDescriptionLowerCase];
    
            // On tri les tableaux pour qu'il n'y ai pas de doublon
            let newRecipesArray = [...new Set(newRecipesOfAllArray)];
            
            if(value.length > 2 && newRecipesArray.length == 0){
                           
                recipesSection.innerHTML = "";            
                recipesSection.innerHTML = `<div class="no-recipes">  « Aucune recette ne correspond à votre critère… vous pouvez
                chercher « tarte aux pommes », « poisson », etc.
                </div>`;
                ingredientListArea.innerHTML = "";
                displayIngredientsList(newRecipesArray);
                appliancesListArea.innerHTML = "";
                displayAppliancesList(newRecipesArray);
                ustensilsListArea.innerHTML = "";
                displayUstensilsList(newRecipesArray);
                displayrecipesByTags();
                
            } else if(value.length > 2 && newRecipesArray.length > 0) {
                recipesSection.innerHTML = "";            
                displayRecipesCard(newRecipesArray);
                ingredientListArea.innerHTML = "";
                displayIngredientsList(newRecipesArray);
                appliancesListArea.innerHTML = "";
                displayAppliancesList(newRecipesArray);
                ustensilsListArea.innerHTML = "";
                displayUstensilsList(newRecipesArray);
                displayrecipesByTags();
    
            } else if(value.length < 3){
                recipesSection.innerHTML = "";            
                displayRecipesCard(recipes);
                ingredientListArea.innerHTML = "";
                displayIngredientsList(recipes);
                appliancesListArea.innerHTML = "";
                displayAppliancesList(recipes);
                ustensilsListArea.innerHTML = "";
                displayUstensilsList(recipes);
                displayrecipesByTags();
    
            }        
        } else if(value.length == 0){
            recipesSection.innerHTML = "";            
            displayRecipesCard(recipes);
            ingredientListArea.innerHTML = "";
            displayIngredientsList(recipes);
            appliancesListArea.innerHTML = "";
            displayAppliancesList(recipes);
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(recipes);
            displayrecipesByTags();
        }
        
    });
}

searchRecipes();

function searchIngredientInput(){
    const ingredientInput = document.querySelector(".list-search_input.primary-hover");
    let ingredientListArea = document.querySelector(".list-search.primary + .list-area");
    let applianceListArea = document.querySelector(".list-search.secondary + .list-area");
    let ustensilsListArea = document.querySelector(".list-search.tertiary + .list-area");

    ingredientInput.addEventListener("input", (e) => {
        let value = e.target.value
        
        if(value.length == 0){
            ingredientListArea.innerHTML = "";
            displayIngredientsList(recipes);
            displayrecipesByTags();

        } else if(value.length > 0){
            let valueUpperCase = e.target.value[0].toUpperCase() + e.target.value.slice(1);
            let valueLowerCase = e.target.value[0].toLowerCase()+e.target.value.slice(1);
    
            let newRecipesArrayByIngredient = getArrayByIngredients(value, recipes); 
            let newRecipesArrayByIngredientUpperCase = getArrayByIngredients(valueUpperCase, recipes); 
            let newRecipesArrayByIngredientLowerCase = getArrayByIngredients(valueLowerCase, recipes);
            
            // Concaténation des tableaux
            let newRecipesOfAllArray = [...newRecipesArrayByIngredient,...newRecipesArrayByIngredientLowerCase,...newRecipesArrayByIngredientUpperCase];
            // On tri les tableaux pour qu'il n'y ai pas de doublon
            let newRecipesArray = [...new Set(newRecipesOfAllArray)];

            ingredientListArea.innerHTML = "" ;
            displayIngredientsList(newRecipesArray);
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(newRecipesArray);
            applianceListArea.innerHTML = "";
            displayAppliancesList(newRecipesArray);
            displayrecipesByTags();
        }
        
    })
}
function searchApplianceInput(){
    const applianceInput = document.querySelector(".list-search_input.secondary-hover");
    let ingredientListArea = document.querySelector(".list-search.primary + .list-area");
    let applianceListArea = document.querySelector(".list-search.secondary + .list-area");
    let ustensilsListArea = document.querySelector(".list-search.tertiary + .list-area");

    applianceInput.addEventListener("input", (e) => {
        let value = e.target.value
        if(value.length == 0){
            applianceListArea.innerHTML = "";
            displayAppliancesList(recipes);
            displayrecipesByTags();

        } else if(value.length > 0){
            
            let valueUpperCase = e.target.value[0].toUpperCase() + e.target.value.slice(1);
            let valueLowerCase = e.target.value[0].toLowerCase()+e.target.value.slice(1);
    
            let newRecipesArrayByAppliances = getArrayByAppliance(value, recipes); 
            let newRecipesArrayByAppliancesUpperCase = getArrayByAppliance(valueUpperCase, recipes); 
            let newRecipesArrayByAppliancesLowerCase = getArrayByAppliance(valueLowerCase, recipes);
            
            // Concaténation des tableaux
            let newRecipesOfAllArray = [...newRecipesArrayByAppliances,...newRecipesArrayByAppliancesLowerCase,
                ...newRecipesArrayByAppliancesUpperCase];
            // On tri les tableaux pour qu'il n'y ai pas de doublon
            let newRecipesArray = [...new Set(newRecipesOfAllArray)];
    
            applianceListArea.innerHTML = "";
            displayAppliancesList(newRecipesArray);
            ingredientListArea.innerHTML = "" ;
            displayIngredientsList(newRecipesArray);
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(newRecipesArray);
            displayrecipesByTags();
        }
    })
}
function searchUstensilsInput(){
    const ustensilsInput = document.querySelector(".list-search_input.tertiary-hover");
    let ingredientListArea = document.querySelector(".list-search.primary + .list-area");
    let applianceListArea = document.querySelector(".list-search.secondary + .list-area");
    let ustensilsListArea = document.querySelector(".list-search.tertiary + .list-area");

    ustensilsInput.addEventListener("input", (e) => {
        let value = e.target.value

        if(value.length == 0){
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(recipes);
            displayrecipesByTags();
        } else if(value.length > 0){

            let valueUpperCase = e.target.value[0].toUpperCase() + e.target.value.slice(1);
            let valueLowerCase = e.target.value[0].toLowerCase()+e.target.value.slice(1);
    
            let newRecipesArrayByUstensils = getArrayByUstensils(value, recipes); 
            let newRecipesArrayByUstensilsUpperCase = getArrayByUstensils(valueUpperCase, recipes); 
            let newRecipesArrayByUstensilsLowerCase = getArrayByUstensils(valueLowerCase, recipes);
            
            // Concaténation des tableaux
            let newRecipesOfAllArray = [...newRecipesArrayByUstensils,...newRecipesArrayByUstensilsLowerCase,
                ...newRecipesArrayByUstensilsUpperCase];
            // On tri les tableaux pour qu'il n'y ai pas de doublon            
            let newRecipesArray = [...new Set(newRecipesOfAllArray)];
    
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(newRecipesArray);
            applianceListArea.innerHTML = "";
            displayAppliancesList(newRecipesArray);
            ingredientListArea.innerHTML = "" ;
            displayIngredientsList(newRecipesArray);
            displayrecipesByTags();
        }
    })
}

searchIngredientInput();
searchApplianceInput();
searchUstensilsInput();

