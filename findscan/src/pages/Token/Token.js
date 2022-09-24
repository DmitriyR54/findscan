// libraries
import 'core-js/actual';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
// styles
import 'Src/styles/styles.scss';
import 'Src/fonts/fonts.scss';
// sections
import { HeaderSection } from 'Sections/Header/Header';
import { TokenIntroSection } from './tokenSections/TokenIntro/TokenIntro';
import { TokenFilterSection } from './tokenSections/TokenFilter/TokenFilter';
import { TokenAboutSection } from './tokenSections/TokenAbout/TokenAbout';
import { FooterSection } from 'Sections/Footer/Footer';
// components
import LazyLoad from 'Components/LazyLoad/LazyLoad';

const bodyContainer = document.body;

const mainContainer = (container) => {
    // root container
    let mainTag = document.createElement('main');
    mainTag.className = 'main';
    // sections
    TokenIntroSection(mainTag);
    TokenFilterSection(mainTag);
    TokenAboutSection(mainTag);

    return container.appendChild(mainTag);
};

// sections
HeaderSection(bodyContainer);
mainContainer(bodyContainer);
FooterSection(bodyContainer);

// components
LazyLoad();

window.addEventListener('DOMContentLoaded', () => {
    /* use a custom scrollbar but only on desktop devices */
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const osInstance = OverlayScrollbars(document.querySelector('body'), {});
    }
});
