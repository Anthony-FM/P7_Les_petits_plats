import { recipes } from '/data/recipesData.js';
import { displayRecipesCard, displayIngredientsList, displayAppliancesList, displayUstensilsList } from '/script/page/index.js';
import { getArrayByTitle, getArrayByIngredients, getArrayByDescription, getArrayByAppliance, getArrayByUstensils } from '/script/utils/algorithmes.js';

function openInputList(){
    let recipeSearchList = document.querySelector(".recipes-search-list");
    recipeSearchList.style.display = "flex";    
}

function closeInputList(){
    let recipeSearchList = document.querySelector(".recipes-search-list");
    recipeSearchList.style.display = "none";
}

function searchRecipes(){
    const searchInput = document.getElementById("searchRecipes");
    const recipesSection = document.querySelector(".recipes-galery");
    const ingredientListArea = document.querySelector(".list-search.primary + .list-area");
    const appliancesListArea = document.querySelector(".list-search.secondary + .list-area");
    const ustensilsListArea = document.querySelector(".list-search.tertiary + .list-area");

    searchInput.addEventListener("input", (e) => {
        let value = e.target.value;
        let newRecipesArrayByName = getArrayByTitle(value);
        let newRecipesArrayByIngredient = getArrayByIngredients(value); 
        let newRecipesArrayByDescription = getArrayByDescription(value);
            
        // Concaténation des tableaux
        let newRecipesOfAllArray = [...newRecipesArrayByName,...newRecipesArrayByIngredient,...newRecipesArrayByDescription];

        // On tri les tableaux pour qu'il n'y ai pas de doublon
        let newRecipesArray = newRecipesOfAllArray.filter((ele, pos) => newRecipesOfAllArray.indexOf(ele) == pos);
        
        if(value.length > 3 && newRecipesArray.length == 0){
                       
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
            
        } else if(value.length > 3 && newRecipesArray.length > 0) {
            console.log(newRecipesArray.length);
            recipesSection.innerHTML = "";            
            displayRecipesCard(newRecipesArray);
            ingredientListArea.innerHTML = "";
            displayIngredientsList(newRecipesArray);
            appliancesListArea.innerHTML = "";
            displayAppliancesList(newRecipesArray);
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(newRecipesArray);

        } else if(value.length > 2){
            recipesSection.innerHTML = "";            
            displayRecipesCard(recipes);
            ingredientListArea.innerHTML = "";
            displayIngredientsList(recipes);
            appliancesListArea.innerHTML = "";
            displayAppliancesList(recipes);
            ustensilsListArea.innerHTML = "";
            displayUstensilsList(recipes);

        }        
        
    });
}

searchRecipes();