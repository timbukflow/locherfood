$(document).ready(function () {

    // kontakt //
    $(".kontakt").click(function() {
      $('#navburger').removeClass('open');
      $('html, body').animate({scrollTop: $("#footer").offset().top - 200}, 1500); return false;
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
     var totoggle = $(this).attr("data-toggle");
     $(totoggle).slideToggle(300);

     if ($(totoggle).is(":visible")) {
       $('html,body').animate({scrollTop:$(totoggle).offset().top}, 300);
     }
   });

   // totop //
   $(".totop").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
   });

   AOS.init({
     offset: 250, // offset (in px) from the original trigger point
     delay: 0, // values from 0 to 3000, with step 50ms
     duration: 1500, // values from 0 to 3000, with step 50ms
  })
});
