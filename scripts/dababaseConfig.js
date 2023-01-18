
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
firebase.initializeApp(firebaseConfig);
console.log(firebase)

const db = firebase.firestore();
console.log(db)

var scoreRef = db.collection("scores");


