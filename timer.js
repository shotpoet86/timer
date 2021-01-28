'use strict';

class Timer {
    constructor(durationInput, startButton, pauseButton,{start,pause,onDurationChange} = this) {
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.durationInput = durationInput;
        this.startButton.addEventListener('click', start);
        this.pauseButton.addEventListener('click', pause);
        this.durationInput.addEventListener('input', onDurationChange);

    }

    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
        document.body.style.backgroundColor = 'green';

    };

    pause = () => {
        clearInterval(this.interval);
        document.body.style.backgroundColor = 'red';
    };

    onDurationChange() {
        console.log(`duration was entered`);
    }

    tick = () => {
        this.timeRemaining = this.timeRemaining - 1;
    };


    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}


export {Timer};