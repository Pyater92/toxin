$( function() {
  $(".range__slider-range" ).slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      $( ".range__display" ).val(ui.values[ 0 ] + "₽ - " + ui.values[ 1 ] + "₽" );
    }
  });
  $(".range__display" ).val( $( ".range__display" ).slider( "values", 0 ) +
    " - $" + $( ".range__slider-range" ).slider( "values", 1 ) );
  });




// Получаем элементы слайдера
const slider = document.querySelector('.slider-container__slider');
const prevButton = document.querySelector('.prev-button i');
const nextButton = document.querySelector('.next-button i');



const point = document.querySelector('.slider-container__nav');
const points = Array.from(point.querySelectorAll('div'));




const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
  points.forEach((point, index) => {
    if (index === slideIndex) {
      point.style.background = '#fff';
    } else {
      point.style.background = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();

