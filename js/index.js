window.onload = () => {
    /**
     * Text arround the yellow circle in article1
     */
    var text = document.querySelector(".circleAnimation .text")
    var textAround = text.textContent.split("") 
    text.innerHTML=""
    var y=0
    var listRotate = []

    textAround.forEach((char) => {
        const element =  document.createElement("span")
        element.innerHTML = char
        element.style.transform=`rotate(${y.toString()}deg)`
        listRotate.push(y)
        y+=360/textAround.length
        text.appendChild(element)
    })

    
    //Animation : 
    setInterval(() => {
        
        for (var i=0; i<text.children.length; i++) {
            text.children[i].style.transform=`rotate(${listRotate[i]}deg)`
            
        }
        
        var endTab = listRotate[listRotate.length-1]
        for (var id=0; id<=listRotate.length-1; id++) {
            if (id==0) {
                listRotate[listRotate.length-1]=listRotate[0]
                listRotate[id]=listRotate[id+1]
            }
            else if (id==listRotate.length-1){ 
                listRotate[id-1]=endTab
            }
            else {
                listRotate[id]=listRotate[id+1]
            }
        }
    },500)

    var sliderTeam = document.querySelector(".team .slider")
    var action = document.querySelector(".article7 .slider")
    sliderTeam.scrollLeft=230
    action.scrollLeft=90
}

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