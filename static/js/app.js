// from data.js
var tableData = data;

// Need to select interactive html tags
var form = d3.select("form");
var button = d3.select("#filter-btn");

// Reference html file's tbody tag for inserting data
var tbody = d3.select("tbody");

// tableData.forEach(function(report) {
//     var row = tbody.append("tr");
// });

// Event handlers for button clicks
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    // Preventing the page from reloading
    d3.event.preventDefault();

    // Selecting the user's input date
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    // Don't tell the aliens we keep our user input there!!
    console.log("User Date Input: " + inputValue);



};

