
const firebaseConfig = {
  apiKey: "AIzaSyBwntpRl2RUi5hZvFiSCDXp78szeJTUSyA",
  authDomain: "signup-69af4.firebaseapp.com",
  projectId: "signup-69af4",
  storageBucket: "signup-69af4.appspot.com",
  messagingSenderId: "289227830849",
  appId: "1:289227830849:web:b404db8e424bad18d638c0",
  measurementId: "G-D92FVHQVKB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// let's code 
/*
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    
}
document.getElementById('createAccount').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('signupUsername'),
        email : getId('email'),
        password : getId('password')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    window.open("home.html");
    //document.getElementById('createAccount').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}
*/















//
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
//window.open("home.html","_self");

firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
    
});

$(function () {
    $("#btn").click(function () {
      
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            window.open("register.html","_self");
            return false;
            
        }
        
        else{
        return true;
        }
    });
});
}

document.getElementById('createAccount').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('signupUsername'),
        email : getId('email'),
        password : getId('password')
    });
    
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('createAccount').reset();
    window.open("home.html","_self");
    
});
function  getId(id){
    return document.getElementById(id).value;
    
}
//



//
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

 $(function () {
    $("#btn").click(function () {
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            window.open("register.html","_self");
            return false;
            
        }
        else{
        return true;
        }
    });
});