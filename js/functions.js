var timeDisplay = document.querySelector('.timeDisplay');

function time() {
	let d = new Date();
	let s = d.getSeconds();
	let m = d.getMinutes();
	let h = d.getHours();
	timeDisplay.textContent = ('0' + h).substr(-2) + ':' + ('0' + m).substr(-2) + ':' + ('0' + s).substr(-2);
}

setInterval(time, 1000);
