const heroLeft = new Swiper(".hero__swiper-left", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  spaceBetween: 0,
  speed: 1000,
  // effect: "fade",

  // fadeEffect: {
  //   crossFade: true,
  // },

  slideClass: "hero__slide-left",
  wrapperClass: "hero__swiper-wrapper-left",

  navigation: {
    nextEl: ".hero__button-next",
    prevEl: ".hero__button-prev",
  },
});

const heroMiddle = new Swiper(".hero__swiper-middle", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  spaceBetween: 0,
  speed: 1000,
  // rewind: true,
  // effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  slideClass: "hero__slide-middle",
  wrapperClass: "hero__swiper-wrapper-middle",

  navigation: {
    nextEl: ".hero__button-next",
    prevEl: ".hero__button-prev",
  },
});

const heroRight = new Swiper(".hero__swiper-right", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  spaceBetween: 0,
  speed: 1000,
  // rewind: true,
  // effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  slideClass: "hero__slide-right",
  wrapperClass: "hero__swiper-wrapper-right",

  navigation: {
    nextEl: ".hero__button-next",
    prevEl: ".hero__button-prev",
  },
});

const heroSwiperMobile = new Swiper(".hero__swiper-mobile", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,

  slideClass: "hero__swiper-slide",
  wrapperClass: "hero__swiper-wrpper",

  navigation: {
    nextEl: ".hero__button-next-mobile",
    prevEl: ".hero__button-prev-mobile",
  },
});

const businessSwiper = new Swiper(".business-model__swiper", {
  slidesPerView: 2,
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,

  slideClass: "business-model__slide",
  wrapperClass: "business-model__swiper-wrapper",
  slideActiveClass: "business-model__slide-active",
  slideNextClass: "business-model__slide-next",

  navigation: {
    nextEl: ".business-model__btn-next",
    prevEl: ".business-model__btn-prev",
  },

  breakpoints: {
    993: {
      spaceBetween: 30,
    },
    769: {
      spaceBetween: 300,
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

const ermakTop = new Swiper(".ermak__top-swiper", {
  slidesPerView: 1,
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,

  slideClass: "ermak__top-slide",
  wrapperClass: "ermak__top-swiper-wrapper",

  navigation: {
    nextEl: ".ermak__top-btn-next",
    prevEl: ".ermak__top-btn-prev",
  },

  breakpoints: {
    993: {
      spaceBetween: 300,
    },
    769: {
      spaceBetween: 300,
    },
    577: {
      slidesPerView: 1,
      spaceBetween: 300,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 300,
    },
  },
});

// const ermakPatent = new Swiper(".ermak__patent-swiper", {
//   slidesPerView: 5,
//   direction: "horizontal",
//   loop: true,
//   spaceBetween: 42,
//   autoplay: true,
//   speed: 1500,

//   slideClass: "ermak__patent-slide",
//   wrapperClass: "ermak__patent-swiper-wrapper",

//   navigation: {
//     nextEl: ".ermak-patent__top-btn-next",
//     prevEl: ".ermak-patent__top-btn-prev",
//   },

//   breakpoints: {
//     1341: {
//       slidesPerView: 5,
//     },

//     993: {
//       slidesPerView: 3,
//     },
//     769: {
//       slidesPerView: 2,
//       slidesPerGroup: 1,
//       autoplay: false,
//       speed: 800,
//     },
//     577: {
//       slidesPerView: 2,
//       slidesPerGroup: 1,
//     },
//     320: {
//       slidesPerView: 1,
//       slidesPerGroup: 1,
//     },
//   },
// });

const ermakBottom = new Swiper(".ermak__bottom-swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  direction: "vertical",
  loop: true,
  spaceBetween: 20,
  autoplay: true,
  centeredSlides: true,
  speed: 1500,
  loopAdditionalSlides: 2,

  slideClass: "ermak__bottom-slide",
  wrapperClass: "ermak__bottom-swiper-wrapper",
  slidePrevClass: "ermak__slide-prev",
});

const start = new Swiper(".start__swiper", {
  slidesPerView: 4,
  slidesPerGroup: 1,
  direction: "horizontal",
  loop: true,
  spaceBetween: 15,
  // centeredSlides: true,

  slideClass: "start__slide",
  wrapperClass: "start__swiper-wrapper",

  navigation: {
    nextEl: ".start__btn-next",
    prevEl: ".start__btn-prev",
  },

  breakpoints: {
    993: {
      slidesPerView: 4,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    577: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});

const plan = new Swiper(".plan__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  direction: "vertical",
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: true,
  speed: 1500,
  loopAdditionalSlides: 2,

  slideClass: "plan__slide",
  wrapperClass: "plan__swiper-wrapper",
  slideNextClass: "plan__slide-next",
});

const profit = new Swiper(".profit__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  direction: "vertical",
  loop: true,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: true,
  speed: 1500,
  loopAdditionalSlides: 2,

  slideClass: "profit__slide",
  wrapperClass: "profit__swiper-wrapper",
  slidePrevClass: "profit__slide-prev",
});

const profitList = new Swiper(".profit__swiper-list", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  direction: "horizontal",
  loop: true,
  spaceBetween: 10,

  slideClass: "profit__list-slide",
  wrapperClass: "profit__swiper-list-wrapper",

  navigation: {
    nextEl: ".start__btn-next",
    prevEl: ".start__btn-prev",
  },
});

const cooperation = new Swiper(".cooperation__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  direction: "vertical",
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: true,
  speed: 1500,
  loopAdditionalSlides: 2,

  slideClass: "cooperation__slide",
  wrapperClass: "cooperation__swiper-wrapper",
  slidePrevClass: "cooperation__slide-prev",
});

const external = new Swiper(".external__swiper", {
  slidesPerView: "auto",
  direction: "horizontal",
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  slideClass: "external__slide",
  wrapperClass: "external__swiper-wrapper",
  slidePrevClass: "external__slide-prev",
  slideActiveClass: "external__slide-active",
  slideNextClass: "external__slide-next",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
