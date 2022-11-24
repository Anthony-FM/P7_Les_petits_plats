function recipesFactory(data){
    const { id, name, servings, ingredients, ingredient, time, description, appliance, ustensils } = data;

    function getRecipesCard(){
        const card = document.createElement( "div" );
        card.className = "card";
        card.classList = "col-12 col-md-6 col-lg-4 mb-3 recipes-card"

        const bgDiv = document.createElement( "div" );
        bgDiv.className = "recipes-card_bg";
        card.appendChild(bgDiv);

        const divBody = document.createElement( "div" );
        divBody.className = "card-body";
        divBody.classList = "recipes-card_body"
        card.appendChild(divBody);

        const headerBody = document.createElement( "header" );
        headerBody.className = "d-flex flex-row justify-content-between header-card";
        divBody.appendChild(headerBody);

        const title = document.createElement("h3");
        title.textContent = name;
        title.className = "header-card_title"
        headerBody.appendChild(title);

        const divTime = document.createElement( "div" );
        divTime.className = "header-card_time"
        divTime.innerHTML= `<i class="far fa-clock"></i> ${time} min`;
        headerBody.appendChild(divTime);

        const mainBody = document.createElement( "main" );
        mainBody.className = "row";
        divBody.appendChild(mainBody);

        const ingredientsdiv = document.createElement( "div" );
        for(i= 0; i < ingredients.length; i++){
            let divContainer = document.createElement( "div" );
            divContainer.classList= "ingredient-container"
            let name = document.createElement( "h4" );
            name.className= "card-title"
            name.classList= "ingredient-container_title"
            let p = document.createElement( "p" );
            p.className= "ingredient-container_text"
            name.innerHTML =  ingredients[i].ingredient + "<span class='fw'>" + (ingredients[i].quantity ? ": " + ingredients[i].quantity +" " : "") + (ingredients[i].unit ? ingredients[i].unit : "") + "</span>";
            
            divContainer.appendChild(name);
            ingredientsdiv.appendChild(divContainer);
        }

        ingredientsdiv.className = "col-7";
        mainBody.appendChild(ingredientsdiv);

        const descriptiondiv = document.createElement( "div" );
        descriptiondiv.className = "col-5"
        const descriptionParagraphe = document.createElement( "p" );
        descriptionParagraphe.className = "card-text"
        descriptionParagraphe.textContent = description;
        descriptiondiv.appendChild(descriptionParagraphe);
        mainBody.appendChild(descriptiondiv)

        return card;
    }

    return {id, name, servings, ingredients, ingredient, time, description, appliance, ustensils, getRecipesCard}
}