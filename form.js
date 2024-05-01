const signupBtn = document.getElementById("sign_up_btn");
// Function to attempt login
function attemptLogin() {
}

// Function to attempt signup
function validateSignup() {
  // Get input values
  var newUsername = document.getElementById('newUsername').value.trim();
  var newEmail = document.getElementById('newEmail').value.trim();
  var newPassword = document.getElementById('newPassword').value.trim();
  var repeatPassword = document.getElementById('repeatPassword').value.trim();

  if (newPassword == repeatPassword) {
    signupBtn.disabled = false;
  }
  else {
    signupBtn.disabled = true;
  }
}


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


