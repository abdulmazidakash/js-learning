/**
 * function type:
 * Code - Driven Invocation
 * Event - Driven Invocation
 * Automatic (Self-Invoked)Invocation
 */



function myFunction(fullName, age, dateOfBirth = 1991) {
	console.log('Hello ' + fullName + ' I am ' + age + ' My Date of Birth ' + dateOfBirth) ;
}
myFunction('Abdul Mazid Akash', 30, 1995);
myFunction('Farhan', 35);
myFunction('Jannat', 23);

function isSubscribed() {
	console.log('Subscribed');		
}

document.getElementById('btn').addEventListener('click', isSubscribed)

// ( function (message) {
// 	console.log('I am self-Invoking function', message);
// })('Hello');

let maths = function (x, y) {
	console.log('Testing if I working of not');
	return x * y;
};
console.log(maths(3, 4));
console.log(maths(4, 4));
console.log(maths(4, 5));

function newFunc() {
	let finalName = 'Akash';
	console.log(finalName);
}

newFunc();

let numbers = [4, 5, 6, 7];
let sqNumbers = numbers.map(function (number) {
	return number * number;
}
);

console.log(sqNumbers);