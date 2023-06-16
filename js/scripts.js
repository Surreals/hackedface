$(document).ready(function () {
  var nav = document.getElementById("nav");
  var navlinks = nav.getElementsByTagName("a");

  function toggleNav() {
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      $("html").css("background-image", 'url("images/fire.gif")');
      $("#title").css("color", "white");
      $("#menu").fadeOut();
      return;
    }
    nav.classList.add("active");
    $("html").css("background-image", "none");
    $("#title").css("color", "crimson");
    $("#menu").fadeIn();
  }

  $(".nav-btn").on("click", function (e) {
    e.preventDefault();
    toggleNav();
  });

  $("#videos").on("click", function () {
    $("#merch_grid").css("display", "none");
    $("#content_text").css("display", "none");
    $("#follow_content").css("display", "none");
    $("#youtube").fadeIn();
  });

  $("#merch").on("click", function () {
    $("#youtube").css("display", "none");
    $("#content_text").css("display", "none");
    $("#follow_content").css("display", "none");
    $("#merch_grid").fadeIn();
  });

  $("#updates").on("click", function () {
    $("#merch_grid").css("display", "none");
    $("#youtube").css("display", "none");
    $("#follow_content").css("display", "none");
    $("#content_text").fadeIn();
  });

  $("#follow").on("click", function () {
    $("#merch_grid").css("display", "none");
    $("#content_text").css("display", "none");
    $("#youtube").css("display", "none");
    $("#follow_content").fadeIn();
  });

  if ($(".nav-btn").css("display") !== "none") {
    for (var i = 0; i < navlinks.length; i++) {
      navlinks[i].addEventListener("click", function () {
        toggleNav();
      });
    }
  }
});
