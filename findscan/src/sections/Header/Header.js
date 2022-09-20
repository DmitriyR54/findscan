import headerHtml from './Header.html';
import './Header.scss';

const HeaderSection = (container) => {
    container.innerHTML += headerHtml;

    window.addEventListener('DOMContentLoaded', () => {
        const header = document.querySelector('.header');

        /* toggle navigation menu on small screens */
        const headerNav = header.querySelector('.header__navigation');
        const headerNavBtn = header.querySelector('.header__nav-btn');

        // navigation menu status
        let navActive = false;

        // show navigation menu
        function showNav() {
            navActive = true;
            headerNav.classList.add('header__navigation-active');
            headerNavBtn.classList.add('header__nav-btn-active');
            document.body.classList.add('no-scroll');
        }

        // hide navigation menu
        function hideNav() {
            navActive = false;
            headerNav.classList.remove('header__navigation-active');
            headerNavBtn.classList.remove('header__nav-btn-active');
            document.body.classList.remove('no-scroll');
        }

        headerNavBtn.addEventListener('click', () => {
            if (navActive) {
                hideNav();
            } else {
                showNav();
            }
        });

        /* add styles for header when user scrolls down */
        function headerScrollStyles() {
            if (window.scrollY >= 200) {
                header.classList.add('header-scroll');
            } else {
                header.classList.remove('header-scroll');
            }
        }

        headerScrollStyles();
        window.addEventListener('scroll', headerScrollStyles);
    });
};

export { HeaderSection };
