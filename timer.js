import {time} from './script.js';

class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks, {start, pause, onDurationChange} = this) {
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.durationInput = durationInput;
        /*event listeners*/
        this.startButton.addEventListener('click', start);
        this.pauseButton.addEventListener('click', pause);
        this.durationInput.addEventListener('input', onDurationChange);
        /*callback arguments below*/
        this.onTick = callbacks.onTick;
        this.onComplete = callbacks.onComplete;
        if (callbacks) {
            this.onStart = callbacks.onStart;
        }

    }

    /*jshint ignore:start*/
    start = () => {
        if (time.onStart) {
            time.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 50);

    };

    pause = () => {
        clearInterval(this.interval);
    };

    onDurationChange() {
        console.log(`duration was entered`);

    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
            if (time.onComplete) {
                time.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - .05;
            if (time.onTick) {
                time.onTick();
            }
        }
    };


    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    };

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    };
}

/*jshint ignore:end*/
export {Timer};