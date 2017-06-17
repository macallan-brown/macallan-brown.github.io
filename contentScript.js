
var isUsingRealData = true; //SET TO FALSE WHILE TESTING TO USE SAMPLE DATA INSTEAD OF CALLING TO DB

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDLSTQgLQA0WTU3r5B4uhex7MPU2HiRszY",
  authDomain: "personal-website-39df9.firebaseapp.com",
  databaseURL: "https://personal-website-39df9.firebaseio.com",
  projectId: "personal-website-39df9",
  storageBucket: "personal-website-39df9.appspot.com",
  messagingSenderId: "687288860936"
};
firebase.initializeApp(config);
var database = firebase.database();

var movieData;
var seenMovies;

if(isUsingRealData){
  var moviesDatabase = firebase.database().ref('data/movies');
  moviesDatabase.on('value', function(snapshot) {
    movieData = snapshot.val();
    movieDataLoaded();
  });
} else {
  $.getJSON("/sampleData/sampleData1.json", function(json) {
      console.log("------FAKE DATA-------");
      movieData = json["movies"];
      movieDataLoaded();
  });
}

var movieDataLoaded = function() {
  seenMovies = movieData["seen-movies"];
  for (var movie in seenMovies) {
    $favoriteMovie = jQuery('<tr/>', {
      class: 'favoriteMovie',
      align: 'right'
    });

    $movieTitle = jQuery('<td/>', {
      class: 'inlineBlock movieTitle',
      text: movie
    }).appendTo($favoriteMovie);

    $movieRating = jQuery('<td/>', {
      class: 'inlineBlock movieRating',
      text: seenMovies[movie]
    }).appendTo($favoriteMovie);

    $favoriteMovie.appendTo('#favoriteMovieContainer');
    console.log(seenMovies[movie]);
  }
}
