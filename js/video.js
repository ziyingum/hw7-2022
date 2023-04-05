var video;

window.addEventListener("load", function() {
	video = document.querySelector('#player1');
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
	video.play();
});

document.querySelector('#pause').addEventListener('click', function () {
	console.log("Pause Video");
	video.pause();
});

document.querySelector('#slower').addEventListener('click', function () {
	video.playbackRate = video.playbackRate - 0.1;
	console.log(`Current speed is ${video.playbackRate}`);
});

document.querySelector('#faster').addEventListener('click', function () {
	video.playbackRate = video.playbackRate + 0.1;
	console.log(`Current speed is ${video.playbackRate}`);
});

document.querySelector('#skip').addEventListener('click', function () {
	video.currentTime -= 10;
	console.log(`Current location of the video is ${video.currentTime}`);
});

document.querySelector('#mute').addEventListener('click', function (e) {
	if (e.target.innerHTML === 'Mute') {
		video.muted = true;
		e.target.innerHTML = 'Unmute';
	} else {
		video.muted = false;
		e.target.innerHTML = 'Mute';
	}
});

document.querySelector('#slider').addEventListener('change', function (e) {
	const column = e.target.value;
	video.volume = Number(column) / 100;
	document.querySelector('#volume').innerHTML = column + '%';
});

document.querySelector('#vintage').addEventListener('click', function () {
	video.classList.add('oldSchool');
});

document.querySelector('#orig').addEventListener('click', function () {
	video.classList.remove('oldSchool');
});

