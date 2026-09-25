//Acceuil
var typed = new Typed(".auto-typed", {
  strings: [
    "Rhys Trouvé",
    "Développeur Web & IA",
    "Étudiant en Intelligence Artificielle",
    "Développeur Full Stack",
    "Passionné par Python et la Data",
    "Concepteur de solutions numériques",
  ],
  typeSpeed: 70,
  backSpeed: 30,
  looped: true,
});

//projets
document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".slider-container");
  const sliderImages = document.querySelectorAll(".slider-image");
  const sliderControls = ["previous", "next"];
  const sliderControlsContainer = document.querySelector(".slider-controls");

  class Carrousel {
    constructor(container, images, controls) {
      this.carrouselContainer = container;
      this.carrouselControls = controls;
      this.carrouselArray = Array.from(images);
    }

    updateSlider() {
      this.carrouselArray.forEach((el, i) => {
        el.className = `slider-image image-${i + 1}`;
      });
    }

    setCurrentState(direction) {
      if (direction.className.includes("slider-controls-previous")) {
        this.carrouselArray.unshift(this.carrouselArray.pop());
      } else {
        this.carrouselArray.push(this.carrouselArray.shift());
      }
      this.updateSlider();
    }

    setControls() {
      this.carrouselControls.forEach((control) => {
        const button = document.createElement("button");
        button.className = `slider-controls-${control}`;
        sliderControlsContainer.appendChild(button);
      });
    }

    useControls() {
      const triggers = Array.from(sliderControlsContainer.childNodes);
      triggers.forEach((control) => {
        control.addEventListener("click", (e) => {
          e.preventDefault();
          this.setCurrentState(control);
        });
      });
    }

    addImageClickHandlers() {
      this.carrouselArray.forEach((image) => {
        image.addEventListener("click", () => {
          const url = image.getAttribute("data-url");
          if (url) {
            window.open(url, "_blank");
          }
        });
      });
    }
  }

  const exempleCarrousel = new Carrousel(
    sliderContainer,
    sliderImages,
    sliderControls
  );

  exempleCarrousel.setControls();
  exempleCarrousel.useControls();
  exempleCarrousel.addImageClickHandlers();
});