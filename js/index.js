console.log("CONNECTED");

function setTime() {
	var time = new Date();
	var h = time.getHours();
	var m = time.getMinutes();
	var ampm;

	if (h >= 12) {ampm = "PM";}
	else {ampm = "AM";}

	if (m < 10) {
		m = "0" + m
	}

	if (h == 12 || h == 0) {
		h = 12
	}
	else {
		h %= 12
	}

	document.getElementById("startmenutime").innerHTML = 
		h + ":" + m + " " + ampm;
}

window.onload = setTime
window.setInterval(setTime, 500)