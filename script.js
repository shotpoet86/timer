'use strict';
import {Timer} from './timer.js';

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
let currentOffset = 0;
const time = new Timer(durationInput, startButton, pauseButton,
    {
        onStart() {
            console.log('Timer has started');
        },
        onTick() {
            circle.setAttribute('stroke-dashoffset', currentOffset);
            currentOffset -= 1;
            console.log('Timer is ticking down');
        },
        onComplete() {
            console.log('Timer ran out');
        },
    });

export {time};