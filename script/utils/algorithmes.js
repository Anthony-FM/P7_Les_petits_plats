export function getArrayByTitle(value, data){
    return data.filter(data => data.name.includes(value));
}
export function getArrayByIngredients(value, data){
    return data.filter(data => 
        data.ingredients.find(ingredients => ingredients.ingredient.includes(value)))
}

export function getArrayByDescription(value, data){
    return data.filter(data => data.description.includes(value));
}
export function getArrayByAppliance(value, data){
    return data.filter(data => data.appliance.includes(value));
}
export function getArrayByUstensils(value, data){
    return data.filter(data => data.ustensils
        .find(element => element.includes(value)));
}