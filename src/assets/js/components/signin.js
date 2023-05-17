import { enablePageScroll, disablePageScroll } from "scroll-lock";

function changePassword() {
  let button = $('.header__registration');
  let close = $('.settings__close');
  let bg = $('.popup-bg');
  let popup = $('.signin');
  let newPassword = $('.signin__question');
  let nextButton = $('.settings__next');
  let prevButton = $('.settings__prev');
  let forgotForm = $('.signin__forgot');
  let login = $('.signin__login')
  let signin = $('.signin__popup__signin')
  let rigisterButton = $('.signin__register')
  let signinButton = $('.signin__signin')

  $('.signin__login__input input').on('input', function() {
    if ($('.signin__login__input input[name="first_name"]').val() &&
    $('.signin__login__input input[name="last_name"]').val() &&
    $('.signin__login__input input[name="email"]').val() &&
    $('.signin__login__input input[name="new-password"]').val()
    ) {
      $('.signin__create').removeClass('settings__button-disabled');
      $('.signin__create').addClass('settings__button-active');
    } else {
      $('.signin__create').addClass('settings__button-disabled');
      $('.signin__create').removeClass('settings__button-active');
    }
  });

  function hidePopup() {
    popup.removeClass('active');
    $('.signin__step').removeClass('active');
    bg.hide();
    enablePageScroll();
    $('.signin__forgot').get(0).reset();
    $('.signin__login').get(0).reset();
    $('.signin__popup__first').get(0).reset();
    $('.signin__create').addClass('settings__button-disabled');
  };

  $('.signin__forgot').on('submit', function(e) {
    e.preventDefault();
    hidePopup();
    $(this).get(0).reset();
  });

  $('.signin__login').on('submit', function(e) {
    e.preventDefault();
    hidePopup();
    $(this).get(0).reset();
  });

  $('.signin__popup__signin').on('submit', function(e) {
    e.preventDefault();
    hidePopup();
    $(this).get(0).reset();
  });

  $('.signin__popup__first').on('submit', function(e) {
    e.preventDefault();
    hidePopup();
    $(this).get(0).reset();
    popup.children().first().removeClass('active');
  });

  button.on('click', function() {
    popup.addClass('active');
    popup.children().first().addClass('active');
    bg.show();
    disablePageScroll();
  });
  rigisterButton.on('click', function() {
    login.addClass('active');
    $(this).parent().parent().removeClass('active');
  });
  signinButton.on('click', function() {
    signin.addClass('active');
    $(this).parent().parent().removeClass('active');
  });
  newPassword.on('click', function() {
    forgotForm.children().first().addClass('active');
    $(this).parent().parent().removeClass('active');
  });
  nextButton.on('click', function() {
    if ($(this).parent().prev().children('input').val()) {
      $(this).parents('.signin__step').removeClass('active');
      $(this).parents('.signin__step').next().addClass('active');
    }
  });
  prevButton.on('click', function() {
    $(this).parents('.signin__step').removeClass('active');
    $(this).parents('.signin__step').prev().addClass('active');
  });
  $(document).on('mouseup', function(e) {
    if (!popup.is(e.target) && popup.has(e.target).length === 0 && popup.hasClass('active')) {
      hidePopup();
    }
  });
  close.on('click', function() {
    hidePopup();
  });
}
changePassword();