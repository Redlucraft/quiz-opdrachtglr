
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



  async function startquiz() {
    console.log("sending score now")
        await db.scoreRef.add({
          name: document.getElementById("naam") ,
          score: document.getElementById("score")
        }).then((scoreRef) =>{
          console.log("document written ", scoreRef.id);
        });
    }

