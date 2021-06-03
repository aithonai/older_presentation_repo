let navbar = document.getElementById("nav");

function stickyMenu() {
  if (window.pageYOffset > 0.0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onscroll = function () {
  stickyMenu();
};