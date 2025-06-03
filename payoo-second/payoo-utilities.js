// payoo utilities js
function getInputFieldValueById(id) {
	const inputField = document.getElementById(id).value ;
	const inputNumber = parseFloat(inputField);
	return inputNumber;
}

function getTextFieldValueById(id){
	const textField = document.getElementById(id).innerText;
	const textFieldNumber = parseFloat(textField);
	return textFieldNumber;
}

function showPageById(id){
	document.getElementById('add-money-form').classList.add('hidden');
	document.getElementById('cash-out-form').classList.add('hidden');
	document.getElementById('transaction-container').classList.add('hidden');

	document.getElementById(id).classList.remove('hidden');
}