$(window).load(function() {


	  $('#player_control').click(function () {
		$('.fa-play').toggleClass('fa-stop');
	  });
	  $('.bxslider').bxSlider({
		  	pagerCustom: '#pager',
		  	// adaptiveHeight: true,
		  	// adaptiveHeight: true,
		  	prevText: '< img src="pics/left.png" height="25" width="25"/>',
 			mode: 'fade'
		});

	  if($('#song_author').html().length>20){
	  	var htmlString = $('#song_author').html();
	    $('#song_author').html("<marquee><span>" + htmlString + "</span></marquee>");
	    }

	  if($('.song_name').html().length>30){
	  	var htmlString = $('#song_author').html();
	    $('#song_author').html("<marquee><span>" + htmlString + "</span></marquee>");
	    }
	    
		$('.pager-img').click(function () {
		  	$('.bx-pager').addClass('clicked down');
		  	$('.bx-wrapper').show();

		  	$('html, body').animate({
		       scrollTop: $("#bx-pager").offset().top
			}, 'slow');

		});
		$( "#slider" ).slider({range: "min",
      	animate: true,
      	nextSelector: '#slider-next',
  		prevSelector: '#slider-prev',
      	value:80}
      	);

		// $('#play_btn').click(function(){
		//     if (!$(this).hasClass('play')) {
		//         $(this).attr('src', '/pics/play.png');
		//         $(this).addClass('play')  
		//     } else  {
		//         $(this).attr('src', '/pics/stop.png');
		//         $(this).removeClass('play')
		//     }
		// });

		(function($){
    $.fn.extend({
        center: function () {
            return this.each(function() {
                var top = ($(window).height() - $(this).outerHeight() -46) / 2;
                var left = ($(window).width() - $(this).outerWidth()) / 2;
                $(this).css({position:'absolute', margin:'25px 0', top: (top > 0 ? top : 0)+'px', left: (left > 0 ? left : 0)+'px'});
            });
        }
    }); 
})(jQuery);

(function($){
    $.fn.extend({
        bottom: function () {
            return this.each(function() {
            	var top = ($(window).height() + $('#center-block').position().top + $('#center-block').height() -60)/2;
				// var top = 1000;
                var left = ($(window).width() - $(this).outerWidth());
                $(this).css({position:'absolute', margin:0, top: (top > 0 ? top : 0)+'px', left: (left > 0 ? left : 0)+'px'});
            });
        }
    }); 
})(jQuery);
(function($){
    $.fn.extend({
        bottoms: function () {
            return this.each(function() {
            	var top = ($(window).height() + $('#center-block').position().top + $('#center-block').height())/2;
				// var top = 1000;
                var left = ($(window).width() - $(this).outerWidth());
                $(this).css({position:'absolute', margin:0, top: (top > 0 ? top : 0)+'px', left: (left > 0 ? left : 0)+'px'});
            });
        }
    }); 
})(jQuery);

(function($){
    $.fn.extend({
        footer: function () {
            return this.each(function() {
                var top = ($(window).height() +  $('.photo-gallery').position().top + $('.photo-gallery').height()-250)/2;
                var left = ($(window).width() - $(this).outerWidth());
                $(this).css({position:'absolute', margin:0, top: (top > 0 ? top : 0)+'px', left: (left > 0 ? left : 0)+'px'});
            });
        }
    }); 
})(jQuery);

(function($){
    $.fn.extend({
        footka: function () {
            return this.each(function() {
                var top = ($(window).height() +  $('.photo-gallery').position().top + $('.photo-gallery').height()-400)/2;
                // var left = ($(window).width() - $(this).outerWidth());
                $(this).css({position:'absolute', margin:0, top: (top > 0 ? top : 0)+'px'});
            });
        }
    }); 
})(jQuery);


$('#center-block').center();
$('.photo-gallery').bottom();
$('footer').footer();
$('.ad').footka();




	});

