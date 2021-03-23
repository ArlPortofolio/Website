// window.addEventListener('scroll', function () {
// 	var header = document.querySelector('header');
// 	header.classList.toggle('sticky', window.scrollY > 0);
// });

window.addEventListener("scroll", function () {
  var nav = document.getElementById("main-nav");
  nav.classList.toggle("sticky-kiki", window.scrollY > 50);
});

const limit = document.body.offsetHeight - 1500;
window.addEventListener("scroll", function () {
  var popup = document.getElementById("popup");
  popup.classList.toggle(
    "show",
    window.scrollY > 1300 && window.scrollY < limit
  );
});

// const menuBTn = this.document.querySelector(".menu-btn");
// let menuOpen = false;
// menuBTn.addEventListener("click", () => {
//   if (!menuOpen) {
//     menuBTn.classList.add("open");
//     menuOpen = true;
//   } else {
//     menuBTn.classList.remove("open");
//     menuOpen = false;
//   }
// });

$(".item-header").click(function () {
  $(".accordion-item").removeClass("active");
  $(this).parent().addClass("active");
  $(".icon").text("+");
  $(this).children(".icon").text("-");
});
