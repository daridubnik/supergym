import swiper from '../vendor/swiper';

const initSliderCoaches = () => {
  // eslint-disable-next-line
  new swiper('.coaches__swiper', {

    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

export {initSliderCoaches};
