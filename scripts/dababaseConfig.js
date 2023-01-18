const sendbutton = document.getElementById("submit");
const score1 = document.getElementById("score");

const signedinsec = document.getElementById("whenSignedIn");
const signedoutsec = document.getElementById("whenSignedOut");
const signinbtn = document.getElementById("sign-in-btn");
const signoutbtn = document.getElementById("sign-out-btn");
const userDetails = document.getElementById("userDetails");

const provider = new firebase.auth.GoogleAuthProvider();

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
const auth = firebase.auth();

const db = firebase.firestore();
console.log(db)

var scoreRef = db.collection("scores");

signinbtn.onclick = () => auth.signInWithPopup(provider);

signoutbtn.onclick = () => auth.signOut();

auth.onAuthStateChanged((user) => {
  if (user) {
    signedinsec.style.display = "flex"
    signedoutsec.style.display = "none"
    userDetails.innerHTML = user.displayName;
  } else {
    // niet ingelogt
    signedinsec.style.display = "none"
    signedoutsec.style.display = "flex"
    userDetails.innerHTML = "";
  }
});


db.collection("scores")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());


        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    sendbutton.onclick = () => {
      scoreRef.add({
        name: firebase.auth.currentUser.displayName ,
        score: score1
      }).then((scoreRef) =>{
        console.log("document written ", scoreRef.id);
      });

    }


    

    // const auth = firebase.auth();
    // function signInWithGoogle () {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     auth.signInWithPopup(provider);
    //   }