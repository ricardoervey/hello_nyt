var string = "hello New York Times! my name is Ricardo Ervey Sanchez. i made this website to introduce myself and express my interest in the Graphics Multimedia Editor position... scroll down for more...";
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',40);

}
frameLooper();