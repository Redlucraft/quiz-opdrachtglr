 
const db = firebase.firestore();
console.log(db)

var scoreRef1 = db.collection("scores");

 async function startquiz(name1, score1) {
    console.log("sending score now");
        await scoreRef1.add({
          name: name1 ,
          score: score1
        }).then((scoreRef1) =>{
          console.log("document written ", scoreRef1.id);
        });
    }

