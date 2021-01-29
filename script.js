'use strict';
import {Timer} from './timer.js';

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const time = new Timer(durationInput, startButton, pauseButton,
    {
        onStart() {
            console.log('Timer has started');
        },
        onTick() {
            console.log('Timer is ticking down');
            document.body.style.backgroundColor = 'green';
        },
        onComplete() {
            console.log('Timer ran out');
            document.body.style.backgroundColor = 'red';
        },
    });

export {time};