function profileBreadcrumbs() {
  let button = $('.profile__categories__col label');
  let inputs = $('.profile__categories__col input')
  let container = $('.profile__breadcrumbs__generated');
  let select = $('.profile__categories__select');
  let containers = $('.profile__categories__containers');
  button.on('click', function() {
    container.children().remove();
    create();
    $('.profile__breadcrumbs > .profile__breadcrumb').hide();
  });
  function create() {
    Array.from(inputs).forEach(input => {
      if ($(input).prop('checked')) {
        let item = 
        `
          <span>/</span>
          <div class="profile__breadcrumb">
            ${$(input).next().children('span').text()}
          </div>
        `;
        container.append(item);
        $('.profile__breadcrumb').on('click', function() {
          inputs.prop('checked', false);
          container.children().remove();
          select.show();
          containers.hide();
          $('.profile__breadcrumb').show();
        });
      }
    });
  }
}
profileBreadcrumbs();