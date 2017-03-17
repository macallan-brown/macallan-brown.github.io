$(document).ready(function() {
   addClasses();
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

   classesTaken: ["Data Structures", "Mathematics of Computer Science", "Organization & Architecture",
   "Software Design", "Digital Electronics", "Multivariable Calculus", "Computability & Complexity",
	"Linear Algebra", "Animation (Film)", "Programming Languages", "Data Visualization"],

   programmingProjects: [
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
   ],
   workProjects: [
      {
         title: "thredUP - iOS Engineering Intern",
         link: "https://www.thredup.com",
         linkDescription: "thredUP.com",
         languages: ["Objective-C"],
         description: ["Worked as an iOS Engineering Intern at thredUP for the Summer of 2016."]
      },{
         title: "Carleton College - Information Technology Assistant",
         link: "https://apps.carleton.edu/campus/its/",
         linkDescription: "Carleton Information Technology Services",
         languages: [],
         description: "Since 2014, I have worked 10 hours per week as an IT Assistant at Carleton College. I provide technology support to staff and students."
      },{
         title: "thredUP - Android Engineering Intern",
         link: "https://www.thredup.com",
         linkDescription: "thredUP.com",
         languages: ["Java"],
         description: "During the summer of 2015, I was an intern for the Android team at thredUP."
      }
   ]
};

var addClasses = function(){
   data.classesTaken.forEach(function(c) {
      var $currentClass = $("<h3>• " + c + "</h3>");
      $("#classesContainer").append($currentClass);
   });
}

var addProjects = function(){
   var $programmingProjectTitle = $("<a name='programming'></a><div class='customHeader'>Programming Projects</div>");
   $("#projectsContainer").append($programmingProjectTitle);
   data.programmingProjects.forEach(function(project) {
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


   var $workProjectTitle = $("<a name='work'></a><div class='customHeader'>Work Projects</div>");
   $("#projectsContainer").append($workProjectTitle);
   data.workProjects.forEach(function(project) {
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
