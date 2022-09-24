import tokenIntroHtml from './TokenIntro.html';
import './TokenIntro.scss';

const TokenIntroSection = (container) => {
    container.innerHTML += tokenIntroHtml;
};

export { TokenIntroSection };
