import homeAboutHtml from './HomeAbout.html';
import './HomeAbout.scss';

const HomeAboutSection = (container) => {
    container.innerHTML += homeAboutHtml;

    window.addEventListener('DOMContentLoaded', () => {
        /* smooth appearing on the screen */
        const aboutPics = document.querySelectorAll('.homeAbout__subsection-image');
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
        } else {
            aboutPics.forEach((pic) => {
                pic.style.opacity = '1';
                pic.style.transform = 'translate3d(0, 0, 0)';
            });
        }
    });
};

export { HomeAboutSection };
