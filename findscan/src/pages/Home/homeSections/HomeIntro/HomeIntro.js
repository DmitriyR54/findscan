import homeIntroHtml from './HomeIntro.html';
import './HomeIntro.scss';

const HomeIntroSection = (container) => {
    container.innerHTML += homeIntroHtml;
};

export { HomeIntroSection };
