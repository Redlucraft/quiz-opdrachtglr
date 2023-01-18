const auth = firebase.auth();

const signedinsec = document.getElementById("whenSignedIn");
const signedoutsec = document.getElementById("whenSignedOut");
const signinbtn = document.getElementById("sign-in-btn");
const signoutbtn = document.getElementById("sign-out-btn");
const userDetails = document.getElementById("userDetails");

const provider = new firebase.auth.GoogleAuthProvider();
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
