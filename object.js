/**
 * Javascript objects file
 * 
 * javascript key features:
 * 1.js object
 * 2.js functions
 * 3.js events 
 * 4.js array
 */

// Javascript object two types: 1. Object literals 2. Object constructor.

// 1. Object literals

const newSymb = Symbol('Key1')
const mobileModel = {
	// key: value
	brand: 'Samsung',
	model: 's24 Ultra',
	processor: 'Snapdragon Gen 3',
	Camera: ['200MP', '12MP', '12MP'],
	hasZoomCamera: true,
	'selfie camera MP': 12,
	[newSymb]: 'MyKey1',
	brandModel: function () {
		return 'Mobile Brand is ${this.brand} and model is ${this.model}';
	},
	battery: {
		mah: 5000
	},
};


mobileModel.model = 's25 Ultra';

Object.freeze(mobileModel);

console.log(mobileModel.hasOwnProperty('camera'));

console.log(mobileModel.brandModel());

/*console.log(Object.keys(mobileModel));
console.log(Object.values(mobileModel));

console.log(mobileModel.model);
console.log(mobileModel);
console.log(mobileModel.brand);
console.log(mobileModel['brand']);
console.log(mobileModel['selfie camera MP']);
console.log(mobileModel[newSymb]);
*/

const obj1 = {
	a: 1,
	b: 2,
	c: 3,
};

const obj2 = {
	p: 1,
	q: 2,
	r: 3,
};

const obj3 = {
	x: 1,
	y: 2,
	z: 3,
};

const objFinal = { ...obj1, ...obj2, ...obj3}; 
// const objFinal = Object.assign(target, source);
// const objFinal = Object.assign(obj1, obj2, obj3);
console.log(objFinal);

console.log(mobileModel.battery.mah);

// 2. object constructor

/*function Person() {
	(this.firstName = 'Farhan'),
	(this.lastName = 'Fahim');
}

const person1 = new Person();
const person2 = new Person();

console.log(person1);
console.log(person2);
*/

// or 

function Person(first, last) {
	(this.firstName = first),
	(this.lastName = last);
}

const person1 = new Person('Abdul Mazid', 'Akash');
person1.age = 18;
const person2 = new Person('Farhan', 'Fahim');

console.log(person1);
console.log(person2);