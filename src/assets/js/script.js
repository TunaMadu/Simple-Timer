import { buttonController } from './buttonLogic/buttonController';
/**
 * this will be the main logic for our page
 * will try to keep this file as modular as possible
 */

function app() {
    //
    const buttons = document.querySelector('.timer-options');

    buttons.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target === buttons) return;

        buttonController(e.target);
    });
}

app();
