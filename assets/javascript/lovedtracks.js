// Top 50 Most Loved Tracks of All Time
var getDanceTopCharts = function(user) {
    // format the github api url
    var apiUrl = "theaudiodb.com/api/v1/json/523532/mostloved.php?format=track1" + user + "/track1";
  
    // make a request to the url
    fetch(theaudiodb.com/api/v1/json/523532/mostloved.php?format=trackl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };