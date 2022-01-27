window.onload = () => {
    var sliderTeam = document.querySelector(".team .slider")
    var action = document.querySelector(".article7 .slider")
    sliderTeam.scrollLeft=230
    action.scrollLeft=90
}

function showMessage (el) {
    if(document.getElementById("displayMessage")) {
        document.getElementById("displayMessage").removeAttribute('id')
    }
    el.id="displayMessage"
}