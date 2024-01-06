import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDuq_vk6oXe1tYSnSTb-pDSigX1CIgb3_k",
         authDomain: "livguardlogin.firebaseapp.com",
         projectId: "livguardlogin",
         storageBucket: "livguardlogin.appspot.com",
         messagingSenderId: "563254160394",
         appId: "1:563254160394:web:2993ac15aebc0deb7143f3"
       };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  const googleLogin = document.getElementById("google-login-btn");

  googleLogin.addEventListener("click", () => {
    console.log("clicked")
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        window.location.href = "../index.html";
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Google Sign-In Error:", errorCode, errorMessage);

        // Specific error handling
        if (error.email) {
          const email = error.email;
          console.log("Email:", email);
        }
        if (error.credential) {
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log("Credential:", credential);
        }
        // ...
      });
  });
});
