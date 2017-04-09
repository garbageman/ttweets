$('#activate').click(function() {
  $(".inner-container").css("display","none");
  $(".loading-container").css("display","block");
  $.ajax({
    url: '/api/generate',
    complete: function(data) {
      /* Stupid hack no one should use */
      $("body /deep/ .Tweet-text").text(data.responseJSON.string);
      $(".inner-container").css("display","inline-block");
      $(".loading-container").css("display","none");
    },
    error: function(data) {
      console.log('ERROR');
      console.log(data);
    }
  })
});
