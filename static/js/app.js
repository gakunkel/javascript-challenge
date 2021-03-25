// from data.js
var tableData = data;

// Need to select interactive html tags
var form = d3.select("form");
var button = d3.select("#filter-btn");

// Reference html file's tbody tag for inserting data
var tbody = d3.select("tbody");

// Event handlers for button clicks
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    // Preventing the page from reloading
    d3.event.preventDefault();

    // Selecting the user's input date
    var inputElement = d3.select("#datetime");

    // Getting the value from the input field
    var inputValue = inputElement.property("value");

    // Console logging user date imput
    console.log("User Date Input: " + inputValue);
    
    // Filtering the data based on user's date input
    var filteredData = tableData.filter(report => report.datetime === inputValue);

    // Sending the data with that date to the console
    console.log(filteredData);

    // Creating variables for date, city, state, country, shape, duration, & comments
    var filteredDate = filteredData.map(report => report.datetime);
    var filteredCity = filteredData.map(report => report.city);
    var filteredState = filteredData.map(report => report.state);
    var filteredCountry = filteredData.map(report => report.country);
    var filteredShape = filteredData.map(report => report.shape);
    var filteredDuration = filteredData.map(report => report.durationMinutes);
    var filteredComments = filteredData.map(report => report.comments);

    // Appending the filtered data elements to the tbody
    filteredData.forEach(function(report) {
        var row = tbody.append("tr");
    })
};

