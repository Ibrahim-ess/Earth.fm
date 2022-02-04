
function showMessage (el) {
    if(document.getElementById("displayMessage")) {
        if (el.id) {
            document.getElementById("displayMessage").removeAttribute('id')
            return
        }
        document.getElementById("displayMessage").removeAttribute('id')
    }
    el.id="displayMessage"
}

function showMenu(el) {
    var top = document.querySelector(".list-header .top")
    var center = document.querySelector(".list-header .center")
    var bottom = document.querySelector(".list-header .bottom")

    top.style.animation="crossAnimationTopShow .7s ease forwards"
    center.style.animation="crossAnimationMiddleShow 0.7s ease forwards"
    bottom.style.animation="crossAnimationBottomShow 0.7s ease forwards"

    var tabs = document.querySelector(".rowHeader .tabs")
    var overlay = document.querySelector(".rowHeader #overlay")
    tabs.style.display = "flex"
    overlay.style.display = "flex"

    el.onclick = function(){hideMenu(el)}
}

function hideMenu(el) {
    var top = document.querySelector(".list-header .top")
    var center = document.querySelector(".list-header .center")
    var bottom = document.querySelector(".list-header .bottom")

    top.style.animation="crossAnimationTopHide 0.7s ease forwards"
    center.style.animation="crossAnimationMiddleHide 0.7s ease forwards"
    bottom.style.animation="crossAnimationBottomHide 0.7s ease forwards"

    var tabs = document.querySelector(".rowHeader .tabs")
    var overlay = document.querySelector(".rowHeader #overlay")
    tabs.style.display = "none"
    overlay.style.display = "none"

    el.onclick = function(){showMenu(el)}
}