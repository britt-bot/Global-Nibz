// Recipe cards 
function displayRecipes(recipes){
  // console.log(recipe)
  console.log(recipes);
  // recipe container(s)
  var containerEl = $('.recipe-container'); 
  //clear current contents
  console.log("in display");
  console.log(containerEl.firstChild);

  // for loop (loop recipe's array)
  for (i = 0; i < 3; i++) {
    // dynamically create elements to hold data and append to container 
    var ingredientsEl = $('<ul class="collection">');

    // ingredients loop
    for (j = 0; j < recipes[i].ingredientLines.length; j++){
      // console.log(recipes[i].ingredientsList[j]);
      var ingredientEl = $('<li>');
      ingredientEl.text(recipes[i].ingredientLines[j]);

      ingredientsEl.append(ingredientEl);
    };

    var columnEl = $(`<div class="col s4">
    <div class="card hoverable blue-grey darken-2">
      <div class="card-image">
        <img src=${recipes[i].image}>
      </div>
      <div class="card-content white-text center-align recipe-card">
        <span class="card-title recipe-label" data-uri="${recipes.uri}">${recipes[i].label}</span>
        <h6>INGREDIENTS:</h6><div class="ingredients-container"></div>
        <br>
        <div class="full-recipe"><a id="link" class="waves-effect waves-light btn-small hoverable blue-grey darken-4" href="${recipes[i].url}"><i class="material-icons right">forward</i>Full Recipe</a></a></div>
        <div class="recipe-link"><a class="waves-effect waves-light btn-small hoverable blue-grey darken-4 save-btn"><i class="material-icons right">favorite</i>Save To Your Fave Nibz</a></div>
      </div>
    </div>
    </div>`
    );

    // append elements to container 
    containerEl.append(columnEl);

    var ingredientsContainerEl = columnEl.find('.ingredients-container');
    ingredientsContainerEl.append(ingredientsEl);

  };
};