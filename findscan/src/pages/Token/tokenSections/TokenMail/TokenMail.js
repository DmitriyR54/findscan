import tokenMailHtml from './TokenMail.html';
import './TokenMail.scss';

const TokenMailSection = (container) => {
    container.innerHTML += tokenMailHtml;
};

export { TokenMailSection };
