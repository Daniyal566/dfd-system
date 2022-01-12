// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBX3zQRoP-c2ty6BTCzYQc224Z7eHnnNdo",
    authDomain: "registration-form-78fd0.firebaseapp.com",
    projectId: "registration-form-78fd0",
    storageBucket: "registration-form-78fd0.appspot.com",
    messagingSenderId: "1005322103666",
    appId: "1:1005322103666:web:9cd29cb5a9e0e1871a8beb",
    measurementId: "G-JYG1XMK9WY"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
	
    alert('User Logged In!!')
	document.location.href="welcome.html";
	

  })
  
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}




// Validate Functions
function validate_email(email) {
  expression = /^[^@]+@\w+(\.\w+)+\w$/
  if (expression.test(email) == true) {
    // Email is good
    return true
  } else {
    // Email is not good
    return false
  }
}

function validate_password(password) {
  // Firebase only accepts lengths greater than 6
  if (password < 6) {
    return false
  } else {
    return true
  }
}

function validate_field(field) {
  if (field == null) {
    return false
  }

  if (field.length <= 0) {
    return false
  } else {
    return true
  }
}
