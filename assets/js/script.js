window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);

  var popup = document.getElementById("popup");
  popup.classList.toggle("show", window.scrollY > 300);
});
