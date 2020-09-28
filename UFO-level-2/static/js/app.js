// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Import data and make table
tableData.forEach((ufoSighting) => {
  // append row for each entry
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    // append cell for each datapoint   
    var cell = row.append("td");
    cell.text(value);
  });
});

// Button
var button = d3.select("#filter-btn");
button.on("click", function() {
    tbody.html("");

    // select user input
    // added for multiple user inputs
    var userInput = d3.select("#datetime");
    var userInputDate = userInput.property("value");
    var userInput = d3.select("#city");
    var userInputCity = userInput.property("value");
    var userInput = d3.select("#state");
    var userInputState = userInput.property("value");
    var userInput = d3.select("#country");
    var userInputCountry = userInput.property("value");
    var userInput = d3.select("#shape");
    var userInputShape = userInput.property("value");

    filteredData = tableData
    // create filter
    // if statements needed because if empty, breaks table
    if (userInputDate) {
    var filteredData = filteredData.filter(ufoSighting => ufoSighting.datetime === userInputDate);
    };
    if (userInputCity) {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.city === userInputCity);
    };
    if (userInputState) {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.state === userInputState);
    };
    if (userInputCountry) {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.country === userInputCountry);
    };       
    if (userInputShape) {
        var filteredData = filteredData.filter(ufoSighting => ufoSighting.shape === userInputShape);
    };


    filteredData.forEach((selections) => {
        var row = tbody.append("tr");
        Object.entries(selections).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value); 
        });
    
    });
});

