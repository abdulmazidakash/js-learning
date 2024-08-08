// const language2 = new Array ('HTML', 'CSS', 'JavaScript', 'PHP', true, 50);


const language = ['HTML', 'CSS', 'JavaScript', 'PHP', true, 50];
language[4] = 'TailwindCSS';
language[5] = 'React.js';
language[6] = 'vue.js';
language[7] = 'Larval';
language[10] = 'Bootstrap';

// first item access
console.log(language[0]);

//last item access
console.log(language[language.length - 1]);

// Delete or Remove last item 
language.pop();

// Add last item 
language.push('Angular.js');

// Add first item 
language.unshift('Basic Computing');

// Delete or Remove first item 
language.shift();


// console.log(language[2]);
console.log(language);
console.log(language.at(5));
console.log(language.toString());
console.log(language.join(' * '));
console.log(language.length);

const person = [];
person['firstName'] = 'Ali';
person['lastName'] = 'Akash';
person[2] = 35;

console.log(person.length);
console.log(person);
console.log(person[2]);

// const num = [20];
const num = new Array(20);

console.log(num);

// 

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const z = [2, 4, 6];
const result = x.concat(y, z);
console.log(result);

// 

const a = [
	[1, 2, 3, [3, 5, 8]], 
	[4, 5, 6], 
	[2, 4, 6],
];
console.log(a);
console.log(a.flat());

language.splice(2, 0, 'info', 'info2');
language.splice(0, 1);
console.log(language);

