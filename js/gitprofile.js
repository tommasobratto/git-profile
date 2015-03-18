$(document).ready(function() {

  $('.gitprofile').keyup(function(e) {

    e.preventDefault();

    var url = 'https://api.github.com/users/' + $('input.username').val();

    var template = $('template').html();

    var APIinfo = $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));
      console.log(info);
    })

    onFail(APIinfo);
    autoClear(APIinfo);

    function onFail(APIinfo) {
      APIinfo.fail(function() {
        $('.container').html('');
        $('.container').prepend("User not found");
      });
    };

    function autoClear() {
      APIinfo.always(function() {
        $('input.username').val();
      });
    };

  });
  
});

