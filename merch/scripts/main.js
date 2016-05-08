var itemAmounts = [0, 0, 0];
document.addEventListener('resize', resized, true);

function getTotalCost(){
	var itemCosts = [4.20, 7.12, 7.12];
	var totalCost = 0;
	for(var i = 0; i < itemAmounts.length; ++i) totalCost = totalCost + (itemAmounts[i] * itemCosts[i]);
	document.getElementById("total_cost").value = "Total Cost: £" + totalCost.toFixed(2);
}

function getTotalAmount(){
	var totalAmount = 0;
	var amountInputs = document.getElementsByClassName("item_amount");

	for(var i = 0; i < amountInputs.length; ++i){
		var amount = document.getElementById(amountInputs[i].id).value;
		var numAmount = (amount.length == 0) ? 0 : parseInt(amount);
		totalAmount = totalAmount + numAmount;
		itemAmounts[i] = numAmount;
	}

	document.getElementById("total_amount").value = "Total Item Amount: " + totalAmount;
}

function getFormValidity(){
	/* Checks if form is valid, if not gets a list of all invalid fields */
	if(pageName == "Merchandise") textInputs();
	var validForm = document.getElementById("input_form").checkValidity();
	var invalidInputs = "";

	if(!validForm){
		var inputs = document.getElementsByClassName("user_input");
		for(var i = 0; i < inputs.length; ++i){
			if(!document.getElementById(inputs[i].id).checkValidity()){
				var name = (inputs[i].name).replace("_", " ");
				invalidInputs = invalidInputs + "<span class='.form_error_txt .name'>" + name + "</span><br>";
			}
		}

		document.getElementById("form_error_txt_default").innerHTML = "All inputs must be valid, the following are not: <br>" + invalidInputs + errorMsg;
		document.getElementById("form_error").style.display = "block";
		document.getElementById("form_error").scrollIntoView(true);
	}
	else{
		document.getElementById("form_error").style.display = "none";
		if(pageName == "Merchandise") getTotalAmount(); getTotalCost();
	}
}

function resetForm(){
	document.getElementById('input_form').reset();
	document.getElementById("form_error").style.display = "none";
	if(pageName == "Account"){
		document.getElementById("submitted_container").style.display = "none";
		document.getElementById("first_name").required = false;
		document.getElementById("chosen_city").required = false;
	}
	else{
		document.getElementById("customer_name").required = false;
		document.getElementById("customer_name").pattern = "";
	}
}

function textInputs(id){
	//adds 'required' and pattern props to text inputs
	//adding it after the user has attempted to change it means it wont show
	//as invalid when the page loads or when the user first attempts to enter a value
	if(pageName == "Account"){
		document.getElementById(id).required = true;
	}
	else{
		document.getElementById("customer_name").required = true;
		document.getElementById("customer_name").pattern = ".{4,}";
	}
}

function resized(){
	/* postions absolute container below the header */
	var marginTop = document.getElementById("header").offsetHeight;
	document.getElementById("absolute_container").style.marginTop = marginTop + "px";
}