function liked() {
  let heart = $('.card__favorite')
  heart.on('click', function() {
    $(this).toggleClass('active');
  });
}
liked();