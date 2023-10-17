import ScrollReveal from "scrollreveal";
// import Swiper from "swiper";

// ScrollReveal().reveal(".link", {
//   delay: 500,
//   duration: 500,
// });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",

  // If we need pagination

  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
