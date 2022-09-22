import './Notification.scss';

const Notification = (text) => {
    let notification = document.createElement('div');
    notification.className = 'notification';

    notification.innerHTML = text;

    document.body.appendChild(notification);

    // show notification
    setTimeout(() => {
        notification.classList.add('notification-show');
    }, 10);

    // hide notification
    setTimeout(() => {
        notification.classList.remove('notification-show');
    }, 5000);

    // remove notification from DOM
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 6000);
};

export { Notification };
