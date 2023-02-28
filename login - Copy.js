/*const firebaseConfig = {
	apiKey: "AIzaSyBwntpRl2RUi5hZvFiSCDXp78szeJTUSyA",
	authDomain: "signup-69af4.firebaseapp.com",
	projectId: "signup-69af4",
	storageBucket: "signup-69af4.appspot.com",
	messagingSenderId: "289227830849",
	appId: "1:289227830849:web:b404db8e424bad18d638c0",
	measurementId: "G-D92FVHQVKB"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const database = getDatabase(app);

    submit.addEventListener('click', (e) => {

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        //sign up user
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ... user.uid
                set(ref(database, 'users/' + user.uid), {
                    email: email,
                    password: password
                })
                    .then(() => {
                        // Data saved successfully!
                        alert('user created successfully');
						return true;
        
                    })
                    .catch((error) => {
                        // The write failed...
                        alert(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                alert(errorMessage);
            });

        // log in user
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...

                // save log in details into real time database
                var lgDate = new Date();
                update(ref(database, 'users/' + user.uid), {
                    last_login: lgDate,
                })
                    .then(() => {
                        // Data saved successfully!
                        alert('user logged in successfully');
						//window.open("home.html");

                    })
                    .catch((error) => {
                        // The write failed...
                        alert(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });

       
        signOut(auth).then(() => {
               // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    });

//


/*const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("home.html");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('signupUsername'),
        email : getId('email'),
        password : getId('password')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}



//
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
function SignIn(){
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
*/