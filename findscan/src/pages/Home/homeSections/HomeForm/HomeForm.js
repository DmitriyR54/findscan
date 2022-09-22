import homeFormHtml from './HomeForm.html';
import './HomeForm.scss';
//components
import { Notification } from 'Components/Notification/Notification';

const HomeFormSection = (container) => {
    container.innerHTML += homeFormHtml;

    window.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('.homeForm__form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            Notification('Congratunalitons!');
        });
    });
};

export { HomeFormSection };
