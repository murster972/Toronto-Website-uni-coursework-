<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>
			Toronto Merchandise | Account
		</title>
		<link rel="stylesheet" type="text/css" href="styles/main.css">
		<script type="text/javascript" src="scripts/main.js"></script>
		<script type="text/javascript">
			//resets inputs once page has loaded completely
			var errorMsg = "";
			var pageName = "Account";
			document.addEventListener('DOMContentLoaded', function(){
				document.getElementById("input_form").reset();
				resized();
			}, true);
		</script>
	</head>
	<body>
		<?php
			if($_SERVER["REQUEST_METHOD"] == "POST"){
				//ltrim removes whitespace, str_replace is removeing all spaces
				$first_name = ltrim(str_replace(" ", "", $_POST["First_Name"]));
				$chosen_city = ltrim($_POST["Chosen_City"]);

				//checks all inputs have been filled in
				if(strlen($first_name) == 0 || strlen($chosen_city) == 0){
					echo '<script type="text/javascript">document.addEventListener("DOMContentLoaded", function(){textInputs("first_name"); textInputs("chosen_city"); getFormValidity()}, true);</script>';
				}
				else{
					$email = $first_name.$chosen_city;
					$password = str_shuffle($first_name);
					echo '<script type="text/javascript">document.addEventListener("DOMContentLoaded", function(){document.getElementById("submitted_container").style.display = "block"; document.getElementById("submitted_container").scrollIntoView(true); document.getElementById("email").innerHTML = "' . $email . '" + "@TorontoMerchandise.to<br>"; document.getElementById("password").innerHTML = "' . $password .   '" + "<br>";}, true);</script>';
				}
			}
		?>
		<header class="header account" id="header">
			<h1 id="header_txt">
				Toronto Merchandise Account
			</h1>
			<div id="intro_container">
				<p class="intro_txt">
					To create an account enter your details and submit.<br><br>Use the link below to go to our merchandise page.<br><br>
					<a href="merchandise.html" class="intro_text link">
						Merchandise
					</a>
				</p>
			</div>
		</header>
		<div id="absolute_container">
			<div id="form_error">
				<h2 id="form_error_title">Form Error</h2>
				<p class="form_error_txt" id="form_error_txt_default"></p>
			</div>
			<form class="forms" id="input_form" method="post" autocomplete="off">
				<div id="customer_details_container">
					<div class="input_container">
						<input type="text" placeholder="First Name" title="First Name" onblur="textInputs(this.id)" class="inputs user_input" id="first_name" name="First_Name" >
						<div class="error_icon">
							<span class="butn_txt" id="err_txt">!</span>
						</div>
					</div>
					<div class="input_container">
						<input type="text" placeholder="Chosen City" title="Chosen City" onblur="textInputs(this.id)" class="inputs user_input" id="chosen_city" name="Chosen_City">
						<div class="error_icon">
							<span class="butn_txt" id="err_txt">!</span>
						</div>
					</div>
					<input type="submit" value="Submit" class="inputs button account" id="submit_account">
					<input type="reset" value="Reset" onclick="resetForm()" class="inputs button account" id="reset_butn">
				</div>
			</form>
			<div id="submitted_container">
				<h2 id="submitted_title">Welcome!</h2>
				<p id="submitted_info">
					Thank you for joining Toronto Merchandise!<br>Your account details are shown below:<br><br>
					E-mail: <span class="details" id="email"></span>
					Password: <span class="details" id="password"></span>
				</p>
			</div>
		</div>
	</body>
</html>