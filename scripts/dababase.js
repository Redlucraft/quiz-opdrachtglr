  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBa5aFttiVhtMV8uOHDNasHslmFIFLSLQ8",
    authDomain: "glrquiz.firebaseapp.com",
    projectId: "glrquiz",
    storageBucket: "glrquiz.appspot.com",
    messagingSenderId: "381361780483",
    appId: "1:381361780483:web:a7e82b8f94da024c8e5b36",
    measurementId: "G-P0DGRYCQRE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  console.log(app);