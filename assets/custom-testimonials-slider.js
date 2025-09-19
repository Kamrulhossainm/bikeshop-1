// initialize slideshow

const carousels = document.querySelectorAll(".testimonial-slider");
carousels.forEach((elem)=> {
    new Flickity(elem, {
    pageDots: false,
    autoPlay: false,
    wrapAround: true,
    cellAlign: 'left',
    pauseAutoPlayOnHover: false
})
})



// config:
// assume there is just one single slider on the page
// navigation dots should be disabled
// no autoplay
// infinite loop
// the slides or cells should be aligned to the left side on initialization.
// pauseAutoPlayOnHover: false
