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
})

AOS.init({
    duration: 800,
    ease: 'ease-in-out-sine'
});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 900,
    speedAsDuration: true
});