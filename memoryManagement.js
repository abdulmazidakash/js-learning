/**
 * javascript two type info: 1.call stack 2.heap
 * primitive data type: string, number, boolean, undefined, null, symb, bigint (call stack)
 * non-primitive data type: object, array (heap)
 * 
 */

// primitive data type: string, number, boolean, undefined, null, symb, bigint (call stack):

let fullName1 = 'Farhan Fahim';

let webDeveloper = fullName1;
webDeveloper = 'Fahim';


console.log(fullName1);
console.log(webDeveloper);


// non-primitive data type: object, array (heap)

let student = {
	name: 'farhan',
	age: 5,
};

/*let people = {
	name: 'jannat',
	age: 10,
};
*/
let people = student;
people.name = 'fahim';
people.age = 8;

console.log(student);
console.log(people);

//array example

let car = ['BMW', 'Audi'];

let newCar = car;
newCar[0] = 'Toyota';

console.log(car);
console.log(newCar);



