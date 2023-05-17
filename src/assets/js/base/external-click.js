export default function externalClick(block, button) {
  $(window).on('click', e => {
    let target = e.target;
    if (!target.closest(block) && !target.closest(button)) {
      $(block).removeClass('active');
      $(button).removeClass('active');
    }
  });
}