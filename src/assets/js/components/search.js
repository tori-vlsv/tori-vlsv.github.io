import { enablePageScroll, disablePageScroll, clearQueueScrollLocks } from "scroll-lock";

function search() {
  let bg = $('.bg');
  let button = $('.search__menu input');
  let block = $('.search__categories');
  let buttons = $('.search__category');

  let scrollableGrid = document.querySelector('.search__grid');
  let scrollableList = document.querySelector('.search__list');
  let scrollableResults = document.querySelector('.search__results');

  let search = $('.search__form input');
  let results = $('.search__results');
  let result = $('.search__results a');
  let cancel = $('.search__cancel');

  let more = $('.search__more');

  button.on('click', () => {
    if (button.prop('checked')) {
      disablePageScroll(scrollableGrid, scrollableList);
      bg.show();
      block.addClass('active');
      button.closest('.search__wrapper').addClass('opened');
    } else {
      enablePageScroll();
      bg.hide();
      block.removeClass('active');
      button.closest('.search__wrapper').removeClass('opened');
    }
  });
  $(document).on('mousedown', (event) => {
    if (button.prop('checked') && !buttons.is(event.target) && !button.is(event.target) && !block.has(event.target).length) {
      button.prop('checked', false);
      button.closest('.search__wrapper').removeClass('opened');
      block.removeClass('active');
      bg.hide();
      enablePageScroll();
    }
  });
  block.find('a').on('click', () => {
    bg.hide();
    $('.search__form').removeClass('active');
    block.removeClass('active');
    button.prop('checked', false);
    button.closest('.search__wrapper').removeClass('opened');
    enablePageScroll();
  });

  search.on('click focus', () => {
    $('.search__form').addClass('active');
    bg.show();
    results.addClass('active');
    disablePageScroll(scrollableResults);
  });
  $(document).on('mousedown', (event) => {
    if (results.hasClass('active') && !search.is(event.target) && !results.has(event.target).length) {
      bg.hide();
      $('.search__form').removeClass('active');
      results.removeClass('active');
      clearQueueScrollLocks();
      enablePageScroll();
    }
  });

  cancel.on('click', () => {
    bg.hide();
    $('.search__form').removeClass('active');
    results.removeClass('active');
    clearQueueScrollLocks();
    enablePageScroll();
  });

  result.on('click', () => {
    $('.search__form').removeClass('active');
    bg.hide();
    results.removeClass('active');
    clearQueueScrollLocks();
    enablePageScroll();
  });

  more.on('click', function() {
    $(this).hide();
    $(this).prevAll().removeClass('search__childcat-hidden');
  });

}
search();

function toggleMenuCategories() {
  let button = $('.search__category');
  let container = $('.search__innercat');
  let bg = $('.bg');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('mouseover', function () {
      if ($('.search__menu input').prop('checked')) {
        bg.show();
      }
      let id = button[i].getAttribute('data-id');
      let block = $('.search__innercat[data-id="' + id + '"]');
      container.hide();
      $(block).attr('data-id', $(this).attr('data-id')).show();
      button.removeClass('active');
      $(this).addClass('active');
    });
  }
}
toggleMenuCategories();

function mobileFilter() {
  let button = $('.search__settings');
  let close = $('.filter__back');
  let filter = $('.filter');
  let scrollableFilter = document.querySelector('.filter');
  if ($(window).width() < 1232) {
    button.on('click', function() {
      filter.addClass('active');
      disablePageScroll(scrollableFilter);
    });
    close.on('click', function() {
      filter.removeClass('active');
      enablePageScroll();
    });
  }
}
mobileFilter();