var currentPage;
$(document).ready(function(){
  $(".fade").hide(0).delay(400).fadeIn(2000)
  $(".fadep").hide(0).delay(600).fadeIn(2000)
  $(".button").click(function(){
    if (currentPage != null) {
      $(currentPage).hide();
    }
    if (this.id =='about') {
      currentPage = document.getElementById('about_div')
      $("#about_div").fadeIn(1000);
    }
    else if (this.id =='projects') {
      currentPage = document.getElementById('projects_div')
      $("#projects_div").fadeIn(1000);
    }
    else if (this.id =='resume') {
      currentPage = document.getElementById('resume_div')
      $("#resume_div").fadeIn(1000);
    }
  });
  $(".floating_box").click(function(){
    if ($(this).height() == 200) {
      $(this).animate({height: "420px", width: "420px"}, 200);
      $(this).children('.fb_text').removeClass('hidden');
      $(this).children('.fb_image').height('60%');
    } else {
      $(this).animate({height: "200px", width: "200px"}, 200);
      $(this).children('.fb_text').addClass('hidden');
      $(this).children('.fb_image').height('100%');
    }

  });
});
