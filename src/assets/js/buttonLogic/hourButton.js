import { SIXTY_MINUTES } from '../config';
import { DEFAULT_TIME } from '../config';
export const addSixtyMinutes = function () {
    //
    let mins = +document.querySelector('[data-minutes]').innerText;

    if (mins === DEFAULT_TIME) {
        document.querySelector('[data-minutes]').innerText = '60';
        return;
    }
    mins += SIXTY_MINUTES;
    document.querySelector('[data-minutes]').innerText = mins;
};
