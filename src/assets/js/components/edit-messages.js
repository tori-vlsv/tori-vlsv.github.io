function editMessages() {
  let button = $('.profile__sorting .sorting__filter');
  let items = $('.profile__messages .message__inner');
  let inputs = $('.message__checker');
  let controls = $('.edit__messages');
  let counter = $('#counter-messages');
  let sortItem = $('.sorting__choose__item');
  let checkboxesChecked = [];
  let bg = $('.bg');
  button.on('click', function() {
    items.parent().toggleClass('selectable');
    controls.toggleClass('active');
  });
  $(window).on('click', e => {
    let target = e.target;
    if (!target.closest('.profile__messages .message') && !target.closest('.sorting__filter') && !target.closest('.sorting__choose') ) {
      items.parent().removeClass('selectable');
      button.removeClass('active');
      controls.removeClass('active');
      inputs.prop('checked', false);
    }
  });
  function updateCount() {
    checkboxesChecked = [];
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        checkboxesChecked.push(inputs[i]);
        counter.text(checkboxesChecked.length);
        controls.addClass('active');
        if ($(window).width() < 1232) {
          bg.toggle();
        }
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
    if ($(this).data('value') == 'unread') {
      for (let i = 0; i < inputs.length; i++) {
        if ($(inputs[i]).data('status') == 'unread') {
          $(inputs[i]).prop('checked', true);
        } else {
          $(inputs[i]).prop('checked', false);
        }
      }
    }
    updateCount();
  });
}
editMessages();