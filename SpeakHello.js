(function(window) {
  var speakWord = "Hello";
  var helloSpeaker = function (name) {
    console.log(speakWord + " " + name);
  }

  window.helloSpeaker = helloSpeaker;

})(window);


//Thank you for grading my assignment//