import { recipes } from '../../data/recipesData.js';

export function displayRecipesCard(data){    
    const recipesSection = document.querySelector(".recipes-galery");
    data.forEach(element => {        
        const dataCard = element;
        const recipesCardData = recipesFactory(dataCard);
        const recipesCard = recipesCardData.getRecipesCard();
        recipesSection.appendChild(recipesCard);
    });
}

export function getArrayIngredientsList(data){
    let allIngredientsArray = [];
    data.forEach(element => {
        const dataIngredients = element.ingredients;        
        dataIngredients.forEach(element => {
            allIngredientsArray.push(element.ingredient);  
        })
    })
    let ingredientsList = [...new Set(allIngredientsArray.sort())];
    return ingredientsList;
}

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
export function getArrayApplianceList(data){
    let allApplianceArray = [];
    data.forEach(element => {
        allApplianceArray.push(element.appliance);  
    })
    let appliancesList = [...new Set(allApplianceArray.sort())];
    return appliancesList;
}

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

export function getArrayUstensilList(data){    
    let allUstensilsArray = [];
    data.forEach(element => {
        const dataUstensils = element.ustensils;        
        dataUstensils.forEach(element => {
            allUstensilsArray.push(element);  
        })
    })
    let ustensilsList = [...new Set(allUstensilsArray.sort())];
    return ustensilsList;
}

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