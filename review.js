document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.box-container .box img');
    
    images.forEach(image => {
      image.addEventListener('click', function() {
        const description = this.getAttribute('alt');
        // عرض الوصف
        alert(description);
      });
    });
  });
  