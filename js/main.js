var scrollPosition = window.pageYOffset;
var root = getComputedStyle(document.querySelector(":root"));
window.onscroll = function () {
    var currentScrollPosition = window.pageYOffset;
    if (screen.width > 1000) {
        scrollPosition > currentScrollPosition
            ? (document.querySelector(".navigation").style.top = "0")
            : (document.querySelector(".navigation").style.top =
                  root.getPropertyValue("--navHeightNegative"));
        scrollPosition = currentScrollPosition;
    } else {
        scrollPosition > currentScrollPosition
            ? (document.querySelector(".navigation").style.bottom = "0")
            : (document.querySelector(".navigation").style.bottom =
                  root.getPropertyValue("--navHeightNegative"));
        scrollPosition = currentScrollPosition;
        // window.innerHeight + currentScrollPosition >= document.body.offsetHeight
        //     ? (document.querySelector(".navigation").style.bottom = "0")
        //     : null;
    }
};
