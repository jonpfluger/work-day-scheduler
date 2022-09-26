// displays current time
var currentDayEl = document.getElementById('currentDay');
var now = moment().format("ddd MM, YYYY HH:mm a");
currentDayEl.innerText = now;

// changes class based on past present or future
$('.text-area').each(function() {
    var textAreaTime = $(this).attr('id');
    var currentTime = moment().hours();
    if (textAreaTime < currentTime) {
        $(this).addClass('past')
    } else if (textAreaTime > currentTime) {
        $(this).addClass('future')
    } else {
        $(this).addClass('present')
    }
})

// 
var saveBtnEl = document.querySelectorAll('button');

function save() {
    var textAreaTime = $(this).siblings('input').attr('id')
    var textAreaInput = $(this).siblings('input').val()
    localStorage.setItem(textAreaTime, textAreaInput)
    
}

// adds click listener to save buttons
function clickEvent() {
    for (var i = 0; i < saveBtnEl.length; i++) {
        saveBtnEl[i].addEventListener('click', save);
    }
}

clickEvent();


for (let i = 9; i <= 17; i++) {
    $('#' + i).val(localStorage.getItem(i))
     
}