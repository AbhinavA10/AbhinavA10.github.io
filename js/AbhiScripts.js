
  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //
$(document).ready(function() {
    //your code here
  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    	typeSpeed: 75, //type speed in milliseconds
    	backSpeed: 40, //backspacing speed in milliseconds
    	smartBackspace: true, //smartBackspace only backspace what doesn't match the previous string
    	backDelay: 1000, //backDelay time before backspacing in milliseconds
    	loop: true, //loop strings
    	loopCount: Infinity,//amount of loops
  });

});