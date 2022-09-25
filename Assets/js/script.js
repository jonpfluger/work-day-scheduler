// displays current time
var currentDayEl = document.getElementById('currentDay');
var now = moment().format("ddd MM, YYYY HH:mm a");
currentDayEl.innerText = now;

var inputEl = document.querySelectorAll('input');



//Change textarea background color based on time
function checkTime() {



    //loop through taskarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {


        //remove any old classes from element
        .removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (timeEl < now) {
            inputEl.classList.add("past");
        } else if (timeEl > now) {
            inputEl.classList.add("future");
        } else {
            inputEl.classList.add("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);





// var hour = document.getElementsByClassName('hour');

// function checkTime () {

//     var time = moment(hour, "LT");
//     console.log(time)
//     // removes the past/present/future classes
//     hour.removeClass(".present .past .future");
//     // if (past)
//     if (moment().isAfter(time)) {
//         hour.addClass(".past");
//     // else if (future)
//     } else if (moment().isBefore(time)) {
//         hour.addClass(".future");
//     // else present
//     } else {
//         hour.addClass(".present");
//     }
// }




// removes the past/present/future classes
// $(".hour").removeClass(".present .past .future");

// if (past) {
    // set class to past
// if (future) {
    // set class to future (on input)
// else
    // set class to present


// click listener to save buttons that saves it to local storage