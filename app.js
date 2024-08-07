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
 * Arithmetic operator
 * Comparison operator
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

//google search: javascript operator precedence
//comparison operator

let r =5;
let s = 15;
console.log(r == s);
console.log(r === s);
console.log(r !== s);
console.log(r > s);
console.log(r < s);
console.log(r >= s);
console.log(r <= s);

/*logical operator

"&&" and operator
"||" or operator
"!(p+q)" not operator

*/

/**
 * Assignment operator
 */

let i = 10;
let j = 20;
i = i + j;
i += j;

i = i - j;
i -= j;

i = i * j;
i *= j;

i = i / j;
i /= j;
i %= j;
i **= j;

console.log(i);

/**
 * Conditional (Ternary) Operator
 */

let t = a > b ? 'True' : 'False';
let g = a > b ? true : false;

console.log(t);

if(a > b){
	console.log('True');
}
else{
	console.log('False');
}

let firstName = 'Akash';
