
validatePassword = function()
{
	let fPass = document.getElementById("fpass");
	let sPass = document.getElementById("spass");
	let r = document.getElementById("valid");

	if(fPass.value != sPass.value)
	{
		r.innerText = "Passwords are not the same";
	}
	else if(fPass.value.length > 7 || sPass.value.length > 7)
	{
		r.innerText = "One or both of the passwords are too long. Must be less than eight characters long";
	}
	else
	{
		r.innerText = "Passwords are valid";	
	}
}