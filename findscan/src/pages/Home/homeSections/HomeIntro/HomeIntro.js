import homeIntroHtml from './HomeIntro.html';
import './HomeIntro.scss';
// libraries
import animateScrollTo from 'animated-scroll-to';
import particleJS from 'particles.js';

const HomeIntroSection = (container) => {
    container.innerHTML += homeIntroHtml;

    window.addEventListener('DOMContentLoaded', () => {
        /* smooth scroll to the video section */
        const videoLink = document.querySelector('#homeIntro__videoLink');

        videoLink.addEventListener('click', (event) => {
            event.preventDefault();

            /* distance from the top of the page to the video section */
            const offset = document.querySelector('.homeVideoSection').offsetTop;

            /* height of the header */
            const headerHeight = document.querySelector('.header').clientHeight;

            const moveTo = offset - headerHeight - 50;

            /* scroll to the video section */
            animateScrollTo(moveTo);
        });

        /* background particles */
        const particlesSettings = {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                },
                color: {
                    value: '#fff',
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000',
                    },
                    polygon: {
                        nb_sides: 5,
                    },
                    image: {
                        src: 'img/github.svg',
                        width: 100,
                        height: 100,
                    },
                },
                opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false,
                    },
                },
                size: {
                    value: 10,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false,
                    },
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#fff',
                    opacity: 1,
                    width: 3,
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200,
                    },
                },
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse',
                    },
                    onclick: {
                        enable: false,
                        mode: 'push',
                    },
                    resize: true,
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    push: {
                        particles_nb: 4,
                    },
                    remove: {
                        particles_nb: 2,
                    },
                },
            },
            retina_detect: true,
        };

        particlesJS('homeIntro__particles-1', particlesSettings);
    });
};

export { HomeIntroSection };
