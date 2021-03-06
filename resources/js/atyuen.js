// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 25) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function(){
	$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 50
    }, 700, 'swing');
	});
});

// var date = new Date();
// var year = date.getFullYear();
// var month = date.getMonth();
// var day = date.getDate();
//
// if (month < 4) {
//   document.getElementById("age").innerHTML = (year - 1) - 1996;
// } else {
//   document.getElementById("age").innerHTML = year - 1996;
// }
