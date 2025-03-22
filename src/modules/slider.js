$( function() {
  $( ".range__slider-range" ).slider({
    range: true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      $( ".range__display" ).val(ui.values[ 0 ] + "₽ - " + ui.values[ 1 ] + "₽" );
    }
  });
  $( ".range__display" ).val( $( ".range__display" ).slider( "values", 0 ) +
    " - $" + $( ".range__slider-range" ).slider( "values", 1 ) );
} );