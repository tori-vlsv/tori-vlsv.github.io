if (window.matchMedia("(max-width: 1023px)").matches) {
    const popup = document.querySelector('.hero-popup__wrapper');
    let startY = 0;
  
    popup.addEventListener('touchstart', (e) => {
      startY = e.touches[0].clientY;
    }, { passive: true });
  
    popup.addEventListener('touchmove', (e) => {
      const currentY = e.touches[0].clientY;
      const diff = currentY - startY;
      
      if (diff > 50) {
        window.location.href = '#';
      }
    }, { passive: true });
}