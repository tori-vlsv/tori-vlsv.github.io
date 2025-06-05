// модальное окно
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

// табсы

const buttons = document.querySelectorAll('.tabs__button');
const blocks = document.querySelectorAll('.tabs__block');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        blocks.forEach(block => block.classList.remove('active'));
        
        this.classList.add('active');
        
        const targetId = this.getAttribute('data-target');
        const targetBlock = document.getElementById(targetId);
        targetBlock.classList.add('active');
    });
});

// слайдер
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});