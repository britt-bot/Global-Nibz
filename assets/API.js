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
    "Central%20Europe",
    "Chinese",
    "Eastern%20Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle%20Eastern",
    "Nordic",
    "South%20East%20Asian"
]

var recipeResults;
//Function Calls
// getRecipes(generateRecipeFetchURL()).then(recipes =>  displayRecipes(recipes));

getRecipes(generateRecipeFetchURL()).then(recipes => {
    displayRecipes(recipes);
    UpdateRecipeModal(recipes[0])
});



//status code test url
// var statusCodeURL = `https://httpstat.us/500`;
// getRecipes(statusCodeURL).then(recipes =>  displayRecipes(recipes));

function generateRecipeFetchURL() {
    var randomCuisineType = cuisineType[randomEx(0, cuisineType.length)];
    var url = `${BaseAPIpath}?${appID}&${appKey}&q=&calories=350%2B&cuisineType=${randomCuisineType}`;
    return url;
}

//API call that returns an array of 3 recipe objects
function getRecipes(url) {
    var numberOfHits;
    console.log(url);
    return fetch(url)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                displayErrorMessage(response.status);
            }
            return response.json();
        })
        .then(data => {
            var promises = [];
            for (var i = 0; i < 3; i++) {
                var random = randomIn(0, data.count)
                promises.push(fetch(`${url}&from=${random}&to=${random + 1}`)
                    .then(response => {
                        console.log(response);
                        return response.json()})
                )
            }
            return Promise.all(promises).then(datas => {
                var recipes = [];
                console.log(datas);
                for (var i = 0; i < 3; i++) {
                    recipes.push(datas[i].hits[0].recipe);

                }
                console.log(`Inside fetch${recipes}`);
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

//fetch call that console.logs everything
function logFetchRequest(url) {
    fetch(url)
        .then(response => {
            console.log(response)
            return response.json();
        })
        .then(data => console.log(data));
};

//Simplified Exclusive Random function
function randomEx(inclusiveMin, exclusiveMax) {
    return Math.floor(Math.random() * (exclusiveMax - inclusiveMin)) + inclusiveMin;
}
//Simplified Inclusive Random function
function randomIn(exclusiveMin, inclusiveMax) {
    return Math.floor(Math.random() * (inclusiveMax - exclusiveMin) + 1) + exclusiveMin;
}


