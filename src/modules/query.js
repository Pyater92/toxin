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


$(document).on('click', function(e) { // событие клика по веб-документу
	var div = $( '.find-form' ); // тут указываем ID элемента
	if ( !div.is(e.target) && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
         $('.air-datepicker').hide(); // скрываем его
	}
});


$('.box-guests').on('click', function(){
  $(".dropdown-guests__content").show();
    
})

$(document).on('click', function(e) { // событие клика по веб-документу
    var div = $( '.box-guests' ); // тут указываем ID элемента
    if ( !div.is(e.target) && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
           $('.dropdown-guests__content').hide(); // скрываем его
  }
});



/**$(document).on('click', function(e) { // событие клика по веб-документу
  var div = $( '.dropdown__guests-content' ); // тут указываем ID элемента
  if ( !div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
         $('.dropdown__guests-content').hide(); // скрываем его
  }});**/