window.onscroll = function() {navSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function navSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

export { navSticky };
