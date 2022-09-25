// displays current time
var currentDayEl = document.getElementById('currentDay');
var now = moment().format("ddd MM, YYYY HH:mm a");
currentDayEl.innerText = now;
