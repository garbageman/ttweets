$('#activate').click(function() {
  $.ajax({
    url: '/api/generate',
    complete: function(data){
      console.log(data.responseJSON.string);
      $('.Tweet-text .e-entry-title').text(data.responseJSON.string);
    },
    error: function(data) {
      console.log('ERROR');
      console.log(data);
    }
  })
})
