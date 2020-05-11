/* rename data variable */
var ufoData = data

/* select table body */
var ufoTable = d3.select("tbody")

/* create function to build table */
function tableBuilder(dictList) {
    /* for each item in list */
    dictList.forEach((ufo) => {
        /* append table body of index.html with a row */
        var row = ufoTable.append("tr");
        /* for each key,vale pair in each list item */
        Object.entries(ufo).forEach(([key, value]) => {
            /* create a table cell */
            var cell = row.append("td");
            /* and fill the cell with the dictionary value */
            cell.text(value) 
        });
    });
}
tableBuilder(ufoData)


 /* filter table based on input */
 function inputFilter () {
    /* prevent refreshing */ 
    d3.event.preventDefault();
    /* save element where input occurs */ 
    var userInputField = d3.select("#datetime");
    /* save text of element */ 
    var userInput = userInputField.property("value");
    /* filter dataset on input text match */ 
    filteredData = ufoData.filter(ufo => ufo.datetime == userInput);
    /* reset table */ 
    ufoTable.html("")
    /* build table with filtered data */ 
    tableBuilder(filteredData)
}
/* save element for event handling */ 
var form = d3.select("#form")
/* run function on event */ 
form.on ("submit", inputFilter)
/* save element for event handling */ 
var button = d3.select("#filter-btn")
/* run function on event */ 
button.on("click", inputFilter)