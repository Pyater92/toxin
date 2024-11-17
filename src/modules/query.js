import AirDatepicker from 'air-datepicker';


$('.input-date__click-area').one('click', function(){

  let button = {
    content: 'Применить',
    className: 'custom-button-classname',
    onClick: (dp) => {
        let date = new Date('2021-07-26');
        dp.selectDate(date);
        dp.setViewDate(date);
    }
}

new AirDatepicker('.find__form', {
    range: true, multipleDatesSeparator: ' - ',
    buttons: ['clear', button] // Custom button, and pre-installed 'clear' button
})})