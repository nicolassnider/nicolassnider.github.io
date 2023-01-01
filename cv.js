	
	document.getElementById("enviar").onclick = function () {
		validateForm();
	};

validateForm = function () {
	var name = document.getElementById("Nombre").value;
	var email = document.getElementById("Email").value;
	var message = document.getElementById("Mensaje").value;
	var error_message = document.getElementById("error_message");
	
	error_message.style.padding = "10px";
	
	var text;
	if(name.length < 5){
		text = "Please Enter valid Name";
		error_message.innerHTML = text;
		return false;
	}
	if(email.indexOf("@") == -1 || email.length < 6){
		text = "Please Enter valid Email";
		error_message.innerHTML = text;
		return false;
	}
	if(message.length <= 140){
		text = "Please Enter More Than 140 Characters";
		error_message.innerHTML = text;
		return false;
	}
	alert("Form Submitted Successfully!");
	return true;
}
