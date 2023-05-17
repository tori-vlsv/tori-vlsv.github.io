import { enablePageScroll, disablePageScroll } from "scroll-lock";

function editPosts() {
  let button = $('.profile__sorting .sorting__filter');
  let items = $('.profile__cards .card__inner');
  let inputs = $('.card__checker');
  let controls = $('.edit__cards');
  let counter = $('#counter-posts');
  let sortItem = $('.sorting__choose__item');
  let checkboxesChecked = [];
  button.on('click', function() {
    items.parent().toggleClass('selectable');
    controls.toggleClass('active');
  });
  $(window).on('click', e => {
    let target = e.target;
    if (!target.closest('.profile__cards .card') && !target.closest('.sorting__filter') && !target.closest('.sorting__choose') ) {
      items.parent().removeClass('selectable');
      button.removeClass('active');
      controls.removeClass('active');
    }
  });
  function updateCount() {
    checkboxesChecked = [];
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        checkboxesChecked.push(inputs[i]);
        counter.text(checkboxesChecked.length);
        controls.addClass('active');
        items.parent().addClass('selectable');
      } else {
        counter.text(checkboxesChecked.length);
      }
    }
    if (checkboxesChecked.length == 0) {
      controls.removeClass('active');
      items.parent().removeClass('selectable');
    }
  }
  inputs.on('input', function() {
    controls.addClass('active');
    updateCount();
  });
  sortItem.on('click', function() {
    button.removeClass('active');
    $(this).parent().removeClass('active');
    if ($(this).attr('data-value') == 'nothing') {
      inputs.prop('checked', false);
      counter.text(0);
      controls.removeClass('active');
      items.parent().removeClass('selectable');
    }
    if ($(this).attr('data-value') == 'select_all') {
      items.parent().removeClass('selectable');
      inputs.prop('checked', true);
    }
    if ($(this).data('value') == 'active') {
      for (let i = 0; i < inputs.length; i++) {
        if ($(inputs[i]).data('status') == 'active') {
          $(inputs[i]).prop('checked', true);
        } else {
          $(inputs[i]).prop('checked', false);
        }
      }
    }
    if ($(this).data('value') == 'disabled') {
      for (let i = 0; i < inputs.length; i++) {
        if ($(inputs[i]).data('status') == 'disabled') {
          $(inputs[i]).prop('checked', true);
        } else {
          $(inputs[i]).prop('checked', false);
        }
      }
    }
    updateCount();
  });
}
editPosts();

function editPlaceAndAd() {
  let button = $('.profile__place-an-ad');
  let close = $('.post__popup__close');
  let popup = $('.post__popup');
  let submit = $('.post__popup__button');

  let scrollableElement = document.querySelector('.post__popup');

  button.on('click', function() {
    popup.show();
    disablePageScroll(scrollableElement);
  });
  close.on('click', function() {
    popup.hide();
    enablePageScroll();
  });
  submit.on('click', function() {
    popup.hide();
    enablePageScroll();
  });
}
editPlaceAndAd();