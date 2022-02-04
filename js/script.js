"use strict";

var currentImage = 0;


const previousButton = document.querySelector(".carouselButton.previous");
const nextButton = document.querySelector(".carouselButton.next");

previousButton.addEventListener("click", event => {
    cycleImage(-1);
})
nextButton.addEventListener("click", event => {
    cycleImage(1);
})

cycleImage(0);


function cycleImage(direction) {
    /** @type {NodeListOf<HTMLImageElement>} images */
    const images = document.querySelectorAll(".imageItem");

    currentImage += direction;

    if (currentImage > images.length - 1) {
        currentImage = images.length - 1;
    }
    if (currentImage < 0) {
        currentImage = 0;
    }

    console.log("moved to", currentImage);

    for (const image of images) {
        image.classList.add("hidden");

        if (image.dataset.index == currentImage) {
            image.classList.remove("hidden");

        }
    }
}