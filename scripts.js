
function openNav() {
    document.getElementById("mySidenav").style.width = "auto";
    document.getElementById("main").style.marginLeft = "auto";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "auto";
    document.getElementById("main").style.marginLeft= "auto";
    document.body.style.backgroundColor = "white";
}

//Code for the side menu to open on the opening of every page that has the side menu
function codeAddress() {
    openNav();
}

window.onload = codeAddress;