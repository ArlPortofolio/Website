window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);

  const menuBTn = this.document.querySelector(".menu-btn");
  let menuOpen = false;
  menuBTn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBTn.classList.add("open");
      menuOpen = true;
    } else {
      menuBTn.classList.remove("open");
      menuOpen = false;
    }

    var popup = document.getElementById("popup");
    popup.classList.toggle("show", window.scrollY > 1300);
  });
});
