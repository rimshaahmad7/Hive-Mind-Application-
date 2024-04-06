

const signupBtn = document.getElementById("sign_up_btn");
// Function to attempt login
function attemptLogin() {
 
  // Get input values
  // var login_uname = document.getElementById('login_uname').value;
  // var login_psw = document.getElementById('login_psw').value;

  // localStorage.setItem('storedUsername', login_uname);
  // localStorage.setItem('storedPassword', login_psw);
  // alert('The data is stored in localstorage')
  // Retrieve stored password for the given username
//   var storedUsername = localStorage.getItem('login_uname');
//   var storedPassword = localStorage.getItem('login_psw');
// alert('The data is retrieved from the localstorage')
  // Check if the stored password matches the entered password
  // if ( login_uname != storedUsername && login_psw != storedPassword) {   
  //   alert('Login successful!');
    // Redirect to the dashboard page (replace 'dashboard.html' with your actual dashboard page)
    // preventDefault();
    // window.location.assign("dashboard.html");
  // } else {
  //   alert('Login Failed.');
  // }
}

// Function to attempt signup
function validateSignup() {
  // Get input values
  var newUsername = document.getElementById('newUsername').value.trim();
  var newEmail = document.getElementById('newEmail').value.trim();
  var newPassword = document.getElementById('newPassword').value.trim();
  var repeatPassword = document.getElementById('repeatPassword').value.trim();

  if(newPassword == repeatPassword)
  {
      signupBtn.disabled = false;
  }
  else
  {
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


