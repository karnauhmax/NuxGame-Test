class Accordion {
  constructor(selector) {
    this.selector = document.querySelector(selector);
    this.items = this.selector.querySelectorAll("[data-accordion-item]");
  }

  renderaccordionDefault() {
    this.selector.addEventListener("click", (e) => {
      const target = e.target;
      const item = target.closest("[data-accordion-item]");

      if (item) {
        const questionContent = item.querySelector("[data-accordion-body]");
        const contentHeight = questionContent.scrollHeight;

        console.log(this.items);

        this.items.forEach((currentItem) => {
          if (
            currentItem !== item &&
            currentItem.classList.contains("active")
          ) {
            currentItem.classList.remove("active");
          }
        });

        if (item.classList.contains("active")) {
          item.classList.remove("active");
        } else {
          item.classList.add("active");
        }
      }
    });
  }

  renderaccordionWithHead() {
    this.selector.addEventListener("click", (e) => {
      const target = e.target;
      const item = target.closest("[data-accordion-item]");
      const head = target.closest("[data-accordion-head]");

      if (head) {
        console.log(1);
        const questionContent = item.querySelector("[data-accordion-body]");

        this.items.forEach((currentItem) => {
          if (
            currentItem !== item &&
            currentItem.classList.contains("active")
          ) {
            currentItem.classList.remove("active");
          }
        });

        if (item.classList.contains("active")) {
          item.classList.remove("active");
        } else {
          item.classList.add("active");
        }
      }
    });
  }
}

export default Accordion;
