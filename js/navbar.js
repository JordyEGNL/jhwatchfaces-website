// This function opens and closed the nav bar in mobile view when navbarMobile is triggered
function navbarMobile() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
      
    }
  }

// This function scrolls the webpage back to the top
function scrollToTop() {
    window.scrollTo(0, 0);
}


// This functions smooth scrolls to the target, for the navbar
function smoothScroll(targetId) {
    var x = document.getElementById("myTopnav");
    var targetElement = document.getElementById(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
    x.className = "topnav";
}




