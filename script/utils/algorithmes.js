export function getArrayByTitle(value, data){
    let result = []
    for(i=0; i < data.length; i++){
        if(data[i].name.includes(value)){
            result.push(data[i]);
            console.log(result)
        }
    }
    console.log(result, result.length)
    return result; 
}
export function getArrayByIngredients(value, data){
    let result = [];
    for(let i=0; i < data.length; i++){
        let ingredients = data[i].ingredients;
        for(let j=0; j < ingredients.length; j++){
            if(ingredients[j].ingredient.includes(value)){
               result.push(data[i]);
            }
        }
    }
    return result;
}

export function getArrayByDescription(value, data){
    let result = []
    for(i=0; i < data.length; i++){
        if(data[i].description.includes(value)){
            result.push(data[i]);
            console.log(result)
        }
    }
    console.log(result, result.length)
    return result; 
}
export function getArrayByAppliance(value, data){
    let result = []
    for(i=0; i < data.length; i++){
        if(data[i].appliance.includes(value)){
            result.push(data[i]);
            console.log(result)
        }
    }
    console.log(result, result.length)
    return result; 
}
export function getArrayByUstensils(value, data){
    let result = [];
    for(i=0; i < data.length; i++){
        let ustensils = data[i].ustensils;
        for(let j=0; j < ustensils.length; j++){
            if(ustensils[j].includes(value)){
                result.push(data[i]);
            }
        }
    }
    return result;
}