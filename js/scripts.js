document.addEventListener('DOMContentLoaded', function() {
  const clickableImages = document.querySelectorAll('.clickable-image');
  const modalImage = document.getElementById('enlargedImage');

  clickableImages.forEach(image => {
    image.addEventListener('click', function() {
      const enlargedImageSrc = this.getAttribute('data-src');
      

      const modalId = this.getAttribute('data-modal-target');
      const modalTarget = document.getElementById(modalId);
      
      if (window.innerWidth <= 768) {
        return;
      }

      modalImage.src = enlargedImageSrc;
      modalTarget.querySelector('img').src = enlargedImageSrc;
    });
  });
});
