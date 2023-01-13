import * as config from '../config';
class ButtonLogic {
    //
    #minutesEle = document.querySelector('[data-minutes]');
    #secondsEle = document.querySelector('[data-seconds]');

    addThirtyMinutes() {
        //

        if (this.#minutesEle.innerText === config.DEFAULT_TIME) {
            this.#minutesEle.innerText = '30';
            return;
        }
        let currentMins = +this.#minutesEle.innerText;
        currentMins += config.THIRTY_MINUTES;
        this.#minutesEle.innerText = currentMins;
    }

    addSixtyMinutes() {
        //
        if (this.#minutesEle.innerText === config.DEFAULT_TIME) {
            this.#minutesEle.innerText = '60';
            return;
        }
        let currentMins = +this.#minutesEle.innerText;
        currentMins += config.SIXTY_MINUTES;
        this.#minutesEle.innerText = currentMins;
    }

    resetBtn() {
        //
        this.#minutesEle.innerText = config.DEFAULT_TIME;
        this.#secondsEle.innerText = config.DEFAULT_TIME;
    }
}

export default new ButtonLogic();
