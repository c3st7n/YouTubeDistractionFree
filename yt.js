function hideOther() {
    document.getElementById("masthead-positioner").style.visibility = "hidden";
    document.getElementById("watch7-main-container").style.visibility = "hidden";
}

function showOther() {
    document.getElementById("masthead-positioner").style.visibility = "visible";
    document.getElementById("watch7-main-container").style.visibility = "visible";
}

function setBackgroundColour() {
    document.body.style.background = "#000";
    //document.body.style.backgroundColor = "black";

}

function unsetBackgroundColour() {
    document.body.style.background = "#FFF";
}

distracted = localStorage.getItem("distracted");

console.log("distracted = " + distracted);

if (distracted == "true") {
    console.log("Time to turn things off...");
    hideOther();
    setBackgroundColour();
    localStorage["distracted"] = false;
} else {
    console.log("Bringing the noise...");
    showOther();
    unsetBackgroundColour();
    localStorage["distracted"] = true;
}
