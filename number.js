// const x = 9999999999999999;
const y = 0.6;
const z = 0.7;
const l = (y + z ).toFixed(2); 


/*console.log(y + z);
console.log(y * 10 + z * 10);
console.log((y * 10 + z * 10) / 10);
console.log(l.toFixed(2));
console.log(new Number(l));
*/

const a = 10;
const b = 20;
const c = 30;

const d = 'javascript';

const e = c - d;

console.log(a + b + c);
console.log(a + b + l);
console.log(l + a + b + c);
console.log(a + l + b + c);

console.log(c - l);
console.log(c * l);
console.log(c / l);

console.log(c - d); //result NaN = not a number

console.log(e);


let nums = 2;
let value = '';
//while (nums <= 100)
while (nums != Infinity) {
	nums = nums * nums;
	value = value + nums + '<br>';
}

document.getElementById('title').innerHTML = value;