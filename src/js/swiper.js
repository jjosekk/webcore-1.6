import Swiper from "swiper";
import { Pagination } from "swiper/modules";



const swiperBrands = new Swiper(".swiper-brands", {

  modules: [Pagination],

  pagination: {
    el: ".swiper-pagination-brands",
  },

  breakpoints: {
		320: {
      slidesPerView: 1,
      spaceBetween: 16,
			enabled: true,
    },

    528: {
      slidesPerView: 2,
			spaceBetween: 16,
			enabled: true,
    },

    768: {
      slidesPerView: 3,
			spaceBetween: 0,
      enabled: false,
    },

    1120: {
      slidesPerView: 4,
			spaceBetween: 0,
			enabled: false,
    },
  },
});


const swiperTypes = new Swiper(".swiper-types", {

  modules: [Pagination],

  pagination: {
    el: ".swiper-pagination-types",
  },

  breakpoints: {
		320: {
      slidesPerView: 1,
      spaceBetween: 16,
			enabled: true,
    },

    528: {
      slidesPerView: 2,
      spaceBetween: 16,
			enabled: true,
    },

    768: {
      slidesPerView: 3,
			spaceBetween: 0,
      enabled: false,
    },

    1120: {
      slidesPerView: 4,
			spaceBetween: 0,
			enabled: false,
    },
  },
});





const swiperPrices = new Swiper(".swiper-prices", {

  modules: [Pagination],

  pagination: {
    el: ".swiper-pagination-prices",
  },

  breakpoints: {
		320: {
      slidesPerView: 1,
      spaceBetween: 16,
			enabled: true,
    },

		528: {
      slidesPerView: 2,
      spaceBetween: 16,
			enabled: true,
    },

		768: {
      slidesPerView: 5,
			spaceBetween: 0,
      enabled: false,
    },
  },
});