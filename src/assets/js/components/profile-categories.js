function profileCategories() {
  let button = $('.profile__category');
  let container = $('.profile__categories__container');
  let select = $('.profile__categories__select');
  let containers = $('.profile__categories__containers');
  for (let i = 0; i < Array.from(button).length; i++) {
    $(button[i]).on('click', function () {
      if ($(this).hasClass('profile__category-main')) {
        select.hide();
        containers.show();
        let id = button[i].getAttribute('data-id');
        let block = $('.profile__categories__container[data-id="' + id + '"]');
        container.hide();
        $(block).attr('data-id', $(this).attr('data-id')).css('display', 'grid');
      }
      button.removeClass('active');
      $(this).addClass('active');
    });
  }
}
profileCategories();