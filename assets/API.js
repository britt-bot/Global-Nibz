//Variables
var BaseAPIpath = "https://api.edamam.com/search?";
var appID = "app_id=278f7b03";
var appKey = "app_key=d50111eac3df1610dfa7f3435b014a99";

//chose a random food type

var cuisineType = [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central_Europe",
    "Chinese",
    "Eastern_Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle_Eastern",
    "Nordic",
    "South_East_Asian"
]

var recipeResults;
//Function Calls
fetchHits(generateRecipeFetchURL()).then(function(recipes) {
    console.log(recipes);
})

function generateRecipeFetchURL() {
    var randomCuisineType = cuisineType[randomEx(0, cuisineType.length)];
    var url = `${BaseAPIpath}?${appID}&${appKey}&q=&calories=350%2B&cuisineType=${randomCuisineType}`;
    return url;
}

//functions
function getRecipes() {
    var randomCuisineType = cuisineType[randomEx(0, cuisineType.length)]
    //First create url for hits
    var url = `${BaseAPIpath}?${appID}&${appKey}&q=&calories=350%2B&cuisineType=${randomCuisineType}`;
    var numberOfHits = fetchHits(url);
    //run random index 3 times
    var indices = [];
    for (var i = 0; i < 3; i++) {
        indices.push(randomIn(0, numberOfHits));
        console.log("picked index: " + indices[i]);
    }
    //then add hits to query string 
    url = `${BaseAPIpath}?${appID}&${appKey}&q=&calories=350%2B&cuisineType=${randomCuisineType}`;
    console.log("url: " + url);
    return url;

}
function fetchHits(url) {
    var numberOfHits;
    console.log(url);
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            var promises = [];
            for (var i = 0; i < 3; i++) {
                var random = randomIn(0, data.count)
                promises.push(fetch(`${url}&from=${random}&to=${random + 1}`)
                    .then(response => response.json())
                )
            }
            return Promise.all(promises).then(datas => {
                var recipes = [];
                
                for (var i = 0; i < 3; i++) {
                    recipes.push(datas[i].hits[0].recipe);
                
                }
                //Display to DOM
                //console.log(recipes);
                return recipes;
            })
        })
}

//fetch call that runs the displayRecipeText function for each hit
function displayFetchRecipes(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //probably change this to 3 in the future!!!!!!!!!!!!!!!!!!!!!!!!!
            for (var i = 0; i < data.hits.length; i++) {
                displayRecipeText(data.hits[i])
            }
        })
};
//fetch call that saves hits to a variable
function fetchRecipes(url) {
    fetch(url)
        .then(response => {
            console.log(response.json());
            return response.json();
        })
        .then(data => recipeResults = (data.hits))
};
//fetch call that console.logs everything
function logFetchRecipes(url) {
    fetch(url)
        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(data => console.log(data));
};

//replace with object return
function displayRecipeText(recipeObject) {
    console.log("NEW RECIPE!!!!!!!!!!!!")
    console.log(recipeObject);
    console.log(recipeObject.recipe.label);
    console.log("Ingredients")
    for (var i = 0; i < recipeObject.recipe.ingredients.length; i++) {
        console.log(recipeObject.recipe.ingredients[i].text);
    }
    console.log(recipeObject.recipe.url);

}


//Simplified Exclusive Random function
function randomEx(min, exclusiveMax) {
    return Math.floor(Math.random() * (exclusiveMax - min)) + min;
}
//Simplified Inclusive Random function
function randomIn(min, inclusiveMax) {
    return Math.floor(Math.random() * (inclusiveMax - min) + 1) + min;
}

