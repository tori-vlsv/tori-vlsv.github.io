function textareaCounter() {
  let textarea = $('.profile__textarea textarea');
  let value = $('#textarea-value');
  if (textarea.val()) {
    textarea.on('input', function() {
      value.text($(this).val().length);
    });
    value.text(textarea.val().length);
  }
}
textareaCounter();