// dropdown links 
// Dance/Electronic top hits
var getDanceTopCharts = function(user) {
    // format the github api url
    var apiUrl = "API key" + user + "/repos";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };
// Hip-Hop top hits
// Rock top hits
// Pop top hits
// New Releases
// Biboard Top 100
// Viral Hits
// Today's Top Hits
// Greatest of All Times