// Recipe cards 
function displayRecipes(recipes){
  // console.log(recipe)
  console.log(recipes);
  // recipe container(s)
  var containerEl = $('.recipe-container'); 

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
        <div class="card blue-grey darken-1">
        <div class="card-image">
        <img src= ${recipes[i].image}>
        <span class="card-title">${recipes[i].label}</span>
        </div>
        <div class="card-content white-text center-align">
        <h6>INGREDIENTS:</h6><div class="ingredients-container"></div>
        <br>
        <h6>COOK TIME:</h6>${recipes[i].url}<div class="cook-time"></div>
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