document.addEventListener('DOMContentLoaded', function() {
  if ($('html').hasClass('no-touch')) {
    const clickableImages = document.querySelectorAll('.clickable-image');

    clickableImages.forEach(image => {
      image.addEventListener('click', function() {
        const enlargedImageSrc = this.getAttribute('data-src');
        const enlargedImageElement = document.getElementById('enlargedImage');

        enlargedImageElement.src = enlargedImageSrc;
    });
  });
  }
});
