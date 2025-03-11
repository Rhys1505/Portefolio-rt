//Acceuil
var typed = new Typed(".auto-typed", {
  strings: [
    "Développeur Full Stack",
    "Artiste du CSS",
    "Développeur Web",
    "Maître du Web Responsive",
    "Architecte du Code",
    "Maestro du JavaScript",
    "Concepteur de sites Web",
    "Magicien du HTML",
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
            window.open(url, "_blank"); // Utilisez window.open avec '_blank' pour ouvrir dans un nouvel onglet
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
  exempleCarrousel.addImageClickHandlers(); // Ajout du gestionnaire de clics sur les images
});
