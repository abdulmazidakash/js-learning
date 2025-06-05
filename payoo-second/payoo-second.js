// payoo second js 
document.getElementById('btn-add-money').addEventListener('click', function(){
	const addMoney = getInputFieldValueById('input-add-money');
	const pinNumber = getInputFieldValueById('input-pin-number');
	console.log(addMoney, pinNumber);

	if(isNaN(addMoney)){
		alert('Please enter a valid amount to add.');
		return;
	}
	if(pinNumber === 1234){
		const accountBalance = getTextFieldValueById('account-balance');
		const newBalance = addMoney + accountBalance;

		document.getElementById('account-balance').innerText = newBalance;

		const p = document.createElement('p');
		p.innerText = `Added ${addMoney} Tk to account. New balance is ${newBalance}`;
		document.getElementById('transaction-container').appendChild(p);
	}else{
		alert('Invalid PIN number. Please try again.');
	}
});

document.getElementById('btn-cash-out').addEventListener('click', function(){
	const inputCashOut = getInputFieldValueById('input-cash-out');
	const inputPinNumber = getInputFieldValueById('input-cash-out-pin-number');

	if(isNaN(inputCashOut)){
		alert('Please enter a valid amount to cash out.');
		return
	}
	if(inputPinNumber === 1234){
		const accountBalance = getTextFieldValueById('account-balance');
		const newBalance = accountBalance - inputCashOut;
		document.getElementById('account-balance').innerText = newBalance;

		const div = document.createElement('div');
		div.classList.add('bg-yellow-500');
		div.innerText = `cash out ${inputCashOut} Tk. New Balance ${newBalance} Tk.`;
		
		document.getElementById("transaction-container").appendChild(div);

	}else{
		alert('Invalid PIN number. Please try again.');
	}
});

document.getElementById('btn-add-money-toggle').addEventListener('click', function(){
	showPageById('add-money-form');
})
document.getElementById('btn-cash-out-toggle').addEventListener('click', function(){
	showPageById('cash-out-form');
})
document.getElementById('btn-transaction-toggle').addEventListener('click', function(){
	showPageById('transaction-container');
})