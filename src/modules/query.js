import AirDatepicker from 'air-datepicker';     
import 'air-datepicker/air-datepicker.css';


$('.find-form__click-area').on('click', function(){     // Добавляем календарь "AirDatePicker"

  let button = {     // добавляем кнопку "Применить"
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: (dp) => {
        let firstdate = document.querySelector('.air-datepicker-cell.-range-from')
        let lastdate = document.querySelector('.air-datepicker-cell.-range-to')
        //new Date('2021-07-26');
        dp.selectDate(firstdate);
        dp.setViewDate(lastdate);
    }
}

new AirDatepicker('.find-form__dates', {    // добавляем кнопку "Очистить"
    range: true, multipleDatesSeparator: ' - ',
    minDate: Date.now(),
    buttons: [button, 'clear']
})})


$(document).on('click', function(e) { // скрываем календарь "AirDatePicker"
	var div = $( '.find-form__dates' );
  var AirDatePicker = $('.air-datepicker');
	if ( !div.is(e.target) && div.has(e.target).length === 0 &&
  !AirDatePicker.is(e.target) && AirDatePicker.has(e.target).length === 0 ) {
         $('.air-datepicker').hide();
	}
});


$('.guests__click-area').on('click', function(){     // добавляем дропдаун + стилизация при наведении  клику
  $(".guests__dropdown").show();
  $(".guests__click-area").addClass("guests__click-area--hovered");
})

//-----------------------------------------------------------------------------------------------------------------
$(document).on('click', function(e) {    // скрываем дропдаун
  var div = $( '.guests__click-area' );
  var drpdwn = $('.guests__dropdown');
  if ( !div.is(e.target) && div.has(e.target).length === 0 &&
  !drpdwn.is(e.target) && drpdwn.has(e.target).length === 0 ) {
    $('.guests__dropdown').hide();
    $(".guests__click-area").removeClass("guests__click-area--hovered");
  }
});