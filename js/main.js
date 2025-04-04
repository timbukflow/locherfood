$(document).ready(function () {

  // kontakt //
  $(".kontakt").click(function() {
    $('#navburger').removeClass('open');
    $('html, body').animate({scrollTop: $("#footer").offset().top - 250}, 1500); return false;
  });

  // nav burgericon //
  $('#navburger').click(function(){
    $(this).stop(true).toggleClass('open');
    $('.navcontainer').stop(true).slideToggle(300);
  });

  // grid hover //
  $('.grid').hover(function() {
    var brandhover = $(this).children();
    $(brandhover).children().first().toggleClass('fadeimg');
    $(brandhover).children().last().toggleClass('fade');
  });

  // impressum //
  $('.impressum').click(function() {
    var $target = $($(this).data("target"));
    $target.slideToggle(300, function() {
        if ($target.is(":visible")) {
            $('html,body').animate({scrollTop: $target.offset().top}, 600);
        }
    });
  });

  // age lock //
      document.getElementById('confirm-age').addEventListener('click', function () {
      document.getElementById('age-gate-overlay').style.display = 'none';
      document.body.classList.remove('age-lock');
    });

  // totop //
  $(".totop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  AOS.init({
    offset: 100,
    delay: 0,
    duration: 2000,
  })
});
