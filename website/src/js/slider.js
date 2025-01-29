
// Initialize the Swiper to show 3 slides at once
const swiper1 = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 3,  // Show 3 slides at once
    spaceBetween: 10,  // Space between slides
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
});
