const homepagebtn = document.getElementById("homepagelink");

const reloadbtn = document.getElementById("startAgain");

homepagebtn.onclick = () => {
    window.location.replace("./index.html")
}

reloadbtn.onclick = () => {
    location.reload();
}