import externalClick from "../base/external-click";

function toggleLanguages() {
  let block = $('.header__languages');
  let button = $('.header__translate');
  button.on('click', function() {
    $(this).toggleClass('active');
    block.toggleClass('active');
  });
  externalClick('.header__languages', '.header__translate');
};
toggleLanguages();

function toggleCountries() {
  let button = $('.countries__button');
  button.on('click', function() {
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
  });
  externalClick('.countries__button', '.countries__search');
};
toggleCountries();

function toggleProfile() {
  let block = $('.header__profile')
  let button = $('.header__user')
  button.on('click', function() {
    $(this).toggleClass('active');
    block.toggleClass('active');
  });
  externalClick('.header__profile', '.header__user');
};
toggleProfile();
