import externalClick from "../base/external-click";

function sortingView() {
  let button = $('.sorting__view');
  let grid = $('.grid-categories__grid');
  button.on('click', function() {
    button.removeClass('active');
    $(this).addClass('active');
    if ($(this).hasClass('sorting__view-list')) {
      grid.addClass('active');
    } else {
      grid.removeClass('active');
    }
  });
}
sortingView();

function sorting() {
  let button = $('.sorting__filter');
  let items = $('.sorting__choose__item');
  let bg = $('.bg');
  button.on('click', function() {
    if ($(window).width() < 1232) {
      bg.toggle();
      bg.css('z-index', 2000);
    }
    $(this).next().toggleClass('active');
    $(this).toggleClass('active');
  });
  bg.on('click', function() {
    bg.hide();
    bg.css('z-index', 2000);
    button.remove('active');
  });
  items.on('click', function() {
    items.removeClass('active');
    $(this).addClass('active');
    $(this).parent().parent().children().find('span').text($(this).text());
    $(this).parent().parent().children().find('input').val($(this).attr('data-value'));
    bg.css('z-index', 2000);
  });
  button.children().closest('input').on('input', function() {
    button.remove('active');
  });
  externalClick('.sorting__choose', '.sorting__filter');
}
sorting();