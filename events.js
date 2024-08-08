function subscribe() {
	document.getElementById('text').innerHTML = 'Subscribed';
	document.getElementById('btn').innerHTML = 'Subscribed';
	document.getElementById('btn').style.backgroundColor = '#262626';
}

// youtube like button duplicate 

function like() {
	document.getElementById('like').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked';
}

// keyPress javascript 

function keyPress() {
	document.getElementById('text').innerHTML = 'Key Pressed 💖'
}


function onLoad() {
	// alert('Testing javascript Onload')
	document.getElementById('text').innerHTML = 'Website Loaded Properly ✅';
}

function windowResize() {
	document.getElementById('textarea').style.height = '100px';
	document.getElementById('form').style.fontFamily = 'Courier New';
	document.getElementById('form').style.color = 'teal'
	document.getElementById('form').style.fontWeight = '600';
}


function onScroll() {
	document.getElementById('text').innerHTML = 'Scrolling 📶';
}

document.getElementById('btn').onclick = function () {
	document.getElementById('btn').innerHTML = 'Subscribed ✅';
};

document.getElementById('btn').addEventListener('click', 
function () {
	document.getElementById('btn').innerHTML = 'Subscribed ♻';
},
false
);

// event bubbling and event capturing

document.getElementById('ul').addEventListener('click', 
function (e) {
	console.log('UL Clicked');
},
true,
);

document.getElementById('li').addEventListener('click', 
function (e) {
	console.log('li Clicked');
},
true,
);