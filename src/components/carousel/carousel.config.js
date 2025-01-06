function initializeOwlCarousel() {
    const carouselConfig = {
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        center: true,
        items: 1,
        loop: true,
        nav: false,
        margin: 50,
    };

    $('.owl-carousel').owlCarousel(carouselConfig);
}



export { initializeOwlCarousel };