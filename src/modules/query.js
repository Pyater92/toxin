import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

$('.input-date-click-area').on('click', function(){

  let button = {
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: (dp) => {
        let date = new Date('2021-07-26');
        dp.selectDate(date);
        dp.setViewDate(date);
    }
}

new AirDatepicker('.find-form', {
    range: true, multipleDatesSeparator: ' - ',
    buttons: ['clear', button]
})})


/**$(document).on('click', function(e) {
    if (!$(e.target).closest(".input-date__click-area").length) {
      $('.air-datepicker').hide();
    }
    
  });**/


$(document).on('click', function(e) { // событие клика по веб-документу
	var div = $( '.find-form' ); // тут указываем ID элемента
	if ( !div.is(e.target) // если клик был не по нашему блоку
	    && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
         $('.air-datepicker').hide(); // скрываем его
	}
});