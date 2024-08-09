const myDate = new Date()

console.log(myDate);
console.log(myDate.toString());
console.log(typeof myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleDateString('default', {
	weekday: 'long',
}
));

// let updateDate = new Date(2024, 3, 5, 11, 34, 35, 0);
// let updateDate = new Date(2024);
let updateDate = new Date('01-15-2002');

console.log(updateDate);