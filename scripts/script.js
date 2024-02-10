// Слайдер
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
        el: ".participants__pagination",
        type: "fraction",
      },

  // Navigation arrows
  navigation: {
    nextEl: '#btn-next',
    prevEl: '#btn-prew',
  },

  // And if we need scrollbar
   
});


