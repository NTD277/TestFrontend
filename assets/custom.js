(function() {
  const swiper = new Swiper('.banner__swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const swiperNewArrivals = new Swiper('.swiper-new-arrivals', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3
      },
      1440: {
        slidesPerView: 4,
        navigation: false,
      }
    }
  });
})();