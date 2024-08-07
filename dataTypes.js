//javascript data types

let firstName = 'Akash';
firstName = 'Omar';
let fullName = 'My Name is "Akash"'
// let fullName = 'My Name is \"Akash\"'

let finalName = 'My name is ${firstName}';

let age = 30;
let age2 = 35 + 5 + firstName + 34 + 23;
let calculation = age + age2 + firstName + age + age2;

/**
 * BigInt
 * BigInt can not mix with other data types
 * You can not add decimals
 */

let numberBig = 9n;
let numberBig2 = BigInt(age);

let ifAdult = true;

let someInfo = null;

let fruits = ['apple', 'lemon', 'peer', 32, true, undefined, null];

fruits[4] = 'Mango';

let student = {
	fullName: 'Akash',
	age: 32,
	dateOfBirth: 1992,
};

console.log(finalName);
console.log(student);
console.log(typeof student);
