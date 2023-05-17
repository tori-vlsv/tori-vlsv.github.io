import { enablePageScroll, disablePageScroll } from "scroll-lock";

function categoryPopup() {
  let button = $('.categories__link, .profile__breadcrumbs');
  let popup = $('.category__popup');
  let close = $('.category__popup__close');
  let category = $('.category__popup__block');
  let items = $('.category__popup__subblock .category__popup__name');

  let container = $('.profile__breadcrumbs__generated');
  let select = $('.category__popup__block, .category__popup__subblock .category__popup__name');
  let inputs = $('.category__popup__name input')


  let scrollableElement = document.querySelector('.category__popup');

  button.on('click', function() {
    if ($(window).width() < 1232) {
      popup.show();
      disablePageScroll(scrollableElement);
    }
  });
  close.on('click', function() {
    if ($(window).width() < 1232) {
      popup.hide();
      enablePageScroll();
    }
  });
  category.on('click', function(e) {
    e.preventDefault();
    $(this).children().children('input').prop('checked', true);
    category.not(this).children().children('input').prop('checked', false);
    category.not(this).next().slideUp();
    category.not(this).removeClass('active');
    items.removeClass('active');
    $(this).next().slideDown();
    $(this).addClass('active');
  });
  items.on('click', function() {
    items.not(this).removeClass('active');
    category.children().children('input').prop('checked', false);
    $(this).addClass('active');
    if ($(window).width() < 1232) {
      popup.hide();
      enablePageScroll();
    }
  });

  select.on('click', function() {
    container.children().remove();
    create();
    $('.profile__breadcrumbs > .profile__breadcrumb').hide();
  });
  function create() {
    Array.from(inputs).forEach(input => {
      if ($(input).prop('checked')) {
        let item = 
        `
          <span>/</span>
          <div class="profile__breadcrumb">
            ${$(input).next().text()}
          </div>
        `;
        container.append(item);
        $('.profile__breadcrumb').on('click', function() {
          inputs.prop('checked', false);
          container.children().remove();
          $('.profile__breadcrumb').show();
        });
      }
    });
  }
};
categoryPopup();