function subscribe() {
	document.getElementById('text').innerHTML = 'Subscribed';
	document.getElementById('btn').innerHTML = 'Subscribed';
	document.getElementById('btn').style.backgroundColor = '#262626';
}

function like() {
	document.getElementById('like').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked';
}

function keyPress() {
	document.getElementById('text').innerHTML = 'Key Pressed 💖'
}
