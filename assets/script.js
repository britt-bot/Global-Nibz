// DOM (array of dummy data that is expected from API to test) 

// mock data array: title, cook time, ingredients, cooking instructions, pictures 
var testRecipes = [
  {
    title: 'Title1', 
    time: 1,
    ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
  },
  {
    title: 'Title2', 
    time: 2,
    ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
  },
  {
    title: 'Title3', 
    time: 3,
    ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
  }, 
  {
    title: 'Title4', 
    time: 4,
    ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
  },
  {
    title: 'Title5', 
    time: 5,
    ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
  },
  {
    title: 'Title6', 
    time: 6,
    ingredientsList: ['Nori grape silver beet', 'broccoli kombu beet greens', 'fava bean potato quandong celery.', 'Bunya nuts black-eyed', 'pea prairie turnip leek lentil', 'turnip greens parsnip',]
  }
];

// (dummy data in variables for us to easily switch out for real data) 

function displayRecipes(recipes){
// console.log(recipe)
console.log(recipes)
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
          <img src=` + recipes[i].image + `>
          <span class="card-title">` + recipes[i].label + `</span>
        </div>
        <div class="card-content white-text center-align">
          <h6>INGREDIENTS:</h6><div class="ingredients-container"></div>
          <br>
          <h6>COOK TIME:</h6>` + recipes[i].url + `<div class="cook-time"></div>
        </div>
      </div>
      </div>`);

      // append elements to container 
      containerEl.append(columnEl);

      var ingredientsContainerEl = columnEl.find('.ingredients-container');
      ingredientsContainerEl.append(ingredientsEl);

    };
};


//Add saved list and Modal
