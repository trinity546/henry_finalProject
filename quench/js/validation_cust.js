
document.cust_signup.onsubmit = function signupval() {
		if ((passwrdConfirm() === true) && (input_fn() === true) && (input_ln() === true) && (input_email() === true) && (input_pass() === true)) {
			return true;
		}else {
		return false;
		}
	};
	
function passwrdConfirm() {
	var pass1 = document.getElementById("pass1").value;
	var pass2 = document.getElementById("pass2").value;
	var txt1 = "Your passwords have to match";
	if (pass1 !== pass2) {
		document.getElementById("signerror").innerHTML = txt1;
		return false;
	} else {
	return true;
	}
}
		
function input_fn() {
	var fn_length = document.getElementById("firstname").value;
	var textLength = fn_length.length;
	var txt2 = "Your first name has to be between 1 and 50 characters";
	if (textLength < 1 || textLength > 50) {
	  document.getElementById("signerror").innerHTML = txt2;
		return false;
	} else if (textLength > 1 || textLength < 50 ) {
		return true;
	}
}

function input_ln() {
	var ln_length = document.getElementById("lastname").value;
	var textLength = ln_length.length;
	var txt3 = "Your last name has to be between 1 and 50 characters";
	if (textLength < 1 || textLength > 50 ) {
	   document.getElementById("signerror").innerHTML = txt3;
		return false;
	}  else if (textLength > 1 || textLength < 50 ) {
		return true;
	}
}

function input_email() {
	var email_length = document.getElementById("email").value;
	var textLength = email_length.length;
	var txt4 = "Your email has to be between 5 and 50 characters";
	document.getElementById("signerror").innerHTML = txt4;
	if (textLength < 5 || textLength > 50) {
		return false;
	}  else if (textLength > 5 || textLength < 50 ) {
		return true;
	}
}

function input_pass() {
	var pass_length = document.getElementById("pass1").value;
	var textLength = pass_length.length;
	var txt5 = "Your password has to be between 5 and 50 characters";
	document.getElementById("signerror").innerHTML = txt5;
	if (textLength < 5 || textLength > 50 ) {
		return false;
	}  else if (textLength > 5 || textLength < 50 ) {
		return true;
	}
}


//};