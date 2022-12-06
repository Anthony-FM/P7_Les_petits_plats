export function getArrayByTitle(value, data){
    let result = [];
    for(i=0; i < data.length; i++){
        if(data[i].name.toLowerCase().includes(value)){
            result.push(data[i]);
        }
    }
    return result; 
}
export function getArrayByIngredients(value, data){
    let result = [];
    for(let i=0; i < data.length; i++){
        let ingredients = data[i].ingredients;
        for(let j=0; j < ingredients.length; j++){
            if(ingredients[j].ingredient.toLowerCase().includes(value)){
               result.push(data[i]);
            }
        }
    }
    return result;
}

export function getArrayByDescription(value, data){
    let result = [];
    for(i=0; i < data.length; i++){
        if(data[i].description.toLowerCase().includes(value)){
            result.push(data[i]);
        }
    }
    return result; 
}
export function getArrayByAppliance(value, data){
    let result = []
    for(i=0; i < data.length; i++){
        if(data[i].appliance.toLowerCase().includes(value)){
            result.push(data[i]);
        }
    }
    return result; 
}
export function getArrayByUstensils(value, data){
    let result = [];
    for(i=0; i < data.length; i++){
        let ustensils = data[i].ustensils;
        for(let j=0; j < ustensils.length; j++){
            if(ustensils[j].toLowerCase().includes(value)){
                result.push(data[i]);
            }
        }
    }
    return result;
}