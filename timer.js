class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        this.durationInput.addEventListener('input', this.duration);
    }

    /*info about person and age*/

    /*destructuring to minimize writing out this */
    start() {
        console.log('the start button was pressed');
    }

    pause() {
        console.log('pause button pressed');
    }

    duration() {
        console.log('duration was entered');
    }
}


export {Timer};