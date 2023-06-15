let dateElem = document.querySelector("#date");

setInterval(() => {
  dateElem.innerHTML = "";
  let date = new persianDate();
  dateElem.append(date.toLocale("fa").format("dddd DD MMMM YYYY hh:mm:ss"));
}, 1000);

var menu = [
  "اقتصاد",
  "سیاست",
  "فرهنگ",
  "فناوری",
  "جامعه",
  "ورزش",
  "سلامت",
  "استان‌ها",
];

const swiper = new Swiper(".swiper", {
  // autoplay: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    clickable: true,
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return (
        '<div class="' +
        className +
        '"><span class="">' +
        menu[index] +
        "</span></div>"
      );
    },
  },
});
const topInnerSwiper = new Swiper(".top-inner-swiper", {
  autoplay: true,
  direction: "vertical",
  slidesPerView: 1,
});
