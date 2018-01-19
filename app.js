// set up variables
// ===================================================

// This variable will be pre-programmed with our authentication key
// (the one we received when we registered)
var authKey = "e964a417948d4c809e1602bcd1c67916";
var queryTerm   = "";
var numResults  = 0;
var startYear   = 0;
var endYear     = 0;
// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";
//variable to track number of articles
var articleCounter = 0;
var $searchBtn = $("#search-button");

// set up functions
// ===================================================

function runQuery(numArticles, queryURL){
    // ajax function
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(NYTData) {
        console.log(queryURL);
        console.log(NYTData);
    })

}

// set up methods
// ===================================================


$searchBtn.on("click", function(){
    alert("test");

    var queryTerm = $("#search").val().trim();
    console.log(queryTerm);

    var newUrl = queryURLBase + "&q="+ queryTerm;
    console.log(newUrl);

    //send the ajax call the newly assembled url
    runQuery(10, newUrl);
    return false;
})
// 1. retrieve user inputs and convert to variables
// 2. use those variables to run an ajax call to the new york Times
// 3. break down the nyt object into usable fields
// 4. Dynamically generate html content

// 5. deal with edge cases -bugs
