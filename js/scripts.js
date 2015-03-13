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
    var productList = [1,2,3];
    var numProduct = 3;

    var nextProduct = function() {

      //UGLY HARDCODED SOLUTION  
      
      productCount++;

      
      $('#info-block-'+productCount).addClass('fadein');

    };

     // UI click events
    // pause.on( "click", pauseVideo );
    // $('.video').on("click", nextScene);
    $('body').on("click", nextProduct);


    //homepage
    var fadeout = function() {
      console.log('fade out');
      $('.homepage-bg').fadeOut( "slow", function() {
        window.location.replace("file:///Users/matthew.harwood/workspace/akqa/nest2/nest/index.html");
      });
    };
    $('.homepage-bg').on("click", fadeout)
});






