/* save select tag to variable */
var menu = d3.select("#dropdown")

function updateForm() {
    option = menu.property("value");
    console.log("option: ", option)
    if (option === "drop-opt-state") {
        /* save form list items to variable and*/
        var formList = d3.selectAll("ul");
        console.log("form list items: ", formList)

        /* save html inside li tag to variable */
        var optionListItem = d3.select("li").html();
        console.log("list item html: ", optionListItem);

        /* save label tag text and update */
        var labelText = d3.select("label").text();
        labelText = "Enter a State"
        console.log("label tag text: ", labelText)

        /* save label tag for attr and update*/
        var labelFor = d3.select("label").attr("for");
        labelFor = "state"
        console.log("label 'for' attribute: ", labelFor)

        /* save input tag id attr and update */
        var inputID = d3.select("input").attr("id")
        inputID = "state"
        console.log("input tag ID: ", inputID)

        /* save input tag placeholder attr and update*/
        var inputPlaceholder = d3.select("input").attr("placeholder")
        inputPlaceholder = "pa"
        console.log("input tag placeholder: ", inputPlaceholder)
    };
    d3.select("ul").append("li")
};


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
function inputFilter() {
    /* prevent refreshing */
    d3.event.preventDefault();

    /* save element where input occurs */
    var dateInputField = d3.select("#datetime");
    var cityInputField = d3.select("#city");
    var stateInputField = d3.select("#state");
    var countryInputField = d3.select("#country");
    var shapeInputField = d3.select("#shape")
    
    /* save text of element */
    var dateInput = dateInputField.property("value");
    var cityInput = cityInputField.property("value");
    var stateInput = stateInputField.property("value");
    var countryInput = countryInputField.property("value");
    var shapeInput = shapeInputField.property("value");


    /* filter dataset on input text match */
    dateFiltered = ufoData.filter(ufo => ufo.datetime === dateInput);
    cityFiltered = ufoData.filter(ufo =>  ufo.city === cityInput);
    stateFiltered = ufoData.filter(ufo =>  ufo.state === stateInput);
    countryFiltered = ufoData.filter(ufo =>  ufo.country === countryInput);
    shapeFiltered = ufoData.filter(ufo =>  ufo.shape === shapeInput);
    
    /* reset table */
    ufoTable.html("")

    /* build table with filtered data */
    tableBuilder(dateFiltered);
    tableBuilder(cityFiltered);
    tableBuilder(stateFiltered);
    tableBuilder(countryFiltered);
    tableBuilder(shapeFiltered);
}

/* save element for event handling */
var button = d3.select("#filter-btn")
/* run function on event */
button.on("click", inputFilter)