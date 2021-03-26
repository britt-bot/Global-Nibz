var containerEl = $('.recipe-container');
var recipeModalEl = $('#recipeModal');

// DOM (array of dummy data that is expected from API to test) 

// mock data array: title, cook time, ingredients, cooking instructions, pictures 
// var testRecipes = [
//   {
//     title: 'Title1', 
//     time: 1,
//     ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
//   },
//   {
//     title: 'Title2', 
//     time: 2,
//     ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
//   },
//   {
//     title: 'Title3', 
//     time: 3,
//     ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
//   }, 
//   {
//     title: 'Title4', 
//     time: 4,
//     ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
//   },
//   {
//     title: 'Title5', 
//     time: 5,
//     ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
//   },
//   {
//     title: 'Title6', 
//     time: 6,
//     ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
//   }
// ];

// (dummy data in variables for us to easily switch out for real data) 

// Quote 

// function displayQuote (quote)
// console.log(quote);

// select select existing DOM element to append quote to
var containerEl = $(".quote");

// create elements to house quote and quote title
var quoteTitleEl = $(`<div id="quoteTitle">` +  `</div>`);
var quoteEl = $(`<div id="quoteEl">` +  `</div>`);
var quoteEnEl = $(`<div id="quoteEnEl">` +  `</div>`);

// Add IDs
// quoteTitleEl.attr("id", "quoteTitle");
// quoteEl.attr("id", "quoteEl");
// quoteEnEl.attr("id", "quoteEnEl");

// Append elements to container 
// containerEl.append(quoteTitleEl);
// containerEl.append(quoteEl);
// containerEl.append(quoteEnEl);

// write 

// Recipe cards 
function displayRecipes(recipes){
// console.log(recipe)
console.log(recipes)
// recipe container(s) 
=======
  // console.log(recipe)
  console.log(recipes);
  // recipe container(s)
  var containerEl = $('.recipe-container'); 


  // for loop (loop recipe's array)
  for (i = 0; i < 3; i++) {
    // console.log(recipes.length);
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
    </div>`);

    // append elements to container 
    containerEl.append(columnEl);

    var ingredientsContainerEl = columnEl.find('.ingredients-container');
    ingredientsContainerEl.append(ingredientsEl);

    };
};

//Adds error message to page when fetch fails
function displayErrorMessage(errorCode){
  
  var errorColumnEl = $(`<div class="col s12">`);

  switch(errorCode){
    case 401: 
      errorColumnEl.text(`Sorry, we have reached our API fetch limit. Please wait 60 seconds and try again`);
      break;
    default:
      errorColumnEl.text(`Sorry, we have encountered an error // Status Code: ${errorCode}`);
      break
  }
  containerEl.append(errorColumnEl);
  
}

//Updates information stored in Modal
function UpdateRecipeModal(recipe) {
  var modalTitleEl = $("#modal-title");
  var modalIngredientsEl = $("#modal-ingredients");
  var modalLinkEl = $("#modal-link");
  var modalImageEl = $("#modal-image")
  modalTitleEl.text(recipe.label);
  for (i = 0; i < recipe.ingredientLines.length; i++){
    // console.log(recipes[i].ingredientsList[j]);
    var ingredientEl = $('<li>');
    ingredientEl.text(recipe.ingredientLines[i]);

    modalIngredientsEl.append(ingredientEl);
  };
  modalImageEl.attr(`src`, recipe.image);
  modalLinkEl.text(recipe.url);
  modalLinkEl.attr('href', recipe.url);
}
//Modal initializer
$(document).ready(function(){
  $('.modal').modal();
});

=======
  };
};

