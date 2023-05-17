import noUiSlider from 'nouislider';
import wNumb from 'wnumb';
import { easepick } from '@easepick/bundle';
import { RangePlugin } from '@easepick/range-plugin';

function rangeSlider() {
  let slider = document.querySelector('.filter__range__slider');
  if (slider) {
    noUiSlider.create(slider, {
      start: [1000, 5000],
      connect: true,
      behaviour: 'tap',
      range: {
          'min': 0,
          'max': 10000
      },
      format: wNumb({
        decimals: 0,
        thousand: ',',
      })
    });

    let nodes = [
      $('.lower-value'),
      $('.upper-value')
    ];

    slider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
      nodes[handle].html(values[handle] + ' <span class="filter__range__currencty">฿</span>');
      $('#lower-value').val($('.lower-value').text().replace('฿', '').replace(',', ''));
      $('#upper-value').val($('.upper-value').text().replace('฿', '').replace(',', ''));
    });
    $('#lower-value').val($('.lower-value').text().replace('฿', '').replace(',', ''));
    $('#upper-value').val($('.upper-value').text().replace('฿', '').replace(',', ''));

  }
}
rangeSlider();

function toggleFilterItems() {
  let button = $('.filter__showall');
  button.on('click', function() {
    $(this).hide();
    $(this).prev().addClass('active');
  });
}
toggleFilterItems();

function resetFilterBlocks() {
  let resetMob = $('.filter__header__reset');
  let button = $('.filter__reset');
  button.on('click', function() {
    $(this).parent().next().find('.filter__input').prop('checked', false);
    $(this).parent().next().find('input').val('');
  });
  resetMob.on('click', function() {
    $('.filter').find('.filter__input').prop('checked', false);
    $('.filter').find('input').val('');
  });
}
resetFilterBlocks();

function toggleFilterBlocks() {
  let button = $('.filter__toggle');
  button.on('click', function() {
    $(this).toggleClass('active');
    $(this).parent().next().slideToggle();
  });
}
toggleFilterBlocks();

function calendar() {
  let datepicker = document.getElementById('datepicker');
  let block = $('.easepick-wrapper');
  let button = $('.filter__calendar');
  let icon = $('.filter__calendar__icon');
  if (datepicker) {
    let picker = new easepick.create({
      element: datepicker,
      css: [
        'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
        '/src/datepicker.css',
      ],
      plugins: [RangePlugin],
      RangePlugin: {
        tooltip: false,
      },
      zIndex: 10,
      locale: {
        previousMonth: '<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.97468 1.05806C6.21876 0.813981 6.61449 0.813981 6.85857 1.05806L11.8586 6.05806C12.1026 6.30214 12.1026 6.69786 11.8586 6.94194C11.6145 7.18602 11.2188 7.18602 10.9747 6.94194L6.41663 2.38388L1.85857 6.94194C1.61449 7.18602 1.21876 7.18602 0.974684 6.94194C0.730607 6.69786 0.730607 6.30214 0.974684 6.05806L5.97468 1.05806Z" fill="#1A2030"/> </svg>',
        nextMonth: '<svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0.974684 1.05806C1.21876 0.813981 1.61449 0.813981 1.85857 1.05806L6.41663 5.61612L10.9747 1.05806C11.2188 0.813981 11.6145 0.813981 11.8586 1.05806C12.1026 1.30214 12.1026 1.69786 11.8586 1.94194L6.85857 6.94194C6.61449 7.18602 6.21876 7.18602 5.97468 6.94194L0.974684 1.94194C0.730607 1.69786 0.730607 1.30214 0.974684 1.05806Z" fill="#1A2030"/> </svg>'
      },
    });
    button.on('click', function() {
      picker.isShown() ? icon.addClass('active') : icon.removeClass('active');
    });
    $(document).on('mousedown', (event) => {
      if (!icon.is(event.target) && !button.is(event.target) && !block.has(event.target).length) {
        icon.removeClass('active');
      }
    });
  }
}
calendar();