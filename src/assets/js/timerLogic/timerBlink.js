export const beginBlinking = function () {
    const mins = document.querySelector('[data-minutes]');
    const secs = document.querySelector('[data-seconds]');
    mins.classList.add('blink');
    secs.classList.add('blink');
};

export const stopBlinking = function () {
    const mins = document.querySelector('[data-minutes]');
    const secs = document.querySelector('[data-seconds]');
    mins.classList.remove('blink');
    secs.classList.remove('blink');
};

export const checkIfBlinking = function () {
    if (document.querySelector('[data-minutes]').classList.contains('blink'))
        return;

    beginBlinking();
};
