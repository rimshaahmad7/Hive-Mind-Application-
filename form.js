// function auth(event) {
//   event.preventDefault();

//   var email = document.getElementById("login_uname").value;
//   var password = document.getElementById("login_psw").value;

//   if (email === "user@gmail.com" && password === "user") {
//        window.location.replace("dashboard.html");
//   } else {
//       alert("Invalid information");
//       return;
//   }
// }


function auth(event) {
  event.preventDefault();

	var email = document.getElementById("login_uname").value;
	var password = document.getElementById("login_psw").value;

	if (email == "" || password == "") {
		alert("Please fill the required fields"); 
		return false;
	}

	else if (password.length < 8) {
		alert("Your password must include atleast 8 characters");
		return false;
	}

	else if (email != "user@gmail.com" || password != "12345678") {
		alert("Please fill the correct credential");
		return false;
	}

	else if (email === "user@gmail.com" && password === "12345678") {
		alert("Successfully logged in");
    window.location.replace("dashboard.html");
		
	}
}

function auth_1(event) {
  event.preventDefault();

	var mail = document.getElementById("newEmail").value;
	var name = document.getElementById("newUsername").value;
	var password = document.getElementById("newPassword").value;
  var Rpassword = document.getElementById("repeatPassword").value;


	if (mail == "" || name == "" || password == "") {
		alert("Please fill the required fields");
		return false;
	}

	else if (password.length < 8) {
		alert("Your password must include atleast 8 characters");
		return false;
	}

  else if (password != Rpassword ) {
		alert("Your password is mismatched");
		return false;
	}

	else {
		alert("Successfully signed up");
		window.location.replace("dashboard.html");
	}
}

// const signupBtn = document.getElementById("sign_up_btn");
// Function to attempt login
// function attemptLogin() {
// }

// Function to attempt signup
// function validateSignup() {
  // Get input values
//   var newUsername = document.getElementById('newUsername').value.trim();
//   var newEmail = document.getElementById('newEmail').value.trim();
//   var newPassword = document.getElementById('newPassword').value.trim();
//   var repeatPassword = document.getElementById('repeatPassword').value.trim();

//   if (newPassword == repeatPassword) {
//     signupBtn.disabled = false;
//     window.location.replace("dashboard.html");
//   }
//   else {
//     signupBtn.disabled = true;
//   }
// }


// Get the modal
const modal1 = document.getElementById("id01"); //login
const modal2 = document.getElementById("id02"); //signup

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
};
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};


