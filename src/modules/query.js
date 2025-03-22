import AirDatepicker from 'air-datepicker';     
import 'air-datepicker/air-datepicker.css';


$('.find-form__click-area').on('click', function(){     // Добавляем календарь "AirDatePicker"

  let button = {     // добавляем кнопку "Применить"
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: (dp) => {
        let date = new Date('2021-07-26');
        dp.selectDate(date);
        dp.setViewDate(date);
    }
}

new AirDatepicker('.find-form__dates', {    // добавляем кнопку "Очистить"
    range: true, multipleDatesSeparator: ' - ',
    buttons: ['clear', button]
})})


$(document).on('click', function(e) { // скрываем календарь "AirDatePicker"
	var div = $( '.find-form__dates' );
	if ( !div.is(e.target) && div.has(e.target).length === 0 ) {
         $('.air-datepicker').hide();
	}
});




$('.box-guests__click-area').on('click', function(){     // добавляем дропдаун + стилизация при наведении  клику
  $(".dropdown-guests").show();
  $(".box-guests__click-area").addClass("box-guests__click-area--hovered");
})


$(document).on('click', function(e) {    // скрываем дропдаун
    var div = $( '.box-guests__click-area' );
    if ( !div.is(e.target) && div.has(e.target).length === 0 ) {
      $('.dropdown-guests').hide();
      $(".box-guests__click-area").removeClass("box-guests__click-area--hovered");
    }
});

//-----------------------------------------------------------------------------------------------------------------

$(document).on('click', function(e) {

if ($('.checkbox__mark').prop('show')) {
  $("#registerButton").prop('disabled', false);
} else {
  $("#registerButton").prop('disabled', true);
}})