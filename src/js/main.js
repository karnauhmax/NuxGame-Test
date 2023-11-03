import "./_functions";
import "./_components";
import Splide from "@splidejs/splide";
import Accordion from "./functions/accordion";

if (document.querySelector(".partners__slider")) {
  new Splide(".partners__slider", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    focus: "center",
    arrows: false,
    pagination: false,
    autoplay: true,
    padding: {
      left: "390px",
    },
    breakpoints: {
      1400: {
        perPage: 2,
        padding: {
          left: "190px",
        },
      },

      1024: {
        padding: {
          right: "90px",
          left: "0px",
        },
      },

      768: {
        perPage: 1,
      },

      576: {
        padding: {
          right: "0px",
          left: "0px",
        },
      },
    },
    gap: "22px",
  }).mount();
}

if (document.querySelector(".faq__accordion")) {
  new Accordion(".faq__accordion").renderaccordionWithHead();
}
