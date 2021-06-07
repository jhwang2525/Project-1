// necessary Js files to create
// Dance/Electronic top hits
var getDanceTopCharts = function (user) {
  // format the github api url
  var apiUrl = "API key" + user + "/repos";

  // make a request to the url
  fetch(apiUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};





fetch("https://api.github.com/users/arand013")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    document.querySelector(".image").innerHTML = `
               
            <h1>${data.login}</h1>

             <img src="${data.avatar_url}" alt="">
            `
  })


fetch("https://theaudiodb.com/api/v1/json/523532/mostloved.php?format=track")
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)


  })



// Hip-Hop top hits
// Rock top hits
// Pop top hits
// New Releases
// Biboard Top 100
// Viral Hits
// Today's Top Hits
