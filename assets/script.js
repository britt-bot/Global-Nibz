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
    "South_American",
    "South_East_Asian"
]

var testSearchURL = "https://api.edamam.com/search?app_id=278f7b03&app_key=d50111eac3df1610dfa7f3435b014a99&q=pizza";
var recipeResults;
//Function Calls
//fetchRecipes(generateRecipeFetchURL());
logFetchRecipes(generateRecipeFetchURL());
displayFetchRecipes(generateRecipeFetchURL());



//functions
function generateRecipeFetchURL() {
    var randomCuisineType =  cuisineType[randomEx(0, cuisineType.length)]
    //placeholder for index search of hits
    url = `${BaseAPIpath}?${appID}&${appKey}&q=&calories=350%2B&cuisineType=${randomCuisineType}`;
    console.log("url: " + url);
    return url;

}
async function displayFetchRecipes(url) {
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            for(var i = 0; i < data.hits.length; i++){
                displayRecipeText(data.hits[i])
            }
        })
};

async function fetchRecipes(url) {
    await fetch(url)
        .then(response => {
        console.log(response.json());
    return response.json();})
        .then(data => recipeResults = (data.hits))
};

async function logFetchRecipes(url) {
    await fetch(url)
        .then(response => {
            console.log(response)
            return response.json();})
        .then(data => console.log(data));
};

function displayRecipeText(recipeObject) {
    console.log("NEW RECIPE!!!!!!!!!!!!")
    console.log(recipeObject);
    console.log(recipeObject.recipe.label);
    console.log("Ingredients")
    for(var i = 0; i < recipeObject.recipe.ingredients.length; i++){
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

