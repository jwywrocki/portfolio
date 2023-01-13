// Improve dark and light mode

init();

function init() {
    this.scrollPosition = window.pageYOffset;

    this.root = getComputedStyle(document.querySelector(':root'));

    this.toggle = document.querySelector('#toggle');

    this.sections = document.querySelectorAll('.fade');

    addEventListeners();
}

function addEventListeners() {
    window.addEventListener('scroll', fade); 
    this.toggle.addEventListener('click', themeSwitch);

    document.addEventListener('DOMContentLoaded', () => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.toggle('dark__theme');
            toggle.classList.contains('fa-moon');
            toggle.classList.replace('fa-moon', 'fa-sun');
        } else {
            document.body.classList.toggle('light__theme');
            toggle.classList.contains('fa-sun');
            toggle.classList.replace('fa-sun', 'fa-moon');
        }
        document.querySelector('.preload')?.classList.remove('preload');
    });

    document.addEventListener('scroll', () => {
        let currentScrollPosition = window.pageYOffset;
        if (window.innerWidth >= 768) {
            this.scrollPosition > currentScrollPosition
                ? (document.querySelector('.navigation').style.top = '0')
                : (document.querySelector('.navigation').style.top =
                      this.root.getPropertyValue('--navHeightNegative'));
            this.scrollPosition = currentScrollPosition;
        } else {
            this.scrollPosition > currentScrollPosition
                ? (document.querySelector('.navigation').style.bottom = '0')
                : (document.querySelector('.navigation').style.bottom =
                      this.root.getPropertyValue('--navHeightNegative'));
            this.scrollPosition = currentScrollPosition;
        }
    });
}

function themeSwitch() {
    toggle.classList.contains('fa-moon')
        ? toggle.classList.replace('fa-moon', 'fa-sun')
        : toggle.classList.replace('fa-sun', 'fa-moon');
    document.body.classList.toggle('light__theme');
}

function fade() {
    for (var i = 0; i < this.sections.length; i++) {
        var distInView = this.sections[i].getBoundingClientRect().top - window.innerHeight;
        distInView < 0
        ? this.sections[i].classList.add("inview")
        : this.sections[i].classList.remove("inview");
    }
}