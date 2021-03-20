// DOM (array of dummy data that is expected from API to test) 

// mock data array: title, cook time, ingredients, cooking instructions, pictures 
var recipes = [
  {
    title: 'Title1', 
    cookTime: '1:45',
    ingredientsList: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip',
    instructions: 'Spicy jalapeno bacon ipsum dolor amet ribeye deserunt mollit anim qui pariatur velit cupidatat in landjaeger quis shankle prosciutto ground round.',
  },
  {
    title: 'Title2', 
    cookTime: '1:45',
    ingredientsList: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip',
    instructions: 'Spicy jalapeno bacon ipsum dolor amet ribeye deserunt mollit anim qui pariatur velit cupidatat in landjaeger quis shankle prosciutto ground round.',
  },
  {
    title: 'Title3', 
    cookTime: '1:45',
    ingredientsList: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip',
    instructions: 'Spicy jalapeno bacon ipsum dolor amet ribeye deserunt mollit anim qui pariatur velit cupidatat in landjaeger quis shankle prosciutto ground round.',
  }, 
  {
    title: 'Title4', 
    cookTime: '1:45',
    ingredientsList: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip',
    instructions: 'Spicy jalapeno bacon ipsum dolor amet ribeye deserunt mollit anim qui pariatur velit cupidatat in landjaeger quis shankle prosciutto ground round.',
  },
  {
    title: 'Title5', 
    cookTime: '1:45',
    ingredientsList: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip',
    instructions: 'Spicy jalapeno bacon ipsum dolor amet ribeye deserunt mollit anim qui pariatur velit cupidatat in landjaeger quis shankle prosciutto ground round.',
  },
  {
    title: 'Title6', 
    cookTime: '1:45',
    ingredientsList: 'Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip',
    instructions: 'Spicy jalapeno bacon ipsum dolor amet ribeye deserunt mollit anim qui pariatur velit cupidatat in landjaeger quis shankle prosciutto ground round.',
  }
];

// (dummy data in variables for us to easily switch out for real data) 

// recipe container(s)
var containerEl = $('.container'); 

// for loop (loop through data)
for (let i = 0; i < recipes.length; i++);
  // dynamically create elements to hold data and append to container 
  var titleEL = $('');
  var cookTimeEl = $('');
  var ingredientListEl = $('');
  var instructionsEl = $('');

  // append elements to container 
  containerEl.append(titleEL);
  containerEl.append(cookTimeEl);containerEl.append(ingredientListEl);
  containerEl.append(instructionsEl);