import add  from './add.js';

import timoleonSrc  from '../images/timoleon.jpg';

import '../style/main.css';

var setupListeners = function() {
    let x = document.getElementById('x');
    x.addEventListener('change', displayResult);
    document.getElementById('y').addEventListener('change', displayResult);

    timo.src = timoleonSrc;
}


window.addEventListener('DOMContentLoaded', setupListeners);

var displayResult = function() {
    let xValue = parseInt(document.getElementById('x').value);
    let yValue = parseInt(y.value);
    result.value = add(xValue,yValue);
}
