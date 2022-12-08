import { recipes } from '../../data/recipesData.js';

// *** Recettes ***
// Fonction qui crée les cartes des recettes
export function displayRecipesCard(data){    
    const recipesSection = document.querySelector(".recipes-galery");
    data.forEach(element => {        
        const dataCard = element;
        const recipesCardData = recipesFactory(dataCard);
        const recipesCard = recipesCardData.getRecipesCard();
        recipesSection.appendChild(recipesCard);
    });
}

// *** Ingrédients ***
// Fonction qui crée un tableau et récupère toute la liste d'ingrédients
export function getArrayIngredientsList(data){
    let allIngredientsArray = [];
    data.forEach(element => {
        const dataIngredients = element.ingredients;        
        dataIngredients.forEach(element => {
            element.ingredient = element.ingredient.toUpperCase().slice(0,1) + element.ingredient.toLowerCase().slice(1);
            allIngredientsArray.push(element.ingredient);  
        })
    })
    let ingredientsList = [...new Set(allIngredientsArray.sort())];
    return ingredientsList;
}
// Fonction qui génère la liste d'ingrédients dans la zone "Ingrédients"
export function displayIngredientsList(data){
    const ingredientListArea = document.querySelector(".list-search.primary + .list-area");
    let newArrayIngredientsList = getArrayIngredientsList(data);
    newArrayIngredientsList.forEach(element => {
        let item = document.createElement( "p" );
        item.className = "list-area_items";
        item.textContent = element;
        ingredientListArea.appendChild(item)        
    })    

}

// *** Appareils ***
// Fonction qui crée un tableau et récupère toute la liste d'appareils
export function getArrayApplianceList(data){
    let allApplianceArray = [];
    data.forEach(element => {        
        element.appliance  = element.appliance.toUpperCase().slice(0,1) + element.appliance.toLowerCase().slice(1);
        allApplianceArray.push(element.appliance);  
    })
    let appliancesList = [...new Set(allApplianceArray.sort())];
    return appliancesList;
}
// Fonction qui génère la liste d'appareils dans la zone "Appareils"
export function displayAppliancesList(data){
    const appliancesListArea = document.querySelector(".list-search.secondary + .list-area");
    let newArrayAppliance = getArrayApplianceList(data);
    newArrayAppliance.forEach(element => {
        let item = document.createElement( "p" );
        item.className = "list-area_items";
        item.textContent = element;
        appliancesListArea.appendChild(item);    
    })    
}

// *** Ustensiles ***
// Fonction qui crée un tableau et récupère toute la liste d'ustensiles
export function getArrayUstensilList(data){    
    let allUstensilsArray = [];
    data.forEach(element => {
        const dataUstensils = element.ustensils;        
        dataUstensils.forEach(element => {
            element = element.toUpperCase().slice(0,1) + element.toLowerCase().slice(1);
            allUstensilsArray.push(element);  
        })
    })
    let ustensilsList = [...new Set(allUstensilsArray.sort())];
    return ustensilsList;
}
// Fonction qui génère la liste d'ustensiles dans la zone "Ustensils"
export function displayUstensilsList(data){
    const ustensilsListArea = document.querySelector(".list-search.tertiary + .list-area");
    let newArrayUstensils = getArrayUstensilList(data)
    newArrayUstensils.forEach(element => {
        let item = document.createElement( "p" );
        item.className = "list-area_items";
        item.textContent = element;
        ustensilsListArea.appendChild(item);
    }) 
}

function init(){
    let data = recipes;
    displayRecipesCard(data);
    displayIngredientsList(data);
    displayAppliancesList(data);
    displayUstensilsList(data);
}

init();