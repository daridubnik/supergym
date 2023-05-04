import swiper from '../vendor/swiper';

const initSliderCoaches = () => {
  // eslint-disable-next-line
  new swiper('.coaches__swiper', {

    navigation: {
      nextEl: '.coaches__button--next',
      prevEl: '.coaches__button--prev',
    },

    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
  });
};

export {initSliderCoaches};
