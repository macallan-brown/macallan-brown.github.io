$(document).ready( function() {
    $("#minitoc").hide(); //hide your div initially
    var topOfAboutMe = $("#aboutMe").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfAboutMe) {
			  	$("#minitoc").fadeIn(200);
        } else {
			  	$("#minitoc").fadeOut(100);
		  }
    });
});
