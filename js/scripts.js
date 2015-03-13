$( document ).ready(function() {
    //selects the video
    var vid = $('.video')[0];
    var pause = $('.pause');
    var play = $('.play');


    //video movement function

    //pause video
    var pauseVideo = function() {
      vid.pause();  
    };

    //play video
    var playVideo = function() {
      vid.play();
    };
    //.video movement function

    // UI click events
    pause.on( "click", pauseVideo );
    play.on( "click", playVideo );

});