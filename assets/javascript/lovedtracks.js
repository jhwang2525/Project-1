// Top 50 most loved
fetch('https://theaudiodb.com/api/v1/json/523532/mostloved.php?format=track')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });
  function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.loved.length; i++) {
        var div = document.createElement("div");
        var track = data.loved[i];
        div.innerHTML = 'Track ' + track.strTrack + ' By ' + track.strArtist;
        mainContainer.appendChild(div);
    }
}

