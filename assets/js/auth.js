import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js'

const firebaseConfig = {
  apiKey: 'AIzaSyCDGIiqDaXHqxK7DSTQn2vQBzmjIwbXvbk',
  authDomain: 'deewan-cars.firebaseapp.com',
  projectId: 'deewan-cars',
  storageBucket: 'deewan-cars.appspot.com',
  messagingSenderId: '167044741228',
  appId: '1:167044741228:web:7094fda8405b01deda8049',
  measurementId: 'G-HG1LZG5H9F',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

const submitButton = document.getElementById('submit')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const reset = document.getElementById('resetpass')

const signupEmailIn = document.getElementById('email-signup')
const signupPasswordIn = document.getElementById('password-signup')
const createacctbtn = document.getElementById('create-acct-btn')

var email, password, signupEmail, signupPassword;

var modal = document.getElementById('myBtn1')
var profile = document.getElementById('profile')


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log("user logged");
    modal.style.display = 'none'
    profile.style.display = 'block'
    // ...
  } else {
    
    // User is signed out
    // ...
  }
});

reset.addEventListener('click', function () {
  var isVerified = true
  email = emailInput.value

  if (email == null) {
    window.alert('Please fill out email.')
    isVerified = false
  }

  if (isVerified) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        window.alert("Password reset email sent ! check your email")
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        window.alert(errorMessage)
        // ..
      })
  }
})

createacctbtn.addEventListener('click', function () {
  var isVerified = true

  signupEmail = signupEmailIn.value

  signupPassword = signupPasswordIn.value

  if (signupEmail == null || signupPassword == null) {
    window.alert('Please fill out all required fields.')
    isVerified = false
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
        window.alert('Success! Account created.')
        window.location.reload();
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
        window.alert(errorMessage)
      })
  }
})

submitButton.addEventListener('click', function () {
  email = emailInput.value
  console.log(email)
  password = passwordInput.value
  console.log(password)

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log('Success! Welcome back!')
      window.alert('Success! Welcome back!')
      window.location.reload();
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('Error occurred. Try again.')
      window.alert(errorMessage)
    })
})

signupButton.addEventListener('click', function () {
  main.style.display = 'none'
  createacctbtn.style.display = 'block'
})

returnBtn.addEventListener('click', function () {
  main.style.display = 'block'
  createacctbtn.style.display = 'none'
})
