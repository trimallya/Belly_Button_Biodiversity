const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// Retrieve full name of first station
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Print only lat lng of each station
d3.json(url).then(spaceXResults => spaceXResults.map(result => console.log(result.location.latitude, result.location.longitude)));