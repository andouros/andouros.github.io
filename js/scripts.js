document.addEventListener('DOMContentLoaded', function() {
  const clickableImages = document.querySelectorAll('.clickable-image');

  clickableImages.forEach(image => {
    image.addEventListener('click', function(event) {
      const enlargedImageSrc = this.getAttribute('data-src');
      
      const modalId = this.getAttribute('data-modal-target');
      const modalTarget = document.getElementById(modalId);
      
      if (window.innerWidth <= 768) {
        event.preventDefault(); // Prevent default click action
        event.stopPropagation(); // Stop event propagation
        return; // Exit the function without opening modal
      }

      modalTarget.querySelector('img').src = enlargedImageSrc;
    });
  });
});
