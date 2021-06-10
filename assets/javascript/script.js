var songIdCounter = 0;
var formEl = document.querySelector("#form");
var SearchsongEl = document.querySelector("#list-of-song");
var pageContentEl = document.querySelector("#song-list");

// create array to hold Songs for saving
var Songs = [];

var songFormHandler = function (event) {
    event.preventDefault();
    var songNameInput = document.querySelector("input[name='songs']").value;
}

var createSongEl = function(songDataObj) {
  // save songs as an object with name, type, status, and id properties then push it into songs array
songDataObj.id = songIdCounter;

Songs.push(songDataObj);

  // save songs to localStorage
  savesongs();

  
  // increase song counter for next unique songs id
  songIdCounter++;
};

var savesongs = function() {
    localStorage.setItem("songs", JSON.stringify(songs));
  };
  
  var loadSongs = function() {
    var savedSongs = localStorage.getItem("songs");
    // if there are no song, set song to an empty array and return out of the function
    if (!savedSongs) {
      return false;
    }
    console.log("Saved songs found!");
    // else, load up saved songs
  
    // parse into array of objects
    savedSongs = JSON.parse(savedSongs);
  
    // loop through savedSongs array
    for (var i = 0; i < savedSongs.length; i++) {
      // pass each song object into the `createSongEl()` function
      createSongEl(savedSongs[i]);
    }
  };
  
  
  loadSongs();
  
