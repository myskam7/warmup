//config file contains Twitter API keys

var config = require('./config')

// was only able to stream new tweets as they came, however it stopped working . 
var Twitter = require('twitter');

var client = new Twitter(config);


client.stream('statuses/filter', {track: 'twitter'},  function(stream) {
    stream.on('data', function(tweet) {
      console.log(tweet.text);
    });
  
    stream.on('error', function(error) {
      console.log(error);
    });
  });
      

  // the spotify, i was only able to pull a list that contained [Object]

   