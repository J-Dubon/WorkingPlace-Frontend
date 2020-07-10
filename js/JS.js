
AOS.init({
    duration: 800,
    ease: 'ease-in-out-sine'
});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 900,
    speedAsDuration: true
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 4000,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
    }
});


/*$(document).ready(function() { 
    $('.itemNav').click(function(){
        var $target = $('.navbar-collapse');
        if($target.hasClass('in')){
            $target.removeClass('in').height(0).css('overflow','hidden');                           
        }
    });			
});
*/