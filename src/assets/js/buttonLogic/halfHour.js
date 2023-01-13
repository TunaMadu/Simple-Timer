import { THIRTY_MINUTES } from '../config';
import { DEFAULT_TIME } from '../config';

export const addThirtyMinutes = function () {
    //
    let mins = +document.querySelector('[data-minutes]').innerText;

    if (mins === DEFAULT_TIME) {
        document.querySelector('[data-minutes]').innerText = '30';
        return;
    }
    mins += THIRTY_MINUTES;
    document.querySelector('[data-minutes]').innerText = mins;
};
