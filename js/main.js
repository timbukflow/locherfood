// Main JS
$(document).ready(function () {

    // nav kontakt //
        $(".kontakt").click(function() {
          $(".kontaktdata").fadeToggle();
        });



    // nav burgericon //

    $("#navburger").mouseover(function() {
      $(this).children().css("background-color","#fff");
      $(this).css("background-color","#295CA9");
    }).mouseout(function(){
      $(this).children().css("background-color","#295CA9");
      $(this).css("background-color","#fff");
    });

      $('#navburger').click(function(){
    		$(this).stop(true).toggleClass('open');
            //$('.nav').stop(true).fadeToggle(1000);
            //$('.nav ul').stop(true).toggleClass('up');
            //$('.nav li').stop(true).toggleClass('open');
    	});

    // grid hover
    $('.grid').hover(function() {
      var brandhover = $(this).children();
      $(brandhover).children().first().toggleClass('fadeimg');
      $(brandhover).children().last().toggleClass('fade');
   });

   // impressum //
   $('.impressum').click(function() {
       var totoggle = $(this).attr("data-toggle");
       $(totoggle).slideToggle(500);

       if ($(totoggle).is(":visible")) {
           $('html,body').animate({scrollTop:$(totoggle).offset().top}, 1000);
       }
   });

});
