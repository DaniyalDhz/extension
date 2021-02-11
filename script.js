var countup;
var _clock;
var storeTime;


function extend(timespan) {
    //should extend the timer from the timespan that it stopped
    _clock = $('.clock').FlipClock(timespan, {
        clockFace: 'HourlyCounter',
        countdown: false,
    });
}


function setDB(key, value) {
    chrome.storage.sync.set({
        [key]: value
    });

}

function getDB(key, cb) {
    chrome.storage.sync.get(key, (opt) => {
        cb(opt)
    });

}



getDB('time', (data) => {
    console.log(data)
    storeTime = data.time;
    if (storeTime > 0) {
		//What happens here?
        _clock = $('.clock').FlipClock(storeTime, {
            clockFace: 'HourlyCounter',
            countdown: false
        });
    } else {
		//What happens here?
        _clock = $('.clock').FlipClock(0, {
            clockFace: 'HourlyCounter',
            countdown: false,
            autoStart: false
        });
    }
})

var startTime = 5;


var elementStart = document.getElementById('start')
elementStart.addEventListener('click', function(e) {
    let buttonname = e.target.innerHTML;
    if (buttonname == 'Start') {
        e.target.innerHTML = 'Extend'
        // chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
        //     var activeTab = tabs[0];
        // });
        _clock = $('.clock').FlipClock(startTime, {
            clockFace: 'HourlyCounter',
            countdown: false,
            autoStart: false
        });

        setTimeout(() => {
            _clock.setTime(0);
            _clock.start();
            countup = setInterval(function() {
                var timeup = _clock.getTime().time;
                if (timeup > startTime) {
                    _clock.stop();
                    setDB('time', 0)
                } else {
                    setDB('time', _clock.getTime().time)
                }

            }, 1000);
        }, 10);
    } else {
        _clock.start()
        countup = setInterval(function() {
            setDB('time', _clock.getTime().time)

        }, 1000);
    }



});

var elementStop = document.getElementById("stop");
elementStop.addEventListener('click', function() {
    if (txt.length > 0) {
        var txt = document.getElementById("enter").value;
        elementStart.innerHTML = 'Start'
        setDB('time', 0)
        clearInterval(countup);
        _clock.stop();
        _clock = $('.clock').FlipClock(0, {
            clockFace: 'HourlyCounter',
            countdown: false,
            autoStart: false
        });
    }

});


