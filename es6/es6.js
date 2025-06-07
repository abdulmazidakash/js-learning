// let money = 25;
// money = 50;
// console.log(money);
// function add(x, y){
// 	return x + y;
// }
// const sum = add(5, 10);
// console.log(sum);
// template literals ---------
// const sum1 = `total sum ${sum}`;
// console.log(sum1);
// arrow functions -----------
// const getAge = (person) => person.age;
// const student = { name: 'akash', age: 45};
// const age = getAge(student);
// console.log(age);
// spread operator -------------
// const one = [3, 5,];
// const two = [4, 6];
// const combined = [...one, ...two];
// console.log(combined);
// const person = {
// 	name: 'akash',
// 	age: 45,
// }

// const person1 = {
// 	brother: 'shakib',
// 	age1: 40,
// }

// const people = {...person, ...person1};
// console.log(people);
// const numbers = [1,45, 3,4 ,5, 5, 40,];
// const map = numbers.find((num)=>num >4 );
// console.log(map);

// class Techer{
// 	constructor(name, subject){
// 		this.name = name;
// 		this.subject = subject;
// 	}
// 	lecture(){
// 		console.log('sir is teaching math');
// 	}
// }
// const teacher = new Techer('akash', 'math');
// console.log(teacher);

// class vehicle{
// 	constructor(name, price){
// 		this.name = name;
// 		this.price = price;
// 	}
// 	move(){
// 		console.log('bus is moving');
// 	}
// }

// class Bus extends vehicle{
// 	constructor(name, price, seats){
// 		super(name, price);
// 		this.seats = seats;
// 	}
// 	move(){
// 		console.log('bus is moving fast');
// 	}
// }

// const bus = new Bus('volvo', 5000, 40);
// console.log(bus);

// const peoples = [
// 	{ name: 'meena',  age: 20},
// 	{ name: 'rina',  age: 15},
// 	{ name: 'suchorita',  age: 22}
// ];
// // let sum = 0;
// // for(let people of peoples){
// // 	sum += people.age;
// // 	// console.log(sum);
// // }
// // console.log(sum);

// const totalAge = peoples.reduce((p, c)=> p + c.age, 0);
// console.log(totalAge);

// const x = 0;
// if(x){
// 	console.log('this is true');
// }else{
// 	console.log('this is false');
// }
// const x = 0;
// const y = false;
// if(x == y){
// 	console.log('values are equal');
// }else{
// 	console.log('values are not equal');
// }

// function add(a, b){
// 	const total = a + b;
// 	console.log(a + b);;
// 	if(b > 5){
// 		const sum = 25 + a + b;
// 	}else{
// 		var sum = 10 + a + b;
// 	}
// 	console.log(sum);
// 	return total;
// }
// hoisting 
// add(6, 20);
// print5();
// function print5(){
// 	console.log('print 5');
// }

// for(let i = 0; i< 10; i++){
// 	console.log(i);
// }
// console.log(i);
// function kitchen(){
// 	let roast = 0;
// 	return function(){
// 		roast++;
// 		return roast;
// 	}
// };
// const firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());
// console.log(firstServer());

// closure 
// function stopWatch(){
// 	let counter = 0;
// 	return function(){
// 		counter++;
// 		return counter;
// 	}
// }

// const watch1 = stopWatch();
// const watch2 = stopWatch();
// console.log(watch1());
// console.log(watch1());
// console.log(watch1());
// console.log(watch1());
// console.log(watch1());
// console.log('watch 2--->', watch2());
// console.log('watch 2--->', watch2());
// console.log('watch 2--->', watch2());
// console.log('watch 2--->', watch2());

//callback function
function greeting(greetingHandler, name){
	greetingHandler(name);
}

function greetingHandler(name){
	console.log('call greeting handler for', name);
}

function goodNight(name){
	console.log('Good night', name);
}
function goodMorning(name){
	console.log('Good night', name);
}

greeting(greetingHandler, 'akash');
greeting(goodNight, 'akash');
greeting(goodMorning, 'akash');

