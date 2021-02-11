// var countup;

// var _clock = $('.clock').FlipClock(0, {
// 	clockFace: 'HourlyCounter',
// 	countdown: false,
// 	autoStart: false
// }); //initiates Flipclock from jquery

// var element = document.getElementById("start");
// element.addEventListener('click', function () {
// 	document.querySelector('#start').innerHTML = 'Extend'; 
// 	_clock.start();
// });

// var element = document.getElementById("stop");
// element.addEventListener('click', function () {
// 	var txt = document.querySelector('#enter').innerText;
// 	if(txt.length > 2)
// 	{
// 		document.querySelector('#start').innerHTML = 'Start';
// 		_clock.stop();
// 	}
	
// });

// let timespan = 2; //in minutes

// function extend() {
// 	//should extend the timer from the timespan that it stopped
// 	_clock = $('.clock').FlipClock(timespan, {
// 		clockFace: 'HourlyCounter',
// 		countdown: false
// 	});
// }

// // countup = setInterval(function () {
// // 	if (_clock.getTime().time > timespan) { //clock.get time starts counting from 0
// // 		_clock.stop();
// // 		clearInterval(countup); //resets timer
// // 	} else {
		
// // 	}
// // });

