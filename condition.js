//javascript condition

/**
 * javascript condition 4 types:
 * 1.if
 * 2.else
 * 3.else if
 * 4.switch
 */

let age = 41;

if(age > 40) {
	console.log('You are old');
}
else if (age > 18) {
	console.log('You are ready to open a google account');
}
else{
	console.log('You are not ready');
}

//switch

let category = 'Truck';
let carType;

switch (category) {
	case 'car':
		carType = 'This is a car';
	break;
	case 'Motor Bike':
		carType = 'This is a Motor';
	break;
	case 'Truck':
		carType = 'This is a Truck';
	break;
	default:
		carType = 'Unknown Vehicle Category'
}

console.log(carType);