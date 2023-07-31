// script.js

function highlight() {
    let strongTags = document.getElementsByTagName("strong");
    for (let i = 0; i < strongTags.length; i++) {
        strongTags[i].style.color = "green";
    }
}

function return_normal() {
    let strongTags = document.getElementsByTagName("strong");
    for (let i = 0; i < strongTags.length; i++) {
        strongTags[i].style.color = "black";
    }
}
