// console.log('shakib al hasan');
// document.getElementById('btn-delete').addEventListener('click', function(){
// 	// console.log('delete button clicked');
// 	const secret = document.getElementById('delete-text');
// 	secret.style.display = 'none';
// })

// document.getElementById('input-delete').addEventListener('keyup', function(event){
// 	const text = event.target.value;
// 	// console.log(text);

// 	const deleteButton = document.getElementById('btn-delete');
// 	if(text === 'delete'){
// 		deleteButton.removeAttribute('disabled');
// 	}else{
// 		deleteButton.setAttribute('disabled', true)
// 	}

// })

document.getElementById('btn-login').addEventListener('click', function(e){
	// console.log('login button clicked');
	// e.preventDefault();
	const phoneNumber = document.getElementById('phone-number').value ;
	const pinNumber = document.getElementById('pin-number').value ;
	// console.log(phoneNumber, pinNumber);
	if(phoneNumber === '5' && pinNumber === '1234'){
		alert('login successful');
		window.location.href = './payoo-home.html'
		
	}else{
		alert('wrong pin or phone number');
	}
})