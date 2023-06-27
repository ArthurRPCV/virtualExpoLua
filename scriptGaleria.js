document.addEventListener("DOMContentLoaded", function() {
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalBody = document.querySelector(".modal-body");
    const closeButton = document.querySelector(".close-button");
    const galleryImages = document.querySelectorAll(".gallery-image");
  
    galleryImages.forEach(function(image) {
      image.addEventListener("click", function() {
        modalBody.innerHTML = "";
        const cloneImage = image.cloneNode(true);
        modalBody.appendChild(cloneImage);
        modalOverlay.classList.add("modal-open");
      });
    });
  
    closeButton.addEventListener("click", function() {
      modalOverlay.classList.remove("modal-open");
    });
  });
  