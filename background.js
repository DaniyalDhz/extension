var clock = $('.clock').FlipClock(0, {
	clockFace: 'HourlyCounter',
	countdown: false });
	
function start(){
	// clock = $('.clock').FlipClock(0, {
	// clockFace: 'HourlyCounter',
	// countdown: false });
	// countup;	
	// document.location.reload();
	document.querySelector('#start').innerHTML = 'Extend';
	document.querySelector('#start').onclick = extend();
}

function submit(){
	document.querySelector('#start').innerHTML = 'Start';
	clock.stop();
	}
let time = 2;

function extend(){
	clock = $('.clock').FlipClock(time, {
		clockFace: 'HourlyCounter',
		countdown: false });
	}

let countup = setInterval(function () { 
	if(clock.getTime().time > time) { 
	clock.stop();
	clearInterval(countup);
	}
	else{
	var element = document.getElementById("stop");
	element.addEventListener('click', function(){
	submit();
	});
}
}); 

