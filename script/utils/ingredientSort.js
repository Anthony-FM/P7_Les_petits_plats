const ingredientsBtn = document.querySelector(".select-btn.primary");
const appliancesBtn = document.querySelector(".select-btn.secondary");
const ustensilsBtn = document.querySelector(".select-btn.tertiary");
const ingredientList = document.querySelector(".select-btn.primary + .list-container");
const appliancesList = document.querySelector(".select-btn.secondary + .list-container");
const ustensilsList = document.querySelector(".select-btn.tertiary + .list-container");
const closeBtnIngredients = document.querySelector(".list-search.primary > .list-search_arrow");
const closeBtnTools = document.querySelector(".list-search.secondary > .list-search_arrow");
const closeBtnTUstensils = document.querySelector(".list-search.tertiary > .list-search_arrow");

// Fonction permettant d'ouvrir la liste d'ingredient
function openIngredientsList(){        

    ingredientsBtn.addEventListener("click", () => {
        ingredientList.style.display = "block";
        ingredientsBtn.style.display = "none";
        appliancesList.style.display = "none";
        appliancesBtn.style.display= "flex"
        ustensilsList.style.display = "none";
        ustensilsBtn.style.display = "flex";
    })
}
// Fonction permettant d'ouvrir la liste d'appareils éléctroménagers
function openAppliancesList(){        

    appliancesBtn.addEventListener("click", () => {        
        appliancesList.style.display = "block";
        appliancesBtn.style.display = "none";
        ingredientList.style.display = "none";
        ingredientsBtn.style.display = "flex";
        ustensilsList.style.display = "none";
        ustensilsBtn.style.display = "flex";
    })
}
// Fonction permettant d'ouvrir la liste d'ustensiles
function openUstensilsList(){        

    ustensilsBtn.addEventListener("click", () => {
        ustensilsList.style.display = "block";
        ustensilsBtn.style.display = "none";
        ingredientList.style.display = "none";
        ingredientsBtn.style.display = "flex";
        appliancesList.style.display = "none";
        appliancesBtn.style.display = "flex";
    })
}

openIngredientsList();
openAppliancesList();
openUstensilsList();

// Fonction permettant de fermer la liste d'ingredient
function closeIngredientsList(){   
    
    closeBtnIngredients.addEventListener("click", () => {
        ingredientList.style.display = "none";
        ingredientsBtn.style.display = "flex";
    })
}
// Fonction permettant de fermer la liste d'appareils électroménagers
function closeappliancesList(){
   
    closeBtnTools.addEventListener("click", () => {
        appliancesList.style.display = "none";
        appliancesBtn.style.display = "flex";
    })
}
// Fonction permettant de fermer la liste d'ustensiles
function closeUstensilsList(){
   
    closeBtnTUstensils.addEventListener("click", () => {
        ustensilsList.style.display = "none";
        ustensilsBtn.style.display = "flex";
    })
}

closeIngredientsList();
closeappliancesList();
closeUstensilsList();