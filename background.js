//* Target Date Must be Like Below
//var date = new Date("June 15, 2016 12:45:00");

// Just for running purpose
//=======================================
var start = new Date();
start.setDate(start.getDate());
start.setHours(0,0,0,0)
//======================================
var now   = new Date();

//seconds should not be displayed, as the wireframe showed.

var diff = 0//(now.getTime() - start.getTime()) / 1000; //datetime from python should be here.

	var clock = $('#clock1').FlipClock(diff, {
		clockFace: 'HourlyCounter',
		countdown: false,
		showSeconds: true
	});