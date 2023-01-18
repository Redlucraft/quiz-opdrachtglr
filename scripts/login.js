const auth = firebase.auth();

const signedinsec = document.getElementById("whenSignedIn");
const signedoutsec = document.getElementById("whenSignedOut");
const signinbtn = document.getElementById("sign-in-btn");
const signoutbtn = document.getElementById("sign-out-btn");
const userDetails = document.getElementById("userDetails");

const provider = new firebase.auth.GoogleAuthProvider();
signinbtn.onclick = () => auth.signInWithPopup(provider);

signoutbtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
if(user) {
    signedinsec.hidden =false;
    signedoutsec.hidden = true
    userDetails.innerHTML = user.displayName;
} else{
// niet ingelogt
signedinsec.hidden =true;
signedoutsec.hidden = false;
userDetails.innerHTML = '';
}
});