import homeInsightsHtml from './HomeInsights.html';
import './HomeInsights.scss';

const HomeInsightsSection = (container) => {
    container.innerHTML += homeInsightsHtml;

    window.addEventListener('DOMContentLoaded', () => {
        /* show active image */
        const insightsButton = document.querySelectorAll('.homeInsights__btn');
        const insightsImg = document.querySelectorAll('.homeInsights__image');

        const toggleImages = (btn) => {
            // remove active class from all buttons
            insightsButton.forEach((btnToRemove) => {
                btnToRemove.classList.remove('homeInsights__btn-active');
            });

            // add active class to the pressed button
            btn.classList.add('homeInsights__btn-active');

            const btnValue = btn.getAttribute('data-image');

            // get relevant image from the array
            insightsImg.forEach((img) => {
                const imgValue = img.getAttribute('data-image');

                // hide all images
                img.classList.remove('homeInsights__image-active');

                // show a relevant to the pressed button image
                if (imgValue === btnValue) {
                    img.classList.add('homeInsights__image-active');
                }
            });
        };

        insightsButton.forEach((btn) => {
            btn.addEventListener('click', () => {
                toggleImages(btn);
            });
        });
    });
};

export { HomeInsightsSection };
