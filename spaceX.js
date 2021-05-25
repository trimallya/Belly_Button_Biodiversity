const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// Retrieve full name of first station
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Print only lat lng of each station
d3.json(url).then(spaceXResults => spaceXResults.map(result => console.log(result.location.latitude, result.location.longitude)));

// Retrieve data from external file
d3.json("samples.json").then(function(data){
    console.log(data);
});

// Retrieve only wfreq in descending order and delete null values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b-a);
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

// Print metadata for first individual
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key,value]) => {console.log(key + ': ' + value);});
});