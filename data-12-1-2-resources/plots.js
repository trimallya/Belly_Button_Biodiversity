Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

var trace = [{
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
}];

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Options"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", trace, layout);

var drinks = ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"];
var percOrdered = [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6];

var layout = {
    title: "'Pie' Chart"
};

var nonalcBar = [{
    labels: drinks,
    values: percOrdered,
    type: "pie"
}];

Plotly.newPlot("plotArea", nonalcBar, layout);

var layout = {
    title: "'Scatter' Plot"
}

var trace = {
    x: [1, 2, 3, 4, 5],
    y: [9, 15, 6, 7, 3],
    mode: 'markers',
    type: 'scatter'
}

var data = [trace];

Plotly.newPlot("plotArea", data, layout);
