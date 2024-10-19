



$(".dropdown__guests").on("click", function() {
	$(".dropdown__guests-content").show();
  });
  
  
  
  $(function($){
	  $(document).mouseup( function(e){ // событие клика по веб-документу
		  var div = $( ".dropdown__guests-content" ); // тут указываем ID элемента
		  if ( !div.is(e.target) // если клик был не по нашему блоку
			  && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			  div.hide(); // скрываем его
		  }
	  });
  });
  
