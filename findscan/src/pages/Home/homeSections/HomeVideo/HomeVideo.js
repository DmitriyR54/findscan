import homeVideoHtml from './HomeVideo.html';
import './HomeVideo.scss';
// video player library
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const HomeVideoSection = (container) => {
    container.innerHTML += homeVideoHtml;

    window.addEventListener('DOMContentLoaded', () => {
        // initialize video player
        const player = new Plyr('#homeVideo__video', {
            controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'settings', 'airplay', 'fullscreen'],
        });

        const videoSection = document.querySelector('.homeVideo__inner');
        const videoCover = document.querySelector('.homeVideo__cover');
        const videoPlayButton = document.querySelector('.homeVideo__play');
        const videoItem = document.querySelector('#homeVideo__video');

        // main 'play' button
        videoPlayButton.addEventListener('click', () => {
            // hide video cover
            videoCover.classList.add('homeVideo__cover-hidden');
            // show full video
            videoSection.style.height = `${videoItem.clientHeight}px`;

            // show video controls
            document.querySelector('.plyr__control.plyr__control--overlaid').style.opacity = '1';
            document.querySelector('.plyr__controls').style.opacity = '1';

            // play video
            player.play();
        });
    });
};

export { HomeVideoSection };
