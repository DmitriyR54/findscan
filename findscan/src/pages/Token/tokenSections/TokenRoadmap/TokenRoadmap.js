import tokenRoadmapHtml from './TokenRoadmap.html';
import './TokenRoadmap.scss';

const TokenRoadmapSection = (container) => {
    container.innerHTML += tokenRoadmapHtml;

    window.addEventListener('DOMContentLoaded', () => {
        /* smooth appearing on the screen */
        const roadmapNum = document.querySelectorAll('.tokenRoadmap__item-date');
        const roadmapText = document.querySelectorAll('.tokenRoadmap__item-list');

        if ('IntersectionObserver' in window) {
            /* show the "date" blocks */
            const showNumbers = (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.boxShadow = '0 0 10px rgba(56, 134, 250, .8)';
                        entry.target.style.transform = 'scale(1)';
                        observer.unobserve(entry.target);
                    }
                });
            };

            /* show the "info" blocks */
            const showText = (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        observer.unobserve(entry.target);
                    }
                });
            };

            const numbersObserver = new IntersectionObserver(showNumbers, {
                threshold: 0.25,
            });

            const textObserver = new IntersectionObserver(showText, {
                threshold: 0.4,
            });

            roadmapNum.forEach((el) => {
                numbersObserver.observe(el);
            });

            roadmapText.forEach((el) => {
                textObserver.observe(el);
            });
        } else {
            /* show the "date" blocks */
            roadmapNum.forEach((el) => {
                el.style.boxShadow = '0 0 10px rgba(56, 134, 250, .8)';
                el.style.transform = 'scale(1)';
            });

            /* show the "info" blocks */
            roadmapText.forEach((el) => {
                el.style.opacity = '1';
            });
        }
    });
};

export { TokenRoadmapSection };
