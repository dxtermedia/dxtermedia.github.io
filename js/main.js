jQuery(function($) {

    var $nav = $('#table-of-contents');
    var $win = $(window);
    var winH = $win.height();   // Get the window height.

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH ) {
            $nav.addClass("show");
        } else {
            $nav.removeClass("show");
        }
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });

});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});