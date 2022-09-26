import tokenUtilityHtml from './TokenUtility.html';
import './TokenUtility.scss';

const TokenUtilitySection = (container) => {
    container.innerHTML += tokenUtilityHtml;

    window.addEventListener('DOMContentLoaded', () => {
        /* smooth appearing on the screen */
        const utilityItems = document.querySelectorAll('.tokenUtility__item');
        if ('IntersectionObserver' in window) {
            const observerCallback = (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('tokenUtility__item-show');
                        observer.unobserve(entry.target);
                    }
                });
            };
            const observerOptions = {
                threshold: 0.25,
            };

            const observer = new IntersectionObserver(observerCallback, observerOptions);

            utilityItems.forEach((item) => {
                observer.observe(item);
            });
        } else {
            utilityItems.forEach((item) => {
                item.classList.add('tokenUtility__item-show');
            });
        }
    });
};

export { TokenUtilitySection };
