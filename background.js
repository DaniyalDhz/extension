var clock = $('.clock').FlipClock(0, {
	clockFace: 'HourlyCounter',
	countdown: false
}); //initiates Flipclock from jquery

function start() {
	//should start the timer
	document.querySelector('#start').innerHTML = 'Extend'; //start button naming should be changed to Exted
}

function submit() {
	document.querySelector('#start').innerHTML = 'Start'; //once submit is hit Extend button should be renamed back to Start
	clock.stop(); //stops the clock
}
let timespan = 2; //in minutes

function extend() {
	//should extend the timer from the timespan that it stopped
	clock = $('.clock').FlipClock(timespan, {
		clockFace: 'HourlyCounter',
		countdown: false
	});
}

let countup = setInterval(function () {
	if (clock.getTime().time > timespan) { //clock.get time starts counting from 0
		clock.stop();
		clearInterval(countup); //resets timer
	} else {
		var element = document.getElementById("stop");
		element.addEventListener('click', function () {
			submit(); //submit also means stop the timer
		});
	}
});