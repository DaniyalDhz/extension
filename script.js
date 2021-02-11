var countup;
var _clock ;
var storeTime = localStorage['time'];

if(storeTime > 0)
{
	_clock= $('.clock').FlipClock(storeTime, {
		clockFace: 'HourlyCounter',
		countdown: false
	});
}
else{
	_clock= $('.clock').FlipClock(0, {
		clockFace: 'HourlyCounter',
		countdown: false,
		autoStart: false
	});
}

var startTime = 6;

var elementStart = document.getElementById("start");


elementStart.addEventListener('click', function () {
	document.querySelector('#start').innerHTML = 'Extend'; 

	chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
		var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
	});


	_clock = $('.clock').FlipClock(startTime, {
		clockFace: 'HourlyCounter',
		countdown: false,
		autoStart: false
	});

	setTimeout(() => {
		_clock.setTime(0);
		_clock.start();
		countup = setInterval(function () {
			var timeup = _clock.getTime().time;
			if(timeup > startTime)
			{
				_clock.stop();
				localStorage['time'] = 0;
			}
			else
			{
				localStorage['time']  = _clock.getTime().time
			}
			
		});
	}, 2000);
});

var elementStop = document.getElementById("stop");
elementStop.addEventListener('click', function () {
	var txt = document.getElementById("enter").value;
	if(txt.length > 2)
	{
		document.querySelector('#start').innerHTML = 'Start';
		clearInterval(countup);
		_clock.stop();
		_clock= $('.clock').FlipClock(0, {
			clockFace: 'HourlyCounter',
			countdown: false,
			autoStart: false
		});
	}
	
});


function extend() {
	//should extend the timer from the timespan that it stopped
	_clock = $('.clock').FlipClock(timespan, {
		clockFace: 'HourlyCounter',
		countdown: false
	});
}



