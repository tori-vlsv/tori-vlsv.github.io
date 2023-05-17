import { enablePageScroll, disablePageScroll } from "scroll-lock";

function toggleMenu() {
  let buttonHeader = $('.chat__header__menu');
  let menuHeader = $('.chat__menu__header');
  let buttonFooter = $('.chat__footer__menu');
  let menuFooter = $('.chat__menu__footer');
  let bg = $('.bg');

  buttonHeader.on('click', function() {
    menuHeader.toggle();
  });

  $(document).on('mouseup', function(e) {
    if (!menuHeader.is(e.target) && !buttonHeader.is(e.target) && menuHeader.has(e.target).length === 0 && buttonHeader.has(e.target).length === 0) {
      menuHeader.hide();
    }
  });

  buttonFooter.on('click', function() {
    menuFooter.toggle();
    if ($(window).width() < 1232) {
      bg.toggle();
    }
  });

  bg.on('click', function() {
    bg.hide();
    menuFooter.hide();
  });

  $(document).on('mouseup', function(e) {
    if (!bg.is(e.target) && !menuFooter.is(e.target) && !buttonFooter.is(e.target) && menuFooter.has(e.target).length === 0 && buttonFooter.has(e.target).length === 0) {
      menuFooter.hide();
      bg.hide();
    }
  });

};
toggleMenu();


function toggleMenuBlocks() {

  let buttonMap = $('.add__map');
  let buttonPost = $('.add__post');

  let blockPost = $('.chat__post');
  let blockMap = $('.chat__map');

  let close = $('.chat__close');
  let closeMapMobile = $('.close__map__mobile');
  let bg = $('.popup-bg');

  close.on('click', function() {
    $(this).parent().hide();
    bg.hide();
    enablePageScroll();
  });
  
  closeMapMobile.on('click', function() {
    blockMap.hide();
    bg.hide();
    enablePageScroll();
  });

  $('.chat__post__back').on('click', function() {
    $(this).parent().hide();
    bg.hide();
    enablePageScroll();
  });

  buttonPost.on('click', function() {
    blockPost.addClass('active');
    blockPost.toggle();
    bg.toggle();
    disablePageScroll();
  });

  $(document).on('mouseup', function(e) {
    if (!blockPost.is(e.target) && blockPost.has(e.target).length === 0 && blockPost.hasClass('active')) {
      blockPost.hide();
      bg.hide();
      blockPost.removeClass('active');
    }
  });
  buttonMap.on('click', function() {
    window.dispatchEvent(new Event('resize'));
    blockMap.addClass('active');
    blockMap.toggle();
    bg.toggle();
    disablePageScroll();
  });

  $(document).on('mouseup', function(e) {
    if (!blockMap.is(e.target) && blockMap.has(e.target).length === 0 && blockMap.hasClass('active')) {
      blockMap.hide();
      bg.hide();
      blockMap.removeClass('active');
    }
  });
  
};

toggleMenuBlocks();


