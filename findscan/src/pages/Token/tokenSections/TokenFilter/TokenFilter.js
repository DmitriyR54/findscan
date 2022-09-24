import tokenFilterHmtl from './TokenFilter.html';
import './TokenFilter.scss';

const TokenFilterSection = (container) => {
    container.innerHTML += tokenFilterHmtl;

    window.addEventListener('DOMContentLoaded', () => {
        /* show active image */
        const filterButton = document.querySelectorAll('.tokenFilter__btn');
        const filterImg = document.querySelectorAll('.tokenFilter__image');

        const toggleImages = (btn) => {
            // remove active class from all buttons
            filterButton.forEach((btnToRemove) => {
                btnToRemove.classList.remove('tokenFilter__btn-active');
            });

            // add active class to the pressed button
            btn.classList.add('tokenFilter__btn-active');

            const btnValue = btn.getAttribute('data-image');

            // get relevant image from the array
            filterImg.forEach((img) => {
                const imgValue = img.getAttribute('data-image');

                // hide all images
                img.classList.remove('tokenFilter__image-active');

                // show a relevant to the pressed button image
                if (imgValue === btnValue) {
                    img.classList.add('tokenFilter__image-active');
                }
            });
        };

        filterButton.forEach((btn) => {
            btn.addEventListener('click', () => {
                toggleImages(btn);
            });
        });
    });
};

export { TokenFilterSection };
