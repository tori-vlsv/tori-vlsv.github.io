import InputMask from 'inputmask';
import { enablePageScroll, disablePageScroll } from "scroll-lock";

function changeInfo() {
  let button = $('.settings__change');
  let close = $('.settings__close');
  let bg = $('.popup-bg');
  let popup = $('.settings__popup');
  let nextButton = $('.settings__button-next');
  let backButton = $('.settings__button-back');

  button.on('click', function() {
    $(this).next().addClass('active');
    $(this).next().children().first().addClass('active');
    bg.show();
    disablePageScroll();
  });
  nextButton.on('click', function() {
    if ($(this).siblings('input').val() || $(this).parent().siblings('input').val()) {
      $(this).parent().parent().removeClass('active');
      $(this).parent().parent().next().addClass('active');
    }
  });
  backButton.on('click', function() {
    $(this).parent().parent().removeClass('active');
    $(this).parent().parent().prev().addClass('active');
  });
  function hidePopup() {
    if (popup.get(0)) {
      popup.get(0).reset();
      popup.removeClass('active');
      bg.hide();
      enablePageScroll();
      $('.settings__popup__step').removeClass('active');
    }
  }
  $(document).mouseup( function(e) {
    if (!popup.is(e.target) && popup.has(e.target).length === 0 && popup.hasClass('active')) {
      hidePopup();
      enablePageScroll();
    }
  });
  close.on('click', function() {
    hidePopup();
  });
  $('.settings__popup.settings__popup-tel').on('submit', function(e) {
    e.preventDefault();
    hidePopup();
    $(this).get(0).reset();
  });
  $('.settings__popup.settings__popup-mail').on('submit', function(e) {
    e.preventDefault();
    $(this).get(0).reset();
  });
  $('.settings__popup.settings__popup-name').on('submit', function(e) {
    e.preventDefault();
    hidePopup();
    $(this).get(0).reset();
  });
  $('.settings__popup.settings__popup-password').on('submit', function(e) {
    e.preventDefault();
    hidePopup();
    $(this).get(0).reset();
  });

}
changeInfo();

function inputMask() {
  let input =  $('input[type="tel"]');
  Array.from(input).forEach(function(element) {
    let mask = new InputMask('+66 999 999-99-99');
    mask.mask(element);
  });
}
inputMask();

function changeName() {
  let button = $('.settings__change-name')
  let popup = $('.settings__open') 
  button.on('click', function() {
    $(this).next().show()
    $(this).hide();
  });
  popup.on('submit', function(e) {
    e.preventDefault();
    $(this).get(0).reset();
    $(this).hide();
    button.show();
    $(this).prev().show();
  });
}
changeName();

function changeCity() {
  let button = $('.settings__popup-city .settings__button-confirm')
  let items = $('.settings__name');
  let popup = $('.settings__popup');
  let bg = $('.popup-bg');
  let current = $('#city');
  const $scrollableElement = document.querySelector('.settings__popup');
  items.on('click', function() {
    items.removeClass('active');
    $(this).addClass('active');
    $(this).parent().parent().parent().children().find('input').val($(this).text());
    current.text($(this).text());
    disablePageScroll($scrollableElement);
  });
  button.on('click', function() {
    popup.removeClass('active');
    bg.hide();
    enablePageScroll();
  });

  function togglePassword() {
    let container = $('.settings__input__password');
    let eyeSlash = $('.password-show');
    let eye = $('.symbols-show');
    let input = $('.settings__input__password input');

    $('.settings__form input').on('input', function() {
      if (
        $('.settings__input__password input[name="current-password"]').val() && 
        $('.settings__input__password input[name="new-password"]').val()
      ) {
        $('.settings__button-change').removeClass('settings__button-disabled');
        $('.settings__button-change').addClass('settings__button-active');
      } else {
        $('.settings__button-change').addClass('settings__button-disabled');
        $('.settings__button-change').removeClass('settings__button-active');
      }
    });

    container.on('click', function() {
      if (($(this).children('input').prop("type") == "password")) {
        $(this).find(eyeSlash).show();
        eye.hide();
      } else {
        $(this).find(eye).show()
        eyeSlash.hide();
      }
    });

    // hide

    $(document).on('mouseup', function(e) {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        eyeSlash.hide();
        eye.hide();
      }
    });

    // toggle eyes

    eyeSlash.on('click', function(event) {
      event.stopPropagation();
      if ($(this).css('display') == 'block') {
        $(this).hide();
        $(this).next().show();
      } else {
        $(this).show();
        $(this).next().hide();
      }
    });

    eye.on('click', function(event) {
      event.stopPropagation();
      $(this).closest('input').type = 'text';
      if ($(this).css('display') == 'block') {
        $(this).hide();
        $(this).prev().show();
      } else {
        $(this).closest('input').type = 'password';
        $(this).show();
        $(this).prev().hide();
      }
    });

    // toggle symbols

    eyeSlash.on('click', function(event) {
      event.stopPropagation();
      if ($(this).parent().children(input).attr("type") == "password") {
        $(this).parent().children(input).attr("type", "text");
      } else {
        $(this).parent().children(input).attr("type", "password");
      }
    })

    eye.on('click', function(event) {
      event.stopPropagation();
      if ($(this).parent().children(input).attr("type") == "password") {
        $(this).parent().children(input).attr("type", "text");
      } else {
        $(this).parent().children(input).attr("type", "password");
      }
    })
  };
  togglePassword();
}
changeCity();

function settingsMobile() {
  let editButton = $('.settings__profile__edit');
  let editPopup = $('.profile-edit');
  let editClose = $('.profile-edit__save');
  let deleteButton = $('.popup__delete__button');
  let deletePopup = $('.popup__delete');
  let closeDeletePopup = $('.popup__delete__close');
  let profileSettingsClose = $('.profile-edit__close');
  let bg = $('.popup-bg');

  $('.settings__popup__step input').on('input', function() {
    if ($(this).val() !== '') {
      $(this).siblings('.settings__popup__buttons').children('.settings__button').removeClass('settings__button-disabled');
    } else {
      $(this).siblings('.settings__popup__buttons').children('.settings__button').addClass('settings__button-disabled');
    }
  })

  $('.settings__popup-password input').on('input', function() {
    if ($(this).val() !== '') {
      $(this).parents('.settings__popup__step').children('.settings__popup__buttons').children('.settings__button').removeClass('settings__button-disabled');
    } else {
      $(this).parents('.settings__popup__step').children('.settings__popup__buttons').children('.settings__button').addClass('settings__button-disabled');
    }
  })

  $('.settings__input input').on('input', function() {
    if ($(this).val() !== '') {
      $(this).parent().next().children().removeClass('settings__button-disabled');
    } else {
      $(this).parent().next().children().addClass('settings__button-disabled');
    }
  })


  profileSettingsClose.on('click', function() {
    editPopup.hide();
    enablePageScroll();
    enablePageScroll();
  });

  editClose.on('click', function() {
    editPopup.hide();
    enablePageScroll();
    enablePageScroll();
  });

  editButton.on('click', function() {
    editPopup.show();
    disablePageScroll();
    disablePageScroll();
  });

  deleteButton.on('click', function() {
    deletePopup.show();
    bg.show();
    bg.css('z-index', '3501');
    disablePageScroll();
  });

  closeDeletePopup.on('click', function() {
    deletePopup.hide();
    bg.hide();
    bg.css('z-index', '3000');
    enablePageScroll();
  });

  $(document).on('mouseup', function(e) {
    if (!deletePopup.is(e.target) && deletePopup.has(e.target).length === 0) {
      deletePopup.hide();
      bg.css('z-index', '3000');
    }
  });

}
settingsMobile();