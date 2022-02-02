window.onload = () => {
    /**
     * Text arround the yellow circle in article1
     */
    var text = document.querySelector(".circleAnimation .text")
    var textAround = text.textContent.split("") 
    textAround.push(" ")           
    let result = ""; 
    textAround.forEach(function(char){
        result +=  "<span>" + char + "</span>";
    });
    text.innerHTML = result; 
    var listRotate = []
    y=0
    for (var i=0; i<text.children.length; i++) {
        listRotate.push(y)

        text.children[i].style.transform=`rotate(${y.toString()}deg)`
        y+=360/text.children.length
    }

    //Animation : 
    rotate=0
    setInterval(() => {
        for (var i=0; i<text.children.length; i++) {
            if(i==text.children.length-1) {
                text.children[i].style.transform=`rotate(0deg)`
                console.log(text.children[i])
            }
            else {
                text.children[i].style.transform=`rotate(${listRotate[i+rotate]}deg)`
            }
        }
        rotate+=1
        if (rotate==text.children.length) {
            rotate=0
        }
    },1000)
    /*
    
    }*/

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