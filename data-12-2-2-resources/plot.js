// Check data output
console.log(cityGrowths);

// Sort cities by population growth
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

// Slice only top five cities
var topFiveCities = sortedCities.slice(0,5);

// Create arrays
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityGrowths);

// Create bar chart with arrays
var trace1 = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: 'bar'
};
var data = [trace1];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017" }
};
Plotly.newPlot("bar-plot", data, layout);

// Top seven cities
var topSevenCities = sortedCities.slice(0,7);

// Create arrays
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

// Create bar chart with arrays
var trace2 = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: 'bar'
};
