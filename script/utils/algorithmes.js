import { recipes } from '/data/recipesData.js';

export function getArrayByTitle(value){
    return recipes.filter(recipe => recipe.name.includes(value));
}
export function getArrayByIngredients(value){
    return recipes.filter(recipe => 
        recipe.ingredients.find(ingredients => ingredients.ingredient.includes(value)))
}

export function getArrayByDescription(value){
    return recipes.filter(recipe => recipe.description.includes(value));
}
export function getArrayByAppliance(value){
    return recipes.filter(recipe => recipe.appliance.includes(value));
}
export function getArrayByUstensils(value){
    return recipes.filter(recipe => recipe.ustensils
        .find(element => element.includes(value)));
}