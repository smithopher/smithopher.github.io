$(function(){


  $("#homeLink").on('click', function(event) {
    event.preventDefault();
    $(window).scrollTo(0, 700);
    $("#homeLink").css('text-decoration', 'none');
    $("#homeLink").css('color', '#000000');
  });

  $("#aboutLink").on('click', function(event) {
    event.preventDefault();
    $(window).scrollTo(740, 700);
    $("#aboutLink").css('text-decoration', 'none');
    $("#aboutLink").css('color', '#000000');
  });

  $("#portfolioLink").on('click', function(event) {
    event.preventDefault();
    $(window).scrollTo(1540, 700);
    $("#portfolioLink").css('text-decoration', 'none');
    $("#portfolioLink").css('color', '#000000');
  });

  $("#contactLink").on('click', function(event) {
    event.preventDefault();
    $(window).scrollTo(2340, 700);
    $("#contactLink").css('text-decoration', 'none');
    $("#contactLink").css('color', '#000000');
  });

});
