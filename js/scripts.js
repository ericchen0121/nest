$( document ).ready(function() {
    //selects the video
    // var vid = $('.video')[0];
    // var pause = $('.pause');
    // var play = $('.play');
    var time = 0;

    //video movement function

    //pause video
    // var pauseVideo = function() {
    //   vid.pause();  
    // };

    // //play video
    // var playVideo = function() {
    //   vid.play();
    // };


    // var sceneCounter = 0;
    // var timestamps = [2, 5,20,30,40];

    // var nextScene = function() {
    //   sceneCounter++
    //   playVideo();
    //   console.log('hey')
    // };


    // playVideo();
    // vid.addEventListener('timeupdate',function(event){
    //   time = vid.currentTime;
    //   if(time <= timestamps[sceneCounter]){
    //     playVideo();
    //   } else {
    //     pauseVideo();
    //   }
    // },false);

    var nextProduct = function(){
      console.log('asdf');
    };
    console.log('hery');
     // UI click events
    // pause.on( "click", pauseVideo );
    // $('.video').on("click", nextScene);
    $('.hud').on("click", nextProduct);
});