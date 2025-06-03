// console.log('payoo home page loaded');
// add money section 
document.getElementById('btn-add-money').addEventListener('click', function(e){
	const addMoney = document.getElementById('input-add-money').value ;
	const pinNumber = document.getElementById('input-pin-number').value ;

	if(pinNumber === '1234'){
		// console.log('pin successful');
		const accountBalance = document.getElementById('account-balance').innerText;
		const numberAccountBalance = parseFloat(accountBalance);
		const numberAddMoney = parseFloat(addMoney);
		const newBalance = numberAccountBalance + numberAddMoney;
		// console.log(newBalance);
		document.getElementById('account-balance').innerText = newBalance;

	}else{
		alert('wrong pin number or invalid amount');
		return;
	}

});

// cash out section 
document.getElementById('btn-cash-out').addEventListener('click', function(e){
	const cashOutAmount = document.getElementById('input-cash-out').value ;
	const pinNumber = document.getElementById('input-cash-out-pin-number').value ;
	// console.log(cashOutAmount, pinNumber);

	if(pinNumber === '1234'){
		// console.log('pin successful');
		const accountBalance = document.getElementById('account-balance').innerText;
		const numberAccountBalance = parseFloat(accountBalance);
		const numberCashOutBalance = parseFloat(cashOutAmount);
		const newBalance = numberAccountBalance - numberCashOutBalance;

		document.getElementById('account-balance').innerText = newBalance;
	}else{
		console.log('wrong pin number');

	}

})

