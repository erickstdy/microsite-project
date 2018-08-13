$(document).ready(function() {
    
$('body').scrollspy({target: ".navbar", offset: 50});
    
// Add active class to the current button (highlight it)
//var header = document.getElementById("navbarResponsive");
//var btns = header.getElementsByClassName("nav-link");
//for (var i = 0; i < btns.length; i++) {
//  btns[i].addEventListener("click", function() {
//    var current = document.getElementsByClassName("active");
//    current[0].className = current[0].className.replace(" active", "");
//    this.className += " active";
//  });
//}
    
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
      $(".navbar").addClass("compressed");
      $("#logo").addClass("shrink");
    } else {
      $(".navbar").removeClass("compressed");
      $("#logo").removeClass("shrink");  
    }
  });
});