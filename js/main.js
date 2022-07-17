let toggle = document.querySelector('#toggle');
let scrollPosition = window.pageYOffset;

toggle.addEventListener('click', themeSwitch);
let root = getComputedStyle(document.querySelector(':root'));

window.onscroll = function () {
    let currentScrollPosition = window.pageYOffset;
    if (window.screen.width >= 768) {
        scrollPosition > currentScrollPosition
            ? (document.querySelector('.navigation').style.top = '0')
            : (document.querySelector('.navigation').style.top =
                  root.getPropertyValue('--navHeightNegative'));
        scrollPosition = currentScrollPosition;
    } else {
        scrollPosition > currentScrollPosition
            ? (document.querySelector('.navigation').style.bottom = '0')
            : (document.querySelector('.navigation').style.bottom =
                  root.getPropertyValue('--navHeightNegative'));
        scrollPosition = currentScrollPosition;
        // window.innerHeight + currentScrollPosition >= document.body.offsetHeight
        //     ? (document.querySelector(".navigation").style.bottom = "0")
        //     : null;
    }
};

function themeSwitch() {
    toggle.classList.contains('fa-moon')
        ? toggle.classList.replace('fa-moon', 'fa-sun')
        : toggle.classList.replace('fa-sun', 'fa-moon');
    document.body.classList.toggle('dark__theme');
}
