import { enablePageScroll, disablePageScroll } from "scroll-lock";

function showErrorPopup() {
  let button = $('.edit__messages__button');
  let popup = $('.delete-popup');
  let bg = $('.popup-bg');
  let close = $('.delete-popup__button-close')
  button.on('click', function() {
    popup.show();
    bg.show();
    disablePageScroll();
  });
  close.on('click', function() {
    popup.hide();
    bg.hide();
    enablePageScroll();
  });
  bg.on('click', function() {
    popup.hide();
    bg.hide();
    enablePageScroll();
  });
}
showErrorPopup();