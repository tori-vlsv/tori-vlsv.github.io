function dragPhotos() {
  let draggedItem = null;

  $('.profile__upload').on('dragstart', function(event) {
    draggedItem = $(this);
    draggedItem.addClass('active');
  });

  $('.profile__upload').on('dragend', function() {
    draggedItem.removeClass('active');
    draggedItem = null;
  });

  $('.profile__upload').on('drop', function() {
    if (draggedItem) {
      const fromIndex = $('.profile__upload').index(draggedItem);
      const toIndex = $('.profile__upload').index($(this));
      if (fromIndex !== toIndex) {
        const temp = $('.profile__upload').eq(toIndex).html();
        $('.profile__upload').eq(toIndex).html(draggedItem.html());
        draggedItem.html(temp);
      }
    }
    uploadPhoto();
  });

  $('.profile__upload').on('dragover', function(event) {
    event.preventDefault();
  });
}
dragPhotos();


function uploadPhoto() {
  $('.profile__block .profile__upload input').on('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', function() {
      const imageData = reader.result;
      $(this).parent().children('img').remove();
      const image = $('<img />').attr('src', imageData).attr('alt', 'uploaded');
      $(this).parent().append(image);
      $(this).parent().children('.profile__upload-empty').remove();
      $(this).parent().children('.profile__upload-hover').remove();
    }.bind(this));

    reader.readAsDataURL(file);
  });
}
uploadPhoto();