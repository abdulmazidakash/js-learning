// alert('hi javascript');

// console.log('hello world');

// document.getElementById('hello').innerHTML = 'hello world'; 

/*let sum = 150 + 40;
console.log(sum);

if (sum > 100){
	console.log('expensive');
}
else{
	console.log('cheep');
}

function sayHello(name){
	console.log('Hello ${name}');
}
sayHello('Akash');
*/

//javascript variables: let, var, const
/*
*var variable
*You can re declare
*You can re assign
*Global Scooped
*var is hosted
*/

var a = 10;
var a = 20;
a = 'Bangladesh';

{
	var blocked = '30';
	console.log(a);
}
console.log(blocked);

console.log(a);

var country = 'bangladesh';
console.log(country);

var countrys;
console.log(countrys);
countrys = 'bangladesh';

let fruits = 'mango';
console.log(`${fruits} is my favorite, ${fruits} I like to eat.`);

/*
*let variable
*You can't re declare
*You can re assign
*blocked Scooped
*let is not hosted
*/

let b = 10;
b = 11;
{
	console.log(b);
}
console.log('people');
let people = 'Someone';

/*
*const variable
*You can't re declare
*You can't re assign
*blocked Scooped
*const is not hosted
*/

const c = 10;
// c = 10;
console.log(c);

{
	const d = 50;
	console.log(c);
	console.log(d);
}

const person = {
	firstName: 'Akash',
	age: 30,
};

person.country = 'bangladesh';
person.age = 32;

console.log(person);

let first_Name1 = 'akash';

// javascript operator 

/*
 * Arithmatic operator
 * 
 */

let x = 10;
let y = 20;
let z = x + y;

console.log(x + y);
/*
let userInput = prompt('Enter a Number');
let number = parseInt(userInput);

if(number % 2 === 0){
	console.log('${number} is even number');
}
else{
	console.log('{number} is odd number');
}
*/

let p = 10;
p = p + 1;
p++; //increment
console.log('Increment ${p}');

let q = 20;
q = q -1;
q--; //decrement
console.log('Decrement ${q}');