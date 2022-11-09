const ingredientsBtn = document.querySelector(".select-btn.primary");
const toolsBtn = document.querySelector(".select-btn.secondary");
const ustensilsBtn = document.querySelector(".select-btn.tertiary");
const ingredientList = document.querySelector(".select-btn.primary + .list-container");
const toolsList = document.querySelector(".select-btn.secondary + .list-container");
const ustensilsList = document.querySelector(".select-btn.tertiary + .list-container");
const closeBtnIngredients = document.querySelector(".list-search.primary > .list-search_arrow");
const closeBtnTools = document.querySelector(".list-search.secondary > .list-search_arrow");
const closeBtnTUstensils = document.querySelector(".list-search.tertiary > .list-search_arrow");

function openIngredientsList(){        

    ingredientsBtn.addEventListener("click", () => {
        ingredientList.style.display = "block";
        ingredientsBtn.style.display = "none";
        toolsList.style.display = "none";
        toolsBtn.style.display= "flex"
        ustensilsList.style.display = "none";
        ustensilsBtn.style.display = "flex";
    })
}
function openToolsList(){        

    toolsBtn.addEventListener("click", () => {        
        toolsList.style.display = "block";
        toolsBtn.style.display = "none";
        ingredientList.style.display = "none";
        ingredientsBtn.style.display = "flex";
        ustensilsList.style.display = "none";
        ustensilsBtn.style.display = "flex";
    })
}
function openUstensilsList(){        

    ustensilsBtn.addEventListener("click", () => {
        ustensilsList.style.display = "block";
        ustensilsBtn.style.display = "none";
        ingredientList.style.display = "none";
        ingredientsBtn.style.display = "flex";
        toolsList.style.display = "none";
        toolsBtn.style.display = "flex";
    })
}

openIngredientsList();
openToolsList();
openUstensilsList();

function closeIngredientsList(){   
    
    closeBtnIngredients.addEventListener("click", () => {
        ingredientList.style.display = "none";
        ingredientsBtn.style.display = "flex";
    })
}
function closeToolsList(){
   
    closeBtnTools.addEventListener("click", () => {
        toolsList.style.display = "none";
        toolsBtn.style.display = "flex";
    })
}
function closeUstensilsList(){
   
    closeBtnTUstensils.addEventListener("click", () => {
        ustensilsList.style.display = "none";
        ustensilsBtn.style.display = "flex";
    })
}

closeIngredientsList();
closeToolsList();
closeUstensilsList();