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

