$('#activate').click(function() {
  $(".inner-container").css("display","none");
  $(".loading-container").css("display","block");
  $.ajax({
    url: '/api/generate',
    complete: function(data) {
      // console.log(data.responseJSON.string);
      /* Stupid hack no one should use */
      $("body /deep/ .Tweet-text").text(data.responseJSON.string);
      // $("body /deep/ .dt-updated").text(randomDate().dateString());
      // $("body /deep/ .TweetAction--retweet .TweetAction-stat").text(random.integer(0, 50000));
      // $("body /deep/ .TweetAction--heart .TweetAction-stat").text(random.integer(0, 250000));
      $(".inner-container").css("display","inline-block");
      $(".loading-container").css("display","none");
    },
    error: function(data) {
      console.log('ERROR');
      console.log(data);
    }
  })
});
