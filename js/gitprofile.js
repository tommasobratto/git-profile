$(document).ready(function() {

  $('.gitprofile').keyup(function(e) {

    e.preventDefault();

    var url = 'https://api.github.com/users/' + $('input.username').val();

    var template = $('template').html();

    $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));
      console.log(info);
    }).fail(function() {
      $('.container').html('');
      $('.container').prepend("User not found");
    }).always(function() {
      $('input.username').val();
    });
  });
});