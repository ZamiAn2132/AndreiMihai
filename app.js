// nu mai arata ce e sub skills, experience si education DIN ABOUT PART
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}


function toggleContent(button, sectionId) {
    var expandContent = $(button).siblings(".expand-content");
    var allButtons = $("#" + sectionId + " .expand-btn");
  
    // Check if the expandable content is currently visible
    var isVisible = expandContent.is(":visible");
  
    // Hide all other expandable contents
    $("#" + sectionId + " .expand-content").not(expandContent).slideUp(500);
  
    // Hide all other spans except for the current button's spans
    $("#" + sectionId + " .expand-btn").not(button).siblings("span").slideUp(500);
  
    // Toggle the current expandable content and spans
    expandContent.slideToggle(500);
  
    // Toggle visibility of all spans for the triggered button
    $(button).siblings("span").slideToggle(500);
  
    // Hide all other buttons if the triggered button is clicked
    if (!isVisible) {
      allButtons.not(button).hide();
      $(button).siblings("span").slideDown(500);
      expandContent.slideDown(500);
    } else {
      allButtons.show();
      $("#" + sectionId + " .expand-btn").siblings("span").slideDown(500);
      $("#" + sectionId + " .expand-content").slideUp(500);
    }
  }

  var express = require('express');
var server = express();
var options = {
  index: 'index.html'
};

server.use('/', express.static('/home/site/wwwroot', options));
server.listen(process.env.PORT);
