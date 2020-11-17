/** @format */
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");

  function addShadow() {
    if (window.scrollY >= 300) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }
  window.addEventListener("scroll", addShadow);

  $(document).click(function (event) {
    const clickover = $(event.target);
    const _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  });
});
