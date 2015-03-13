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
    var productCount = 0;
    var numProducts = 3;

    var nextProduct = function() {
      //UGLY HARDCODED SOLUTION   
      productCount++;

      $('#info-block-'+productCount).addClass('fadein');

      if(productCount === 3){
        $('#info-block-'+1).removeClass('fadein');
      }
      if(productCount === 4){
        $('#info-block-'+2).removeClass('fadein');
        $('#info-block-'+1).addClass('fadein');
      }
      if(productCount === 5){
        $('#info-block-'+3).removeClass('fadein');
        $('#info-block-'+2).addClass('fadein');
        productCount = 0;
      }
    };

    
    
     // UI click events
    // pause.on( "click", pauseVideo );
    // $('.video').on("click", nextScene);
    $('.nest-logo').on("click", nextProduct);
});