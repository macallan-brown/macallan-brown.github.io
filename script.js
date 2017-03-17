$(document).ready(function() {
   addProjects();

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


var data = {
   projects: [
      {
         title: "Captain's Log",
         link: "https://github.com/macallan-brown",
         linkDescription: "See on Github",
         languages: ["Swift"],
         description: ["Captain's log keeps track of the important moments, whatever that might mean to you."]
      },{
         title: "2kMusic",
         link: "https://github.com/macallan-brown/6K-Music",
         linkDescription: "See on Github",
         languages: ["Python", "HTML", "CSS", "SQL"],
         description: "A website for making queries on the top critically acclaimed music of all time"
      },{
         title: "Hot Notes",
         link: "https://github.com/macallan-brown",
         linkDescription: "See on Github",
         languages: ["Java", "HTML", "CSS", "Javascript"],
         description: "A desktop notetaking app that converts your notes into interactive webpages."
      }
   ]
};

var addProjects = function(){

   data.projects.forEach(function(project) {
      console.log(project);
      var $project = $("<div class='project'></div>");

      var $title = $("<div class='title'></div>");
      $title.text(project.title);
      $project.append($title);

      var $link = $("<a target='_blank' href='" + project.link +"'></a>");
      $link.text(project.linkDescription);
      $project.append($link);

      var $description = $("<div class='description'></div>");
      $description.text(project.description);
      $project.append($description);

      $("#projectsContainer").append($project);
   });
};
