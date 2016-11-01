$(window).scroll(function() {
		$('.center_image').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
            $(this).css("visibility", "visible");
				$(this).addClass("pullUp");
			}
		});

		$('.home_marker').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow) {
				$("footer").fadeOut(200);
				$("header").fadeOut(200);
			} else if($("header").is(":hidden")) {
				$("footer").fadeIn(200);
				$("header").fadeIn(200);
			}
		});
});
