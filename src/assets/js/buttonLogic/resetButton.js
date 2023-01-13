import { DEFAULT_TIME } from '../config';
export const resetBtn = function () {
    //
    document.querySelector('[data-seconds]').innerText = DEFAULT_TIME;
    document.querySelector('[data-minutes]').innerText = DEFAULT_TIME;
};
