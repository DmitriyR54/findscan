import tokenAboutHmtl from './TokenAbout.html';
import './TokenAbout.scss';

const TokenAboutSection = (container) => {
    container.innerHTML += tokenAboutHmtl;

    window.addEventListener('DOMContentLoaded', () => {
        /* smooth appearing on the screen */
        const aboutPics = document.querySelectorAll('.tokenAbout__subsection-image');
        if ('IntersectionObserver' in window) {
            const observerCallback = (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translate3d(0, 0, 0)';
                        observer.unobserve(entry.target);
                    }
                });
            };
            const observerOptions = {
                threshold: 0.25,
            };

            const observer = new IntersectionObserver(observerCallback, observerOptions);

            aboutPics.forEach((pic) => {
                observer.observe(pic);
            });

            /* show a picture from the "filter" section */
            const filterPic = document.querySelector('.tokenFilter__pictures');
            observer.observe(filterPic);
        } else {
            aboutPics.forEach((pic) => {
                pic.style.opacity = '1';
                pic.style.transform = 'translate3d(0, 0, 0)';
            });
        }
    });
};

export { TokenAboutSection };
