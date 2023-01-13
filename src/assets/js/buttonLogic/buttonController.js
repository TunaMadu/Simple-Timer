import { resetBtn } from './resetButton';
import { addSixtyMinutes } from './hourButton';
import { addThirtyMinutes } from './halfHour';
import { checkIfBlinking, stopBlinking } from '../timerLogic/timerBlink';

export const buttonController = function (button) {
    //
    switch (button.innerText) {
        case '30 mins':
            // trigger 30mins function
            addThirtyMinutes();
            checkIfBlinking();
            break;
        case '60 mins':
            // trigger 60 mins function
            addSixtyMinutes();
            checkIfBlinking();
            break;
        default:
            // trigger the reset
            resetBtn();
            stopBlinking();
            break;
    }
};
