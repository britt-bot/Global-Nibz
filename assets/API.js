//Variables
var BaseAPIpath = "https://api.edamam.com/search?";
var appID = "app_id=278f7b03";
var appKey = "app_key=d50111eac3df1610dfa7f3435b014a99";
var quote = [ "You can't live a full life on an empty stomach.", "Hard work should be rewarded by good food.", "Eating is a necessity but cooking is an art.", "A recipe is a story that ends with a good meal.", "People confuse me. Food Doesn't.", "Tell me what you eat, and I will tell you who you are."
]
var asianLanguage = [
    "ko","lo", "mn","hmn","vi","th","my"
]

var caribbeanLanguage = [
    "es", "fr", "en", "nl", "ht"
]

var centralEuropeLanguage = [
    "cs", "de", "pl", "hu", "sk", "lb"
]

var chineseLanguage = [
    "zh-CN","zh-TW",
]

var easternEuropeLang = [
    "lv", "lt", "uk", "be", "sr"
]

var mediterraneanLang = [
    "el", "ar", "hr"
]

var nordicLanguages = [
    "da", "sv", "no", "is"
]

var middleEasternLanguages = [
    "da", "sv", "no", "is"
]

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
    getQuote(randomCuisineType);
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


// food quote - language fetch 

function getQuote(cuisine) {

    var randomQuote = quote[randomEx(0,quote.length)]

    fetch(`https://translation.googleapis.com/language/translate/v2?q=${randomQuote}&target=${pickLanguages(cuisine)}&key=AIzaSyBe5i4hqGu1EP8s4B72eNKoivCfB1QPMJE`, {
	"method": "POST",
    })
    .then(response => {
        // console.log(response);
        return response.json()
    })
    .then(data => {
        console.log(data)
        var quoteContent = 
        `<h2><h2>
        <p>${randomQuote}</p>
        <p>${data.data.translations[0].translatedText}</p>`;
        $("#quote").html(quoteContent)
    })
    .catch(err => {
        console.error(err);
    });
};

// console.log(languages[42])

function pickLanguages(cuisineString){
    switch (cuisineString) {
        case "American": return "en"
        case "Asian":return asianLanguage[randomEx(0,asianLanguage.length)]
        case "British": return "en"
        case "Caribbean": return caribbeanLanguage[randomEx(0, caribbeanLanguage.length)]
        case "Central%20Europe": return centralEuropeLanguage[randomEx(0, centralEuropeLanguage.length)]
        case "Chinese": return "zh"
        case "Eastern%20Europe": return easternEuropeLang[randomEx(0, easternEuropeLang.length)]
        case "French": return "fr"
        case "Indian": return "hi"
        case "Italian": return "it"
        case "Japanese": return "ja"
        case "Kosher": return "yi"
        case "Mediterranean": return mediterraneanLang[randomEx(0, mediterraneanLang.length)]
        case "Mexican": return "es"
        case "Middle%20Eastern": return middleEasternLanguages[randomEx(0, middleEasternLanguages.length)]
        case "Nordic": return nordicLanguages[randomEx(0, nordicLanguages.length)]
        case "South%20East%20Asian": return asianLanguage[randomEx(0, asianLanguage.length)]
    }
}

