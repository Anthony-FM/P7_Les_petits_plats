export function getArrayByTitle(value, data){
    return data.filter(data => data.name.toLowerCase().includes(value));
}
export function getArrayByIngredients(value, data){
    return data.filter(data => 
        data.ingredients.find(ingredients => ingredients.ingredient.toLowerCase().includes(value)));
}

export function getArrayByDescription(value, data){
    return data.filter(data => data.description.toLowerCase().includes(value));
}
export function getArrayByAppliance(value, data){
    return data.filter(data => data.appliance.toLowerCase().includes(value));
}
export function getArrayByUstensils(value, data){
    return data.filter(data => data.ustensils
        .find(element => element.toLowerCase().includes(value)));
}