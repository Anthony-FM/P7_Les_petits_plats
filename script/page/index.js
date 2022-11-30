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
    return allIngredientsArray.filter((ele, pos) => allIngredientsArray.indexOf(ele) == pos)
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
    return allApplianceArray.filter((a, b) => allApplianceArray.indexOf(a) == b);
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
    return allUstensilsArray.filter((x, y) => allUstensilsArray.indexOf(x) == y);
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

export function getAllList(data){    
    let arrayOfAllItems = [getArrayIngredientsList(data)
        .concat(getArrayApplianceList(data)).concat(getArrayUstensilList(data))];
    return arrayOfAllItems;
}

export function displayAllList(data){
    const searchListArea = document.querySelector(".recipes-search-list");    
    data.forEach(array => {
        array.forEach(element => {
            let item = document.createElement( "p" );
            item.className = "recipes-search-list_item";
            item.textContent = element;
            searchListArea.appendChild(item);

        })
    })
}

function init(){
    let data = recipes;
    displayRecipesCard(data);
    displayIngredientsList(data);
    displayAppliancesList(data);
    displayUstensilsList(data);
    let listData = getAllList(data);
    displayAllList(listData);
}

init();