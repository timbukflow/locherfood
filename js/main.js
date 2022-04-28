// Main JS
$(document).ready(function () {

    // navicon //
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);

      if (scrollTop >= 100) {
        $('#nav').addClass('scrolled-nav');
        $('.logo').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('#nav').removeClass('scrolled-nav');
        $('.logo').removeClass('scrolled-nav');
      }
    });

    // grid hover
    $('.grid').hover(function() {
      var brandhover = $(this).children();
      $(brandhover).children().first().toggleClass('fadeimg');
      $(brandhover).children().last().toggleClass('fade');
   });

});

// Textanimation JS
document.addEventListener('DOMContentLoaded',function(event){
  var dataText = [ "Wir lieben Food!", "Wir sind Händler aus Passion"];
  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
     document.querySelector(".headertext").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback, 700);
    }
  }
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function(){
       StartTextAnimation(i + 1);
     });
    }
  }
  StartTextAnimation(0);
});
