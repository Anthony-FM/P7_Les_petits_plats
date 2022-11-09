async function getRecipesData(){
    const recipesJSON = await fetch("./data/recipes.json");
    const recipesData = await recipesJSON.json();

    return recipesData;
}

async function getRecipesCard(data){
    const recipesSection = document.querySelector(".recipes-galery");
    const allRecipes = data.recipes;
    console.log(allRecipes)
    allRecipes.forEach(element => {        
        const dataCard = element;
        const xy = recipesFactory(dataCard);
        console.log(xy)
        const recipesCard = xy.getRecipesCard();
        console.log(recipesCard);
        recipesSection.appendChild(recipesCard);
    });    

}

async function init(){
    const data = await getRecipesData();
    await getRecipesCard(data);
}

init();