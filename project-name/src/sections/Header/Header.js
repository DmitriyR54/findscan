import headerHtml from './Header.html';
import './Header.scss';

const HeaderSection = (container) => {
    container.innerHTML += headerHtml;
};

export { HeaderSection };
