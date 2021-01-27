'use strict';

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.durationInput.addEventListener('input', this.onDurationChange);
    }

    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 500);
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
        console.log('tick was called');
    };


}


export {Timer};