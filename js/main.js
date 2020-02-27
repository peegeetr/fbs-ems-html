var trigger = document.querySelector(".nav-trigger");
var mobileNav = document.querySelector(".side-nav");

trigger.addEventListener("click",function(event){
  event.preventDefault();
  mobileNav.classList.toggle('show');
});


    
