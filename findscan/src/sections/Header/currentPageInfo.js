const currentPageInfo = (links) => {
    const currentLocation = window.location.pathname;

    links.forEach((link) => {
        const linkHref = link.getAttribute('href');
        const currentLocation = window.location.pathname;

        /* set active styles for a current page link */
        if (linkHref === currentLocation) {
            link.classList.add('header__nav-link-active');
        }

        /* set active styles for index.html link if pathname is "empty" (sitename.net instead of sitename.net/index.html) */
        if (linkHref === '/index.html' && currentLocation === '/') {
            link.classList.add('header__nav-link-active');
        }
    });
};

export { currentPageInfo };
