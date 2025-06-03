// console.log('payoo home page loaded');
document.getElementById('btn-add-money').addEventListener('click', function(e){
	const addMoney = document.getElementById('input-add-money').value ;
	const pinNumber = document.getElementById('input-pin-number').value ;
	console.log(addMoney, pinNumber);
})