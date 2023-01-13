import buttonLogic from './buttonLogic';

import { checkIfBlinking, stopBlinking } from '../timerLogic/timerBlink';

export const buttonController = function (button) {
    //
    switch (button.innerText) {
        case '30 mins':
            // trigger 30mins function
            buttonLogic.addThirtyMinutes();
            checkIfBlinking();
            break;
        case '60 mins':
            // trigger 60 mins function
            buttonLogic.addSixtyMinutes();
            checkIfBlinking();
            break;
        default:
            // trigger the reset
            buttonLogic.resetBtn();
            stopBlinking();
            break;
    }
};
