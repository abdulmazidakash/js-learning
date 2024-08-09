let cars = ['BMW', 'Volvo', 'Toyota', 'Ford', 'Tesla', 'Lamburgini'];

cars.push('Saab');
cars.unshift('MRF');

console.log(cars[0]);
console.log(cars[1]);

for (let i = 0; i < cars.length; i++) {
	console.log(cars[i]);
};

// for in loop 

let person = {
	name: 'fahim',
	age: 5,
	country: 'Bangladesh',
	job: 'Web Developer'
};

for (let i in person) {
	let capLetter = i.charAt(0).toUpperCase() + i.slice(1);
	console.log(capLetter + ': ' + person[i]);
}

// forEach method

cars.forEach(function (i) {
	console.log(i);
});

// for of loop

for (let i of car) {
	console.log(i);
};

// while loop

let num2 = 0;
while (num2 < 10) {
	console.log(num2);
	num2++; // don't use (num2++) then chrome hang very dangerous
	
}

