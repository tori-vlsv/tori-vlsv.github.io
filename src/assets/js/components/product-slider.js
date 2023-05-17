import Swiper, { Thumbs } from 'swiper';

var swiper = new Swiper(".product__slider-mini", {
  spaceBetween: 8,
  slidesPerView: 5,
  freeMode: true,
});
var swiper2 = new Swiper(".product__slider", {
  modules: [Thumbs], 
  // spaceBetween: 10,
  grabCursor: true,
  speed: 800,
  allowTouchMove: true,
  thumbs: {
    swiper: swiper,
  },
});