$(function(){


  $("#homeLink").on('click', function(event) {
    event.preventDefault();
    $(window).scrollTo(0, 700);
    $("#homeLink").css('text-decoration', 'none');
    $("#homeLink").css('color', '#000000');
  });

  $("#home-button").on('click', function(event) {
    event.preventDefault();
    $(window).scrollTo(1040, 1400);
  });


  $("#aboutLink").on('click', function(event) {
    event.preventDefault();
    $(window).scrollTo(1040, 700);
    $("#aboutLink").css('text-decoration', 'none');
    $("#aboutLink").css('color', '#000000');
  });

  $("#portfolioLink").on('click', function(event) {
    event.preventDefault();
    $(window).scrollTo(1970, 700);
    $("#portfolioLink").css('text-decoration', 'none');
    $("#portfolioLink").css('color', '#000000');
  });

  $("#contactLink").on('click', function(event) {
    event.preventDefault();
    $(window).scrollTo(3040, 700);
    $("#contactLink").css('text-decoration', 'none');
    $("#contactLink").css('color', '#000000');
  });

});
