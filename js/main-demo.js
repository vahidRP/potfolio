$(function () {
  $(".theme-options").addClass("active");
  setTimeout(function () {
    $(".theme-options").removeClass("active");
  }, 5000);

  $(".theme-options .toggle-btn").on("click", function () {
    $(".theme-options").toggleClass("active");
  });

  $(".theme-color li a").on("click", function (e) {
    var style_link = $(this).attr("href");
    $("link.site-color").attr("href", style_link);

    e.preventDefault();
  });

  var buyLink = $(".buy-btn").attr("href") + "?ref=cosmos-themes";
  //console.log(buyLink + "?ref=cosmos-themes");
  $(".buy-btn").attr("href", buyLink).attr("target", "_blank");

  const switchPage = (pageHash) => {
    const currentHash = location.hash.replaceAll("/", "");

    if (
      pageHash === currentHash ||
      (currentHash === "" && pageHash === "#home")
    )
      return;

    setTimeout(() => {
      $("header .menu-button").click();
      $(
        `header .nav-menu--links .nav-menu--link[href="${pageHash}"]`
      )[0].click();
    }, 0);
  };

  $("header .logo").on("click", function (e) {
    e.preventDefault();

    switchPage("#home");
  });

  $("#home-btn").on("click", function (e) {
    e.preventDefault();

    const { currentTarget } = e;
    const href = $(currentTarget).data("href");

    switchPage(href);
  });
});
