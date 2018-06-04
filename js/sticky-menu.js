window.addEventListener('DOMContentLoaded', function () {

    var buttonMenu = document.getElementById('toggle-menu');
    var menu = document.getElementById('menu');
    buttonMenu.addEventListener('click', function () {
        if (buttonMenu.className == "toggle-menu-expanded") {
            menu.classList.toggle('nav-list-active');
            buttonMenu.classList.toggle('toggle-menu-expanded');
        } else {
            menu.classList.toggle('nav-list-active');
            buttonMenu.classList.toggle('toggle-menu-expanded');
        }
    })

    var stickyMenu = function () {
        var currentPos = pageYOffset;
        var nav = document.getElementById('nav');
        setNav();
        window.addEventListener('scroll', function () {
            setNav();
        })

        function setNav() {
            currentPos = pageYOffset;
            if (currentPos > 10) {
                nav.classList.add('nav-sticky');
            } else {
                nav.classList.remove('nav-sticky');
            }
        }

    };

    window.addEventListener('scroll', stickyMenu);

    var menuScroll = function (event) {
        event.preventDefault();
        var clickedLink = this;
        var target = document.querySelector(clickedLink.hash);
        var menu = document.getElementById(menu);
        var topHeader = document.querySelector('.nav');

        var scrollTarget = menuScrollTarget = window.scrollY + target.getBoundingClientRect().y - (topHeader.offsetHeight + menu.offsetHeight);

        window.scroll({
            top: scrollTarget,
            left: 0,
            behavior: 'smooth'
        });
    };

    var menuLinks = document.getElementById(menu).getElementsByClassName("nav-link");
    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', menuScroll);
    }
});