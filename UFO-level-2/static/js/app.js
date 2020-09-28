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
    var userInput = d3.select("#datetime");
    var userInputValue = userInput.property("value");
    // create filter
    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === userInputValue);

    filteredData.forEach((selections) => {
        var row = tbody.append("tr");
        Object.entries(selections).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value); 
        });
    
    });
});

