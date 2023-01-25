const sendbutton = document.getElementById("submit");
const score1 = document.getElementById("score");

const signedinsec = document.getElementById("whenSignedIn");
const signedoutsec = document.getElementById("whenSignedOut");
const signinbtn = document.getElementById("sign-in-btn");
const signoutbtn = document.getElementById("sign-out-btn");
const userDetails = document.getElementById("userDetails");
const scoreboardbtn = document.getElementById("submitscore");

const provider = new firebase.auth.GoogleAuthProvider();

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


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
    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    })
    
    
    
  } else {
    // niet ingelogt
    signedinsec.style.display = "none"
    signedoutsec.style.display = "flex"
    userDetails.innerHTML = "";
    Toast.fire({
      icon: 'warning',
      title: 'Signed out'
    })
  }
});

if(document.getElementById("scoreboardazie")){
db.collection("scoreAzie")
    .orderBy("score", "desc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());

          let innerscores = document.createElement("li");
          innerscores.setAttribute("class", "scores");
          innerscores.innerHTML = "Name: " + doc.data().name + " Score: " + doc.data().score;
          document.getElementById("scoreboard").append(innerscores);
      });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
  }
if(document.getElementById("scoreboardeuropa")){
  db.collection("scoreEuropa")
    .orderBy("score", "desc")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            let innerscores = document.createElement("li");
            innerscores.setAttribute("class", "scores");
            innerscores.innerHTML = "Name: " + doc.data().name + " Score: " + doc.data().score;
            document.getElementById("scoreboard").append(innerscores);
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}
if(document.getElementById("scoreboardantartica")){
  db.collection("scoreAntartica")
  .orderBy("score", "desc")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        let innerscores = document.createElement("li");
        innerscores.setAttribute("class", "scores");
        innerscores.innerHTML = "Name: " + doc.data().name + " Score: " + doc.data().score;
        document.getElementById("scoreboard").append(innerscores);
    });
  })
  .catch((error) => {
      console.log("Error getting documents: ", error);
  });
}

    // sendbutton.onclick = () => {
    //   scoreRef.add({
    //     name: firebase.auth.currentUser.displayName ,
    //     score: score1
    //   }).then((scoreRef) =>{
    //     console.log("document written ", scoreRef.id);
    //   });

    // }


    

    // const auth = firebase.auth();
    // function signInWithGoogle () {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     auth.signInWithPopup(provider);
    //   }


scoreboardbtn.onclick = () => {
  const user = firebase.auth().currentUser;
  auth.onAuthStateChanged((user1) => {
    if (user1) {
      if(document.getElementById("scoreboardazie")){
        db.collection("scoreAzie")
        .add({
          name: user.displayName,
          score: correct
        })
        console.log(user.displayName)
        scoreboardbtn.style.display = "none"
      }
      
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Je bent niet ingelogd daardoor kan je geen score insturen',
        icon: 'error',
        confirmButtonText: 'Sluit melding'
      })
      
    }
  });

  function reloadp(){
    location.reload();

  }
}