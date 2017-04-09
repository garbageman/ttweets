$('#activate').click(function() {
  $.ajax({
    url: '/api/generate',
    complete: function(data){
      console.log(data.responseJSON.string);
      $('#tweet').text(data.responseJSON.string);
      $("body /deep/ .Tweet-text").text(data.responseJSON.string);
    },
    error: function(data) {
      console.log('ERROR');
      console.log(data);
    }
  })
})
