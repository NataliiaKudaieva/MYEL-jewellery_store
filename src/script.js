import ScrollReveal from "scrollreveal";
// import Swiper from "swiper";

// ScrollReveal().reveal(".link", {
//   delay: 500,
//   duration: 500,
// });

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 3,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
